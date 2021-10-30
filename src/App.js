import React, {Component} from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from "./api";

class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Cards/>
                <Chart/>
                <CountryPicker/>
            </div>
        );
    }
}

export default App;