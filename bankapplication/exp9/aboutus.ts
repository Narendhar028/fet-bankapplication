document.addEventListener("DOMContentLoaded", () => {
    const teamSection = document.getElementById("team");
    const introSection = document.getElementById("introduction");
  
    if (teamSection) {
      // Event listener for team section, showing more details when clicking on a team member.
      teamSection.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        
        if (target.tagName === "LI") {
          alert(`Learn more about ${target.innerText}. Please visit our website or contact our HR department for additional information.`);
        }
      });
    }
  
    if (introSection) {
      // Interaction example: Change text when clicking on the introduction section.
      introSection.addEventListener("click", () => {
        introSection.innerHTML = `
          <p>
            Thank you for visiting YourBank. We aim to deliver exceptional banking services with a personal touch. Visit other sections to learn more about our mission, vision, history, and team.
          </p>
        `;
      });
    }
  });
  