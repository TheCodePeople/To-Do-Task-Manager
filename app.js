const theMainUl = document.getElementsByClassName("theMainUl");
const theSubmitButton = document.getElementById("submit");
const mainInput = document.getElementById("mainInput");
theSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newDivForUl = document.createElement("div");
  const newDivForLi = document.createElement("div");
  const newListItem = document.createElement("li");
  const doneButton = document.createElement("button");
  const removeButton = document.createElement("button");
  const editButton = document.createElement("button");
  newDivForUl.classList.add("newDivForUl");
  newDivForLi.classList.add("newDivForLi");
  doneButton.classList.add("doneButtonAndRemoveButton");
  removeButton.classList.add("doneButtonAndRemoveButton");
  editButton.classList.add("doneButtonAndRemoveButton");
  if (mainInput.value === "") {
    alert("لازم  تخلي كلام")
  }else {
    newListItem.textContent = mainInput.value;
    mainInput.value = "";
    removeButton.textContent = "REMOVE";
    doneButton.textContent = "DONE";
    editButton.textContent = "EDIT";
    theMainUl[0].appendChild(newDivForUl);
    newDivForUl.appendChild(newDivForLi);
    newDivForUl.appendChild(newListItem);
    newDivForLi.appendChild(doneButton);
    newDivForLi.appendChild(editButton);
    newDivForLi.appendChild(removeButton);
  }
 
  removeButton.addEventListener("click", () => {
    newDivForUl.remove();
  });
  editButton.addEventListener("click", () => {
    
  });
});
