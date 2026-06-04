/* ==================== VARIABEL WARNA (TEMA BARU) ==================== */
:root {
    --warna-utama: #10B981;         /* Hijau Zamrud Cerah */
    --warna-sekunder: #FEF3C7;      /* Cream Lembut */
    --warna-aksen: #059669;         /* Hijau Gelap untuk Tombol/Hover */
    --warna-bg-utama: #FFFFFF;      /* Putih */
    --warna-bg-section: #F9FAFB;    /* Putih Tulang / Abu sangat muda */
    --warna-bg-card: #FFFFFF;       /* Putih */
    --warna-teks-utama: #1F2937;    /* Abu-abu Gelap */
    --warna-teks-sekunder: #FFFFFF; /* Putih */
    
    /* Variabel Ukuran & Efek */
    --radius: 16px;                 /* Lebih melengkung & modern */
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --transisi: all 0.3s ease;
}

/* ==================== RESET DASAR ==================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: var(--warna-bg-utama);
    color: var(--warna-teks-utama);
    line-height: 1.7;
}

/* ==================== LAYOUT UMUM ==================== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section { padding: 100px 0; }
.section-alt { background-color: var(--warna-bg-section); }

.section-title {
    text-align: center;
    font-size: 2.2rem;
    color: var(--warna-utama);
    margin-bottom: 10px;
    font-weight: 700;
}

.section-subtitle {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 50px;
    color: #6B7280;
}

.text-center { text-align: center; }

/* ==================== NAVBAR ==================== */
.navbar {
    background-color: var(--warna-utama);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: var(--shadow);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo {
    color: var(--warna-teks-sekunder);
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1px;
}

.nav-menu { display: flex; list-style: none; gap: 20px; }

.nav-link {
    color: var(--warna-teks-sekunder);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transisi);
    padding: 8px 16px;
    border-radius: 50px;
}

.nav-link:hover {
    background-color: var(--warna-sekunder);
    color: var(--warna-aksen);
}

.hamburger { display: none; cursor: pointer; background: transparent; border: none; }
.bar { display: block; width: 25px; height: 3px; margin: 5px auto; background-color: var(--warna-teks-sekunder); transition: var(--transisi); }

/* ==================== HERO SECTION ==================== */
.hero-section {
    padding-top: 140px;
    padding-bottom: 100px;
    background: linear-gradient(135deg, var(--warna-bg-utama) 0%, var(--warna-sekunder) 100%);
}

.hero-container { display: flex; align-items: center; gap: 50px; }
.hero-text { flex: 1; }
.hero-text h1 { font-size: 3rem; color: var(--warna-utama); margin-bottom: 15px; line-height: 1.2; }
.hero-text .tagline { font-size: 1.3rem; color: var(--warna-aksen); font-weight: bold; margin-bottom: 25px; }
.hero-text .deskripsi { margin-bottom: 35px; font-size: 1.1rem; color: #4B5563; }
.hero-image { flex: 1; display: flex; justify-content: center; }
.hero-image img { max-width: 100%; height: auto; border-radius: var(--radius); box-shadow: var(--shadow-hover); }

/* ==================== CARD GRID ==================== */
.card-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.card-grid-4 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; }
.card-grid-5 { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; }

.card {
    background-color: var(--warna-bg-card);
    padding: 30px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: var(--transisi);
    border: 1px solid #E5E7EB;
}

.card:hover { transform: translateY(-8px); box-shadow: var(--shadow-hover); border-color: var(--warna-utama); }
.card h3 { color: var(--warna-utama); margin-bottom: 15px; font-size: 1.3rem; }

/* ==================== SOLUSI SECTION ==================== */
.solusi-container { display: flex; gap: 50px; align-items: center; }
.solusi-image { flex: 1; }
.solusi-image img { width: 100%; border-radius: var(--radius); box-shadow: var(--shadow); }
.solusi-text { flex: 1.2; }
.solusi-text h2 { color: var(--warna-utama); margin-bottom: 20px; font-size: 2rem; }
.solusi-text h3 { color: var(--warna-aksen); margin-top: 25px; margin-bottom: 15px; }
.manfaat-item { background-color: var(--warna-bg-utama); padding: 20px; border-radius: var(--radius); margin-bottom: 15px; border-left: 5px solid var(--warna-utama); box-shadow: 0 2px 4px rgba(0,0,0,0.05); }

/* ==================== TOMBOL ==================== */
.btn {
    display: inline-block;
    padding: 14px 30px;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 50px;
    transition: var(--transisi);
    cursor: pointer;
    text-align: center;
}

