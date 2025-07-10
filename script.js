async function getWeather() {
  const cityInput = document.getElementById('cityInput');
  const city = cityInput.value.trim();
  const apiKey = '0f3ea7d4be6d4fc49bb65618250807';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  const weatherContainer = document.getElementById('weatherContainer');
  const loadingText = document.getElementById('loadingText');
  const errorDiv = document.getElementById('error');
  const errorMessage = document.getElementById('errorMessage');

  // Reset previous displays
  weatherContainer.classList.add('hidden');
  loadingText.textContent = '';
  errorDiv.classList.add('hidden');
  errorMessage.textContent = '';

  if (city === "") {
    errorMessage.textContent = "⚠️ Please enter a city name.";
    errorDiv.classList.remove('hidden');
    return;
  }

  loadingText.textContent = '⏳ Loading weather data...';

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      errorMessage.textContent = "❌ City not found! Please try another.";
      errorDiv.classList.remove('hidden');
      loadingText.textContent = '';
      return;
    }

    // Display data
    // document.getElementById('cityName').textContent = `${data.location.name}, ${data.location.country}`;
    // document.getElementById('temp').textContent = `🌡️ ${data.current.temp_c}°C`;
    // document.getElementById('condition').textContent = `📋 ${data.current.condition.text}`;
    // document.getElementById('humidity').textContent = `💧 Humidity: ${data.current.humidity}%`;
    // document.getElementById('wind').textContent = `🌬️ Wind: ${data.current.wind_kph} kph`;
    // document.getElementById('weatherIcon').src = "https:" + data.current.condition.icon;

    loadingText.textContent = '';
    weatherContainer.classList.remove('hidden');
  } catch (error) {
    errorMessage.textContent = "⚠️ An error occurred. Please check your network and try again.";
    errorDiv.classList.remove('hidden');
    loadingText.textContent = '';
    console.error(error);
  }
}
