document.addEventListener('DOMContentLoaded', e => {
  e.preventDefault();
  const submitButton = document.querySelector('.submit');
  submitButton.type = 'submit';
  const inputField = document.querySelector('.createItem');
  const toDoUl = document.querySelector('.toDoUl');
  const completedUl = document.querySelector('.completedUl');
  const form = document.querySelector('#header');
  const tdContainer = document.getElementById('tdContainer');
  const toDoItems = document.getElementById('toDoItems');
  (function loadStorage() {
    if (localStorage.getItem('todo')) {
      tdContainer.innerHTML = localStorage.getItem('todo');
    }
  })();

  function noChildren() {
    if (toDoUl.hasChildNodes()) {
      tdContainer.classList.remove('tdContainer');
    } else {
      tdContainer.className = 'tdContainer';
    }
  }

  var todoLi = '.toDoUl > li';
  var completedLi = '.completedUl > li';
  var todoLiElements = document.querySelectorAll(todoLi);
  var completedLiElements = document.querySelectorAll(completedLi);
  //Attaching event handlers to the todoUl elements pulled from storage
  Array.prototype.forEach.call(todoLiElements, todoLi => {
    var editButton = todoLi.querySelector('.edit');
    var removeButton = todoLi.querySelector('.remove');
    var doneButton = todoLi.querySelector('.done');
    var listItem = todoLi;
    console.log(editButton);
    // you can set listeners here
    editButton.addEventListener('click', e => {
      e.preventDefault();
      listItem.contentEditable = 'true';
    });

    listItem.addEventListener('blur', e => {
      e.preventDefault();
      listItem.contentEditable = 'false';
    });

    removeButton.addEventListener('click', e => {
      e.preventDefault();
      const ul = e.target.parentNode.parentNode;
      /*const li = e.target.parentNode.parentNode;*/
      ul.removeChild(e.target.parentNode);
      noChildren();
    });

    doneButton.addEventListener('click', e => {
      e.preventDefault();
      if (e.target.parentNode.parentNode.className === 'toDoUl') {
        completedLiElements.push(e.target.parentNode);
        e.target.parentNode.className = 'removeTransition';
        noChildren();
        localStorage.setItem('todo', tdContainer.innerHTML);
      } else {
        todoLiElements.push(e.target.parentNode);
        e.target.parentNode.className = 'addTransition';
        noChildren();
      }
    });
  });

  Array.prototype.forEach.call(completedLiElements, completedLi => {
    var editButton = completedLi.querySelector('.edit');
    var removeButton = completedLi.querySelector('.remove');
    var doneButton = completedLi.querySelector('.done');
    var listItem = completedLi;
    console.log(editButton);
    // you can set listeners here
    editButton.addEventListener('click', e => {
      e.preventDefault();
      listItem.contentEditable = 'true';
    });

    listItem.addEventListener('blur', e => {
      e.preventDefault();
      listItem.contentEditable = 'false';
    });

    removeButton.addEventListener('click', e => {
      e.preventDefault();
      const ul = e.target.parentNode.parentNode;
      /*const li = e.target.parentNode.parentNode;*/
      ul.removeChild(e.target.parentNode);
      noChildren();
    });

    doneButton.addEventListener('click', e => {
      e.preventDefault();
      if (e.target.parentNode.parentNode.parentNode.className === 'toDoUl') {
        todoLiElements.push(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.className = 'removeTransition';
        noChildren();
        localStorage.setItem('todo', tdContainer.innerHTML);
      } else {
        completedLiElements.push(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.className = 'addTransition';
        noChildren();
      }
    });
  });

  function createLi() {
    const wrapper = document.getElementById('wrapper');
    const doneButton = document.createElement('input');
    const checkedLabel = document.createElement('label');
    doneButton.type = 'checkbox';
    checkedLabel.className = 'done';
    checkedLabel.appendChild(doneButton);
    const listItem = document.createElement('li');
    const p = document.createElement('p');
    const editButton = document.createElement('button');
    const removeButton = document.createElement('button');

    toDoUl.appendChild(listItem);
    p.textContent = inputField.value;
    inputField.value = '';
    editButton.className = 'edit';
    removeButton.className = 'remove';
    listItem.appendChild(checkedLabel);
    listItem.appendChild(p);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);
    doneButton.style.display = 'none';

    editButton.addEventListener('click', () => {
      listItem.contentEditable = 'true';
    });

    listItem.addEventListener('blur', () => {
      listItem.contentEditable = 'false';
    });

    removeButton.addEventListener('click', e => {
      const ul = e.target.parentNode.parentNode;
      /*const li = e.target.parentNode.parentNode;*/
      ul.removeChild(e.target.parentNode);
      noChildren();
    });

    doneButton.addEventListener('click', e => {
      if (e.target.parentNode.parentNode.parentNode.className === 'toDoUl') {
        completedUl.appendChild(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.className = 'removeTransition';
        noChildren();
        localStorage.setItem('todo', tdContainer.innerHTML);
      } else {
        toDoUl.appendChild(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.className = 'addTransition';
        noChildren();
      }
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    noChildren();
    createLi();
    localStorage.setItem('todo', tdContainer.innerHTML);
  });
});
