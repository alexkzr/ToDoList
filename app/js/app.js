document.addEventListener('DOMContentLoaded', () => {


	const submitButton = document.querySelector('.submit');
	submitButton.type = 'submit';
	const inputField = document.querySelector('.createItem');
	const toDoUl = document.querySelector('.toDoUl');
	const completedUl = document.querySelector('.completedUl');
	const form = document.querySelector('#header');
	const tdContainer = document.getElementById('tdContainer');
  
	function noChildren() {
		if(toDoUl.hasChildNodes()) {
			tdContainer.classList.remove('tdContainer');
      
		} else {
			tdContainer.className = 'tdContainer';
      
		}
	}

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
			ul.removeChild(e.target.parentNode);
			noChildren();
		});

		doneButton.addEventListener('click', e => {
			if (e.target.parentNode.parentNode.parentNode
				.className === 'toDoUl') {
				completedUl.appendChild(e.target.parentNode.parentNode);
				e.target.parentNode.parentNode.className = 'removeTransition';
				noChildren();

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

	});
  

	localStorage.setItem('todo', tdContainer.innerHTML);
	(function loadStorage() {
		if (localStorage.getItem('todo') !== 'undefined') {
			tdContainer.innerHTML = localStorage.getItem('todo');
		}
	})();
 
  
});
