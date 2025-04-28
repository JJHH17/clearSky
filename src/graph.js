// File responsible for handling Graphs using Chart.js
import Chart from "chart.js/auto";

const tempChart = document.querySelector("#graph").getContext("2d");

let dayTempChart = new Chart(tempChart, {
    type: 'line',
    data: {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00',
            '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
            '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
            '19:00', '20:00', '21:00', '22:00', '23:00',
        ],
        datasets: [{
            label: 'Temperature (°C)',
            data: [],
            fill: true,
            borderColor: 'rgb(5, 24, 24)',
            tension: 0.1
        }]
    },
    options: {
        responsiveness: true,
        plugins: {
            legend: {
                display: true
            },
            title: {
                display: true,
                text: 'Day Temperature Change'
            }
        }
    }
});

// Feeds data from API to chart
export function getTempData(data) {
    dayTempChart.data.datasets[0].data = data;
    dayTempChart.update();
}