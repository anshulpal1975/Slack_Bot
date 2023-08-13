const axios = require('axios');

const getWeather = async (location) => {
  try {
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=28a9b26783d5b53ed2f25d7dd7717889&units=metric`);
    if (weatherResponse.data.weather && weatherResponse.data.weather.length > 0) {
      return `Weather in ${location}: ${weatherResponse.data.weather[0].description}, Temperature: ${weatherResponse.data.main.temp}°C`;
    } else {
      return "Weather information not found for the location.";
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return 'An error occurred while fetching weather data.';
  }
};

module.exports = { getWeather };
