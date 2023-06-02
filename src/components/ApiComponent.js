import React from 'react'
import CountryComponent from './CountryComponent';
import { Link } from "react-router-dom";


function ApiComponent({ searchFiltered }) {
    return (
        <div className='api-container'>

            {searchFiltered.map((country) => {
                return <Link to={country.cca3} key={parseInt(country.ccn3)}><CountryComponent country={country} /> </Link>
            })}

        </div>
    )
}

export default ApiComponent;