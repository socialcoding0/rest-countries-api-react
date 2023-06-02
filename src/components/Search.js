
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Search({ input, changeInput, regionFilter, selectInput }) {

    return (
        <div className='search-container'>
            <div className='input-div'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input onChange={changeInput} value={input} placeholder='Search for a country...' />
            </div>
            <div className='filtered-div'>
                <select id="region-select" value={selectInput} onChange={regionFilter}>
                    <option value="Filter by Region">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div >
    )
}

export default Search