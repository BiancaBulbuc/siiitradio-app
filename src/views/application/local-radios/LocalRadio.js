import React from 'react';
import axios from 'axios';
import { CardDeck, Card } from 'react-bootstrap';
// import {  NavLink} from 'reactstrap';
// import './MusicRadio.css';
// import { ListGroup} from 'reactstrap';
// import {LinkContainer} from 'react-router-bootstrap';
import { Link } from "react-router-dom";

// import { RadioPage } from '../radiopage/RadioPage';

 
export class LocalRadio extends React.Component {
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
        // const resp =  axios.get(this.apiUrl + "/id");
        // this.setState({ id: resp.data });
    }

     

    async fetchName() {
        const url = this.apiUrl;
        axios.get(url)
        .then(response => {
            let radio = response.data.filter(radios => { return (radios.location === "Romania")});
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
            <div className="main-container">
            <div>
            <h3>Explore LOCAL radios</h3>
            </div>
           
                <div class="cards-layout">
                {this.state.radio.map(radio => 
                <CardDeck  className="radio-card" key={radio}>
                    <Card>
                        <Card.Img className="radio-image" variant="top" src={radio.image}/>
                        <Card.Body>
                        <Card.Title> {radio.name} </Card.Title>
                        <Card.Text key={radio}>
                       
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        
                        <Card.Footer className="card-footer">
                        <Link to= {"/radiopage/" + radio.id }> Listen here
                        </Link>
                        </Card.Footer>
                    </Card>
                </CardDeck>)}
                
                </div>
            </div>
        );
    }
}
   