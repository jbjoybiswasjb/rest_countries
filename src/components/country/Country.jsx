import './Country.css'
const Country = ({country}) => {
    const {name, flags, population, area} = country;
    return (
        <div className='country_div'>
            <h4>Name: {name?.common}</h4>
            <img src={flags?.png} alt={name?.common} />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;