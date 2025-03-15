import { useEffect, useState } from "react";
import '../css/detailedsection.css'
import { getWindCategory, getHumidityCategory, getPressureCategory, getUVCategory } from '../utils/weatherUtils'

const Othercities = (props) => {

    useEffect(() => {
    }, [])

    return (<>
        <div className="details-desktop">
            <div className="today-container">
                <span className="today-text">
                    Today's Highlight
                </span>
                <div className="today-details">
                    <div className="today-rows col-div">
                        <div className="data-div"><i className='bx bx-wind'></i> Wind Speed</div>
                        <div className="data-div"><span className="number-data">{props?.data?.current?.wind_kph ? `${props?.data?.current?.wind_kph}` : '-'}</span><span className="fe-stat" > km/h</span></div>
                        <div className="data-div"><span className="fe-stat">{getWindCategory(props?.data?.current?.wind_kph && props?.data?.current?.wind_kph)}</span></div>
                    </div>
                    <div className="today-rows col-div">
                        <div className="data-div"><i className='bx bxs-droplet'></i> Humidity</div>
                        <div className="data-div"><span className="number-data">{props?.data?.current?.humidity ? `${props?.data?.current?.humidity}` : '-'}</span><span className="fe-stat" > %</span></div>
                        <div className="data-div"><span className="fe-stat">{getHumidityCategory(props?.data?.current?.humidity && props?.data?.current?.humidity)}</span></div>
                    </div>
                    <div className="today-rows" style={{ width: '50%', gap: '20px' }}>
                        <img src="imgs/sunrise.png" alt="Sunrise" className="icon" />
                        <div className="details">
                            <p className="label">Sunrise</p>
                            <p className="time">{props?.data?.forecast?.forecastday[0]?.astro.sunrise ? `${props?.data?.forecast?.forecastday[0]?.astro.sunrise}` : '-'}</p>
                        </div>
                    </div>
                </div>
                <div className="today-details">
                    <div className="today-rows col-div">
                        <div className="data-div"><i className='bx bxs-sun'></i> UV Index</div>
                        <div className="data-div"><span className="number-data">{props?.data?.current?.uv && props?.data?.current?.uv}</span><span className="fe-stat" > uv</span></div>
                        <div className="data-div"><span className="fe-stat">{getUVCategory(props?.data?.current?.uv && props?.data?.current?.uv)}</span></div>
                    </div>
                    <div className="today-rows col-div">
                        <div className="data-div"><i className='bx bxs-tachometer' ></i> Pressure</div>
                        <div className="data-div"><span className="number-data">{props?.data?.current?.pressure_mb ? `${props?.data?.current?.pressure_mb}` : '-'}</span><span className="fe-stat" > mb</span></div>
                        <div className="data-div"><span className="fe-stat">{getPressureCategory(props?.data?.current?.pressure_mb && props?.data?.current?.pressure_mb)}</span></div>
                    </div>
                    <div className="today-rows" style={{ width: '50%', gap: '20px' }}>
                        <img src="imgs/sunset.png" alt="sunset" className="icon" />
                        <div className="details">
                            <p className="label">Sunset</p>
                            <p className="time">{props?.data?.forecast?.forecastday[0]?.astro.sunset ? `${props?.data?.forecast?.forecastday[0]?.astro.sunset}` : '-'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="details-mobile">
            <div className="today-container">

                <div className="today-rows-mobile" style={{ width: 'calc(100% - 50px)', gap: '20px' }}>
                    <img src="imgs/sunrise.png" alt="Sunrise" className="icon" />
                    <div className="details">
                        <span className="label">Sunrise</span>
                        <span className="time">{props?.data?.forecast?.forecastday[0]?.astro.sunrise ? `${props?.data?.forecast?.forecastday[0]?.astro.sunrise}` : '-'}</span>
                    </div>
                </div>
                <div className="today-rows-mobile" style={{ width: 'calc(100% - 50px)', gap: '20px' }}>
                    <img src="imgs/sunset.png" alt="sunset" className="icon" />
                    <div className="details">
                        <span className="label">Sunset</span>
                        <span className="time">{props?.data?.forecast?.forecastday[0]?.astro.sunset ? `${props?.data?.forecast?.forecastday[0]?.astro.sunset}` : '-'}</span>
                    </div>
                </div>
                <div className="today-details">
                    <div className="today-rows-mobile">some</div>
                    <div className="today-rows-mobile">some</div>
                </div>
                <div className="today-details">
                    <div className="today-rows-mobile">some</div>
                    <div className="today-rows-mobile">some</div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Othercities;
