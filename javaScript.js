const currenDate = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};
// en-US is for format date
const today = new Date().toLocaleDateString('en-US', currenDate);

console.log(today);
document.getElementById('date').textContent = today;

function handleButtonClick(optionId) {
	// Handle button click here
	console.log(`Button ${optionId} clicked`);
}
function closeModal() {
	document.getElementById('myModal').style.display = 'none';
}
function openModal() {
	document.getElementById('myModal').style.display = 'block';
}
function openUpdateModal() {
	document.getElementById('updateModal').style.display = 'block';
}

// Todos section started Here

let dailyTodos = [];
let weeklyTodos = [];
let eventualyTodos = [];
// Functions Area

let daily = document.querySelector('.dailyTodos');
let weekly = document.querySelector('.weeklyTodos');
let eventually = document.querySelector('.eventualTodos');
// console.log(dailyTodos);
function display() {
	daily.innerHTML = '';
	weekly.innerHTML = '';
	eventually.innerHTML = '';
	// Daily Todo display section
	if (dailyTodos.length === 0) {
		const li = document.createElement('li');
		li.className = 'list-item';
		let txt = document.createTextNode('No Todo Here!');
		li.appendChild(txt);
		daily.appendChild(li);
	} else {
		// CLear the Existing List
		daily.innerHTML = '';
		dailyTodos.forEach((todo, index) => {
			// console.log(todo);
			const li = document.createElement('li');
			// edit sign to each
			const editSpan = document.createElement('span');
			editSpan.className = 'editBtn';
			editSpan.innerHTML = '&#9998;';
			// delete sign to each list
			const deleteSpan = document.createElement('span');
			let txt = document.createTextNode('\u00D7');
			deleteSpan.className = 'closeBtn';
			deleteSpan.appendChild(txt);
			// adding list item to the todos list

			li.className = 'list-item';
			li.id = todo.id;
			li.appendChild(document.createTextNode(todo.text));
			li.appendChild(editSpan);
			li.appendChild(deleteSpan);
			daily.appendChild(li);
			// li.addEventListener('click', function (e) {
			// 	console.log(e.target);
			// 	checkedLi = e.target;
			// 	checkedLi.className = 'completed';
			li.addEventListener('click', function (e) {
				console.log(e.target);
				checkedLi = e.target;

				// Toggle the 'completed' class
				checkedLi.classList.toggle('completed');
			});
			// });
			// console.log(li);
		});
		removeTodo();
		// doneTodo();
		// editTodo();}
	}

	// Weekly Todo display section
	if (weeklyTodos.length === 0) {
		const li = document.createElement('li');
		li.className = 'list-item';
		let txt = document.createTextNode('No Todo Here!');
		li.appendChild(txt);
		weekly.appendChild(li);
	} else {
		// CLear the Existing List
		weekly.innerHTML = '';
		weeklyTodos.forEach((todo, index) => {
			// console.log(todo);
			const li = document.createElement('li');
			// edit sign to each
			const editSpan = document.createElement('span');
			editSpan.className = 'editBtn';
			editSpan.innerHTML = '&#9998;';
			// delete sign to each list
			const deleteSpan = document.createElement('span');
			let txt = document.createTextNode('\u00D7');
			deleteSpan.className = 'closeBtn';
			deleteSpan.appendChild(txt);
			// adding list item to the todos list

			li.className = 'list-item';
			li.id = todo.id;
			li.appendChild(document.createTextNode(todo.text));
			li.appendChild(editSpan);
			li.appendChild(deleteSpan);

			weekly.appendChild(li);
			li.addEventListener('click', function (e) {
				console.log(e.target);
				checkedLi = e.target;

				// Toggle the 'completed' class
				checkedLi.classList.toggle('completed');
			});
			// console.log(li);
		});
		removeTodo();

		// editTodo();}
	}
	// Eventually Todo display section
	if (eventualyTodos.length === 0) {
		const li = document.createElement('li');
		li.className = 'list-item';
		let txt = document.createTextNode('No Todo Here!');
		li.appendChild(txt);
		eventually.appendChild(li);
	} else {
		// CLear the Existing List
		eventually.innerHTML = '';
		eventualyTodos.forEach((todo, index) => {
			// console.log(todo);
			const li = document.createElement('li');
			// edit sign to each
			const editSpan = document.createElement('span');
			editSpan.className = 'editBtn';
			editSpan.innerHTML = '&#9998;';
			// delete sign to each list
			const deleteSpan = document.createElement('span');
			let txt = document.createTextNode('\u00D7');
			deleteSpan.className = 'closeBtn';
			deleteSpan.appendChild(txt);
			// adding list item to the todos list

			li.className = 'list-item';
			li.id = todo.id;
			li.appendChild(document.createTextNode(todo.text));
			li.appendChild(editSpan);
			li.appendChild(deleteSpan);

			eventually.appendChild(li);
			li.addEventListener('click', function (e) {
				console.log(e.target);
				checkedLi = e.target;

				// Toggle the 'completed' class
				checkedLi.classList.toggle('completed');
			});
			// console.log(li);
		});
		removeTodo();

		// editTodo();}
	}
}

