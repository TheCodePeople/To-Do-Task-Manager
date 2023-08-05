const theMainUl = document.getElementsByClassName("theMainUl");
const theSubmitButton = document.getElementById("submit");
const mainInput = document.getElementById("mainInput");
const userName = document.getElementById("userName");
const imagePlace = document.getElementById("imagePlace");
const deadline = document.getElementById("deadline");
const additionalNotes = document.getElementById("additionalNotes");
const container2 = document.getElementsByClassName("container2");
const continuer = document.getElementsByClassName("continuer");

theSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  ////create button
  const newDivForAdd = document.createElement("div");
  const divUserNameAndImage = document.createElement("div");
  const divTaskAndButtons = document.createElement("div");
  const divExtraNotesAndDate = document.createElement("div");
  const userNameInput = document.createElement("H3");
  const dateUser = document.createElement("H3");
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
  if (!mainInput.value.trim()) {
    alert("لازم  تخلي كلام");
  } else {
    newListItem.value = mainInput.value;
    userNameInput.textContent = userName.value;
    userNameImg.src = imagePlace.value;
    noteUser.value = additionalNotes.value;
    dateUser.textContent = deadline.value;
    mainInput.value = "";
    userName.value = "";
    imagePlace.value = "";
    additionalNotes.value = "";
    deadline.value = "";
    removeButton.innerHTML = "&#10060;";
    editButton.innerHTML = "&#9997;";
    editButton.style.fontSize = "20px";
    removeButton.style.fontSize = "20px";
    container2[0].appendChild(newDivForAdd);
    divUserNameAndImage.appendChild(userNameInput);
    divUserNameAndImage.appendChild(userNameImg);
    newDivForAdd.appendChild(divUserNameAndImage);
    divTaskAndButtons.appendChild(newListItem);
    divTaskAndButtons.appendChild(editButton);
    divTaskAndButtons.appendChild(removeButton);
    newDivForAdd.appendChild(divTaskAndButtons);
    divExtraNotesAndDate.appendChild(noteUser);
    divExtraNotesAndDate.appendChild(dateUser);
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
      newDivForAdd.appendChild(editButton);
      newDivForAdd.appendChild(removeButton);
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
const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeIcon = document.getElementById("darkModeIcon");
const body = document.body;
const h1 = document.getElementsByTagName("h1");

darkModeToggle.addEventListener("click", (e) => {
  body.classList.toggle("dark-mode");
  // if (body.classList.contains("darkmode")) {
  //   body.style.backgroundColor = "#333";
  // } else {
  //   body.style.backgroundColor = "#eee";
  // }
});
