async function getRandomCities(cn) {
    const countryCode = await gcc(cn === 'USA United States of America' ? 'United States' : cn);
    if (!countryCode) return { error: "Invalid country name" };
    try {
        const data = await (await fetch(`${process.env.REACT_APP_GET_ALL_CITIES}=${countryCode}&featureClass=P&orderby=population&maxRows=50&username=${process.env.REACT_APP_USER_NAME}`)).json();
        const cities = data.geonames?.filter(c => ["PPL", "PPLA", "PPLC"].includes(c.fcode)).map(c => c.name) || [];
        if (cities.length < 2) return;
        return [...Array(2)].map(() => cities.splice(Math.floor(Math.random() * cities.length), 1)[0]);
    } catch {
        return;
    }
}

async function gcc(v) {
    try {
        return (await (await fetch(`${process.env.REACT_APP_COUNTRY_CODE}/${v}?fullText=true`)).json())[0]?.cca2 || null;
    } catch {
        return null;
    }
}

export default getRandomCities
