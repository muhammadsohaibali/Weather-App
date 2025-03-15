import { useEffect, useState } from "react";
import '../css/hourlysection.css';

const Hourlysection = ({ data }) => {
    const [tempC, settempC] = useState([])

    useEffect(() => {
        if (data?.forecast?.forecastday?.[0]?.hour) {
            settempC(data.forecast.forecastday[0].hour);
        }
    }, [data]);

    return (
        <div className="container-hourlysection">
            <div className="container-items">
                {tempC.map((x, i) => (
                    <div className="items-hourly" key={i}>
                        <div className="div-parts-top">{x.time.split(' ')[1]}</div>
                        <div className="div-parts-mid"><img className="mid-img" src={x.condition.icon} alt="" /></div>
                        <div className="div-parts-mid-bot">{x.temp_f}</div>
                        <div className="div-parts-bot">
                            <span>
                                {Math.floor(x.temp_c)}°C
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hourlysection;