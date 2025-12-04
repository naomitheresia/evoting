// Auth JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Handle user type change
    const userTypeSelect = document.getElementById('userType');
    const emailLabel = document.getElementById('emailLabel');
    const emailInput = document.getElementById('email');
    
    if (userTypeSelect && emailLabel && emailInput) {
        userTypeSelect.addEventListener('change', function() {
            if (this.value === 'admin') {
                emailLabel.textContent = 'Email Admin';
                emailInput.placeholder = 'contoh: admin@himatro.ac.id';
            } else {
                emailLabel.textContent = 'Email atau NIM';
                emailInput.placeholder = 'contoh: 12345678@himatro.ac.id';
            }
        });
    }
    
    // Toggle password visibility
    document.querySelectorAll('.show-password').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    });
    
    // Form validation
    const loginForm = document.querySelector('#loginForm') || document.querySelector('.auth-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('#email')?.value;
            const password = this.querySelector('#password')?.value;
            const userType = this.querySelector('#userType')?.value || 'user';
            
            if (!email || !password) {
                alert('Harap isi semua field');
                return;
            }
            
            // Simulate API call
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Save login status
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('userType', userType);
                
                if (userType === 'admin') {
                    // Admin credentials validation (demo)
                    if (email === 'admin@himatro.ac.id' && password === 'admin123') {
                        localStorage.setItem('userName', 'Administrator');
                        localStorage.setItem('userEmail', email);
                        window.location.href = 'dashboard/admin/dashboard.html';
                    } else {
                        alert('Kredensial admin tidak valid!');
                    }
                } else {
                    // User login
                    localStorage.setItem('userName', 'Mahasiswa Teknik Elektro');
                    localStorage.setItem('userNIM', '11220099');
                    localStorage.setItem('userEmail', email);
                    window.location.href = 'dashboard/user/dashboard.html';
                }
            }, 1500);
        });
    }
    
    // Register form specific validation
    const registerForm = document.querySelector('#registerForm');
    if (registerForm) {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        
        if (password && confirmPassword) {
            confirmPassword.addEventListener('input', function() {
                if (password.value !== this.value) {
                    this.style.borderColor = '#e53e3e';
                } else {
                    this.style.borderColor = '#38a169';
                }
            });
        }
    }
});

// Di dalam form submit handler di auth.js
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // ... validasi ...
    
    // Simpan status login (simulasi)
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userName', 'Mahasiswa Teknik Elektro');
    localStorage.setItem('userNIM', '11220099');
    
    // Redirect ke dashboard user
    window.location.href = 'dashboard/user/dashboard.html';
});