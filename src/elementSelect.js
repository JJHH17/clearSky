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

export function mainPageSelector() {
    const mainPage = document.querySelector("#mainPage");
    return mainPage;
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

export function dailyForecast() {
    const dailyWeather = document.querySelector("#dayHolder");
    return dailyWeather;
}

// List of days 
function day1(date, temp, icon) {
    const day = document.querySelector("#day1Date");
    const temperature = document.querySelector("#day1Temp");
    const image = document.querySelector("#day1Icon");

    day.innerText = "Date: " + date;
    temperature.innerText = temp + "°C";
    image.src = icons(`./${icon}.png`);
}

// List of days 
function day2(date, temp, icon) {
    const day = document.querySelector("#day2Date");
    const temperature = document.querySelector("#day2Temp");
    const image = document.querySelector("#day2Icon");

    day.innerText = "Date: " + date;
    temperature.innerText = temp + "°C";
    image.src = icons(`./${icon}.png`);
}

// List of days 
function day3(date, temp, icon) {
    const day = document.querySelector("#day3Date");
    const temperature = document.querySelector("#day3Temp");
    const image = document.querySelector("#day3Icon");

    day.innerText = "Date: " + date;
    temperature.innerText = temp + "°C";
    image.src = icons(`./${icon}.png`);
}

// List of days 
function day4(date, temp, icon) {
    const day = document.querySelector("#day4Date");
    const temperature = document.querySelector("#day4Temp");
    const image = document.querySelector("#day4Icon");

    day.innerText = "Date: " + date;
    temperature.innerText = temp + "°C";
    image.src = icons(`./${icon}.png`);
}

// List of days 
function day5(date, temp, icon) {
    const day = document.querySelector("#day5Date");
    const temperature = document.querySelector("#day5Temp");
    const image = document.querySelector("#day5Icon");

    day.innerText = "Date: " + date;
    temperature.innerText = temp + "°C";
    image.src = icons(`./${icon}.png`);
}

// List of days 
function day6(date, temp, icon) {
    const day = document.querySelector("#day6Date");
    const temperature = document.querySelector("#day6Temp");
    const image = document.querySelector("#day6Icon");

    day.innerText = "Date: " + date;
    temperature.innerText = temp + "°C";
    image.src = icons(`./${icon}.png`);
}

// List of days 
function day7(date, temp, icon) {
    const day = document.querySelector("#day7Date");
    const temperature = document.querySelector("#day7Temp");
    const image = document.querySelector("#day7Icon");

    day.innerText = "Date: " + date;
    temperature.innerText = temp + "°C";
    image.src = icons(`./${icon}.png`);
}

// Create an array of days
export const days = [day1, day2, day3, day4, day5, day6, day7];

// List of hours
function hour1(hour, temp, icon) {
    const time = document.querySelector("#Hour1");
    const temperature = document.querySelector("#condition1");
    const hourIcon = document.querySelector("#img1");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour2(hour, temp, icon) {
    const time = document.querySelector("#Hour2");
    const temperature = document.querySelector("#condition2");
    const hourIcon = document.querySelector("#img2");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour3(hour, temp, icon) {
    const time = document.querySelector("#Hour3");
    const temperature = document.querySelector("#condition3");
    const hourIcon = document.querySelector("#img3");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour4(hour, temp, icon) {
    const time = document.querySelector("#Hour4");
    const temperature = document.querySelector("#condition4");
    const hourIcon = document.querySelector("#img4");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour5(hour, temp, icon) {
    const time = document.querySelector("#Hour5");
    const temperature = document.querySelector("#condition5");
    const hourIcon = document.querySelector("#img5");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour6(hour, temp, icon) {
    const time = document.querySelector("#Hour6");
    const temperature = document.querySelector("#condition6");
    const hourIcon = document.querySelector("#img6");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour7(hour, temp, icon) {
    const time = document.querySelector("#Hour7");
    const temperature = document.querySelector("#condition7");
    const hourIcon = document.querySelector("#img7");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour8(hour, temp, icon) {
    const time = document.querySelector("#Hour8");
    const temperature = document.querySelector("#condition8");
    const hourIcon = document.querySelector("#img8");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour9(hour, temp, icon) {
    const time = document.querySelector("#Hour9");
    const temperature = document.querySelector("#condition9");
    const hourIcon = document.querySelector("#img9");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour10(hour, temp, icon) {
    const time = document.querySelector("#Hour10");
    const temperature = document.querySelector("#condition10");
    const hourIcon = document.querySelector("#img10");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour11(hour, temp, icon) {
    const time = document.querySelector("#Hour11");
    const temperature = document.querySelector("#condition11");
    const hourIcon = document.querySelector("#img11");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour12(hour, temp, icon) {
    const time = document.querySelector("#Hour12");
    const temperature = document.querySelector("#condition12");
    const hourIcon = document.querySelector("#img12");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour13(hour, temp, icon) {
    const time = document.querySelector("#Hour13");
    const temperature = document.querySelector("#condition13");
    const hourIcon = document.querySelector("#img13");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour14(hour, temp, icon) {
    const time = document.querySelector("#Hour14");
    const temperature = document.querySelector("#condition14");
    const hourIcon = document.querySelector("#img14");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour15(hour, temp, icon) {
    const time = document.querySelector("#Hour15");
    const temperature = document.querySelector("#condition15");
    const hourIcon = document.querySelector("#img15");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour16(hour, temp, icon) {
    const time = document.querySelector("#Hour16");
    const temperature = document.querySelector("#condition16");
    const hourIcon = document.querySelector("#img16");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour17(hour, temp, icon) {
    const time = document.querySelector("#Hour17");
    const temperature = document.querySelector("#condition17");
    const hourIcon = document.querySelector("#img17");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour18(hour, temp, icon) {
    const time = document.querySelector("#Hour18");
    const temperature = document.querySelector("#condition18");
    const hourIcon = document.querySelector("#img18");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour19(hour, temp, icon) {
    const time = document.querySelector("#Hour19");
    const temperature = document.querySelector("#condition19");
    const hourIcon = document.querySelector("#img19");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour20(hour, temp, icon) {
    const time = document.querySelector("#Hour20");
    const temperature = document.querySelector("#condition20");
    const hourIcon = document.querySelector("#img20");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour21(hour, temp, icon) {
    const time = document.querySelector("#Hour21");
    const temperature = document.querySelector("#condition21");
    const hourIcon = document.querySelector("#img21");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour22(hour, temp, icon) {
    const time = document.querySelector("#Hour22");
    const temperature = document.querySelector("#condition22");
    const hourIcon = document.querySelector("#img22");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

function hour23(hour, temp, icon) {
    const time = document.querySelector("#Hour23");
    const temperature = document.querySelector("#condition23");
    const hourIcon = document.querySelector("#img23");

    time.innerText = "Time: " + hour;
    temperature.innerText = temp + "°C";
    hourIcon.src = icons(`./${icon}.png`);
}

// Create an array of hours
export const hours = [hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, 
    hour17, hour18, hour19, hour20, hour21, hour22, hour23];

// Display search bar and button
export function searchDisplay() {
    const search = document.querySelector("#searchGroup");
    search.style.display = "flex";
}

// Select search bar and button
export function searchBar() {
    const search = document.querySelector("#searchLocation");
    return search;
}

export function searchBtn() {
    const button = document.querySelector("#searchButton");
    return button;
}

// display loading message
export function displayLoading() {
    const loading = document.querySelector("#loading");
    loading.style.display = "block";
}

// Hide loading message
export function hideLoading() {
    const loading = document.querySelector("#loading");
    loading.style.display = "none";
}