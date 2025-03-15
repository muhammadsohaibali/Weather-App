import { useEffect, useState } from "react";

import NavBar from "./components/navbar";
import WeatherCard from "./components/weathercard";
import Othercities from "./components/othercities";
import DetailedSection from "./components/detailedsection";
import Hourlysection from "./components/hourlysection";

import fetchWeather from './utils/weather';
import './app.css';

function App() {
  const [autoData, setAutoData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => fetchWeather(latitude, longitude).then(x => setAutoData(x)),
      () => console.error("Geolocation error")
    );
    console.log("HI")
  }, []);

  const handleSearch = (query) => {
    query && fetchWeather(query).then(x => x && setAutoData(x))
  };

  return (
    <div className="container">
      <NavBar weatherData={autoData} onSearch={handleSearch} />
      <div className="sub-container">
        <div className="vertical-divs" style={{ width: '45%' }}>
          <div className="mini-divs-a min-div">
            <WeatherCard searchQuery={autoData} />
          </div>
          <div className="mini-divs-b min-div">
            <Othercities country={autoData?.location?.country} city={autoData?.location?.name} />
          </div>
        </div>
        <div className="vertical-divs" style={{ width: '55%' }}>
          <div className="mini-divs-b min-div">
            <DetailedSection data={autoData} />
          </div>
          <div className="mini-divs-a min-div">
            <Hourlysection data={autoData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
