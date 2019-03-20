import React from 'react';
import axios from 'axios';
import { builtinModules } from 'module';
// import {CardDeck, Card, Button } from 'react-bootstrap';
// import './MusicRadio.css';
// import { ListGroup} from 'reactstrap';
// import {ListGroup} from 'react-router-bootstrap';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 
export class RadioPage extends React.Component {

    ID = null;

    constructor (props) {
        super(props);
        this.apiUrl = "http://localhost:3004/radios";
        this.ID = parseInt(this.props.match.params.radioId);

        this.state = {
            radio: [],
            radioId: [],
       

        }
    }

    componentDidMount() {
        this.fetchId();
        // this.fetchRadioById();
       
    }

     

    async fetchId() {
        const url = this.apiUrl;
        axios.get(url)
        .then((response) => {
            let radio = response.data.filter(item => item.id === this.ID);
            this.setState({radio});
        })
        .catch(err => {
            console.log(err);
        });
      }

    //   async fetchRadioById() {
    //     const url =  this.apiUrl;
    //     axios.get(url)
    //     .then(response => {
    //         let radioById = response.data;
    //         console.log(radioById);
    //         this.setState({radioById});
    //         // console.log(this.state.radio);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    //   }
      

    render() {
         
        return (
            
            <div>
                 <h5 className="card-title"> Radio id: {this.ID}</h5>
                 {this.state.radio.map(radio => 
                <div className="card mb-3" key={radio.id}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={radio.image} className="card-img" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{radio.name}</h5>
                                <p className="card-text">{radio.description}</p>
                                <p className="card-text"> 
                                    <audio controls autoPlay="">
                                        <source src={radio.streamURL} type="audio/mp3"/>
                                    </audio>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                 )}
            </div>
        );
    }  
}