import React, { Component } from "react";
import "./App.css";
import Search from "./search";
import CurrentWeather from "./currentWeather";
import Weather from './weather';
import clear from "./img/weather-icons/clear.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import unknown from "./img/weather-icons/unknown.svg";
import storm from "./img/weather-icons/storm.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData:undefined,
      city:"Beirut"
    };
  }

  componentDidMount() {
    this.recallApi(this.state.city);
  }

  async recallApi(city){
    try{
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=6eb4331c142ff61ec60c501139b8cb96`);
      const results = await response.json();
      if(response.ok){
        this.setState({
          weatherData:results
        });
      }else{
        alert("city not found");
      }
    }catch(e){
      alert('Error: no connection');
    }
  }

  getIconSrc = (id) => {
    if(id<300){
      return storm;
    }else{
      if(id>=300 && id <= 499){
        return drizzle;
      }else{ 
        if(id>=500 && id <= 599){
          return rain;
        }else{
          if(id>=600 && id <= 699){
            return snow;
          }else{
            if(id>=700 && id <= 799){
              return fog;
            }else{
              if(id === 800){
                return clear;
              }else{
                if(id === 801){
                  return partlycloudy;
                }else{
                  if(id>801 && id <= 805){
                    return mostlycloudy;
                  }else{
                    return unknown;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  getTime = (fullTime) => {
    const array = fullTime.split(" ");
    const newArray = array[1].split(":");
    return `${newArray[0]}:${newArray[1]}`;
  }

  toCelsius = (temp)=>{
    return Math.round(parseFloat(temp));
  }

  callbackFunction = (childData)=>{
    this.setState({city: childData});
    this.recallApi(childData);
  }

  render() {
    if(this.state.weatherData === undefined){
      return(<div></div>);
      }else{
        const currentWeather = this.state.weatherData.list[0];
      return (
      <div className="app">
        <header className = "app__navbar">
            <Search value={this.state.city} parentCallback = {this.callbackFunction}/>
        </header>
        <main className="app__main">
          <CurrentWeather imgSrc={this.getIconSrc(currentWeather.weather[0].id)} description={currentWeather.weather[0].description} minTemp={this.toCelsius(currentWeather.main.temp_min)} maxTemp={this.toCelsius(currentWeather.main.temp_max)} humidity={currentWeather.main.humidity} pressure={currentWeather.main.pressure}/>
          <div className="app__main__weather-list">
            { 
            this.state.weatherData.list.map((element,value)=>{
              if(value > 0 && value<=7){
              return <Weather key={value} time = {this.getTime(element.dt_txt)} degree={this.toCelsius(element.main.temp)} imgSrc={this.getIconSrc(element.weather[0].id)}/>
            }
          })
          }
          </div>
        </main>
      </div>
      )
    }
  }
}

export default App;
