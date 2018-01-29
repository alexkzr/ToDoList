document.addEventListener('DOMContentLoaded', e => {
  e.preventDefault();

  /**************************
   *    Setting up all
   *      constants
   *************************/
  const submitButton = document.querySelector('.submit');
  submitButton.type = 'submit';
  const inputField = document.querySelector('.createItem');
  const toDoUl = document.querySelector('.toDoUl');
  const completedUl = document.querySelector('.completedUl');
  const form = document.querySelector('#header');
  const tdContainer = document.getElementById('tdContainer');
  const toDoItems = document.getElementById('toDoItems');
  const wrapper = document.getElementById('wrapper');
  const clearButton = document.getElementById('clear');

  clearButton.addEventListener('click', () => {
    localStorage.removeItem('todo');
  });

  (function loadStorage() {
    if (localStorage.getItem('todo')) {
      tdContainer.innerHTML = localStorage.getItem('todo');
    }
  })();

  /************************
   * Tried to have an
   * image show when the
   * list is empty
   ***********************/
  (function noChildren() {
    if (toDoUl.hasChildNodes()) {
      tdContainer.classList.remove('notEmpty');
    } else {
      tdContainer.className += ' empty';
    }
  })(); /*ul.removeChild(
    /*e.target.parentNode
  ); /*
      ul.removeChild(e.target.parentNode);
    });

    // doneButton.addEventListener('click', e => {
    //   e.preventDefault();
    //   if (e.target.parentNode.parentNode.className === 'toDoUl') {
    //     toDoUl.appendChild(e.target.parentNode.parentNode);
    //     e.target.parentNode.className = 'removeTransition';

    //     localStorage.setItem('todo', tdContainer.innerHTML);
    //   } else {
    //     completedUl.appendChild(e.target.parentNode);
    //     e.target.parentNode.parentNode.className = 'addTransition';
    //   }
    //});
  });
*/ /*
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
      const ul = e.target.parentNode.parentNode.parentNode;
      /*const li = e.target.parentNode.parentNode;*/ /*
    });

    doneButton.addEventListener('click', e => {
      e.preventDefault();
      console.log('UL parent class', e.target.parentNode.parentNode.className);

      console.log('1st parent', e.target.parentNode);

      if (e.target.parentNode.parentNode.className == 'toDoUl') {
        completedUl.appendChild(e.target.parentNode);
        e.target.parentNode.className = 'removeTransition';
      } else {
        toDoUl.appendChild(e.target.parentNode);

        e.target.parentNode.className = 'addTransition';
      }
    });
  });
/*
  Array.prototype.forEach.call(completedLiElements, completedLi => {
    var editButton = completedLi.querySelector('.edit');
    var removeButton = completedLi.querySelector('.remove');
    var doneButton = completedLi.querySelector('.done');
    var listItem = completedLi;
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
      /*const li = e.target.parentNode.parentNode;*/ /* */

  /**********************
   * Working with local
   * storage
   *********************/

  function createLi() {
    const doneButton = document.createElement('input');
    const checkedLabel = document.createElement('label');
    doneButton.type = 'checkbox';
    checkedLabel.className = 'done';
    checkedLabel.appendChild(doneButton);
    const listItem = document.createElement('li');
    const p = document.createElement('p');
    const editButton = document.createElement('button');
    const removeButton = document.createElement('button');

    p.textContent = inputField.value;
    listItem.appendChild(p);
    listItem.appendChild(checkedLabel);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);
    toDoUl.appendChild(listItem);

    inputField.value = '';
    editButton.className = 'edit';
    removeButton.className = 'remove';

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
    });

    doneButton.addEventListener('click', e => {
      if (e.target.parentNode.parentNode.parentNode.className === 'toDoUl') {
        completedUl.appendChild(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.className = 'removeTransition';

        localStorage.setItem('todo', tdContainer.innerHTML);
      } else {
        toDoUl.appendChild(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.className = 'addTransition';
      }
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    createLi();
    localStorage.setItem('todo', tdContainer.innerHTML);
  });
});
