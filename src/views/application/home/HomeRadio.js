import React from 'react';
import {ListGroup, Figure, Row, Col } from 'react-bootstrap';
import axios from 'axios';
// import { RadioPage } from './views/radiopage/RadioPage';
// import { Nav, NavItem, NavLink} from 'reactstrap';
// import {Img} from 'react-router-bootstrap';
import './HomeRadio.css';


 
export class HomeRadio extends React.Component {
    constructor (props) {
        super(props);
        this.apiUrl = "http://localhost:3004/radios";

        this.state = {
            radio: [],
            musicRadios: [],
        }
    }
    componentDidMount() {
        this.fetchName();
        // this.fetchImages();
        // this.fetchStreams();
    }

     

    async fetchName() {
        const url = this.apiUrl;
        axios.get(url)
        .then(response => {
            let radio = response.data;
            // console.log(response.data);
            this.setState({radio});
            // console.log(this.state.radio);
        })
        .catch(err => {
            console.log(err);
        });
      }

    render() {
        return (
            <div className="home-container">
                <h3> All Radios</h3>
                <div className="layout">
                    {this.state.radio.map(radio =>
                    <ListGroup>
                    <Figure className="radio-card">
                    <Figure.Image 
                    alt="radio image"
                    src={radio.image}
                    />
                    <Figure.Caption className="link">
                    <a href ={"/radiopage/" + radio.id}>{radio.name}</a>
                    </Figure.Caption>
                    </Figure>
                    </ListGroup>
                    )}
                </div>
             
            </div>
      
            );
        }
    }

;    
