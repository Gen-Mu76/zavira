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

// ==================== ANIMASI SCROLL ====================
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
const lmsLinks = document.querySelectorAll('.sidebar a');
const babSections = document.querySelectorAll('.bab-section');
const welcomeScreen = document.getElementById('welcome-lms');

// Toggle Sidebar Mobile
if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// Logika Navigasi Tab / Halaman Tunggal
if (lmsLinks.length > 0) {
    lmsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetHref = this.getAttribute('href');
            
            // Pastikan ini adalah link internal (dimulai dengan #)
            if (targetHref.startsWith('#')) {
                e.preventDefault();
                
                // Hapus tampilan welcome screen
                if(welcomeScreen) welcomeScreen.style.display = 'none';

                // Tentukan Bab Utama dari target (misal #sub1-2 berarti parent-nya #bab1)
                let targetBabId = targetHref;
                
                if (targetHref.startsWith('#sub')) {
                    const subElement = document.querySelector(targetHref);
                    if(subElement) {
                        // Cari elemen <section class="bab-section"> terdekat
                        targetBabId = '#' + subElement.closest('.bab-section').id;
                    }
                }

                // Sembunyikan semua Bab
                babSections.forEach(sec => sec.classList.remove('active'));

                // Tampilkan Bab yang dituju
                const activeBab = document.querySelector(targetBabId);
                if (activeBab) {
                    activeBab.classList.add('active');
                }

                // Scroll ke bagian yang dituju (Bab atau Sub-bab)
                setTimeout(() => {
                    const scrollTarget = document.querySelector(targetHref);
                    if (scrollTarget) {
                        // Mengurangi offset 80px agar konten tidak tertutup navbar atas
                        const elementPosition = scrollTarget.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - 80;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                }, 100);

                // Styling link yang aktif di sidebar
                lmsLinks.forEach(l => l.classList.remove('active-link'));
                this.classList.add('active-link');

                // Tutup sidebar jika sedang di tampilan mobile
                if(window.innerWidth <= 768 && sidebar) {
                    sidebar.classList.remove('active');
                }
            }
        });
    });
}
