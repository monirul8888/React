import React from 'react';
import {use} from "react";
import Country from './Country';
const Countries = ({promiseCountries}) => {
    const countries = use(promiseCountries);
    console.log(countries);

    return (
        <div>
            <h1>Total Country = {countries.length}</h1>
            {
                countries.map(country => <Country country={country}></Country> )
            }
        </div>
    )
};

export default Countries;