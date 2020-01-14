import React, { Component } from "react";
import "./App.css";
import storm from "./img/weather-icons/storm.svg";
import Search from "./search";
import CurrentWeather from "./currentWeather";
import Weather from './weather';
import FakeWeather from "./data/FakeWeather.json";

const currentWeatherData = FakeWeather.list[0];

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
    return (
      <div className="app">
        <header className = "app__navbar">
            <Search value={this.value}/>
        </header>
        <main className="app__main">
          <CurrentWeather imgSrc={storm} description={currentWeatherData.weather[0].description} minTemp={this.toCelsius(currentWeatherData.main.temp_min)} maxTemp={this.toCelsius(currentWeatherData.main.temp_max)} humidity={currentWeatherData.main.humidity} pressure={currentWeatherData.main.pressure}/>
          <div className="app__main__weather-list">
          <Weather time = {this.getTime(FakeWeather.list[1].dt_txt)} degree={this.toCelsius(FakeWeather.list[1].main.temp)} imgSrc={storm}/>
          <Weather time = {this.getTime(FakeWeather.list[2].dt_txt)} degree={this.toCelsius(FakeWeather.list[2].main.temp)} imgSrc={storm}/>
          <Weather time = {this.getTime(FakeWeather.list[3].dt_txt)} degree={this.toCelsius(FakeWeather.list[3].main.temp)} imgSrc={storm}/>
          <Weather time = {this.getTime(FakeWeather.list[4].dt_txt)} degree={this.toCelsius(FakeWeather.list[4].main.temp)} imgSrc={storm}/>
          <Weather time = {this.getTime(FakeWeather.list[5].dt_txt)} degree={this.toCelsius(FakeWeather.list[5].main.temp)} imgSrc={storm}/>
          <Weather time = {this.getTime(FakeWeather.list[6].dt_txt)} degree={this.toCelsius(FakeWeather.list[6].main.temp)} imgSrc={storm}/>
          <Weather time = {this.getTime(FakeWeather.list[7].dt_txt)} degree={this.toCelsius(FakeWeather.list[7].main.temp)} imgSrc={storm}/>
          <Weather time = {this.getTime(FakeWeather.list[8].dt_txt)} degree={this.toCelsius(FakeWeather.list[8].main.temp)} imgSrc={storm}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