// function add todo start here
function addTodo() {
	openModal();

	let submitForm = document.getElementById('modalForm');

	submitForm.addEventListener('submit', function (e) {
		e.preventDefault();

		let selectedInputValue = document.querySelector(
			'input[type="radio"]:checked'
		);

		if (selectedInputValue) {
			let selectedBtnId = selectedInputValue.id;

			let inputField = document.getElementById('inputText');
			let formData = new FormData(e.target);
			let inputData = formData.get('inputText');

			let todo = {
				id: new Date().getTime(), // Unique ID using timestamp
				text: inputData,
			};

			if (selectedBtnId == 'daily') {
				dailyTodos.push(todo);
				inputField.value = '';
				selectedInputValue.checked = false;
				removeLabel();
				closeModal();
				display();
			} else if (selectedBtnId == 'weekly') {
				weeklyTodos.push(todo);
				inputField.value = '';
				selectedInputValue.checked = false;
				removeLabel();
				closeModal();
				display();
			} else if (selectedBtnId == 'eventually') {
				eventualyTodos.push(todo);
				inputField.value = '';
				selectedInputValue.checked = false;
				removeLabel();
				closeModal();
				display();
			}
		}
	});
}

// setting for Add todos
let btns = document.querySelectorAll('.plusBtn');
btns.forEach(item => {
	item.onclick = function () {
		let parentClass = this.parentElement.className;
		openModal();

		let submitForm = document.getElementById('modalForm');

		submitForm.addEventListener('submit', function (e) {
			e.preventDefault();

			let selectedInputValue = document.querySelector(
				'input[type="radio"]:checked'
			);

			if (selectedInputValue) {
				let selectedBtnId = selectedInputValue.id;

				let inputField = document.getElementById('inputText');
				let formData = new FormData(e.target);
				let inputData = formData.get('inputText');

				let todo = {
					id: new Date().getTime(), // Unique ID using timestamp
					text: inputData,
				};

				if (selectedBtnId == 'daily') {
					dailyTodos.push(todo);
				} else if (selectedBtnId == 'weekly') {
					weeklyTodos.push(todo);
				} else if (selectedBtnId == 'eventually') {
					eventualyTodos.push(todo);
				}

				inputField.value = '';
				selectedInputValue.checked = false;
				removeLabel();
				closeModal();
				display();
			}
		});
	};
});

function removeTodo() {
	let closeButtons = document.querySelectorAll('.closeBtn');
	closeButtons.forEach(item => {
		// console.log(item.parentElement.firstChild.data);
		// console.log(todos);
		item.onclick = function () {
			let parent = this.parentElement;
			parent.style.display = 'none';
			// console.log(todos);
			let p = this.parentElement.firstChild.data;
			// console.log(this.parentElement.firstChild.data);
			let remP = dailyTodos.findIndex(elem => {
				return elem === p;
			});
			// getting grand parent of the icon
			// which is daily or weekly or eventually
			console.log(parent.parentNode.className);
			grandParentNode = parent.parentNode.className;
			// I have two classes in the grandParent tag
			// let's split that into parentClass and commonClass
			let [parentClass, commonClass] = grandParentNode.split(' ');
			// console.log(`first ${firstWord}`);
			if (parentClass === 'dailyTodos') {
				dailyTodos.splice(remP, 1);
			} else if (parentClass === 'weeklyTodos') {
				weeklyTodos.splice(remP, 1);
			} else {
				eventualyTodos.splice(remP, 1);
			}

			display(); // Display the updated list after removal
		};
	});
}

display();

function handleClick(id) {
	// Remove the 'selected-label' class from all labels
	document.querySelectorAll('.custom-button').forEach(label => {
		label.classList.remove('selected-label');
	});

	// Add the 'selected-label' class to the clicked label
	document
		.querySelector(`label[for="${id}"]`)
		.classList.add('selected-label');
}
function removeLabel() {
	document.querySelectorAll('.custom-button').forEach(label => {
		label.classList.remove('selected-label');
	});
}

function removeDone() {
	let doneTodos = document.querySelectorAll('.completed');

	doneTodos.forEach(doneTodo => {
		let todoId = parseInt(doneTodo.id); // Convert to number
		console.log(`todo id ${todoId}`);

		dailyTodos = dailyTodos.filter(todo => todo.id !== todoId);
		weeklyTodos = weeklyTodos.filter(todo => todo.id !== todoId);
		eventualyTodos = eventualyTodos.filter(todo => todo.id !== todoId);

		doneTodo.remove();
	});

	console.log('Updated Arrays:');
	console.log('daily:', dailyTodos);
	console.log('weekly:', weeklyTodos);
	console.log('eventually:', eventualyTodos);

	display(); // Call the display function after removing completed todos
}

// remove Done ends Here

//  Update Todo
