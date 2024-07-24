// mouse over remove white bio

// mouseover shows > border style white

// mouse out shows no style show && style bio white

const styleBiography = document.querySelector(".box-pageLinks__bio");
const showsStyle = document.querySelector(".box-pageLinks__shows");

styleBiography.addEventListener("mouseover", () => {
  styleBiography.style.border = " solid white";
});

showsStyle.addEventListener("mouseover", () => {
  showsStyle.style.border = "solid white";
  styleBiography.style.border = "none";
});
showsStyle.addEventListener("mouseout", () => {
  showsStyle.style.border = "none";
  styleBiography.style.border = "solid white";
});
