import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountries }) => {
    const { name, flags, population, area, ccn3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country_div ${visited && 'visited_country_background'}`}>
            <h4 style={{ color: visited ? 'purple' : 'white', backgroundColor: visited ? 'aqua' : 'gray', padding: '1em', borderRadius: '1em' }}>Name: {name?.common}</h4>

            <img src={flags?.png} alt={name?.common} />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {ccn3}</small></p>

            <button onClick={() => handleVisitedCountries(country)}>Visited Country</button>

            <br /><br />

            <button onClick={handleVisited} style={{ backgroundColor: 'skyblue' }}>{visited ? 'Visited' : 'Going'}</button>

            {visited && '    I have visited this country.'}
        </div>
    );
};

export default Country;