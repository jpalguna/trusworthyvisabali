const toggle = document.getElementById("open");
const toggleclose = document.getElementById("close");
const navlink = document.getElementById("menu");
const bg = document.getElementById("bg");

document.onclick = function (e) {
  if (e.target.id !== "menu" && e.target.id !== "open") {
    navlink.style.right = "-100%";
    bg.style.right = "-100%";
    document.body.classList.remove("lock-scroll");
  }
};

toggle.onclick = function () {
  navlink.style.right = "0";
  bg.style.right = "0";
  document.body.classList.toggle("lock-scroll");
};

toggleclose.onclick = function () {
  navlink.style.right = "-100%";
  bg.style.right = "-100%";
  document.body.classList.remove("lock-scroll");
};

// review
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
