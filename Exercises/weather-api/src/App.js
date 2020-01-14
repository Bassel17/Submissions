import React, { Component } from "react";
import "./App.css";
import storm from "./img/weather-icons/storm.svg";
import Search from "./search";
import CurrentWeather from "./currentWeather";
import Weather from './weather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className = "app__navbar">
            <Search value={this.value}/>
            <button className="app__navbar__button">Find Weather</button>
        </header>
        <main className="app__main">
          <CurrentWeather imgSrc={storm}/>
          <div className="app__main__weather-list">
            <Weather time = "04:00" degree="9°C" imgSrc={storm}/>
            <Weather time = "06:00" degree="8°C" imgSrc={storm}/>
            <Weather time = "09:00" degree="14°C" imgSrc={storm}/>
            <Weather time = "12:00" degree="17°C" imgSrc={storm}/>
            <Weather time = "15:00" degree="18°C" imgSrc={storm}/>
            <Weather time = "18:00" degree="16°C" imgSrc={storm}/>
            <Weather time = "21:00" degree="13°C" imgSrc={storm}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
