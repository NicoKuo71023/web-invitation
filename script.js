document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
});
// window.addEventListener('scroll', function() {
//   let scrollY = window.scrollY;
//   document.getElementById('our_story').style.backgroundPosition = `center ${scrollY * 0.5}px`;
// });