const currenDate = {
	weekday: 'long',
	// year: 'numeric',
	month: 'long',
	day: 'numeric',
};
// en-US is for format date
const today = new Date().toLocaleDateString('en-PK', currenDate);

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
function closeUpdateModal() {
	document.getElementById('updateModal').style.display = 'none';
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
		editTodo();
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

		editTodo();
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
		editTodo();
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
		item.onclick = function () {
			let parent = this.parentElement;
			parent.style.display = 'none';

			let p = this.parentElement.firstChild.data;
			console.log(`p in removeTodo ${p}`);
			//testing new logic
			// let remP = dailyTodos.findIndex(elem => {
			// 	return elem === p;
			// });
			//testing new logic
			// getting grand parent of the icon
			// which is daily or weekly or eventually
			console.log(parent.parentNode.className);
			grandParentNode = parent.parentNode.className;
			// I have two classes in the grandParent tag
			// let's split that into parentClass and commonClass
			let [parentClass, commonClass] = grandParentNode.split(' ');
			// console.log(`first ${firstWord}`);
			if (parentClass === 'dailyTodos') {
				let remP = dailyTodos.findIndex(elem => {
					return elem.text === p;
				});

				dailyTodos.splice(remP, 1);
			} else if (parentClass === 'weeklyTodos') {
				let remP = weeklyTodos.findIndex(elem => {
					return elem.text === p;
				});
				weeklyTodos.splice(remP, 1);
			} else {
				let remP = eventualyTodos.findIndex(elem => {
					return elem.text === p;
				});
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

//  Update / Edit Todo  Starts Here

let updateFormSubmitHandler;

function editTodo() {
	// Edit functionality
	// Get the modal
	var modal = document.getElementById('updateModal');

	// Get the button that opens the modal
	// var btn = document.getElementById('myBtn');
	let editbtns = document.querySelectorAll('.editBtn');

	// Get the <span> element that closes the modal
	let myedit = Array.from(editbtns);
	console.log(myedit);
	myedit.forEach(btn => {
		btn.addEventListener('click', function (e) {
			openUpdateModal();
			console.log(e.target.parentElement.parentElement);
			let parent = e.target.parentElement;
			let grandParentClass = parent.parentElement.className;
			let [parentClass, commonClass] = grandParentClass.split(' ');

			let id = parseInt(e.target.parentElement.id);

			console.log(`parent element is ${parent.className}`);
			console.log(`grandParent element is ${parentClass}`);

			// Move updateForm declaration to the outer scope
			let updateForm = document.querySelector('.updateModalForm');

			// Remove existing event listener
			updateForm.removeEventListener('submit', updateFormSubmitHandler);

			// Add event listener for this instance
			updateFormSubmitHandler = function (e) {
				e.preventDefault();
				// remove the selected todo
				let remP = dailyTodos.findIndex(elem => {
					return elem.id === id;
				});
				console.log(`This is to be removed: ${remP}`);
				if (parentClass === 'dailyTodos') {
					let remP = dailyTodos.findIndex(elem => {
						return elem.id === id;
					});
					dailyTodos.splice(remP, 1);
					console.log(`This is to be removed daily: ${remP}`);
				} else if (parentClass === 'weeklyTodos') {
					let remP = weeklyTodos.findIndex(elem => {
						return elem.id === id;
					});
					weeklyTodos.splice(remP, 1);
					console.log(`This is to be removed weekly: ${remP}`);
				} else {
					let remP = eventualyTodos.findIndex(elem => {
						return elem.id === id;
					});
					eventualyTodos.splice(remP, 1);
					console.log(`This is to be removed eventually: ${remP}`);
				}
				// remove selected todo end

				let updateField = document.getElementById('updateText');

				const updateFormData = new FormData(e.target);
				let updateData = updateFormData.get('updateText');

				let todo = {
					todoId: new Date().getTime(), // Unique ID using timestamp
					text: updateData,
				};
				console.log(`Clicked todo: ${todo.text}`);

				// selected Radio section

				let selectedInputValue = document.querySelector(
					'input[type="radio"]:checked'
				);

				if (selectedInputValue) {
					let selectedBtnId = selectedInputValue.id;

					if (selectedBtnId == 'updateDaily') {
						dailyTodos.push(todo);
					} else if (selectedBtnId == 'updateWeekly') {
						weeklyTodos.push(todo);
					} else if (selectedBtnId == 'updateEventually') {
						eventualyTodos.push(todo);
					}

					updateField.value = '';
					selectedInputValue.checked = false;
					removeLabel();
					closeUpdateModal();
					display();
				}

				// selected Radio section end
			};

			updateForm.addEventListener('submit', updateFormSubmitHandler);

			var span = document.getElementsByClassName('close')[0];
			// modal.style.display = 'block';
			span.onclick = function () {
				console.log('span clicked');
				modal.style.display = 'none';
			};
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = 'none';
				}
			};
		});
	});

	// edit functionality End
}

// Update / Edit Todo Ends Here
