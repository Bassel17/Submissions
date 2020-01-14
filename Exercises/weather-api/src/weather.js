import React, {Component} from "react";
import "./App.css";
class Weather extends Component{
  render(){
      return(
        <div className="app__main__weather-list__weather-element">
            <div>{this.props.time}</div>
            <img src={this.props.imgSrc} alt="weather"/>
            <div>{this.props.degree}°C</div>
      </div>
      )
  }
}

export default Weather;