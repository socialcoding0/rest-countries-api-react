import React from 'react';
import Search from './Search';
import ApiComponent from './ApiComponent';


export function Main({ input, changeInput, countries, searchFiltered, regionFilter, selectInput }) {

    return (
        <div className='main-wrapper'>
            <div className="container main">
                <Search input={input} changeInput={changeInput} regionFilter={regionFilter} selectInput={selectInput} />
                <ApiComponent countries={countries} searchFiltered={searchFiltered} />
            </div>
        </div>
    )
}


