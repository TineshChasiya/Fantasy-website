const preview_team = document.querySelector(".preview-team");
const cm_teams_container = document.querySelectorAll(".cm-teams-container");
const wrapper = document.querySelector(".wrapper");
const contest_nav = document.querySelector(".contest-nav");
const preview_close = document.querySelector(".cr-close");



 

cm_teams_container.forEach(teams => {
    teams.addEventListener('click', () => {
        wrapper.style.display = "none";
        contest_nav.style.display = "none";
        preview_team.style.display = "block";
    });
  });

  preview_close.addEventListener('click', () => {
    wrapper.style.display = "block";
    contest_nav.style.display = "block";
    preview_team.style.display = "none";
    window.location.reload();
});



  