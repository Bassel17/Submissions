import React, { Component } from "react";
import "./App.css";
import storm from "./img/weather-icons/storm.svg";
import Search from "./search";
import CurrentWeather from "./currentWeather";
import Weather from './weather';
import FakeWeather from "./data/FakeWeather.json";

const currentWeatherData = FakeWeather.list[0];
const weatherData = FakeWeather.list;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getTime = (fullTime) => {
    const array = fullTime.split(" ");
    const newArray = array[1].split(":");
    return `${newArray[0]}:${newArray[1]}`;
  }

  toCelsius = (tempInKelvin)=>{
    return Math.round(parseFloat(tempInKelvin) - 273.15);
  }

  render() {
    let counter =0;
    return (
      <div className="app">
        <header className = "app__navbar">
            <Search value={this.value}/>
        </header>
        <main className="app__main">
          <CurrentWeather imgSrc={storm} description={currentWeatherData.weather[0].description} minTemp={this.toCelsius(currentWeatherData.main.temp_min)} maxTemp={this.toCelsius(currentWeatherData.main.temp_max)} humidity={currentWeatherData.main.humidity} pressure={currentWeatherData.main.pressure}/>
          <div className="app__main__weather-list">
            { 
            weatherData.map((element)=>{
              counter ++;
              if(counter <= 8){
                return <Weather time = {this.getTime(element.dt_txt)} degree={this.toCelsius(element.main.temp)} imgSrc={storm}/>
              }
            },1)
          }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
