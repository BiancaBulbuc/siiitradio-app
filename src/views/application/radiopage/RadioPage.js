import React from 'react';
import axios from 'axios';
import './RadioPage.css';
import { Card, Button, Image, ButtonToolbar } from 'react-bootstrap';
import { SocialShare } from './SocialShare';
import   UserContext   from '../../../shared/UserContext/UserContext';
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

    render() {
        return (
            <UserContext.Consumer>
                { (function (value) {
                    return(
                        <div>
                        {this.state.radio.map(radio =>
                            <Card className="card mb-3 radio-page-container" key={radio.id}>
                            <Card.Body>
                                <Card.Text className="image-name-buttons">
                                    <div className="col-md-4">
                                        <Image src={radio.coverimage} className="cover-image" alt="coverimage"></Image>
                                    </div>
                                    <div className="card-play"> 
                                        <Image src={radio.image} className="card-img" alt="radioimage"></Image>
                                    <h5 className="card-title">{radio.name}</h5>
                                    <ButtonToolbar className="button-group">
                                        <Button className="button" variant="outline-warning">Favourite</Button>
                                        <SocialShare></SocialShare>
                                    </ButtonToolbar>
                                    </div>
                                </Card.Text>
                                <Card.Text >
                                    <audio className="play-audio" controls autoPlay="autoplay">
                                    <source  src={radio.streamURL} type="audio/mp3"/>
                                    </audio>
                                    <p className="card-description">{radio.description}</p>
                                </Card.Text>
                            </Card.Body>
                            </Card>)}
                        </div>);
                    }).bind(this)
                }
            </UserContext.Consumer>
        );
    }  
}