import "../css/navbar.css";
import dls from "../utils/delaySrch";

import { useState, useCallback } from "react";

export default function NavBar({ onSearch, weatherData, srchColor }) {
    const [inputValue, setInputValue] = useState("");

    const delayedSearch = useCallback(dls(onSearch, 400), [onSearch]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        delayedSearch(e.target.value);
    };

    const hour = weatherData?.location?.localtime ? parseInt(weatherData?.location?.localtime.split(" ")[1].split(":")[0]) : 0;

    return (
        <nav className="navbar">
            <h1 className="greet">
                {hour >= 5 && hour < 12
                    ? "Good Morning"
                    : hour >= 12 && hour < 17
                        ? "Good Afternoon"
                        : hour >= 17 && hour < 21
                            ? "Good Evening"
                            : "Good Night"}
            </h1>
            <div className="search-container">
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        value={inputValue}
                        style={{ boxShadow: srchColor ? '0px 0px 3px 2px solid red' : 'none' }}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </nav>
    );
}
