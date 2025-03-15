function getWindCategory(w) {
    if (w < 5) return "Calm";
    if (w < 15) return "Light Breeze";
    if (w < 30) return "Moderate Breeze";
    if (w < 50) return "Strong Breeze";
    if (w < 75) return "Very Windy";
    if (w < 100) return "Stormy";
    return "Hurricane Force";
}

function getHumidityCategory(h) {
    if (h < 20) return "Very Dry";
    if (h < 35) return "Dry";
    if (h < 50) return "Comfortable";
    if (h < 65) return "Slightly Humid";
    if (h < 75) return "Moderate Humidity";
    if (h < 85) return "High Humidity";
    if (h < 95) return "Very Humid";
    return "Extremely Humid";
}

function getUVCategory(u) {
    if (u < 3) return "Low";
    if (u < 6) return "Moderate";
    if (u < 8) return "High";
    if (u < 11) return "Very High";
    return "Extreme";
}

function getPressureCategory(p) {
    if (p < 980) return "Very Low Pressure";
    if (p < 1000) return "Low Pressure";
    if (p < 1020) return "Normal Pressure";
    if (p < 1040) return "High Pressure";
    return "Very High Pressure";
}


export { getUVCategory, getPressureCategory, getWindCategory, getHumidityCategory };
