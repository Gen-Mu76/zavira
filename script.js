// 1. HAMBURGER MENU TOGGLE
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
}

// Tutup menu saat link diklik (di versi Mobile)
document.querySelectorAll(".nav-links li a").forEach(n => 
    n.addEventListener("click", () => {
        if(hamburger) hamburger.classList.remove("active");
        if(navLinks) navLinks.classList.remove("active");
    })
);

// 2. SMOOTH SCROLL UNTUK LINK ANCHOR (#)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 3. ANIMASI SCROLL MUNCUL (FADE IN)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// 4. FALLBACK GAMBAR ERROR
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('error', function() {
        // Jika gambar gagal dimuat, ganti dengan gambar dummy
        this.src = 'https://via.placeholder.com/400x300?text=Gambar+Belum+Tersedia';
        this.alt = 'Gambar tidak dapat dimuat';
        this.classList.add('error-fallback');
    });
});

// 5. TOGGLE SIDEBAR DI HALAMAN LMS (UNTUK MOBILE)
const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
const lmsSidebar = document.getElementById('lmsSidebar');

if (toggleSidebarBtn && lmsSidebar) {
    toggleSidebarBtn.addEventListener('click', () => {
        lmsSidebar.classList.toggle('show');
        if (lmsSidebar.classList.contains('show')) {
            toggleSidebarBtn.textContent = '✖ Tutup Daftar Materi';
        } else {
            toggleSidebarBtn.textContent = '☰ Daftar Materi';
        }
    });
}
