// File responsible for selecting elements on the DOM

// Importing icons
const icons = require.context("./assets");

// Hides landing form
export function landingFormHide() {
    const landingForm = document.querySelector("#landingForm");
    landingForm.style.display = "none";
}

// Selects landing form button
export function landingButton() {
    const landingButton = document.querySelector("#landingButton");
    return landingButton;
}

// Selecting landing form input 
export function landingInput() {
    const landingInput = document.querySelector("#landingInput");
    return landingInput;
}

// Displays main page when called
export function mainPageShow() {
    const mainPage = document.querySelector("#mainPage");
    mainPage.style.display = "grid";
}

// Used to display location through API
export function displayLocation(location) {
    const locationDiv = document.querySelector("#location");
    locationDiv.innerText = location;
} 

// Used to display temperature
export function displayTemp(temp) {
    const tempDiv = document.querySelector("#temp");
    tempDiv.innerText = temp + "°C";
}

// Used to display weather description
export function displayDesc(description) {
    const descDiv = document.querySelector("#Desc");
    descDiv.innerText = description;
}

// Used to display temperature feel
export function tempFeel(temp) {
    const tempFeelDiv = document.querySelector("#TempFeel");
    tempFeelDiv.innerText = "Feels Like: " + temp + "°C";
}

// Used to display humidity
export function humidity(humidity) {
    const humidityDiv = document.querySelector("#Humidity");
    humidityDiv.innerText = "Humidity: " + humidity + "%";
}

// Used to display wind
export function wind(wind) {
    const windDiv = document.querySelector("#Wind");
    windDiv.innerText = "Wind: " + wind + "mph";
}

// Used to display weather icons 
export function currentDayIcon(todaysIcon) {
    const icon = document.querySelector("#icon");
    icon.src = icons(`./${todaysIcon}.png`);
}