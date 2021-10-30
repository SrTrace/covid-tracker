import React,  {useEffect, useState} from 'react';
import {NativeSelect, FormControl} from "@material-ui/core";

import styles  from './CountryPicker.module.css';

import {fetchCountries} from "../../api";

const CountryPicker = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=> {
        const fetchAPI = async ()=> {
            setCountries(await fetchCountries());
        }

        fetchAPI();
    }, []);

    console.log(countries.map((country)=> country));

    if (!countries) return 'Loading...';

    return (
        <FormControl>
            <NativeSelect  className={styles.formControl}>
                <option value="">Global</option>
                {countries.map((country, i)  => {
                    return (
                        <option key={i} value={country}>{country}</option>);
                })}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;