// mouse over remove white bio

// mouseover shows > border style white

// mouse out shows no style show && style bio white

const styleBiography = document.querySelector(".box-pageLinks__bio");
const showsStyle = document.querySelector(".box-pageLinks__shows");

// styleBiography.addEventListener("mouseover", () => {
//   styleBiography.style.border = " solid white";
// });

showsStyle.addEventListener("mouseover", () => {
  showsStyle.style.border = "solid white";
  styleBiography.style.border = "none";
});
showsStyle.addEventListener("mouseout", () => {
  showsStyle.style.border = "none";
  styleBiography.style.border = "solid white";
});

// FORM RENDERING

// prendo il form object
const form = document.querySelector(".form");
// prendo sezione lista ul
const commentsList = document.querySelector(".commentsListForm");

// creo un array dove andro a inserire i dati digitali

const commentBox = [];
// 1 funzione submit bottone

form.addEventListener("submit", function (e) {
  // prevent defaul to submitt normally
  e.preventDefault();

  const name = e.target.nameTitle.value;
  const comment = e.target.textarea.value;

  // validazione form input

  if (name !== "" && comment !== "") {
    commentBox.push({
      name: name,
      comment: comment,
      timestamp: new Date().toLocaleString("en-GB", {
        dateStyle: "short",
        timeStyle: "short",
      }),
    });

    // call the function to render the comments
    renderComments();

    // reset the form fields
    e.target.reset();
  } else {
    alert("Please fill in all fields");
  }
});

// 2 funzione di rendering dei dati creando html da javascript

function renderComments() {
  commentsList.innerHTML = ""; // Clear the existing comments list

  commentBox.forEach(function (e) {
    // 1 creo list a ne aggiungo la classe
    const li = document.createElement("li");
    li.classList.add("comment-box");

    // 2. avatar box left creation and add a class
    const boxAvatar = document.createElement("div");
    boxAvatar.classList.add("comment-box__left");

    // 3. creo div dentro div con colore
    const blurCircle = document.createElement("div");
    blurCircle.classList.add("comment-box__avatar");

    // voglio che box appenda blur
    boxAvatar.appendChild(blurCircle);

    // 4. real commentn DESTRA  e dagli una classe esterno
    const realComment = document.createElement("div");
    realComment.classList.add("realComment");

    // dentor real comment creaa un div TITLE AND TIMESTAMP BOX

    const upBox = document.createElement("div");
    upBox.classList.add("realComment__up-box");

    // dentro upBox creo 2 div id
    const nameTitle = document.createElement("div");
    nameTitle.id = "nametitle";
    nameTitle.textContent = e.name; // Set the name text

    const timestamp = document.createElement("div");
    timestamp.id = "timestamp";
    timestamp.textContent = e.timestamp; // Set the timestamp text

    // append child questi due su up-box

    upBox.appendChild(nameTitle);
    upBox.appendChild(timestamp);

    // creazione e classe su real comment down
    const down = document.createElement("div");
    down.classList.add("realComment__down");

    // crea para
    const para = document.createElement("p");
    para.classList.add("realComment__para");
    para.textContent = e.comment; // Set the comment text

    // appendi para a down
    down.appendChild(para);

    // Append upBox and down to realComment
    realComment.appendChild(upBox);
    realComment.appendChild(down);

    // left(comment-box__left) and right(realComment) appesi su box (comment-box)
    li.appendChild(boxAvatar);
    li.appendChild(realComment);

    // alla fine append comment box to the comments list
    commentsList.appendChild(li);
  });
}

renderComments();
