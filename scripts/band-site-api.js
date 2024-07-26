// Api che mi permette di al click del bottone recuperare dati dalla APi
//              x PRENDERE BOTTONE COMMENT
//             x  PRENDERE SEZIONE UL > creo elementi che utilizzero
//          x FUNZIONE AXIOS API FETING DATA
// FUNZIONE AL CLICK BOTTON FETCHING

// >> fetching datas to the section ul

// funzione axios fetching datas

const url = "https://project-1-api.herokuapp.com/comments";
const api = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

const commentBtn = document.querySelector(".form__buttonSubmit");
const ulSection = document.querySelector(".commentsList");

const fetchingData = async () => {
  try {
    const response = await axios.get(`${url}/?api_key=${api}`);
    console.log(response.data);
    renderCommentsFromHeroku(response.data);
  } catch (error) {
    console.error("error fetching comments", errror);
  }
};

function renderCommentsFromHeroku(comments) {
  ulSection.innerHTML = ""; // Clear the existing comments list

  comments.forEach(function (e) {
    // 1. Create list item and add class
    const li = document.createElement("li");
    li.classList.add("comment-box");

    // 2. Avatar box left creation and add class
    const boxAvatar = document.createElement("div");
    boxAvatar.classList.add("comment-box__left");

    // 3. Create div inside div with color
    const blurCircle = document.createElement("div");
    blurCircle.classList.add("comment-box__avatar");

    // Append blurCircle to boxAvatar
    boxAvatar.appendChild(blurCircle);

    // 4. Real comment right and add external class
    const realComment = document.createElement("div");
    realComment.classList.add("realComment");

    // Inside realComment create a div for title and timestamp box
    const upBox = document.createElement("div");
    upBox.classList.add("realComment__up-box");

    // Inside upBox create 2 divs for name and timestamp
    const nameTitle = document.createElement("div");
    nameTitle.id = "nametitle";
    nameTitle.textContent = e.name; // Set the name text

    const timestamp = document.createElement("div");
    timestamp.id = "timestamp";
    timestamp.textContent = new Date(e.timestamp).toLocaleString(); // Set the timestamp text

    // Append nameTitle and timestamp to upBox
    upBox.appendChild(nameTitle);
    upBox.appendChild(timestamp);

    // Create and add class to realComment down
    const down = document.createElement("div");
    down.classList.add("realComment__down");

    // Create paragraph
    const para = document.createElement("p");
    para.classList.add("realComment__para");
    para.textContent = e.comment; // Set the comment text

    // Append para to down
    down.appendChild(para);

    // Append upBox and down to realComment
    realComment.appendChild(upBox);
    realComment.appendChild(down);

    // Append left (comment-box__left) and right (realComment) to box (comment-box)
    li.appendChild(boxAvatar);
    li.appendChild(realComment);

    // Finally, append comment box to the comments list
    ulSection.appendChild(li);
  });
}

// Fetch data initially

fetchingData();

// Add event listener to button to fetch and render comments on click
commentBtn.addEventListener("click", fetchingData);
