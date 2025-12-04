// Admin Dashboard Configuration
const AdminConfig = {
    // System Settings
    system: {
        name: 'E-Voting Himatro',
        version: '1.0.0',
        year: '2026',
        organization: 'Himatro',
        adminEmail: 'admin@himatro.ac.id'
    },

    // Update Intervals (in milliseconds)
    updateIntervals: {
        statistics: 30000,      // 30 seconds
        votingActivity: 10000,  // 10 seconds
        progressBars: 15000,    // 15 seconds
        countdown: 1000         // 1 second
    },

    // Default Admin Credentials (for demo)
    defaultAdmin: {
        email: 'admin@himatro.ac.id',
        password: 'admin123',
        name: 'Administrator',
        role: 'admin'
    },

    // Voting Settings
    voting: {
        defaultStartTime: '08:00',
        defaultEndTime: '17:00',
        allowRevote: false,
        showRealTimeResults: true,
        maxCandidates: 10,
        minVotingDuration: 3600000 // 1 hour in milliseconds
    },

    // UI Settings
    ui: {
        theme: 'light',
        sidebarCollapsed: false,
        notificationDuration: 3000,
        modalAnimationDuration: 300,
        autoSaveInterval: 30000 // 30 seconds
    },

    // Data Limits
    limits: {
        maxUsersPerPage: 50,
        maxActivitiesShown: 10,
        maxCandidateNameLength: 100,
        maxVisionLength: 500,
        maxExportRecords: 10000
    },

    // Export Settings
    export: {
        formats: ['pdf', 'excel', 'csv'],
        defaultFormat: 'pdf',
        includeCharts: true,
        includeTimestamp: true
    },

    // Security Settings
    security: {
        sessionTimeout: 3600000, // 1 hour
        maxLoginAttempts: 5,
        lockoutDuration: 900000, // 15 minutes
        requireStrongPassword: true
    },

    // Notification Settings
    notifications: {
        showSuccess: true,
        showWarning: true,
        showError: true,
        showInfo: true,
        position: 'top-right',
        autoClose: true
    },

    // Chart Settings
    charts: {
        colors: {
            primary: '#2d74da',
            secondary: '#00b894',
            accent: '#1a365d',
            success: '#38a169',
            warning: '#d69e2e',
            danger: '#e53e3e'
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
        }
    },

    // API Endpoints (for future backend integration)
    api: {
        baseUrl: '/api/v1',
        endpoints: {
            login: '/auth/login',
            logout: '/auth/logout',
            dashboard: '/admin/dashboard',
            candidates: '/admin/candidates',
            users: '/admin/users',
            voting: '/admin/voting',
            results: '/admin/results',
            settings: '/admin/settings',
            export: '/admin/export'
        }
    },

    // Local Storage Keys
    storage: {
        userSession: 'admin_session',
        userPreferences: 'admin_preferences',
        draftData: 'admin_drafts',
        theme: 'admin_theme'
    },

    // Error Messages
    messages: {
        errors: {
            loginFailed: 'Login gagal. Periksa kredensial Anda.',
            sessionExpired: 'Sesi Anda telah berakhir. Silakan login kembali.',
            networkError: 'Terjadi kesalahan jaringan. Coba lagi nanti.',
            validationError: 'Data yang dimasukkan tidak valid.',
            permissionDenied: 'Anda tidak memiliki izin untuk melakukan aksi ini.',
            serverError: 'Terjadi kesalahan server. Hubungi administrator.'
        },
        success: {
            loginSuccess: 'Login berhasil!',
            dataSaved: 'Data berhasil disimpan.',
            dataDeleted: 'Data berhasil dihapus.',
            exportSuccess: 'Data berhasil diexport.',
            settingsUpdated: 'Pengaturan berhasil diperbarui.'
        },
        warnings: {
            unsavedChanges: 'Ada perubahan yang belum disimpan.',
            deleteConfirmation: 'Apakah Anda yakin ingin menghapus data ini?',
            votingActive: 'Voting sedang berlangsung. Hati-hati melakukan perubahan.'
        },
        info: {
            loading: 'Memuat data...',
            processing: 'Memproses permintaan...',
            noData: 'Tidak ada data untuk ditampilkan.',
            updateAvailable: 'Pembaruan tersedia.'
        }
    },

    // Feature Flags
    features: {
        realTimeUpdates: true,
        darkMode: true,
        exportFeature: true,
        advancedAnalytics: false,
        multiLanguage: false,
        mobileApp: false,
        emailNotifications: false,
        smsNotifications: false
    },

    // Development Settings
    development: {
        debugMode: false,
        mockData: true,
        logLevel: 'info', // 'debug', 'info', 'warn', 'error'
        showPerformanceMetrics: false
    }
};

// Utility functions for configuration
const ConfigUtils = {
    // Get configuration value with dot notation
    get(path, defaultValue = null) {
        return path.split('.').reduce((obj, key) => 
            obj && obj[key] !== undefined ? obj[key] : defaultValue, AdminConfig);
    },

    // Set configuration value
    set(path, value) {
        const keys = path.split('.');
        const lastKey = keys.pop();
        const target = keys.reduce((obj, key) => {
            if (!obj[key]) obj[key] = {};
            return obj[key];
        }, AdminConfig);
        target[lastKey] = value;
    },

    // Load user preferences from localStorage
    loadPreferences() {
        try {
            const saved = localStorage.getItem(AdminConfig.storage.userPreferences);
            if (saved) {
                const preferences = JSON.parse(saved);
                Object.assign(AdminConfig.ui, preferences.ui || {});
                Object.assign(AdminConfig.notifications, preferences.notifications || {});
            }
        } catch (error) {
            console.warn('Failed to load user preferences:', error);
        }
    },

    // Save user preferences to localStorage
    savePreferences() {
        try {
            const preferences = {
                ui: AdminConfig.ui,
                notifications: AdminConfig.notifications,
                timestamp: Date.now()
            };
            localStorage.setItem(AdminConfig.storage.userPreferences, JSON.stringify(preferences));
        } catch (error) {
            console.warn('Failed to save user preferences:', error);
        }
    },

    // Validate configuration
    validate() {
        const required = [
            'system.name',
            'system.version',
            'defaultAdmin.email',
            'voting.defaultStartTime',
            'voting.defaultEndTime'
        ];

        const missing = required.filter(path => !this.get(path));
        if (missing.length > 0) {
            console.error('Missing required configuration:', missing);
            return false;
        }
        return true;
    },

    // Get environment-specific config
    getEnvironmentConfig() {
        const hostname = window.location.hostname;
        
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            return {
                ...AdminConfig,
                development: {
                    ...AdminConfig.development,
                    debugMode: true,
                    mockData: true
                }
            };
        }
        
        return AdminConfig;
    }
};

// Initialize configuration
document.addEventListener('DOMContentLoaded', function() {
    // Validate configuration
    if (!ConfigUtils.validate()) {
        console.error('Configuration validation failed');
    }

    // Load user preferences
    ConfigUtils.loadPreferences();

    // Apply theme
    if (AdminConfig.ui.theme === 'dark') {
        document.body.classList.add('dark');
    }

    // Set up auto-save for preferences
    setInterval(() => {
        ConfigUtils.savePreferences();
    }, AdminConfig.ui.autoSaveInterval);
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AdminConfig, ConfigUtils };
} else {
    window.AdminConfig = AdminConfig;
    window.ConfigUtils = ConfigUtils;
}