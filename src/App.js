import React, {Component} from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from "./api";

import image from './images/image.png';

class App extends Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

       this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        console.log(country);
        //fetch the data
        //set the state
    }

    render() {
        const {data} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={data}/>
                <CountryPicker/>
                <Chart/>
            </div>
        );
    }
}

export default App;