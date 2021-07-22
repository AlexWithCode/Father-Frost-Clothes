// another way from get.elementById, to select an HTML el or a class
const toggleSwitch = document.querySelector('input[type="checbox"]');

// Switch Theme Dinamically
function switchTheme (event) {
    console.log(event);
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);