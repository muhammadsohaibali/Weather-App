async function getRandomCities(countryName) {
    const countryCode = await getCountryCode(countryName === 'USA United States of America' ? 'United States' : countryName);
    if (!countryCode) return { error: "Invalid country name" };
    try {
        const data = await (await fetch(`${process.env.REACT_APP_CITIES}=${countryCode}&${process.env.REACT_APP_CONF}=${process.env.REACT_APP_USER_NAME}`)).json();
        const cities = data.geonames?.filter(c => ["PPL", "PPLA", "PPLC"].includes(c.fcode)).map(c => c.name) || [];
        if (cities.length < 2) return { error: "Not enough cities found" };
        return [...Array(2)].map(() => cities.splice(Math.floor(Math.random() * cities.length), 1)[0]);
    } catch {
        return { error: "Failed to fetch data" };
    }
}

async function getCountryCode(countryName) {
    try {
        return (await (await fetch(`${process.env.REACT_APP_CODE}/${countryName}?fullText=true`)).json())[0]?.cca2 || null;
    } catch {
        return null;
    }
}

export default getRandomCities
