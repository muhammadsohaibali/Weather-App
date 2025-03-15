import '../css/othercities.css'

const Othercities = ({ city_1, city_2 }) => {
    const ts = (strg, len) => {
        if (!(typeof strg === "string")) return;
        if (strg.length > len) return `${strg.slice(0, len)}...`;
        return strg;
    }

    return (
        <div className="container-othercities">
            <div>
                <span className="other-cities">More From {city_1?.location?.country ? city_1?.location?.country : '-'}</span>
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
