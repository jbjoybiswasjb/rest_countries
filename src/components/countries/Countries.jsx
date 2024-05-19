import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, seCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => seCountries(data))
    }, []);

    const handleVisitedCountries = country => {
        console.log(country);
    }

    return (
        <div>
            <h2>Countries: {countries.length}</h2>

            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                </ul>
            </div>

            <div className="countries_div">
                {
                    countries.map(country =>
                        <Country
                            key={country?.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}></Country>
                    )
                }
            </div>
        </div>

    );
};

export default Countries;