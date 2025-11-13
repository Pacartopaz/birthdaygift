document.getElementById('giftBox').addEventListener('click', function () {
    const giftBox = document.getElementById('giftBox');
    const message = document.getElementById('message');
    const video = document.getElementById('videoMemory');
    const giftImage = document.getElementById('giftImage');
    const giftTitle = document.getElementById('giftTitle'); // 🔹 tambahkan ini

    // Ganti gambar jadi kotak terbuka (kalau ada)
    giftImage.src = "assets/images/giftbox-open.png";

    // Animasi rotasi kotak
    giftBox.classList.add('open');

    // Tampilkan pesan setelah sedikit delay
    setTimeout(() => {
        message.classList.remove('hidden');
        message.classList.add('show');
        giftTitle.classList.remove('hidden'); // 🔹 tampilkan tulisan + gambar
    }, 800);

    // Tampilkan & mainkan video otomatis setelah pesan muncul
    setTimeout(() => {
        video.classList.remove('hidden');
        video.play().catch(err => {
            console.log("Autoplay diblokir browser:", err);
        });
    }, 1200);

    // Efek konfeti 🎉
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
});
