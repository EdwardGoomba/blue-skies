// Input zip code and get current weather data

// Import modules
const https = require('https');
const http = require('http');

// Store api key
const apiKey = 'd069855404e65ba709f0867ff8018551';

// Print Error Messages
function printError(error) {
  console.error(error.message);
}

// Get weather and print to console
function printWeather(location, conditions) {
  const weather = `The weather in ${location} is ${conditions} Kelvin`;
  console.log(weather);
}

function getWeather(yourZip) {
  try {
  // Connect to API Url
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?zip=${yourZip}&appid=${apiKey}`, response => {

      if (response.statusCode === 200) {
        let body = '';

        // Read the data
        response.on('data', data => {
          body += data.toString();
        });

        response.on('end', () => {
          // Check for valid location, print error if location nonexistant
          try {
            // Parse the data
            const location = JSON.parse(body);

            // Print the data
            printWeather(location.name, location.main.temp);
          } catch (error) {
            printError(error);
          }

        });
      } else {
        const message = `There was an error getting the location for ${yourZip} (${http.STATUS_CODES[response.statusCode]})`;
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }


    });

    request.on('error', error => printError);
  } catch (error) {
    printError(error);
  }
}

// Input zip via command line
const locations = process.argv.slice(2);

locations.forEach(getWeather);

// Convert from Kelvin to F

// Require .json file

// Export modules

// Add additional weather info
