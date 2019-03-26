import React from 'react';
import axios from 'axios';
import { CardDeck, Card } from 'react-bootstrap';
import './MusicRadio.css';
import { Link } from "react-router-dom";


 
export class MusicRadio extends React.Component {
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
    }

     

    async fetchName() {
        const url = this.apiUrl;
        axios.get(url)
        .then(response => {
            let radio = response.data.filter(radios => { return (radios.category === "music")});
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
            <h3>Explore MUSIC radios</h3>
            </div>
           
                <div className="cards-layout">
                {this.state.radio.map(radio => 
                <CardDeck  className="radio-card" key={radio}>
                    <Card className="radio-background">
                        <Card.Img className="radio-image" variant="top" src={radio.image}/>
                        <Card.Body>
                        <Card.Title> {radio.name} </Card.Title>
                        <Card.Text key={radio}>
                       {radio.description}
                        </Card.Text>
                        </Card.Body>
                        
                        <Card.Footer key={radio} className="card-footer">
                        <Link  to= {"/radiopage/" + radio.id}> Listen here
                        </Link>
                        </Card.Footer>
                    </Card>
                </CardDeck>)}
                </div>
            </div>
        );
    }
}
   