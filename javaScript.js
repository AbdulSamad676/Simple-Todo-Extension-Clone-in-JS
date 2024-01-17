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

let dailyTodos = ['Code', 'Design'];
// Functions Area

let daily = document.querySelector('.dailyTodos');
console.log(dailyTodos);
function display() {
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
		console.log(li);
	});
	removeTodo();
	// editTodo();
}

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
			let remP = todos.findIndex(elem => {
				return elem === p;
			});
			todos.splice(remP, 1);
			display(); // Display the updated list after removal
		};
	});
}

display();
