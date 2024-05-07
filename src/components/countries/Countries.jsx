import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, seCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => seCountries(data))
    }, []);

    return (
        <div className="countries_div">
            <h2>Countries: {countries.length}</h2>

            {
                countries.map(country => 
                    <Country key={country.car.cca3} country={country}></Country>
                )
            }
        </div>
    );
};

export default Countries;