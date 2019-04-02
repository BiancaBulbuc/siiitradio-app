import React from 'react';
import './Search.css';
import axios from 'axios';
import {Suggestions} from '../../shared/suggestions/Suggestions';
import "./Search.css";
// import { Form, FormControl, Button } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import SuggestionInputSearch from 'suggestion-react-input-search'; 
// import SearchField from "react-search-field";
// import logo from "./logo.png";  
 

const API_URL = 'http://localhost:3004/radios';

export class Search extends React.Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(API_URL)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
        console.log(data)
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form className=".search-box">
        <input className ="search-input"
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
} 









 