.btn-primary { background-color: var(--warna-utama); color: var(--warna-teks-sekunder); }
.btn-primary:hover { background-color: var(--warna-aksen); transform: scale(1.05); color: white;}
.btn-secondary { background-color: var(--warna-sekunder); color: var(--warna-aksen); border: none; }
.btn-secondary:hover { background-color: #FDE68A; transform: scale(1.05); }

/* ==================== TIM SECTION ==================== */
.tim-card { text-align: center; padding: 30px 15px; }
.tim-card img { width: 120px; height: 120px; object-fit: cover; border-radius: 50%; margin-bottom: 15px; border: 4px solid var(--warna-sekunder); }
.tim-card h3 { font-size: 1.1rem; margin-bottom: 5px; color: var(--warna-utama); }
.tim-card p { font-size: 0.9rem; color: #6B7280; }
.img-fallback { width: 120px; height: 120px; border-radius: 50%; background-color: #eee; margin: 0 auto 15px auto; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; color: #999; text-align: center; padding: 10px; border: 4px solid var(--warna-sekunder);}

/* ==================== FOOTER ==================== */
.footer { background-color: var(--warna-utama); color: var(--warna-teks-sekunder); text-align: center; padding: 50px 0; }
.footer h3 { color: var(--warna-sekunder); margin-bottom: 15px; font-size: 1.5rem; }
.footer p { color: rgba(255,255,255,0.8); }

/* ==================== ANIMASI SCROLL ==================== */
.animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
.animate-on-scroll.visible { opacity: 1; transform: translateY(0); }

/* ==================== LAYOUT LMS (belajar.html) ==================== */
.lms-container { display: flex; margin-top: 70px; min-height: calc(100vh - 70px); }
.sidebar { width: 300px; background-color: var(--warna-bg-section); color: var(--warna-teks-utama); padding: 30px 20px; border-right: 1px solid #E5E7EB; overflow-y: auto; }
.sidebar h2 { font-size: 1.3rem; margin-bottom: 20px; color: var(--warna-utama); border-bottom: 2px solid var(--warna-sekunder); padding-bottom: 10px; }
.sidebar ul { list-style: none; }
.sidebar li { margin-bottom: 8px; }
.sidebar a { color: var(--warna-teks-utama); text-decoration: none; display: block; padding: 12px 15px; border-radius: 8px; transition: var(--transisi); font-size: 1rem; font-weight: bold;}
.sidebar a:hover, .sidebar a.active-link { background-color: var(--warna-utama); color: var(--warna-teks-sekunder); }

.lms-content { flex: 1; padding: 40px; background-color: var(--warna-bg-utama); overflow-x: hidden; }
.lms-header { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 2px solid var(--warna-sekunder); text-align: center;}
.lms-header h1 { color: var(--warna-utama); font-size: 2.5rem; margin-bottom: 10px;}

.bab-section { display: none; animation: fadeIn 0.5s; }
.bab-section.active { display: block; }
.welcome-lms { display: block; text-align: center; padding: 50px 0; animation: fadeIn 0.5s; }

/* Level 1: Chapter Header */
.bab-header h2 { color: var(--warna-utama); font-size: 2rem; margin-bottom: 20px; }

/* Level 2: Subbab Top Navigation Tabs (Sticky & Scrollable) */
.subbab-nav {
    display: flex;
    gap: 5px;
    overflow-x: auto;
    white-space: nowrap;
    position: sticky;
    top: 70px; /* Di bawah navbar utama */
    z-index: 90;
    background: var(--warna-bg-utama);
    padding: 15px 0 0 0;
    margin-bottom: 30px;
    border-bottom: 2px solid #E5E7EB;
    scrollbar-width: none; /* Hide scrollbar Firefox */
}
.subbab-nav::-webkit-scrollbar { display: none; } /* Hide scrollbar Chrome/Safari */

.tab-btn {
    background: none;
    border: none;
    padding: 12px 20px;
    font-size: 0.95rem;
    font-weight: bold;
    color: #6B7280;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: var(--transisi);
    outline: none;
}
.tab-btn:hover {
    color: var(--warna-aksen);
    background: var(--warna-bg-section);
    border-radius: 8px 8px 0 0;
}
.tab-btn.active-tab {
    color: var(--warna-utama);
    border-bottom-color: var(--warna-utama);
}

/* Level 3: Materi Content */
.materi-content {
    background: var(--warna-bg-card);
    padding: 30px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    border: 1px solid #E5E7EB;
    min-height: 400px;
}
.subbab-content { display: none; animation: slideUp 0.4s ease-out forwards; opacity: 0; transform: translateY(10px); }
.subbab-content.active { display: block; }

.subbab-content h3 { color: var(--warna-aksen); margin-bottom: 20px; font-size: 1.5rem; }
.subbab-content p { margin-bottom: 15px; text-align: justify; line-height: 1.8; }
.subbab-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 20px 0; box-shadow: var(--shadow); display: block; }

.sidebar-toggle { display: none; position: fixed; bottom: 20px; right: 20px; background-color: var(--warna-utama); color: white; border: none; padding: 15px 20px; border-radius: 50px; font-size: 1.2rem; cursor: pointer; z-index: 999; box-shadow: var(--shadow-hover); }

/* Animasi Khusus Tab */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }

/* ==================== RESPONSIVE MOBILE ==================== */
@media (max-width: 768px) {
    .nav-menu { position: fixed; left: -100%; top: 70px; flex-direction: column; background-color: var(--warna-utama); width: 100%; text-align: center; transition: 0.3s; padding: 20px 0; box-shadow: 0 10px 10px rgba(0,0,0,0.1); }
    .nav-menu.active { left: 0; }
    .hamburger { display: block; }
    .hero-container { flex-direction: column-reverse; text-align: center; }
    .card-grid-3, .card-grid-4, .card-grid-5 { grid-template-columns: 1fr; }
    .solusi-container { flex-direction: column; }
    
    .lms-container { flex-direction: column; margin-top: 70px; }
    .sidebar { width: 100%; position: fixed; top: 70px; left: -100%; height: calc(100vh - 70px); z-index: 900; transition: 0.3s; background-color: white;}
    .sidebar.active { left: 0; }
    .sidebar-toggle { display: block; }
    .lms-content { padding: 20px; overflow-x: hidden;}
    .subbab-nav { padding-bottom: 5px; } /* Memberi ruang sentuhan di mobile */
    .materi-content { padding: 20px 15px; }
}
