import axios from "axios";

const url = "https://covid19.mathdro.id/api";

//this api needs checkout
/*https://disease.sh/v3/covid-19/countries -- List of all countries
    https://disease.sh/v3/covid-19/all -- Global data
    https://disease.sh/v3/covid-19/countries/{iso2/iso3} -- Country Count
  */

export const fetchData = async () => {
  try {
      const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

      return  {confirmed, recovered, deaths, lastUpdate,};
  } catch (error) {
      console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
      const {data} = await axios.get(`${url}/daily`);

      const modifiedData = data.map((dailyData) => ({
          confirmed: dailyData.confirmed.total,
          deaths: dailyData.deaths.total,
          date: dailyData.reportDate,
      }));

      return modifiedData;
  }  catch (error) {
      console.log(error);
  }
};

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);

       return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}