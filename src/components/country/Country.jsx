import { useState } from 'react';
import './Country.css'
import CountryDetails from '../country_details/CountryDetails';
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
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

            <button style={{ backgroundColor: '#81ecec' }} onClick={() => handleVisitedFlags(flags?.png)}>Visited Flag</button><br /> <br />

            <button onClick={() => handleVisitedCountries(country)}>Visited Country</button>

            <br /><br />

            <button onClick={handleVisited} style={{ backgroundColor: 'skyblue' }}>{visited ? 'Visited' : 'Going'}</button>

            {visited && '    I have visited this country.'}

            <br /><br /><hr />
            <CountryDetails
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            >
            </CountryDetails>

        </div>
    );
};

export default Country;