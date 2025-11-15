const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay2 = document.querySelector(".overlay2"),
       overlay = document.querySelector(".overlay");
     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });
     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");

      });
const right_arrow = document.querySelectorAll(".right_arrow");

  right_arrow.forEach((right) => {
    right.addEventListener("click", () => {
      navBar.classList.toggle("activation_open");
    });
  });
  overlay2.addEventListener("click", () => {
    navBar.classList.remove("activation_open");

   });
 let loginBtn = document.querySelector(".button");
 
 