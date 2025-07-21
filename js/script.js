// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//Mengklik humburger menu
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//click diluar side bar agar nav hilang
const hamburger = document.querySelector("#humburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Tombol Next
const nextButtons = document.querySelectorAll(".next-btn");
nextButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const slides = document.querySelectorAll(".sejarah-slide");
    if (index < slides.length - 1) {
      slides[index + 1].scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Tombol Back di tiap slide
const backButtons = document.querySelectorAll(".back-btn");
backButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentSlide = btn.closest(".sejarah-slide");
    const slides = Array.from(document.querySelectorAll(".sejarah-slide"));
    const currentIndex = slides.indexOf(currentSlide);
    if (currentIndex > 0) {
      slides[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Tombol Back permanen di kiri atas
const globalBackBtn = document.getElementById("prevSlideBtn");

if (globalBackBtn) {
  globalBackBtn.addEventListener("click", () => {
    const slides = Array.from(document.querySelectorAll(".sejarah-slide"));

    // Cari slide yang sedang muncul
    let currentIndex = slides.findIndex((slide) => {
      const rect = slide.getBoundingClientRect();
      return rect.top >= 0 && rect.top < window.innerHeight;
    });

    // Scroll ke sebelumnya
    if (currentIndex > 0) {
      slides[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
    }
  });

  // Tampilkan/sembunyikan tombol berdasarkan posisi scroll
  window.addEventListener("scroll", () => {
    const slides = document.querySelectorAll(".sejarah-slide");
    const firstSlide = slides[0];
    const rect = firstSlide.getBoundingClientRect();

    // Jika masih di slide pertama, sembunyikan
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      globalBackBtn.style.display = "none";
    } else {
      globalBackBtn.style.display = "block";
    }
  });
}
