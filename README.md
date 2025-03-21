# Weather App

A simple and interactive Weather App built using React.js that provides real-time weather updates based on user location and manual searches.

## Live Demo

- **Live Page:** [Weather App](https://muhammadsohaibali.github.io/Weather-App/)
- **Source Code:** [GitHub Repository](https://github.com/muhammadsohaibali/Weather-App/tree/main)

## Features

- Search for any city worldwide
- Real-time location-based weather updates
- Weather information for multiple popular cities
- Responsive user interface for both desktop and mobile
- Dynamic backgrounds that change based on weather conditions
- Detailed weather information including temperature, humidity, and wind speed

## Technologies Used

- **Frontend:** React.js, JavaScript, CSS
- **API:** Weather API & Geonames
- **Deployment:** GitHub Pages

## Installation

### 1. Clone the Repository

```sh
git clone https://github.com/muhammadsohaibali/Weather-App.git
cd Weather-App
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Create a `.env` File

In the root folder of the project, create a file named `.env` and add the following environment variables:

```
REACT_APP_WEATHER_API_URL=https://api.weatherapi.com/v1/forecast.json
REACT_APP_GET_ALL_CITIES=https://secure.geonames.org/searchJSON?country
REACT_APP_COUNTRY_CODE=https://restcountries.com/v3.1/name

REACT_APP_WEATHER_API_KEY=<YOUR-WEATHER-API-KEY>
REACT_APP_USER_NAME=<YOUR-GEONAMES-USERNAME>
```

Replace `<YOUR-WEATHER-API-KEY>` and `<YOUR-GEONAMES-USERNAME>` with your actual API credentials.

### 4. Run the Application Locally

```sh
npm start
```

The application will run on `http://localhost:3000/` by default.

## Deployment

The project is deployed on GitHub Pages.

### Updating the Live Version

To update the live website after making changes, use the following commands:

```sh
git pull origin main --rebase
npm run build
npm run deploy
git add .
git commit -m "Updated Weather App"
git push origin main
```

## Project Structure

```
Weather-App/
│-- public/          # Static assets
│-- src/             # Source code
│   │-- components/  # React components
|   │-- css/         # Images and icons
│   │-- utils/       # JavaScript Functions
|   |-- app.css      # Main app styles
│   │-- App.js       # Main application file
│   │-- index.js     # Entry point
|-- .env             # API Keys & Creds
│-- .gitignore       # Ignored files
│-- package.json     # Dependencies and scripts
│-- README.md        # Project documentation
```

## License

This project is open-source and free to use.

## Author

Developed by [Muhammad Sohaib Ali](https://github.com/muhammadsohaibali).

