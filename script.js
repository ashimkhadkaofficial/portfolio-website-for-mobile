/* =========================================================
   SELECT ELEMENTS
========================================================= */

let nav = document.querySelector("nav");

let scrollBtn = document.querySelector(".scroll-button a");

let body = document.querySelector("body");

let navBar = document.querySelector(".navbar");

let menuBtn = document.querySelector(".menu-btn");

let cancelBtn = document.querySelector(".cancel-btn");

let navLinks = document.querySelectorAll(".menu li a");


/* =========================================================
   STICKY NAVIGATION + SCROLL BUTTON
========================================================= */

window.addEventListener("scroll", function () {

  if (document.documentElement.scrollTop > 20) {

    nav.classList.add("sticky");

    if (scrollBtn) {
      scrollBtn.style.display = "block";
    }

  } else {

    nav.classList.remove("sticky");

    if (scrollBtn) {
      scrollBtn.style.display = "none";
    }

  }

});


/* =========================================================
   OPEN MOBILE MENU
========================================================= */

if (menuBtn) {

  menuBtn.addEventListener("click", function () {

    navBar.classList.add("active");

    menuBtn.style.opacity = "0";

    menuBtn.style.pointerEvents = "none";

    body.style.overflow = "hidden";

    if (scrollBtn) {
      scrollBtn.style.pointerEvents = "none";
    }

  });

}


/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

function hideNavMenu() {

  navBar.classList.remove("active");

  if (menuBtn) {

    menuBtn.style.opacity = "1";

    menuBtn.style.pointerEvents = "auto";

  }

  body.style.overflow = "auto";

  if (scrollBtn) {

    scrollBtn.style.pointerEvents = "auto";

  }

}


/* =========================================================
   CLOSE USING X BUTTON
========================================================= */

if (cancelBtn) {

  cancelBtn.addEventListener("click", hideNavMenu);

}


/* =========================================================
   CLOSE WHEN MENU LINK IS CLICKED
========================================================= */

navLinks.forEach(function (link) {

  link.addEventListener("click", hideNavMenu);

});


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {

  if (!navBar.contains(event.target) && !menuBtn.contains(event.target)) {

    if (navBar.classList.contains("active")) {

      hideNavMenu();

    }

  }

});
