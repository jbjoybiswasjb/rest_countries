const Country = ({country}) => {
    const {name, flags} = country;
    return (
        <div className='country_div'>
            <h4>Name: {name?.common}</h4>
            <img src={flags?.png} alt={name?.common} />
        </div>
    );
};

export default Country;