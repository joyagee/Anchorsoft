//javascript

//Todo
//*****Get the 3 basic elements******
const container = document.querySelector(".container");
// console.log(container);
const baseInput = document.querySelector(".baseInput");
//  console.log(baseInput);
const addbtn = document.querySelector(".addbtn");
console.log(addbtn);
const btnArray = [
  {
    text: "🖋️",
    attribute: "edit editBtn btn",
  },
  {
    text: "✔️",
    attribute: "edit checkBtn btn",
  },
  {
    text: "🚮",
    attribute: "edit deleteBtn btn",
  },
];
let main_task;
let pdiv;
let pdivChild;
let task_container;
let taskInput;
let elmnt;

//***Add Event Listener to button***
addbtn.addEventListener("click", AddTask);

function AddTask() {
  if (baseInput.value === "") {
    alert("Pleas Enter a value");
    return;
  } else {
    //**Create main_task div
    main_task = document.createElement("div");
    //Add attribute of main_task  to it so it cn be styled from css */
    main_task.setAttribute("class", "main_task");
    //append(place) main_task inside container
    container.append(main_task);

    //**Create pdiv */
    pdiv = document.createElement("div");
    //set attribute to the pdiv
    pdiv.setAttribute("class", "pdiv");
    //create the paragrph inside pdiv which holds the task text
    pdivChild = document.createElement("p");
    pdivChild.innerText = baseInput.value;
    //append the pdivChild to pdiv
    pdiv.append(pdivChild);
    //append pidiv inside of main_task
    main_task.append(pdiv);

    //**Create task_container */
    task_container = document.createElement("div");
    //setAttribute task_container
    task_container.setAttribute("class", "task_container");
    //append inside main_task
    main_task.append(task_container);

    //**create taskInput */
    taskInput = document.createElement("input");
    //setAttribute
    taskInput.setAttribute("class", "taskInput inptt");
    taskInput.setAttribute("placeholder", "Edit Todo");
    //append it inside  task_container
    task_container.append(taskInput);

    //**Loop through to create all three(3) buttons at once */
    for (let btn in btnArray) {
      //For each itration, store each created button in elmt
      elmnt = document.createElement("button");
      //setAtrribute
      elmnt.setAttribute("class", `${btnArray[btn].attribute}`);
      //set text or icon
      elmnt.innerText = `${btnArray[btn].text}`;
      //append the buttons inside task_container
      task_container.append(elmnt);

      //**Add eventListeer to all */
      elmnt.addEventListener("click", (e) => {
        const currentTask_container = e.target.closest(".task_container");

        //get currentIinput
        const currentTaskInput = currentTask_container.firstElementChild;
        //get the current  currentMainTask
        const currentMainTask = e.target.closest(".main_task");
        //get the current  currentpdiv
        let currentpdiv = currentMainTask.firstElementChild;
        //get the current  currentpdivChild
        let currentpdivChild = currentpdiv.firstElementChild;
        console.log("currentpdivChild:", currentpdivChild);

        if (e.target.innerText === "🖋️") {
          currentpdivChild.innerText = currentTaskInput.value;
        } else if (e.target.innerText === "✔️") {
          currentpdivChild.setAttribute("class", "chek");
        } else if (e.target.innerText === "🚮") {
          currentMainTask.remove();
        }
      });
    }
  }
}