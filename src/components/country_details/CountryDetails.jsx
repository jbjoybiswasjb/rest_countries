import CountryData from '../country_data/CountryData';

const CountryDetails = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    return (
        <div>
            <b>Country Details</b>

            <hr />
            <CountryData
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData>
        </div>
    );
};

export default CountryDetails;