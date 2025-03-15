import { useEffect, useState } from "react";
import fetchWeather from "../utils/weather";
import getRandomCities from "../utils/getcities";
import '../css/othercities.css'

const Othercities = ({ country, city }) => {
    const [cities, setCities] = useState([]);
    const [city_1, setCity_1] = useState(null);
    const [city_2, setCity_2] = useState(null);

    useEffect(() => {
        getRandomCities(country).then(setCities);
    }, [country, city]);

    useEffect(() => {
        if (cities.length === 2) {
            setCity_1(null);
            setCity_2(null);

            fetchWeather(`${cities[0]} ${country}`).then(setCity_1);
            fetchWeather(`${cities[1]} ${country}`).then(setCity_2);
        }
    }, [cities]);

    const ts = (strg, len) => {
        if (!(typeof strg === "string")) return;
        if (strg.length > len) return `${strg.slice(0, len)}...`;
        return strg;
    }

    return (
        <div className="container-othercities">
            <div>
                <span className="other-cities">Other Cities</span>
            </div>
            <div className="other-divs">
                <div className="other-city-details">
                    <div className="div-details-text" style={{ fontSize: '11px' }}>{city_1?.location?.country}</div>
                    <div className="div-details-text" style={{ width: '100px' }}>{ts(city_1?.location?.name,)}</div>
                    <div className="div-details-text" style={{ fontSize: '11px' }}>{city_1?.current?.condition?.text}</div>
                </div>
                <div className="other-city-img">
                    <img src={city_1?.current?.condition?.icon} alt="" />
                </div>
                <div className="other-city-temp">
                    <span>{Math.round(city_1?.current?.temp_c)} °C</span>
                    <span className="temp-fa">{Math.round(city_1?.current?.temp_f)} °F</span>
                </div>
            </div>
            <div className="other-divs">
                <div className="other-city-details">
                    <div className="div-details-text" style={{ fontSize: '11px' }}>{city_2?.location?.country}</div>
                    <div className="div-details-text" style={{ width: '100px' }}>{ts(city_2?.location?.name,)}</div>
                    <div className="div-details-text" style={{ fontSize: '11px' }}>{city_2?.current?.condition?.text}</div>
                </div>
                <div className="other-city-img">
                    <img src={city_2?.current?.condition?.icon} alt="" />
                </div>
                <div className="other-city-temp">
                    <span>{Math.round(city_2?.current?.temp_c)} °C</span>
                    <span className="temp-fa">{Math.round(city_2?.current?.temp_f)} °F</span>
                </div>
            </div>
        </div>
    );
};

export default Othercities;
