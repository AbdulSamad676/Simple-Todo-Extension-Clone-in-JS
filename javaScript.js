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
