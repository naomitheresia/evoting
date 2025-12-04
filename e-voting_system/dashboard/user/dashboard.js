// Dashboard User Voting System
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const votingStatus = document.getElementById('votingStatus');
    const voteButtons = document.querySelectorAll('.btn-vote');
    const confirmationModal = document.getElementById('confirmationModal');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModal');
    const cancelVoteBtn = document.getElementById('cancelVote');
    const confirmVoteBtn = document.getElementById('confirmVote');
    const closeSuccessBtn = document.getElementById('closeSuccess');
    const logoutBtn = document.getElementById('logoutBtn');
    const selectedCandidateInfo = document.getElementById('selectedCandidateInfo');
    
    let selectedCandidate = null;
    
    // Check if user has already voted
    const hasVoted = localStorage.getItem('hasVoted') === 'true';
    const votedFor = localStorage.getItem('votedFor');
    
    if (hasVoted) {
        updateVotingStatus(true, votedFor);
        disableVoteButtons();
    }
    
    // Update voting status display
    function updateVotingStatus(voted = false, candidateId = null) {
        if (voted) {
            votingStatus.textContent = 'Sudah Memilih';
            votingStatus.style.color = '#38a169';
            votingStatus.innerHTML = '<i class="fas fa-check-circle"></i> Sudah Memilih';
            
            // Highlight the voted candidate
            if (candidateId) {
                const votedCard = document.querySelector(`.candidate-voting-card[data-id="${candidateId}"]`);
                if (votedCard) {
                    votedCard.classList.add('voted');
                    const voteBtn = votedCard.querySelector('.btn-vote');
                    voteBtn.innerHTML = '<i class="fas fa-check"></i> Telah Dipilih';
                    voteBtn.classList.remove('btn-primary');
                    voteBtn.classList.add('btn-success');
                    voteBtn.disabled = true;
                }
            }
        } else {
            votingStatus.textContent = 'Belum Memilih';
            votingStatus.style.color = '#e53e3e';
        }
    }
    
    // Disable all vote buttons
    function disableVoteButtons() {
        voteButtons.forEach(btn => {
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-lock"></i> Sudah Memilih';
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-secondary');
        });
    }
    
    // Vote button click handler
    voteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (hasVoted) {
                alert('Anda sudah menggunakan hak pilih.');
                return;
            }
            
            selectedCandidate = this.getAttribute('data-candidate');
            const candidateCard = this.closest('.candidate-voting-card');
            
            // Get candidate info
            const candidateName = candidateCard.querySelector('h3').textContent;
            const candidateNIM = candidateCard.querySelector('.candidate-nim').textContent;
            const candidateVision = candidateCard.querySelector('.candidate-vision p').textContent;
            
            // Fill confirmation modal
            selectedCandidateInfo.innerHTML = `
                <div class="selected-candidate-card">
                    <div class="candidate-number">${selectedCandidate}</div>
                    <h4>${candidateName}</h4>
                    <p class="selected-nim">${candidateNIM}</p>
                    <p class="selected-vision">${candidateVision}</p>
                </div>
            `;
            
            // Show confirmation modal
            confirmationModal.style.display = 'flex';
        });
    });
    
    // Close modal
    function closeModal() {
        confirmationModal.style.display = 'none';
        selectedCandidate = null;
    }
    
    // Event listeners for modal
    closeModalBtn.addEventListener('click', closeModal);
    cancelVoteBtn.addEventListener('click', closeModal);
    
    // Confirm vote
    confirmVoteBtn.addEventListener('click', function() {
        if (!selectedCandidate) return;
        
        // Save vote to localStorage (simulate server)
        localStorage.setItem('hasVoted', 'true');
        localStorage.setItem('votedFor', selectedCandidate);
        localStorage.setItem('voteTime', new Date().toISOString());
        
        // Update UI
        updateVotingStatus(true, selectedCandidate);
        disableVoteButtons();
        
        // Close confirmation modal
        closeModal();
        
        // Show success modal
        setTimeout(() => {
            successModal.style.display = 'flex';
        }, 300);
    });
    
    // Close success modal
    closeSuccessBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
    
    // Logout functionality
    logoutBtn.addEventListener('click', function() {
        if (confirm('Apakah Anda yakin ingin keluar?')) {
            // Clear session (simulated)
            sessionStorage.removeItem('userLoggedIn');
            window.location.href = '../../index.html';
        }
    });
    
    // Countdown timer
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) return;
        
        // Set election end date: May 15, 2026, 23:59 WIB
        const electionEnd = new Date('May 15, 2026 23:59:00').getTime();
        
        function update() {
            const now = new Date().getTime();
            const timeLeft = electionEnd - now;
            
            if (timeLeft < 0) {
                countdownElement.textContent = 'Voting Ditutup';
                disableVoteButtons();
                return;
            }
            
            // Calculate hours, minutes, seconds
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            // Format the countdown
            countdownElement.textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        update();
        setInterval(update, 1000);
    }
    
    // Initialize countdown
    updateCountdown();
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === confirmationModal) {
            closeModal();
        }
        if (event.target === successModal) {
            successModal.style.display = 'none';
        }
    });
});