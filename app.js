// Input zip code and get current weather data

// Import modules
const https = require('https');

// Store api key
const apiKey = 'd069855404e65ba709f0867ff8018551';

const yourZip = '17552';

// Get weather and print to console
function printWeather(yourZip) {
  const weather = `The weather at zip ${yourZip} is `;
  console.log(weather);
}

// Connect to API Url
const request = https.get(`https://api.openweathermap.org/data/2.5/weather?zip=${yourZip}&appid=${apiKey}`, response => {
  console.log(response.statusCode);

  // Read the data

  // Parse the data

  // Print the data

});

// Input zip via command line
