document.addEventListener("DOMContentLoaded", () => {
  const styleBiography = document.querySelector(".box-pageLinks__bio");
  const showsStyle = document.querySelector(".box-pageLinks__shows");

  if (styleBiography && showsStyle) {
    // Mouseover for biography
    styleBiography.addEventListener("mouseover", () => {
      styleBiography.style.border = "solid white";
      showsStyle.style.border = "none";
    });

    // Mouseout for biography
    styleBiography.addEventListener("mouseout", () => {
      styleBiography.style.border = "none";
      showsStyle.style.border = "solid white";
    });

    // Mouseover for shows
    showsStyle.addEventListener("mouseover", () => {
      showsStyle.style.border = "solid white";
      styleBiography.style.border = "none";
    });

    // // Mouseout for shows
    // showsStyle.addEventListener("mouseout", () => {
    //   //   showsStyle.style.border = "none";
    //   //   styleBiography.style.border = "solid white";
    // });
  } else {
    if (!styleBiography) {
      console.error("Element with class 'box-pageLinks__bio' not found.");
    }
    if (!showsStyle) {
      console.error("Element with class 'box-pageLinks__shows' not found.");
    }
  }
});
