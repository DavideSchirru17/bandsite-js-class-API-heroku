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

    // Mouseout for shows (commented out as per original code)
    // showsStyle.addEventListener("mouseout", () => {
    //   showsStyle.style.border = "none";
    //   styleBiography.style.border = "solid white";
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

// FETCHING DATA FROM HEROKU
// USING DATA TO RENDER TO THE DOM ELEMENTS
const urlShowBaseShow = "https://project-1-api.herokuapp.com/showdates";
const apiKeyShow = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

const fetchShows = async () => {
  try {
    const response = await axios.get(
      `${urlShowBaseShow}/?api_key=${apiKeyShow}`
    );
    console.log("show page > SHOW FETCHING DATA", response.data);
    renderShows(response.data);
  } catch (error) {
    console.error("Error fetching Show data", error);
  }
};
fetchShows();

// Render shows creating DOM elements
function renderShows(showsData) {
  // Select DOM element ul
  const ulList = document.querySelector(".shows__list");

  showsData.forEach((show) => {
    let currentDate = new Date(show.date);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    // Create li element
    const list = document.createElement("li");
    // Add class to li element
    list.classList.add("shows__item");
    // Append li to ul
    ulList.appendChild(list);

    // Create second container with date title and literal
    const containerSecond = document.createElement("div");
    containerSecond.classList.add("shows__containerSecond");
    list.appendChild(containerSecond);

    const dateTitle = document.createElement("p");
    dateTitle.classList.add("shows__dateTitle");
    dateTitle.textContent = "DATE"; // Example text content
    dateTitle.style.color = "#E1E1E1";
    containerSecond.appendChild(dateTitle);

    const dateLiteral = document.createElement("p");
    dateLiteral.classList.add("shows__dateLiteral");
    dateLiteral.textContent = formattedDate;
    containerSecond.appendChild(dateLiteral);

    // Create third container with venue title and literal
    const containerThird = document.createElement("div");
    containerThird.classList.add("shows__containerThird");
    list.appendChild(containerThird);

    const venueTitle = document.createElement("p");
    venueTitle.classList.add("shows__venueTitle");
    venueTitle.textContent = "VENUE"; // Example text content
    venueTitle.style.color = "#E1E1E1";
    containerThird.appendChild(venueTitle);

    const venueLiteral = document.createElement("p");
    venueLiteral.classList.add("shows__venueLiteral");
    venueLiteral.textContent = show.place; // Example text content
    containerThird.appendChild(venueLiteral);

    // Create fourth container with location title and literal
    const containerForth = document.createElement("div");
    containerForth.classList.add("shows__containerForth");
    list.appendChild(containerForth);

    const locationTitle = document.createElement("p");
    locationTitle.classList.add("shows__locationTitle");
    locationTitle.textContent = "LOCATION"; // Example text content
    locationTitle.style.color = "#E1E1E1";
    containerForth.appendChild(locationTitle);

    const locationLiteral = document.createElement("p");
    locationLiteral.classList.add("shows__locationLiteral");
    locationLiteral.textContent = show.location; // Example text content
    containerForth.appendChild(locationLiteral);

    // Create button container with button text
    const buttonTickets = document.createElement("div");
    buttonTickets.classList.add("shows__buttonTickets");
    buttonTickets.style.backgroundColor = "black";
    buttonTickets.style.borderRadius = "5px";
    list.appendChild(buttonTickets);

    const buttonText = document.createElement("p");
    buttonText.classList.add("shows__buttonText");
    buttonText.textContent = "BUY TICKETS"; // Example text content
    buttonText.style.color = "white";
    buttonTickets.appendChild(buttonText);
  });
}
renderShows();
