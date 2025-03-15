const fetchWeather = async (a, b) => {
    try {
        if (!b) {
            const r = await fetch(
                `${process.env.REACT_APP_URL}?key=${process.env.REACT_APP_API_KEY}&q=${a}&aqi=no`
            );
            const d = await r.json();
            if (r.ok) return d;
        } else if (a && b) {
            const r = await fetch(
                `${process.env.REACT_APP_URL}?key=${process.env.REACT_APP_API_KEY}&q=${a},${b}&aqi=no`
            );
            const d = await r.json();
            if (r.ok) return d;
        }
    } catch (err) {
        console.error("Error fetching weather data:", err);
    }
};

export default fetchWeather