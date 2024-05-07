import { useState } from "react";

const Countries = () => {

    const [countries, seCountries] = useState([]);

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
        </div>
    );
};

export default Countries;