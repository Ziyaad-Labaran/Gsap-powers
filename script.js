document.addEventListener("DOMContentLoaded", () => {
  const animatedBox = document.getElementById("animated-box");
  const easeButtons = document.querySelectorAll(".container-buttons button");

  function animateBoxWithEase(easeType) {
    if (animatedBox && typeof gsap !== "undefined") {
      gsap.to(animatedBox, {
        x: 0,
        duration: 0.1,
        overwrite: true,
        onComplete: () => {
          gsap.to(animatedBox, {
            x: 400,
            duration: 1.5,
            ease: easeType,
            overwrite: true,
            onComplete: () => {
              gsap.to(animatedBox, {
                x: 0,
                duration: 1.5,
                ease: easeType,
                delay: 0.5,
                overwrite: true,
              });
            },
          });
        },
      });
    } else if (typeof gsap === "undefined") {
      console.error(
        "GSAP library not found. Please ensure it's loaded via a CDN script tag in your HTML."
      );
    }
  }

  easeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const easeType = button.dataset.ease;
      animateBoxWithEase(easeType);
    });
  });

  animateBoxWithEase("power1.out");
});
