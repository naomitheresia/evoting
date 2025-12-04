// Export Utilities for Admin Dashboard
const ExportUtils = {
    // Export data to PDF (using browser's print functionality)
    exportToPDF() {
        // Create a new window with formatted content
        const printWindow = window.open('', '_blank');
        const currentDate = new Date().toLocaleDateString('id-ID');
        const currentTime = new Date().toLocaleTimeString('id-ID');
        
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Laporan Hasil E-Voting Himatro ${AdminConfig.system.year}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
                    .logo { width: 60px; height: 60px; margin: 0 auto 10px; }
                    .title { font-size: 24px; font-weight: bold; margin: 10px 0; }
                    .subtitle { font-size: 16px; color: #666; }
                    .section { margin: 30px 0; }
                    .section-title { font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid #ccc; padding-bottom: 5px; }
                    .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0; }
                    .stat-card { border: 1px solid #ddd; padding: 15px; border-radius: 5px; }
                    .stat-number { font-size: 24px; font-weight: bold; color: #2d74da; }
                    .stat-label { font-size: 14px; color: #666; }
                    .candidates-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                    .candidates-table th, .candidates-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                    .candidates-table th { background-color: #f5f5f5; font-weight: bold; }
                    .winner { background-color: #e8f5e8; }
                    .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #ccc; padding-top: 20px; }
                    @media print { body { margin: 0; } .no-print { display: none; } }
                </style>
            </head>
            <body>
                <div class="header">
                    <div class="title">LAPORAN HASIL E-VOTING</div>
                    <div class="subtitle">Pemilihan Ketua Himpunan Mahasiswa Teknik Elektro</div>
                    <div class="subtitle">Tahun ${AdminConfig.system.year}</div>
                    <div style="margin-top: 15px; font-size: 14px;">
                        Dicetak pada: ${currentDate} ${currentTime}
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">STATISTIK PEMILIHAN</div>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-number">${DemoData.statistics.totalVoters.toLocaleString()}</div>
                            <div class="stat-label">Total Pemilih Terdaftar</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">${DemoData.statistics.votedCount.toLocaleString()}</div>
                            <div class="stat-label">Jumlah yang Memilih</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">${DemoData.statistics.participationRate}%</div>
                            <div class="stat-label">Tingkat Partisipasi</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">${DemoData.statistics.invalidVotes}</div>
                            <div class="stat-label">Suara Tidak Sah</div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">HASIL PEROLEHAN SUARA</div>
                    <table class="candidates-table">
                        <thead>
                            <tr>
                                <th>Peringkat</th>
                                <th>No. Urut</th>
                                <th>Nama Ketua</th>
                                <th>Nama Wakil</th>
                                <th>Visi</th>
                                <th>Jumlah Suara</th>
                                <th>Persentase</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.generateCandidateRows()}
                        </tbody>
                    </table>
                </div>

                <div class="section">
                    <div class="section-title">KETERANGAN</div>
                    <ul>
                        <li>Pemilihan dilaksanakan secara elektronik melalui sistem E-Voting Himatro</li>
                        <li>Setiap mahasiswa hanya dapat memberikan satu suara</li>
                        <li>Sistem menggunakan enkripsi untuk menjamin keamanan dan kerahasiaan suara</li>
                        <li>Hasil ini bersifat final dan tidak dapat diubah</li>
                    </ul>
                </div>

                <div class="footer">
                    <p><strong>Himpunan Mahasiswa Teknik Elektro</strong></p>
                    <p>Sistem E-Voting Himatro ${AdminConfig.system.year}</p>
                    <p>Laporan ini digenerate secara otomatis oleh sistem</p>
                </div>
            </body>
            </html>
        `;

        printWindow.document.write(htmlContent);
        printWindow.document.close();
        
        // Wait for content to load then print
        setTimeout(() => {
            printWindow.print();
        }, 500);
    },

    // Generate candidate rows for PDF
    generateCandidateRows() {
        const sortedCandidates = [...DemoData.candidates].sort((a, b) => b.votes - a.votes);
        const medals = ['🥇', '🥈', '🥉'];
        
        return sortedCandidates.map((candidate, index) => {
            const isWinner = index === 0;
            const medal = medals[index] || '';
            return `
                <tr ${isWinner ? 'class="winner"' : ''}>
                    <td>${medal} ${index + 1}</td>
                    <td>${candidate.number}</td>
                    <td>${candidate.chairman.name}</td>
                    <td>${candidate.viceChairman.name}</td>
                    <td>${candidate.vision}</td>
                    <td>${candidate.votes.toLocaleString()}</td>
                    <td>${candidate.percentage}%</td>
                </tr>
            `;
        }).join('');
    },

    // Export data to Excel (CSV format)
    exportToExcel() {
        const csvContent = this.generateCSVContent();
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `hasil-evoting-himatro-${AdminConfig.system.year}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    },

    // Generate CSV content
    generateCSVContent() {
        const currentDate = new Date().toLocaleDateString('id-ID');
        const currentTime = new Date().toLocaleTimeString('id-ID');
        
        let csv = [];
        
        // Header
        csv.push(`LAPORAN HASIL E-VOTING HIMATRO ${AdminConfig.system.year}`);
        csv.push(`Dicetak pada: ${currentDate} ${currentTime}`);
        csv.push('');
        
        // Statistics
        csv.push('STATISTIK PEMILIHAN');
        csv.push('Keterangan,Jumlah');
        csv.push(`Total Pemilih Terdaftar,${DemoData.statistics.totalVoters}`);
        csv.push(`Jumlah yang Memilih,${DemoData.statistics.votedCount}`);
        csv.push(`Jumlah yang Belum Memilih,${DemoData.statistics.notVotedCount}`);
        csv.push(`Tingkat Partisipasi,${DemoData.statistics.participationRate}%`);
        csv.push(`Suara Tidak Sah,${DemoData.statistics.invalidVotes}`);
        csv.push('');
        
        // Candidates results
        csv.push('HASIL PEROLEHAN SUARA');
        csv.push('Peringkat,No. Urut,Nama Ketua,Nama Wakil,Visi,Jumlah Suara,Persentase');
        
        const sortedCandidates = [...DemoData.candidates].sort((a, b) => b.votes - a.votes);
        sortedCandidates.forEach((candidate, index) => {
            csv.push(`${index + 1},${candidate.number},"${candidate.chairman.name}","${candidate.viceChairman.name}","${candidate.vision}",${candidate.votes},${candidate.percentage}%`);
        });
        
        csv.push('');
        
        // Detailed user data
        csv.push('DATA PEMILIH DETAIL');
        csv.push('NIM,Nama,Email,Status Voting,Waktu Memilih,Pilihan');
        
        DemoData.users.forEach(user => {
            const votedFor = user.hasVoted ? `Kandidat ${user.votedFor}` : '-';
            const votedAt = user.hasVoted ? user.votedAt : '-';
            const status = user.hasVoted ? 'Sudah Memilih' : 'Belum Memilih';
            
            csv.push(`${user.nim},"${user.name}","${user.email}","${status}","${votedAt}","${votedFor}"`);
        });
        
        return csv.join('\n');
    },

    // Export data to JSON
    exportToJSON() {
        const exportData = {
            metadata: {
                title: `Hasil E-Voting Himatro ${AdminConfig.system.year}`,
                exportDate: new Date().toISOString(),
                version: AdminConfig.system.version
            },
            statistics: DemoData.statistics,
            candidates: DemoData.candidates.map(candidate => ({
                ...candidate,
                ranking: this.getCandidateRanking(candidate.id)
            })),
            users: DemoData.users,
            activities: DemoData.votingActivities,
            settings: DemoData.systemSettings
        };
        
        const jsonString = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const link = document.createElement('a');
        
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `evoting-data-${AdminConfig.system.year}.json`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    },

    // Get candidate ranking
    getCandidateRanking(candidateId) {
        const sortedCandidates = [...DemoData.candidates].sort((a, b) => b.votes - a.votes);
        return sortedCandidates.findIndex(c => c.id === candidateId) + 1;
    },

    // Export voting activities log
    exportVotingLog() {
        let logContent = [];
        
        logContent.push(`VOTING ACTIVITY LOG - HIMATRO ${AdminConfig.system.year}`);
        logContent.push(`Generated: ${new Date().toLocaleString('id-ID')}`);
        logContent.push('='.repeat(80));
        logContent.push('');
        
        DemoData.votingActivities.forEach(activity => {
            logContent.push(`[${activity.timestamp}] ${activity.nim} - ${activity.name}`);
            logContent.push(`  Voted for: ${activity.candidateName}`);
            logContent.push(`  Status: ${activity.status.toUpperCase()}`);
            logContent.push(`  IP: ${activity.ipAddress}`);
            logContent.push(`  User Agent: ${activity.userAgent}`);
            logContent.push('');
        });
        
        const blob = new Blob([logContent.join('\n')], { type: 'text/plain' });
        const link = document.createElement('a');
        
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `voting-log-${AdminConfig.system.year}.txt`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    },

    // Print current page
    printCurrentPage() {
        window.print();
    },

    // Generate summary report
    generateSummaryReport() {
        const winner = [...DemoData.candidates].sort((a, b) => b.votes - a.votes)[0];
        const totalVotes = DemoData.candidates.reduce((sum, candidate) => sum + candidate.votes, 0);
        
        return {
            title: `Hasil E-Voting Himatro ${AdminConfig.system.year}`,
            winner: {
                name: `${winner.chairman.name} & ${winner.viceChairman.name}`,
                votes: winner.votes,
                percentage: winner.percentage
            },
            statistics: {
                totalRegistered: DemoData.statistics.totalVoters,
                totalVoted: DemoData.statistics.votedCount,
                participationRate: DemoData.statistics.participationRate,
                totalValidVotes: totalVotes,
                invalidVotes: DemoData.statistics.invalidVotes
            },
            candidates: DemoData.candidates.map((candidate, index) => ({
                ranking: this.getCandidateRanking(candidate.id),
                number: candidate.number,
                name: `${candidate.chairman.name} & ${candidate.viceChairman.name}`,
                votes: candidate.votes,
                percentage: candidate.percentage
            })).sort((a, b) => a.ranking - b.ranking),
            timestamp: new Date().toISOString()
        };
    }
};

// Attach export functions to global scope for button onclick handlers
window.exportPDF = () => {
    showNotification('Menggenerate laporan PDF...', 'info');
    setTimeout(() => {
        ExportUtils.exportToPDF();
        showNotification('Laporan PDF berhasil digenerate!', 'success');
    }, 1000);
};

window.exportExcel = () => {
    showNotification('Mengexport data ke Excel...', 'info');
    setTimeout(() => {
        ExportUtils.exportToExcel();
        showNotification('Data berhasil diexport ke Excel!', 'success');
    }, 1000);
};

window.exportCSV = () => {
    showNotification('Mengexport data ke CSV...', 'info');
    setTimeout(() => {
        ExportUtils.exportToExcel(); // Same as Excel for now
        showNotification('Data berhasil diexport ke CSV!', 'success');
    }, 1000);
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExportUtils;
} else {
    window.ExportUtils = ExportUtils;
}