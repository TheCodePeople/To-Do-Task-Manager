const theMainUl = document.getElementsByClassName("theMainUl");
const theSubmitButton = document.getElementById("submit");
const mainInput = document.getElementById("mainInput");
const userName = document.getElementById("userName");
const imagePlace = document.getElementById("imagePlace");
const deadline = document.getElementById("deadline");
const low = document.getElementById("low");
const medium = document.getElementById("medium");
const high = document.getElementById("high");
const additionalNotes = document.getElementById("additionalNotes");
const container2 = document.getElementsByClassName("container2");
const continuer = document.getElementsByClassName("continuer");
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

theSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  ////create button
  const newDivForAdd = document.createElement("div");
  const divUserNameAndImage = document.createElement("div");
  const divTaskAndButtons = document.createElement("div");
  const divTaskAndButtons2 = document.createElement("div");
  const divExtraNotesAndDate = document.createElement("div");
  const userNameInput = document.createElement("H3");
  const dateUser = document.createElement("H3");
  const toDo = document.createElement("H3");
  const userNameImg = document.createElement("img");
  const newListItem = document.createElement("input");
  const noteUser = document.createElement("input");
  const removeButton = document.createElement("button");
  const editButton = document.createElement("button");
  ////////

  editButton.title = "EDIT";
  removeButton.title = "REMOVE";
  //////////////
  newDivForAdd.classList.add("newDivForAdd");
  divUserNameAndImage.classList.add("divUserNameAndImage");
  divTaskAndButtons.classList.add("divTaskAndButtons");
  divExtraNotesAndDate.classList.add("divExtraNotesAndDate");
  newListItem.classList.add("newListItem");
  newListItem.setAttribute("readonly", "readonly");
  removeButton.classList.add("doneButtonAndRemoveButton");
  editButton.classList.add("doneButtonAndRemoveButton");
  ///////////
  if (
    !mainInput.value.trim() ||
    !userName.value.trim() ||
    !deadline.value.trim()
  ) {
    alert("Please fill out all fields!");
    return;
  } else {
    newListItem.value = mainInput.value.toUpperCase().trim();
    userNameInput.textContent = "NAME : " + userName.value.toUpperCase().trim();
    userNameImg.src = imagePlace.value;
    noteUser.value = "NOTES : " + additionalNotes.value;
    dateUser.textContent = deadline.value;
    toDo.textContent = "To Do :";
    mainInput.value = "";
    userName.value = "";
    imagePlace.value = "";
    additionalNotes.value = "";
    deadline.value = "";
    removeButton.innerHTML = "&#10060;";
    editButton.innerHTML = "&#9997;";
    editButton.style.fontSize = "20px";
    removeButton.style.fontSize = "20px";
    ///////////////////

    if (low.checked) {
      console.log("values");
      newDivForAdd.classList.add("lowPrioritie");
    }
    if (medium.checked) {
      console.log("inputsPriorities.id");
      newDivForAdd.classList.add("mediumPrioritie");
    }
    if (high.checked) {
      console.log("ss");
      newDivForAdd.classList.add("highPrioritie");
    }

    //////////////////
    container2[0].appendChild(newDivForAdd);
    divUserNameAndImage.appendChild(userNameInput);
    divUserNameAndImage.appendChild(userNameImg);
    newDivForAdd.appendChild(divUserNameAndImage);
    divTaskAndButtons.appendChild(toDo);
    divTaskAndButtons.appendChild(newListItem);
    divTaskAndButtons.appendChild(divTaskAndButtons2);
    divTaskAndButtons2.appendChild(editButton);
    divTaskAndButtons2.appendChild(removeButton);
    newDivForAdd.appendChild(divTaskAndButtons);
    divExtraNotesAndDate.appendChild(dateUser);
    divExtraNotesAndDate.appendChild(noteUser);
    newDivForAdd.appendChild(divExtraNotesAndDate);
  }
  removeButton.addEventListener("click", () => {
    newDivForAdd.remove();
  });
  editButton.addEventListener("click", () => {
    if (editButton.innerHTML === "✍") {
      editButton.innerHTML = "&#9989;";
      editButton.title = "SAVE";
      editButton.style.fontSize = "20px";
      newListItem.removeAttribute("readonly");
      newListItem.focus();
    } else {
      editButton.innerHTML = "&#9997;";
      editButton.style.fontSize = "20px";
      newListItem.setAttribute("readonly", "readonly");
    }
  });
  newListItem.addEventListener("click", (e) => {
    // const unCheck = document.createElement("button");
    theTask = e.target;
    theTask.classList.toggle("cheackTask");
    if (theTask.classList.contains("cheackTask")) {
      editButton.remove();
      removeButton.remove();
    } else {
      divTaskAndButtons2.appendChild(editButton);
      divTaskAndButtons2.appendChild(removeButton);
    }
  });
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup", (e) => {
    const searchValue = e.target.value.toLowerCase();

    if (newListItem.value.toLowerCase().includes(searchValue.toLowerCase())) {
      newDivForAdd.style.display = "flex";
      foundItems = true;
    } else {
      newDivForAdd.style.display = "none";
    }
  });
});
/////////

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.style.transition = "2s";
});
/////////
