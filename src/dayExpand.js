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
    
    array.forEach(day => {
        if (day) parent.appendChild(day);
    })

}