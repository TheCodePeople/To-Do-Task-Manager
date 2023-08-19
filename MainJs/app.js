// import firebase data from firebase.js
import { getFirebase } from "/firebase.js";
const db = getFirebase();
//getElements from HTML
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
const container2 = document.getElementById("container2");
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
//////////

//////////
let taskCount = 1;
// display firebase data to the page
const taskRef = db.collection("tasks");
taskRef.orderBy("TaskCount").onSnapshot((doc) => {
  let updatedTaskCount = 1;
  doc.forEach((element) => {
    const fireBaseData = element.data();
    const newDivForAdd = document.createElement("div");
    newDivForAdd.innerHTML = `
    <div class="divTaskAndButtons">
    <h3>Task ${taskCount}</h3>
            <input class="newListItem" readonly="readonly" value="${fireBaseData.task}" id="${fireBaseData.id}"> 
      <div>
        <button title="EDIT" class="doneButtonAndRemoveButton" style="font-size: 20px;" id="editButton_${fireBaseData.id}">✍</button>
        <button title="REMOVE" class="doneButtonAndRemoveButton" style="font-size: 20px;" id="removeButton_${fireBaseData.id}">❌</button>
      </div>
    </div>
    <div class="divUserNameAndImage">
      <h3>${fireBaseData.userName}</h3>
    <img src="${fireBaseData.imagePlace}" alt=""></div>
    <div class="divExtraNotesAndDate">
      <h3>${fireBaseData.deadline}</h3>
      <input value="${fireBaseData.additionalNotes}">
    </div>
  `;
    if (fireBaseData.Priorities === "low") {
      newDivForAdd.classList.add("lowPriorities");
    }
    if (fireBaseData.Priorities === "medium") {
      newDivForAdd.classList.add("mediumPriorities");
    }
    if (fireBaseData.Priorities === "high") {
      newDivForAdd.classList.add("highPriorities");
    }
    newDivForAdd.classList.add("newDivForAdd");
    container2.appendChild(newDivForAdd);
    const removeButton = document.getElementById(
      `removeButton_${fireBaseData.id}`
    );
    const task = document.getElementById(`${fireBaseData.id}`);
    // removeButton addEventListener
    removeButton.addEventListener("click", (e) => {
      const taskId = task.id;
      // Delete the task document based on its ID
      if (taskId === fireBaseData.id) {
        db.collection("tasks")
          .doc(fireBaseData.id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
            // Update TaskCount for remaining tasks
            taskRef.get().then((snapshot) => {
              snapshot.docs.forEach((doc) => {
                const taskDoc = db.collection("tasks").doc(doc.id);
                taskDoc.update({
                  TaskCount: updatedTaskCount,
                });
                updatedTaskCount++;
              });
              window.location.reload();
            });
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      }
    });
    taskCount++;
  });
});
// add event listener to the submit button
theSubmitButton.addEventListener("click", (event) => {
  let newValues = "";
  if (low.checked) {
    newValues = "low";
  }
  if (medium.checked) {
    newValues = "medium";
  }
  if (high.checked) {
    newValues = "high";
  }
  // event.preventDefault();
  const task = db.collection("tasks");
  const taskData = mainInput.value;
  if (taskData.trim() !== "") {
    const newId = Math.random().toString(36).substring(7);
    task
      .doc(`${newId}`)
      .set({
        task: taskData,
        id: newId,
        deadline: deadline.value,
        Priorities: newValues,
        additionalNotes: additionalNotes.value,
        userName: userName.value,
        imagePlace: imagePlace.value,
        TaskCount: taskCount,
      })
      .then(() => {
        mainInput.value = "";
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    return;
  }
});
// dark mood button
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.style.transition = "1s";
});
