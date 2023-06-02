
import { Link, useLoaderData } from "react-router-dom";
export function CountryDetails({ countries }) {
    const country = useLoaderData();
    return (

        <div className="container country-details">
            <Link to="/" className="back-btn">Back</Link>
            <div className="details">
                <div className="detail-img">
                    <img src={country[0].flags.svg} alt="flags" />
                </div>
                <div className="description-details">
                    <h3>{country[0].name.common}</h3>
                    <div className="other-desc">

                        <ul className="list-1">
                            <li>
                                <div className='des-content'>
                                    <label>Native Name : </label>
                                    <span>{country[0].altSpellings[2]}</span>
                                </div>
                            </li>

                            <li>
                                <div className='des-content'>
                                    <label>Population : </label>
                                    <span>{country[0].population}</span>
                                </div>
                            </li>
                            <li>
                                <div className='des-content'>
                                    <label>Region : </label>
                                    <span>{country[0].region}</span>
                                </div>
                            </li>
                            <li>
                                <div className='des-content'>
                                    <label>Sub Region : </label>
                                    <span>{country[0].subregion}</span>
                                </div>
                            </li>
                            <li>
                                <div className='des-content'>
                                    <label>Capital : </label>
                                    <span>{country[0].capital}</span>
                                </div>
                            </li>
                        </ul>
                        <ul className="list-2">

                            <li>
                                <div className='des-content'>
                                    <label>Top Level Domain : </label>
                                    <span>{country[0].tld}</span>
                                </div>
                            </li>
                            <li>
                                <div className='des-content'>
                                    <label>Currencies : </label>
                                    <span>{Object.values(country[0].currencies)[0].name}</span>
                                </div>
                            </li>

                            <li>
                                <div className='des-content'>
                                    <label>Languages : </label>
                                    {
                                        Object.keys(country[0].languages).map((lan, index) => {
                                            return <span key={index}>{country[0].languages[lan]}, </span>
                                        })
                                    }

                                </div>
                            </li>


                        </ul>
                    </div>
                    <div className="border-countries">
                        <label>Border Countries : </label>

                        <div className="border-div">
                            {country[0].borders && (
                                country[0].borders.map((border, index) => {
                                    const matchingCountry = countries.find(country => country.cca3 === border);
                                    if (matchingCountry) {
                                        return <Link className="border-span" to={`/${matchingCountry.cca3}`} key={index}>{matchingCountry.name.common}</Link>;
                                    }
                                    return null;
                                })
                            )}
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export const countryDetailLoader = async ({ params }) => {
    const { countryid } = params;
    const response = await fetch("https://restcountries.com/v3.1/alpha/" + countryid);
    return response.json();
}


