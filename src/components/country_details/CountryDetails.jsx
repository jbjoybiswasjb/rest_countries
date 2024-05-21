import CountryData from '../country_data/CountryData';

const CountryDetails = (props) => {

    // const { country, handleVisitedCountries, handleVisitedFlags } = props;

    return (
        <div>
            <b>Country Details</b>

            <hr />
            {/* <CountryData
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}
            
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;