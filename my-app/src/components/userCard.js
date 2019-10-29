import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import styled from 'styled-components';

class UserCard extends Component {
  constructor() {
    super();
    this.state = {
      detail: [],
    };
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg src={this.props.detail.avatar_url} />
          <CardBody>
            <Name>
              <CardTitle> {this.props.detail.login} </CardTitle>
            </Name>
            <Followers>
              <CardText> Followers: {this.props.detail.followers} </CardText>
            </Followers>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UserCard;

// styled components:

const Name = styled.h2`
  font-size: 2rem;
  font-family: 'Indie Flower', cursive;
`;

const Followers = styled.h3`
  font-size: 1.5rem;
  font-family: 'Indie Flower', cursive;
`;
