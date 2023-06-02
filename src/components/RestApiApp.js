import React, { useEffect, useState } from 'react';

import axios from 'axios';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import MainLayout from '../layout/MainLayout';
import { CountryDetails, countryDetailLoader } from './CountryDetails';
import { Main } from './Main';

function RestApiApp() {

    const [countries, setCountries] = useState([]);
    const [input, setInput] = useState("");
    const [selectInput, setSelectInput] = useState("Filter by Region");

    const [darkmode, setDarkMode] = useState(false);


    const changeInput = (e) => {
        setInput(e.target.value);
    }

    const regionFilter = (e) => {
        setSelectInput(e.target.value);
    }


    const searchFiltered = countries.filter((country) => {


        return (
            (selectInput === "Filter by Region" || country.region === selectInput) && country.name.common.toLowerCase().includes(input.toLowerCase())
        );

    });


    useEffect(() => {
        axios("https://restcountries.com/v3.1/all").then((data) => (setCountries(data.data))).catch((error) => error)
    }, []);



    const router = createBrowserRouter([
        {
            path: "/", element: <MainLayout darkmode={darkmode} setDarkMode={setDarkMode} />, children: [
                { index: true, element: <Main input={input} changeInput={changeInput} countries={countries} searchFiltered={searchFiltered} regionFilter={regionFilter} selectInput={selectInput} /> },
                { path: "/:countryid", element: <CountryDetails countries={countries} />, loader: countryDetailLoader }
            ]
        }
    ]);

    return (
        <div className='api-app'>
            <RouterProvider router={router} />
        </div>
    )
}

export default RestApiApp;