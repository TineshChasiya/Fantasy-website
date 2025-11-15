const playerInformation = document.querySelector(".player-information");
const info = document.querySelectorAll(".info");
const close = document.querySelector(".player-close");
const startingBtn = document.querySelector(".starting-btn");
const teamnav = document.querySelector(".team-nav");
const wrapper = document.querySelector(".wrapper-team");
const playerinformation = document.querySelector(".player-information");
const bottom = document.querySelector(".bottom");
const preview = document.querySelector(".preview");
const previewteam = document.querySelector(".preview-team");
const previewclose = document.querySelector(".preview-close");




info.forEach(info => {
    info.addEventListener('click', () => {
        playerInformation.style.display = "block";

    });
  });

 

close.addEventListener("click",() => {
    playerInformation.style.display = "none";
})

startingBtn.addEventListener("click",() => {
    teamnav.style.display = "block";
    wrapper.style.display = "block";
    playerinformation.style.display = "none";
    bottom.style.display = "block";
    previewteam.style.display = "none";
})

preview.addEventListener("click",() => {
    previewteam.style.display = "block";
    teamnav.style.display = "none";
    wrapper.style.display = "none";
    playerinformation.style.display = "none";
    bottom.style.display = "none";

});

previewclose.addEventListener("click", () => {
    previewteam.style.display = "none";
    teamnav.style.display = "block";
    wrapper.style.display = "block";
    playerinformation.style.display = "none";
    bottom.style.display = "block";
});


let sel_by = document.querySelector(".middle .sel-by");
let pts = document.querySelectorAll(".pts");

sel_by.addEventListener("click",() => {
    // pts.innerText = "%";
    alert("kfjkdf");
})
