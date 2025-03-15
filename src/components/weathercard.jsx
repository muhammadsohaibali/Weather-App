import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import weatherBackgrounds from "../utils/weatherGradients";
import { FaLocationArrow } from "react-icons/fa";
import '../css/weathercard.css';

const Weathercard = (props) => {
    const bgStyle = {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background:
            weatherBackgrounds[props.searchQuery?.current?.condition?.code]?.[
            props.searchQuery?.current?.is_day ? "day" : "night"
            ] || weatherBackgrounds.default[props.searchQuery?.current?.is_day ? "day" : "night"],
    };

    return (
        <div className="weather-card mini-divs-a min-div" style={bgStyle}>
            <div className="top-div">
                <div className="loc-div">
                    <i className='bx bxs-map'></i>
                    {props.searchQuery && props.searchQuery.location
                        ? ` ${props.searchQuery.location.name}, ${props.searchQuery.location.country}`
                        : " -"}
                </div>
                <div className="temp-div">
                    <span>
                        {props.searchQuery && props.searchQuery.current
                            ? `${Math.floor(props.searchQuery.current.temp_c)}°C`
                            : "-"}
                    </span>
                    <span className={`min-max-span ${props.searchQuery?.current?.is_day === 0 ? "min-temp" : "max-temp"}`}>
                        {props.searchQuery && props.searchQuery.current ? (
                            props.searchQuery.current.is_day === 0 ? (
                                <>
                                    <FaArrowDown style={{ color: "blue", marginRight: "4px", fontSize: '15px' }} />
                                    {`${props.searchQuery.forecast.forecastday[0].day.mintemp_c}°C`}
                                </>
                            ) : (
                                <>
                                    <FaArrowUp style={{ color: "red", marginRight: "4px", fontSize: '15px' }} />
                                    {`${props.searchQuery.forecast.forecastday[0].day.maxtemp_c}°C`}
                                </>
                            )
                        ) : (
                            " -"
                        )}
                    </span>
                </div>
            </div>
            <div className="date-div">
                <div className="day">
                    {props.searchQuery && props.searchQuery.forecast
                        ? ` ${new Date(props.searchQuery.forecast.forecastday[0].date).toLocaleDateString("en-US", { weekday: "long" })}`
                        : " -"}
                </div>
                <div className="date">
                    {props.searchQuery && props.searchQuery.forecast
                        ? ` ${new Date(props.searchQuery.forecast.forecastday[0].date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }).replace(',', '')}`
                        : " -"}
                </div>
                <div className='date'>
                    {props.searchQuery && props.searchQuery.location
                        ? new Date(props.searchQuery.location.localtime).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true
                        })
                        : " - "}
                </div>
            </div>
            <div className="condition-details-div">
                <div className="condition-col-div">
                    <div className="conditions">
                        {props.searchQuery && props.searchQuery.current
                            ? ` ${props.searchQuery.current.condition.text}`
                            : " -"}
                    </div>
                    <div className="feels-like">
                        {props.searchQuery && props.searchQuery.current
                            ? `Feels Like ${Math.floor(props.searchQuery.current.feelslike_c)}°`
                            : " -"}
                    </div>
                </div>
                <div className="img-col-div">
                    <img className='weather-icon' src={props.searchQuery && props.searchQuery.current && `${props.searchQuery.current.condition.icon}`} alt="" />
                </div>
            </div>
        </div>
    );
};


export default Weathercard;
