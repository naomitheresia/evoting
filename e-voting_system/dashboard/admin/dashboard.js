// Admin Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    startRealTimeUpdates();
    updateCountdown();
});

// Initialize Dashboard
function initializeDashboard() {
    // Set active navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            showContent(target);
            setActiveNav(this);
        });
    });

    // Sidebar toggle
    const toggleSidebar = document.getElementById('toggleSidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');

    toggleSidebar.addEventListener('click', function() {
        sidebar.classList.add('sidebar-active');
    });

    closeSidebar.addEventListener('click', function() {
        sidebar.classList.remove('sidebar-active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 768) {
            if (!sidebar.contains(e.target) && !toggleSidebar.contains(e.target)) {
                sidebar.classList.remove('sidebar-active');
            }
        }
    });
}

// Show content section
function showContent(section) {
    // Hide all content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show selected section
    const targetSection = document.getElementById(section + '-content');
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // Update page title
    const titles = {
        'dashboard': 'Dashboard Overview',
        'candidates': 'Kelola Kandidat',
        'voting': 'Monitor Voting',
        'users': 'Kelola User',
        'results': 'Hasil Voting',
        'settings': 'Pengaturan Sistem'
    };
    
    document.getElementById('pageTitle').textContent = titles[section] || 'Dashboard';
}

// Set active navigation
function setActiveNav(activeItem) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active', 'bg-blue-800', 'text-white');
        item.classList.add('text-blue-100');
    });
    
    activeItem.classList.add('active', 'bg-blue-800', 'text-white');
    activeItem.classList.remove('text-blue-100');
}

// Real-time updates
function startRealTimeUpdates() {
    // Update statistics every 30 seconds
    setInterval(updateStatistics, 30000);
    
    // Update voting activity every 10 seconds
    setInterval(updateVotingActivity, 10000);
    
    // Update progress bars every 15 seconds
    setInterval(updateProgressBars, 15000);
}

// Update statistics
function updateStatistics() {
    // Use demo data with random updates
    const stats = DemoDataUtils.updateStatistics();
    
    document.getElementById('totalVoters').textContent = stats.totalVoters.toLocaleString();
    document.getElementById('votedCount').textContent = stats.votedCount.toLocaleString();
    document.getElementById('notVotedCount').textContent = stats.notVotedCount.toLocaleString();
    document.getElementById('participationRate').textContent = stats.participationRate + '%';
}

