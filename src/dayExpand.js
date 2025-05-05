import { mainPageSelector } from "./elementSelect";

// File responsible for expanding day sidebar elements when clicked
// All elements will be created via JS, rather than stock HTML

// Create element that will show data when clicked
export function expandDayForecast() {
    const parentDiv = document.createElement("div");
    parentDiv.id = "forecastExpand";

    mainPageSelector().appendChild(parentDiv);
}

// Adds day elements to parent element
export function daysAdded() {
    const parent = document.querySelector("#forecastExpand");

    const array = Array.from({ length: 7 }, (_, i) => document.querySelector(`#d${i + 1}`));
    
    // Creating a clone of the divs so we can easily revert back to default view
    array.forEach(day => {
        if (day) {
            const clone = day.cloneNode(true);
            parent.appendChild(clone);
        }
    })
}

// Hides other elements on page
export function hideElements() {
    const days = document.querySelector("#dayHolder");
    const weatherDetails = document.querySelector("#weatherDetails");
    const hourlyForecast = document.querySelector("#hourlyForecast");
    const tempGraph = document.querySelector("#tempGraph");
    const mainPage = document.querySelector("#mainPage");
    
    days.style.display = "none";
    weatherDetails.style.display = "none";
    hourlyForecast.style.display = "none";
    tempGraph.style.display = "none";

    // Reverts main page styling to block
    mainPage.style.display = "block";
}

// Displays other elements on page when modal is closed