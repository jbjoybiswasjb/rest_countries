import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const { name, flags, population, area, ccn3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='country_div'>
            <h4>Name: {name?.common}</h4>
            <img src={flags?.png} alt={name?.common} />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {ccn3}</small></p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited && 'I have visited this country.'}
        </div>
    );
};

export default Country;