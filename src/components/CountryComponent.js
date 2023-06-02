import React from 'react'

function CountryComponent({ country }) {

    return (
        <div className='country-content'>
            <img className='country-flag' src={country.flags.png} />
            <div className='description'>
                <h4>{country.name.common}</h4>
                <div className='des-content population'>
                    <label>Population : </label>
                    <span>{country.population}</span>
                </div>
                <div className='des-content region'>
                    <label>Region : </label>
                    <span>{country.region}</span>
                </div>
                <div className='des-content capital'>
                    <label>Capital : </label>
                    <span>{country.capital}</span>
                </div>

            </div>
        </div >
    )
}

export default CountryComponent