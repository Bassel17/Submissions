import React, { Component } from "react";
import "./App.css";

class CurrentWeather extends Component{
    render(){
        return(
            <div className="app__main__weather">
                <img className="app__main__weather__image" src={this.props.imgSrc} alt="storm icon"/>
                <div className="app__main__weather__description">overcast clouds</div>
                <div className="app__main__weather__Temperature"><b>Temperature</b> 10 to 11°C</div>
                <div className="app__main__weather__details">
                <div className="app__main__weather__details__Humidity"><b>Humidity</b> 78%</div>
                <div className="app__main__weather__details__Pressure"><b>Pressure</b> 1008.48</div>
                </div>
          </div>
        );
    }
}

export default CurrentWeather;