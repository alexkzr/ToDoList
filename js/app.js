document.addEventListener('DOMContentLoaded', () => {
const submitButton = document.querySelector(".submit");
submitButton.type = 'submit';
const inputField = document.querySelector(".createItem");
const toDoUl = document.querySelector(".toDoUl");
const completedUl = document.querySelector(".completedUl");

function createLi() {
    const doneButton = document.createElement("input");
    const checkedLabel = document.createElement("label");
    doneButton.type = "checkbox";
    checkedLabel.className = "done";
    checkedLabel.appendChild(doneButton);
    const listItem = document.createElement("li");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");
    
  toDoUl.appendChild(listItem);
  listItem.textContent = inputField.value;
  inputField.value = "";
  editButton.className = "edit";
  removeButton.className = "remove";
  listItem.appendChild(checkedLabel);
  listItem.appendChild(editButton);
  listItem.appendChild(removeButton);
  doneButton.style.display = "none";

  editButton.addEventListener('click', () => {
    listItem.contentEditable = "true";
  });

  listItem.addEventListener('blur', () => {
    listItem.contentEditable = "false";
  })

  removeButton.addEventListener("click", (e) => {
    const ul = e.target.parentNode.parentNode;
    /*const li = e.target.parentNode.parentNode;*/
    ul.removeChild(e.target.parentNode);
  });
 
    doneButton.addEventListener("click", (e) => {
    if (e.target.parentNode.parentNode.parentNode.className ==='toDoUl') {
    completedUl.appendChild(e.target.parentNode.parentNode)
    } else {
        toDoUl.appendChild(e.target.parentNode.parentNode)
    }
    });
  

  
}




submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  createLi();
});
})
