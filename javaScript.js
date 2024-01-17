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

// Todos section started Here

let dailyTodos = ['Code', 'Design', 'Test'];
// Functions Area

let daily = document.querySelector('.dailyTodos');
// console.log(dailyTodos);
function display() {
	// console.log(daily.textContent);
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
			li.id = index;
			li.appendChild(document.createTextNode(todo));
			li.appendChild(editSpan);
			li.appendChild(deleteSpan);

			daily.appendChild(li);
			// console.log(li);
		});
		removeTodo();
		// editTodo();}
	}
}
// setting for Add todos
let btns = document.querySelectorAll('.plusBtn');
btns.forEach(item => {
	item.onclick = function () {
		// the parent class os for some useful operations
		let parentClass = this.parentElement.className;
		openModal();
		let submitForm = document.querySelector('.modalForm');
		// console.log(`modal forn is : ${submitForm.innerHTML}`);
		submitForm.addEventListener('submit', function (e) {
			e.preventDefault();
			let selectedBtnId = '';
			let selectedInputValue = document.querySelector(
				'input[type="radio"]:checked'
			);
			// id of the selected radio button
			selectedBtnId = selectedInputValue.id;
			let inputField = document.getElementById('inputText');
			let formData = new FormData(e.target);
			let inputData = formData.get('inputText');
			console.log(`You Entered : ${inputData}`);

			if (selectedBtnId == 'daily') {
				dailyTodos.push(inputData);
				// Reset the Input Field
				inputField = '';
				// Display Updated Todo
				display();
				console.log('Added to daily todos');
			} else if (selectedBtnId == 'weekly') {
				console.log('Added to weekly todos');
			} else if (selectedBtnId == 'eventually') {
				console.log('Added to eventually todos');
			} else {
				alert('Please Select Time option');
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
			dailyTodos.splice(remP, 1);
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

	// const saveTodoBtn = document.querySelector('.saveTodoBtn');
	// saveTodoBtn.disabled = !document.querySelector(
	// 	'input[name="options"]:checked'
	// );
}
