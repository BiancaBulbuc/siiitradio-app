import React from 'react';
import {Image, Col, Row, Container, Jumbotron, Button } from 'react-bootstrap';
import './team.css';
import axios from 'axios';


export class Team extends React.Component {
    constructor(props) {
        super(props);
        this.apiUrl = "http://localhost:3004/members";
  
        this.state = {
          members: [],
        }
      }
  
      componentDidMount() {
        this.fetchMembers();
      }
  
      async fetchMembers() {
        const url = this.apiUrl;
        axios.get(url).then(response => {
          let members = response.data;
          this.setState({members});
        })
        .catch(err => {
          console.log(err);
        })
      }


    render() {
        return (
         <div>
            <Container className="team-container">
            <h3>Team Members</h3>
                <Row className="card-container">
                    {this.state.members.map(members =>
                    <Col  xs={6} md={4}>
                        <Jumbotron className="member-card">
                        <div className="cards">
                            <Image className="member-img" src={members.image} roundedCircle />
                            <h1>{members.name}</h1>
                            <p>{members.description}</p>
                            <p>
                            <a href={members.facebook}>facebook</a>
                            </p>
                            <p>
                            <a href={members.github}>github</a>
                            </p>
                            </div>
                        </Jumbotron>
                        
                    </Col>)}
                </Row>
            </Container>
         </div>
        );
    }
}