const fetchWeather = async (a, b) => {
    try {
        if (!b) {
            const response = await fetch(
                `${process.env.REACT_APP_URL}?key=${process.env.REACT_APP_API_KEY}&q=${a}&aqi=no`
            );
            const data = await response.json();
            if (response.ok) return data;
        } else if (a && b) {
            const response = await fetch(
                `${process.env.REACT_APP_URL}?key=${process.env.REACT_APP_API_KEY}&q=${a},${b}&aqi=no`
            );
            const data = await response.json();
            if (response.ok) return data;
        }
    } catch (err) {
        console.error("Error fetching weather data:", err);
    }
};

export default fetchWeather