// Input zip code and get current weather data

// Import modules
const https = require('https');

// Store api key
const apiKey = 'd069855404e65ba709f0867ff8018551';

//Set zip
const yourZip = '17552';

// Get weather and print to console
function printWeather(location, conditions) {
  const weather = `The weather in ${location} is ${conditions} Kelvin`;
  console.log(weather);
}

// Connect to API Url
const request = https.get(`https://api.openweathermap.org/data/2.5/weather?zip=${yourZip}&appid=${apiKey}`, response => {

  let body = '';

  // Read the data
  response.on('data', data => {
    body += data.toString();
  });

  response.on('end', () => {
    // Parse the data
    const location = JSON.parse(body);

    // Print the data
    printWeather(location.name, location.main.temp);

  })

});

// Input zip via command line

// Convert from Kelvin to F