// Update voting activity
function updateVotingActivity() {
    const newActivity = DemoDataUtils.generateRandomActivity();
    const timeString = new Date().toLocaleTimeString('id-ID');

    const tbody = document.getElementById('votingActivity');
    if (tbody) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td class="px-4 py-3">${timeString}</td>
            <td class="px-4 py-3">${newActivity.nim}</td>
            <td class="px-4 py-3">${newActivity.name}</td>
            <td class="px-4 py-3">${newActivity.candidateName}</td>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Berhasil</span></td>
        `;

        tbody.insertBefore(newRow, tbody.firstChild);

        // Keep only last 10 activities
        while (tbody.children.length > 10) {
            tbody.removeChild(tbody.lastChild);
        }
    }
}

// Update progress bars
function updateProgressBars() {
    const progressBars = document.querySelectorAll('.candidate-progress');
    const progressData = DemoDataUtils.getVotingProgress();
    const colors = ['bg-blue-600', 'bg-green-600', 'bg-purple-600'];

    progressBars.forEach((bar, index) => {
        if (progressData[index]) {
            const candidate = progressData[index];
            const nameSpan = bar.querySelector('.text-sm.font-medium');
            const voteSpan = bar.querySelector('.text-sm.text-gray-500');
            const progressDiv = bar.querySelector('.w-full.bg-gray-200 div');

            if (nameSpan) nameSpan.textContent = candidate.name;
            if (voteSpan) voteSpan.textContent = `${candidate.votes} suara (${candidate.percentage}%)`;
            if (progressDiv) {
                progressDiv.style.width = candidate.percentage + '%';
                progressDiv.className = `h-3 rounded-full ${colors[index]}`;
            }
        }
    });
}

// Countdown timer
function updateCountdown() {
    const endTime = new Date();
    endTime.setHours(17, 0, 0, 0); // Set to 5 PM today

    function updateTimer() {
        const now = new Date();
        const timeLeft = endTime - now;

        if (timeLeft > 0) {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            document.getElementById('remainingTime').textContent = timeString;
        } else {
            document.getElementById('remainingTime').textContent = '00:00:00';
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Candidate Management Functions
function openAddCandidateModal() {
    document.getElementById('addCandidateModal').classList.remove('hidden');
    document.getElementById('addCandidateModal').classList.add('flex');
}

function closeAddCandidateModal() {
    document.getElementById('addCandidateModal').classList.add('hidden');
    document.getElementById('addCandidateModal').classList.remove('flex');
    document.getElementById('addCandidateForm').reset();
}

function editCandidate(id) {
    alert(`Edit kandidat dengan ID: ${id}`);
    // Implement edit functionality
}

function deleteCandidate(id) {
    if (confirm('Apakah Anda yakin ingin menghapus kandidat ini?')) {
        alert(`Kandidat dengan ID ${id} telah dihapus`);
        // Implement delete functionality
    }
}

// Voting Control Functions
function startVoting() {
    if (confirm('Mulai sesi voting sekarang?')) {
        showNotification('Voting telah dimulai!', 'success');
        // Implement start voting logic
    }
}

function pauseVoting() {
    if (confirm('Jeda sesi voting sementara?')) {
        showNotification('Voting telah dijeda', 'warning');
        // Implement pause voting logic
    }
}

function stopVoting() {
    if (confirm('Hentikan sesi voting? Tindakan ini tidak dapat dibatalkan.')) {
        showNotification('Voting telah dihentikan', 'error');
        // Implement stop voting logic
    }
}

function exportResults() {
    showNotification('Mengexport hasil voting...', 'info');
    // Simulate export process
    setTimeout(() => {
        showNotification('Hasil voting berhasil diexport!', 'success');
    }, 2000);
}

// User Management Functions
function openAddUserModal() {
    alert('Modal tambah user akan dibuka');
    // Implement add user modal
}

function editUser(nim) {
    alert(`Edit user dengan NIM: ${nim}`);
    // Implement edit user functionality
}

function deleteUser(nim) {
    if (confirm(`Hapus user dengan NIM ${nim}?`)) {
        alert(`User dengan NIM ${nim} telah dihapus`);
        // Implement delete user functionality
    }
}

// Export Functions
function exportPDF() {
    showNotification('Mengexport laporan PDF...', 'info');
    setTimeout(() => {
        showNotification('Laporan PDF berhasil diexport!', 'success');
    }, 2000);
}

function exportExcel() {
    showNotification('Mengexport laporan Excel...', 'info');
    setTimeout(() => {
        showNotification('Laporan Excel berhasil diexport!', 'success');
    }, 2000);
}

function exportCSV() {
    showNotification('Mengexport laporan CSV...', 'info');
    setTimeout(() => {
        showNotification('Laporan CSV berhasil diexport!', 'success');
    }, 2000);
}

// Settings Functions
function saveSettings() {
    showNotification('Menyimpan pengaturan...', 'info');
    setTimeout(() => {
        showNotification('Pengaturan berhasil disimpan!', 'success');
    }, 1000);
}

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white transition-all duration-300 transform translate-x-full`;
    
    // Set color based on type
    const colors = {
        'success': 'bg-green-500',
        'error': 'bg-red-500',
        'warning': 'bg-yellow-500',
        'info': 'bg-blue-500'
    };
    
    notification.classList.add(colors[type] || colors.info);
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : type === 'warning' ? 'exclamation' : 'info'}-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        showNotification('Logging out...', 'info');
        setTimeout(() => {
            window.location.href = '../../login.html';
        }, 1000);
    }
}

// Form submission handlers
document.getElementById('addCandidateForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const candidateData = Object.fromEntries(formData);
    
    // Simulate adding candidate
    showNotification('Kandidat baru berhasil ditambahkan!', 'success');
    closeAddCandidateModal();
    
    // Refresh candidates list
    setTimeout(() => {
        location.reload();
    }, 1500);
});

// Responsive handling
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth >= 768) {
        sidebar.classList.remove('sidebar-active');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.fixed.inset-0');
        modals.forEach(modal => {
            if (!modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    }
    
    // Ctrl+1-6 for quick navigation
    if (e.ctrlKey && e.key >= '1' && e.key <= '6') {
        e.preventDefault();
        const sections = ['dashboard', 'candidates', 'voting', 'users', 'results', 'settings'];
        const sectionIndex = parseInt(e.key) - 1;
        if (sections[sectionIndex]) {
            showContent(sections[sectionIndex]);
            const navItem = document.querySelector(`a[href="#${sections[sectionIndex]}"]`);
            if (navItem) setActiveNav(navItem);
        }
    }
});

// Auto-save draft functionality for forms
function autoSaveDraft(formId, key) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            localStorage.setItem(key, JSON.stringify(data));
        });
    });
    
    // Load saved draft
    const savedData = localStorage.getItem(key);
    if (savedData) {
        const data = JSON.parse(savedData);
        Object.keys(data).forEach(key => {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) input.value = data[key];
        });
    }
}

// Initialize auto-save for add candidate form
autoSaveDraft('addCandidateForm', 'addCandidateDraft');

// Print functionality
function printResults() {
    window.print();
}

// Dark mode toggle (optional)
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
}