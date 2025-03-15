function getWindCategory(wind_kph) {
    if (wind_kph < 5) return "Calm";
    if (wind_kph < 15) return "Light Breeze";
    if (wind_kph < 30) return "Moderate Breeze";
    if (wind_kph < 50) return "Strong Breeze";
    if (wind_kph < 75) return "Very Windy";
    if (wind_kph < 100) return "Stormy";
    return "Hurricane Force";
}

function getHumidityCategory(humidity) {
    if (humidity < 20) return "Very Dry";
    if (humidity < 35) return "Dry";
    if (humidity < 50) return "Comfortable";
    if (humidity < 65) return "Slightly Humid";
    if (humidity < 75) return "Moderate Humidity";
    if (humidity < 85) return "High Humidity";
    if (humidity < 95) return "Very Humid";
    return "Extremely Humid";
}

function getUVCategory(uvIndex) {
    if (uvIndex < 3) return "Low";
    if (uvIndex < 6) return "Moderate";
    if (uvIndex < 8) return "High";
    if (uvIndex < 11) return "Very High";
    return "Extreme";
}

function getPressureCategory(pressure) {
    if (pressure < 980) return "Very Low Pressure";
    if (pressure < 1000) return "Low Pressure";
    if (pressure < 1020) return "Normal Pressure";
    if (pressure < 1040) return "High Pressure";
    return "Very High Pressure";
}


export { getUVCategory, getPressureCategory, getWindCategory, getHumidityCategory };
