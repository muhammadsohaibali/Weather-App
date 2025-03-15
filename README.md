# Weather App

A simple and interactive Weather App built using React.js that provides real-time weather updates based on user location and manual searches.

## Live Demo

- **Live Page:** [Weather App](https://muhammadsohaibali.github.io/Weather-App/)
- **Source Code:** [GitHub Repository](https://github.com/muhammadsohaibali/Weather-App)

## Features

- Real-time location-based weather updates
- Search for any city worldwide
- Detailed weather information including temperature, humidity, and wind speed
- Responsive user interface for both desktop and mobile
- Dynamic backgrounds that change based on weather conditions
- Weather information for multiple popular cities

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

### 3. Run the Application Locally

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
