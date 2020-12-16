import React, { Component } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;

  .friendDiv {
    border: 1px solid black;
    margin-top: 1rem;
    width: 45%;
    line-height: 0;
  }

  .h3 {
    color: blue;
  }
`;

export default class Friend extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyledContainer>
        <div className="friendDiv">
          <h3 className="h3">{this.props.homie.name}</h3>
          <p>Age: {this.props.homie.age}</p>
          <p>Email: {this.props.homie.email}</p>
        </div>
      </StyledContainer>
    );
  }
}
