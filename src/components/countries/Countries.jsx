import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, seCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => seCountries(data))
    }, []);

    const handleVisitedCountries = country => {
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        console.log(flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h2>Countries: {countries.length}</h2>

            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {visitedCountries.map(country => <li key={country?.cca3}>{country?.name?.common}</li>)}
                </ul>
            </div>

            <div>
                {visitedFlags.map((flag, index )=> <img
                src={flag}
                key={index}
                className='visited_flags'></img>)}
            </div>

            <div className="countries_div">
                {
                    countries.map(country =>
                        <Country
                            key={country?.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlags={handleVisitedFlags}></Country>
                    )
                }
            </div>
        </div>

    );
};

export default Countries;