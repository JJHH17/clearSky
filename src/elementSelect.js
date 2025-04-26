// File responsible for selecting elements on the DOM

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