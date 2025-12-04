// Demo Data for Admin Dashboard
const DemoData = {
    // Statistics Data
    statistics: {
        totalVoters: 1247,
        votedCount: 892,
        notVotedCount: 355,
        participationRate: 71.5,
        invalidVotes: 0,
        totalCandidates: 3
    },

    // Candidates Data
    candidates: [
        {
            id: 1,
            number: 1,
            chairman: {
                name: 'Rizki Maulana',
                nim: '11220001',
                photo: 'https://i.pravatar.cc/150?img=1'
            },
            viceChairman: {
                name: 'Ahmad Fauzi',
                nim: '11220002',
                photo: 'https://i.pravatar.cc/150?img=2'
            },
            vision: 'Himatro Inovatif, Elektro Berprestasi',
            mission: [
                'Meningkatkan kualitas akademik mahasiswa',
                'Mengembangkan soft skill dan hard skill',
                'Memperkuat jaringan alumni dan industri'
            ],
            tags: ['Teknologi', 'Inovasi', 'Prestasi'],
            votes: 342,
            percentage: 38.3,
            color: '#2d74da'
        },
        {
            id: 2,
            number: 2,
            chairman: {
                name: 'Sarah Fitriani',
                nim: '11220003',
                photo: 'https://i.pravatar.cc/150?img=3'
            },
            viceChairman: {
                name: 'Budi Santoso',
                nim: '11220004',
                photo: 'https://i.pravatar.cc/150?img=4'
            },
            vision: 'Sinergi untuk Kemajuan Bersama',
            mission: [
                'Membangun kolaborasi antar mahasiswa',
                'Mengoptimalkan potensi organisasi',
                'Menciptakan lingkungan yang kondusif'
            ],
            tags: ['Kolaborasi', 'Sosial', 'Sinergi'],
            votes: 298,
            percentage: 33.4,
            color: '#00b894'
        },
        {
            id: 3,
            number: 3,
            chairman: {
                name: 'Dimas Pratama',
                nim: '11220005',
                photo: 'https://i.pravatar.cc/150?img=5'
            },
            viceChairman: {
                name: 'Cindy Permata',
                nim: '11220006',
                photo: 'https://i.pravatar.cc/150?img=6'
            },
            vision: 'Elektro Unggul, Mandiri, dan Berkarakter',
            mission: [
                'Mengembangkan karakter kepemimpinan',
                'Meningkatkan kemandirian organisasi',
                'Mencapai prestasi yang membanggakan'
            ],
            tags: ['Karakter', 'Mandiri', 'Unggul'],
            votes: 252,
            percentage: 28.3,
            color: '#8b5cf6'
        }
    ],

    // Users Data
    users: [
        {
            nim: '11220001',
            name: 'Ahmad Rizki Maulana',
            email: 'ahmad.rizki@student.ac.id',
            faculty: 'Teknik Elektro',
            semester: 6,
            hasVoted: true,
            votedAt: '2026-01-15 14:32:15',
            votedFor: 1,
            registeredAt: '2026-01-10 09:15:30',
            status: 'active'
        },
        {
            nim: '11220002',
            name: 'Sari Dewi Lestari',
            email: 'sari.dewi@student.ac.id',
            faculty: 'Teknik Elektro',
            semester: 4,
            hasVoted: false,
            votedAt: null,
            votedFor: null,
            registeredAt: '2026-01-10 10:22:45',
            status: 'active'
        },
        {
            nim: '11220003',
            name: 'Budi Santoso',
            email: 'budi.santoso@student.ac.id',
            faculty: 'Teknik Elektro',
            semester: 8,
            hasVoted: true,
            votedAt: '2026-01-15 14:30:42',
            votedFor: 2,
            registeredAt: '2026-01-09 16:45:12',
            status: 'active'
        },
        {
            nim: '11220004',
            name: 'Maya Sari',
            email: 'maya.sari@student.ac.id',
            faculty: 'Teknik Elektro',
            semester: 2,
            hasVoted: true,
            votedAt: '2026-01-15 14:28:19',
            votedFor: 3,
            registeredAt: '2026-01-11 11:30:25',
            status: 'active'
        },
        {
            nim: '11220005',
            name: 'Andi Wijaya',
            email: 'andi.wijaya@student.ac.id',
            faculty: 'Teknik Elektro',
            semester: 6,
            hasVoted: false,
            votedAt: null,
            votedFor: null,
            registeredAt: '2026-01-12 08:15:40',
            status: 'active'
        }
    ],

    // Voting Activities
    votingActivities: [
        {
            id: 1,
            timestamp: '2026-01-15 14:32:15',
            nim: '11220123',
            name: 'Ahmad Rizki',
            candidateId: 1,
            candidateName: 'Rizki & Ahmad',
            status: 'success',
            ipAddress: '192.168.1.100',
            userAgent: 'Chrome/120.0.0.0'
        },
        {
            id: 2,
            timestamp: '2026-01-15 14:30:42',
            nim: '11220098',
            name: 'Budi Santoso',
            candidateId: 2,
            candidateName: 'Sarah & Budi',
            status: 'success',
            ipAddress: '192.168.1.101',
            userAgent: 'Firefox/121.0.0.0'
        },
        {
            id: 3,
            timestamp: '2026-01-15 14:28:19',
            nim: '11220087',
            name: 'Sari Dewi',
            candidateId: 3,
            candidateName: 'Dimas & Cindy',
            status: 'success',
            ipAddress: '192.168.1.102',
            userAgent: 'Safari/17.0.0.0'
        },
        {
            id: 4,
            timestamp: '2026-01-15 14:25:33',
            nim: '11220156',
            name: 'Maya Putri',
            candidateId: 1,
            candidateName: 'Rizki & Ahmad',
            status: 'success',
            ipAddress: '192.168.1.103',
            userAgent: 'Chrome/120.0.0.0'
        },
        {
            id: 5,
            timestamp: '2026-01-15 14:22:47',
            nim: '11220234',
            name: 'Andi Wijaya',
            candidateId: 2,
            candidateName: 'Sarah & Budi',
            status: 'success',
            ipAddress: '192.168.1.104',
            userAgent: 'Edge/120.0.0.0'
        }
    ],

    // System Settings
    systemSettings: {
        votingStartTime: '2026-01-15 08:00:00',
        votingEndTime: '2026-01-15 17:00:00',
        organizationName: 'Himatro',
        electionYear: '2026',
        adminEmail: 'admin@himatro.ac.id',
        allowRevote: false,
        showRealTimeResults: true,
        requireEmailVerification: true,
        maxVotesPerUser: 1,
        votingStatus: 'active' // active, paused, stopped, completed
    },

    // Recent Activities for Dashboard
    recentActivities: [
        {
            type: 'vote',
            message: 'Ahmad Rizki (11220123) telah memilih',
            timestamp: '2 menit yang lalu',
            icon: 'fas fa-vote-yea',
            color: 'text-green-600'
        },
        {
            type: 'user',
            message: 'User baru terdaftar: Sari Dewi',
            timestamp: '5 menit yang lalu',
            icon: 'fas fa-user-plus',
            color: 'text-blue-600'
        },
        {
            type: 'vote',
            message: 'Budi Santoso (11220098) telah memilih',
            timestamp: '8 menit yang lalu',
            icon: 'fas fa-vote-yea',
            color: 'text-green-600'
        },
        {
            type: 'system',
            message: 'Sistem backup berhasil dijalankan',
            timestamp: '15 menit yang lalu',
            icon: 'fas fa-database',
            color: 'text-purple-600'
        },
        {
            type: 'vote',
            message: 'Maya Putri (11220156) telah memilih',
            timestamp: '18 menit yang lalu',
            icon: 'fas fa-vote-yea',
            color: 'text-green-600'
        }
    ],

    // Voting Timeline
    votingTimeline: [
        {
            time: '08:00',
            event: 'Voting dimulai',
            votes: 0,
            status: 'completed'
        },
        {
            time: '09:00',
            event: '1 jam pertama',
            votes: 45,
            status: 'completed'
        },
        {
            time: '12:00',
            event: 'Istirahat siang',
            votes: 234,
            status: 'completed'
        },
        {
            time: '14:30',
            event: 'Saat ini',
            votes: 892,
            status: 'current'
        },
        {
            time: '17:00',
            event: 'Voting berakhir',
            votes: null,
            status: 'pending'
        }
    ],

    // Analytics Data
    analytics: {
        hourlyVotes: [
            { hour: '08:00', votes: 45 },
            { hour: '09:00', votes: 78 },
            { hour: '10:00', votes: 92 },
            { hour: '11:00', votes: 67 },
            { hour: '12:00', votes: 34 },
            { hour: '13:00', votes: 89 },
            { hour: '14:00', votes: 156 },
            { hour: '15:00', votes: 0 } // current hour
        ],
        facultyBreakdown: [
            { faculty: 'Teknik Elektro', votes: 456, percentage: 51.1 },
            { faculty: 'Teknik Informatika', votes: 234, percentage: 26.2 },
            { faculty: 'Teknik Sipil', votes: 123, percentage: 13.8 },
            { faculty: 'Teknik Mesin', votes: 79, percentage: 8.9 }
        ],
        semesterBreakdown: [
            { semester: 2, votes: 89, percentage: 10.0 },
            { semester: 4, votes: 156, percentage: 17.5 },
            { semester: 6, votes: 234, percentage: 26.2 },
            { semester: 8, votes: 413, percentage: 46.3 }
        ]
    }
};

