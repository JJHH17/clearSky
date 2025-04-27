import "./styles.css";
import { landingButton, landingInput, landingFormHide, mainPageShow,
    displayLocation, displayTemp, displayDesc, tempFeel, humidity,
    wind
 } from "./elementSelect";


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

            // Hides initial page
            landingFormHide();
            // Display main page 
            mainPageShow();
            // Display location
            displayLocation(response.resolvedAddress);
            // Display icon

            // Display temperature
            displayTemp(response.days[0].temp);
            // Display description
            displayDesc(response.days[0].conditions);
            // Display temp feel
            tempFeel(response.days[0].feelslike);
            // Display humidity
            humidity(response.days[0].humidity);
            // Display wind
            wind(response.days[0].windspeed);
            // Display graph

            // Display days

            // Display hours (on day 0/current day)
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
