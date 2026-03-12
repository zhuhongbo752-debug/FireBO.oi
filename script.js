document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('changeButton');
	const message = document.querySelector('.message');
	
	button.addEventListener('click', () => {
		message.textContent = 'Hello JavaScript!';
		message.style.color = '#4CAF50';
	});
});