// Utility functions for demo data
const DemoDataUtils = {
    // Get random candidate vote
    getRandomVote() {
        const candidates = DemoData.candidates;
        const randomIndex = Math.floor(Math.random() * candidates.length);
        return candidates[randomIndex];
    },

    // Generate random user activity
    generateRandomActivity() {
        const names = ['Ahmad Rizki', 'Sari Dewi', 'Budi Santoso', 'Maya Putri', 'Andi Wijaya', 'Dina Sari', 'Rudi Hartono'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomNim = '11220' + Math.floor(Math.random() * 999).toString().padStart(3, '0');
        const randomCandidate = this.getRandomVote();
        
        return {
            id: Date.now(),
            timestamp: new Date().toLocaleString('id-ID'),
            nim: randomNim,
            name: randomName,
            candidateId: randomCandidate.id,
            candidateName: `${randomCandidate.chairman.name} & ${randomCandidate.viceChairman.name}`,
            status: 'success',
            ipAddress: `192.168.1.${Math.floor(Math.random() * 255)}`,
            userAgent: 'Chrome/120.0.0.0'
        };
    },

    // Update statistics with random changes
    updateStatistics() {
        const stats = DemoData.statistics;
        const change = Math.floor(Math.random() * 5) + 1;
        
        if (stats.votedCount < stats.totalVoters) {
            stats.votedCount += change;
            stats.notVotedCount = stats.totalVoters - stats.votedCount;
            stats.participationRate = ((stats.votedCount / stats.totalVoters) * 100).toFixed(1);
            
            // Update candidate votes proportionally
            DemoData.candidates.forEach(candidate => {
                const additionalVotes = Math.floor(Math.random() * 3);
                candidate.votes += additionalVotes;
            });
            
            // Recalculate percentages
            const totalVotes = DemoData.candidates.reduce((sum, candidate) => sum + candidate.votes, 0);
            DemoData.candidates.forEach(candidate => {
                candidate.percentage = ((candidate.votes / totalVotes) * 100).toFixed(1);
            });
        }
        
        return stats;
    },

    // Get voting progress data
    getVotingProgress() {
        return DemoData.candidates.map(candidate => ({
            id: candidate.id,
            name: `${candidate.chairman.name} & ${candidate.viceChairman.name}`,
            votes: candidate.votes,
            percentage: candidate.percentage,
            color: candidate.color
        }));
    },

    // Get users with pagination
    getUsers(page = 1, limit = 10) {
        const start = (page - 1) * limit;
        const end = start + limit;
        return {
            data: DemoData.users.slice(start, end),
            total: DemoData.users.length,
            page: page,
            totalPages: Math.ceil(DemoData.users.length / limit)
        };
    },

    // Search users
    searchUsers(query) {
        const lowercaseQuery = query.toLowerCase();
        return DemoData.users.filter(user => 
            user.name.toLowerCase().includes(lowercaseQuery) ||
            user.nim.includes(query) ||
            user.email.toLowerCase().includes(lowercaseQuery)
        );
    },

    // Get voting activities with pagination
    getVotingActivities(page = 1, limit = 10) {
        const start = (page - 1) * limit;
        const end = start + limit;
        return {
            data: DemoData.votingActivities.slice(start, end),
            total: DemoData.votingActivities.length,
            page: page,
            totalPages: Math.ceil(DemoData.votingActivities.length / limit)
        };
    },

    // Export data in different formats
    exportData(format = 'json') {
        const exportData = {
            statistics: DemoData.statistics,
            candidates: DemoData.candidates,
            users: DemoData.users,
            activities: DemoData.votingActivities,
            timestamp: new Date().toISOString()
        };

        switch (format.toLowerCase()) {
            case 'json':
                return JSON.stringify(exportData, null, 2);
            case 'csv':
                return this.convertToCSV(exportData);
            default:
                return exportData;
        }
    },

    // Convert data to CSV format
    convertToCSV(data) {
        const csvData = [];
        
        // Add candidates data
        csvData.push('HASIL VOTING');
        csvData.push('No,Nama Ketua,Nama Wakil,Visi,Jumlah Suara,Persentase');
        data.candidates.forEach(candidate => {
            csvData.push(`${candidate.number},"${candidate.chairman.name}","${candidate.viceChairman.name}","${candidate.vision}",${candidate.votes},${candidate.percentage}%`);
        });
        
        csvData.push('');
        csvData.push('STATISTIK');
        csvData.push(`Total Pemilih,${data.statistics.totalVoters}`);
        csvData.push(`Sudah Memilih,${data.statistics.votedCount}`);
        csvData.push(`Belum Memilih,${data.statistics.notVotedCount}`);
        csvData.push(`Tingkat Partisipasi,${data.statistics.participationRate}%`);
        
        return csvData.join('\n');
    },

    // Reset demo data to initial state
    reset() {
        DemoData.statistics = {
            totalVoters: 1247,
            votedCount: 892,
            notVotedCount: 355,
            participationRate: 71.5,
            invalidVotes: 0,
            totalCandidates: 3
        };
        
        DemoData.candidates.forEach((candidate, index) => {
            const initialVotes = [342, 298, 252];
            const initialPercentages = [38.3, 33.4, 28.3];
            candidate.votes = initialVotes[index];
            candidate.percentage = initialPercentages[index];
        });
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DemoData, DemoDataUtils };
} else {
    window.DemoData = DemoData;
    window.DemoDataUtils = DemoDataUtils;
}