 
    function hideLoader() {
      document.getElementById("loader").style.display = "none";
    }

    const reveals = document.querySelectorAll(".reveal");
    window.addEventListener("scroll", () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        }
      }
    });

    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
      const icon = document.getElementById("theme-icon");
      icon.classList.toggle("fa-sun");
      icon.classList.toggle("fa-moon");
    }
 