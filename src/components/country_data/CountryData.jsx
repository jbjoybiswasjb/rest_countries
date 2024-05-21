const CountryData = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    console.log("Country data: ", country, handleVisitedCountries, handleVisitedFlags);
    return (
        <div>
            <p>Country data: {country?.name?.common}</p>
        </div>
    );
};

export default CountryData;