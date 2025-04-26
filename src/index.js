import "./styles.css";
import { landingButton, landingInput } from "./elementSelect";


// Calls Visual Crossing API
function getWeather(location) {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&include=days%2Chours&key=WE5SWL7PXQVWZVJPQW6JNH35P&contentType=json`, {
            "method": "GET",
            "mode": "cors",
        })

        .then(function(response) {
            return response.json();
        })

        .then(function(response) {
            console.log(response);
        })

        // Handle errors
        .catch(err => {
            console.log(err);
            alert("Please enter a valid input");
        })
}


// API called when button clicked
landingButton().addEventListener("click", () => {
    const search = landingInput(); // Used to get data from user
    getWeather(search.value);
})
