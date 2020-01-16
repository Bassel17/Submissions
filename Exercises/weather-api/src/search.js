import React, { Component } from "react";
import "./App.css";
class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
          searchInput:""
        }
    }
    onChangeInput = (event) =>{
        this.setState({
          searchInput:event.target.value
        });
    }

    sendSearchInput = () => {
        this.props.parentCallback(this.state.searchInput);
    }
    render(){
        return(
        <>
            <input className="app__navbar__input" type="text" placeholder="Type in a city name" value={this.state.searchInput} onChange={this.onChangeInput}/>
            <button className="app__navbar__button" onClick={event => {
                this.sendSearchInput(this.state.searchInput);
            }}>Find Weather</button>
        </>
        );
    }

}

export default Search;