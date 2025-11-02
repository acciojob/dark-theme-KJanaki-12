//your code here

function change() {
	const appDiv = document.getElementById("app");
  const button = document.getElementById("swap");

  // Toggle between 'day' and 'night' classes on the main div
  appDiv.classList.toggle("day");
  appDiv.classList.toggle("night");

  // Toggle between 'button_day' and 'button_night' classes on the button
  button.classList.toggle("button_day");
  button.classList.toggle("button_night");
}
