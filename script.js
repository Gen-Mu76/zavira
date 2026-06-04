// ==================== HAMBURGER MENU (BERANDA) ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if(hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ==================== SMOOTH SCROLL (BERANDA) ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Hanya jalankan fungsi ini jika berada di halaman utama (index.html)
        if(document.querySelector('.hero-section')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ==================== ANIMASI SCROLL (BERANDA) ====================
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// ==================== LOGIKA HALAMAN LMS (belajar.html) ====================
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const lmsLinks = document.querySelectorAll('.sidebar .bab-link');
const babSections = document.querySelectorAll('.bab-section');
const welcomeScreen = document.getElementById('welcome-lms');

// Toggle Sidebar Mobile
if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// Logika Navigasi Level 1 (BAB dari Sidebar)
if (lmsLinks.length > 0) {
    lmsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetBabId = this.getAttribute('href'); // cth: #bab1
            
            if (targetBabId.startsWith('#bab')) {
                e.preventDefault();
                
                // Hilangkan layar selamat datang
                if(welcomeScreen) welcomeScreen.style.display = 'none';

                // Sembunyikan semua Bab
                babSections.forEach(sec => sec.classList.remove('active'));

                // Tampilkan Bab yang dituju
                const activeBab = document.querySelector(targetBabId);
                if (activeBab) {
                    activeBab.classList.add('active');

                    // OTOMATIS AKTIFKAN TAB PERTAMA DI BAB INI
                    const firstTab = activeBab.querySelector('.tab-btn');
                    if (firstTab) {
                        firstTab.click(); 
                    }
                }

                // Styling active link sidebar
                lmsLinks.forEach(l => l.classList.remove('active-link'));
                this.classList.add('active-link');

                // Tutup sidebar di tampilan mobile
                if(window.innerWidth <= 768 && sidebar) {
                    sidebar.classList.remove('active');
                }
                
                // Scroll halus ke atas bagian konten
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

// Logika Navigasi Level 2 (SUBBAB dari Tab Navigasi Horizontal)
const tabButtons = document.querySelectorAll('.tab-btn');
if (tabButtons.length > 0) {
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target'); // cth: #sub1-1
            const parentSection = this.closest('.bab-section'); // Ambil bab tempat tab ini berada

            // 1. Reset state semua tab di dalam bab ini
            parentSection.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active-tab'));
            
            // 2. Tambahkan class active ke tab yang diklik
            this.classList.add('active-tab');

            // 3. Sembunyikan semua konten subbab di dalam bab ini
            parentSection.querySelectorAll('.subbab-content').forEach(content => {
                content.classList.remove('active');
            });

            // 4. Tampilkan konten subbab yang dituju
            const targetContent = document.querySelector(targetId);
            if(targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}
