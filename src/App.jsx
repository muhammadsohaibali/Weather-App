import { useEffect, useState } from "react";

import NavBar from "./components/navbar";
import WeatherCard from "./components/weathercard";
import Othercities from "./components/othercities";
import DetailedSection from "./components/detailedsection";
import Hourlysection from "./components/hourlysection";

import fetchWeather from './utils/weather';
import getRandomCities from "./utils/getcities";
import './app.css';

function App() {
  const [autoData, setAutoData] = useState(null);

  const [finalData, setfinalData] = useState(null);
  const [cities, setCities] = useState([]);
  const [city_1, setCity_1] = useState(null);
  const [city_2, setCity_2] = useState(null);

  const [f_City_1, setf_City_1] = useState(null);
  const [f_City_2, setf_City_2] = useState(null);

  const handleSearch = (query) => {
    query && middlefetchWeather(query)
  };

  const middlefetchWeather = (a, b) => {
    fetchWeather(a, b).then(x => {
      if (x) {
        setAutoData(x);
        getRandomCities(x.location.country).then(setCities);
      }
    });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => middlefetchWeather(latitude, longitude),
      () => console.error("Geolocation error")
    );
  }, []);

  useEffect(() => {
    if (cities.length === 2) {
      setCity_1(null);
      setCity_2(null);

      fetchWeather(`${cities[0]} ${autoData?.location?.country}`).then(setCity_1);
      fetchWeather(`${cities[1]} ${autoData?.location?.country}`).then(setCity_2);
    }
  }, [cities]);

  useEffect(() => {
    if (cities.length === 2 && city_1 && city_2 && autoData) {
      setf_City_1(city_1)
      setf_City_2(city_2)
      setfinalData(autoData)
    }
  }, [city_1, city_2]);

  return (
    <div className="container">
      <NavBar weatherData={finalData} onSearch={handleSearch} />
      <div className="sub-container">
        <div className="vertical-divs" style={{ width: '45%' }}>
          <div className="mini-divs-a min-div">
            <WeatherCard searchQuery={finalData} />
          </div>
          <div className="mini-divs-b min-div">
            <Othercities city_1={f_City_1} city_2={f_City_2} />
          </div>
        </div>
        <div className="vertical-divs" style={{ width: '55%' }}>
          <div className="mini-divs-b min-div">
            <DetailedSection data={finalData} />
          </div>
          <div className="mini-divs-a min-div">
            <Hourlysection data={finalData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
