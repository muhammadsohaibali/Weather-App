const apiKey = process.env.REACT_APP_API_KEY;
const fetchWeather = async (a, b) => {
    try {
        if (!b) {
            const response = await fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${a}&aqi=no`
            );
            const data = await response.json();
            if (response.ok) return data;
        } else if (a && b) {
            const response = await fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${a},${b}&aqi=no`
            );
            const data = await response.json();
            if (response.ok) return data;
        }
    } catch (err) {
        console.error("Error fetching weather data:", err);
    }
};

export default fetchWeather