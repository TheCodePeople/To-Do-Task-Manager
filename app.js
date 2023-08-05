const theMainUl = document.getElementsByClassName("theMainUl");
const theSubmitButton = document.getElementById("submit");
const mainInput = document.getElementById("mainInput");
const container2 = document.getElementsByClassName("container2");
const continuer = document.getElementsByClassName("continuer");

theSubmitButton.addEventListener("click", (event) => {
  
  event.preventDefault();
  const newDivForAdd = document.createElement("div");
  const newListItem = document.createElement("input");
  const removeButton = document.createElement("button");
  const editButton = document.createElement("button");
  editButton.title="EDIT" 
  removeButton.title="REMOVE" 


  newDivForAdd.classList.add("newDivForAdd");
  // newDivForLi.classList.add("newDivForLi");
  newListItem.classList.add("newListItem");
  newListItem.setAttribute("readonly", "readonly");
  removeButton.classList.add("doneButtonAndRemoveButton");
  editButton.classList.add("doneButtonAndRemoveButton");
  if (!mainInput.value.trim()) {
    alert("لازم  تخلي كلام");
  } else {
    newListItem.value = mainInput.value;
    mainInput.value = "";
    removeButton.innerHTML = "&#10060;";
    editButton.innerHTML = "&#9997;";
    editButton.style.fontSize = "20px";
    removeButton.style.fontSize = "20px";
    container2[0].appendChild(newDivForAdd);
    newDivForAdd.appendChild(newListItem);
    newDivForAdd.appendChild(editButton);
    newDivForAdd.appendChild(removeButton);
  }
  removeButton.addEventListener("click", () => {
    newDivForAdd.remove();
  });
  editButton.addEventListener("click", () => {
    if (editButton.innerHTML === "✍") {
      editButton.innerHTML = "&#9989;";
      editButton.title="SAVE" 
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
    e.target.style.background = "yellow";
    editButton.remove();
    removeButton.remove();
    const unCheck = document.createElement("button");
    unCheck.classList.add("doneButtonAndRemoveButton");
    unCheck.innerHTML = "&#10008;";
    unCheck.style.fontSize = "20px";
    unCheck.title="UNCHECK" 
    newDivForAdd.appendChild(unCheck);
    unCheck.addEventListener("click", () => {
      e.target.style.background = "white";
      editButton.style.fontSize = "20px";
      editButton.innerHTML = "&#9997;";
      newDivForAdd.appendChild(editButton);
      newDivForAdd.appendChild(removeButton);
      unCheck.remove();
    });
  });
});
