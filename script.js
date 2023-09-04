// Ambil semua tautan dengan kelas "scroll-link"
const scrollLinks = document.querySelectorAll('.scroll-link');

// Tambahkan event listener untuk setiap tautan
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Hentikan perilaku tautan bawaan
        const targetId = link.getAttribute('href').substring(1); // Dapatkan ID target tanpa karakter '#' awal
        const targetElement = document.getElementById(targetId); // Dapatkan elemen target

        // Gulir halaman ke elemen target dengan efek smooth
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});