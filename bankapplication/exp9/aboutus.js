document.addEventListener("DOMContentLoaded", function () {
    var teamSection = document.getElementById("team");
    var introSection = document.getElementById("introduction");
    if (teamSection) {
        // Event listener for team section, showing more details when clicking on a team member.
        teamSection.addEventListener("click", function (event) {
            var target = event.target;
            if (target.tagName === "LI") {
                alert("Learn more about ".concat(target.innerText, ". Please visit our website or contact our HR department for additional information."));
            }
        });
    }
    if (introSection) {
        // Interaction example: Change text when clicking on the introduction section.
        introSection.addEventListener("click", function () {
            introSection.innerHTML = "\n          <p>\n            Thank you for visiting YourBank. We aim to deliver exceptional banking services with a personal touch. Visit other sections to learn more about our mission, vision, history, and team.\n          </p>\n        ";
        });
    }
});
