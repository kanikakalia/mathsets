import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import mathsteps from "mathsteps-test";
import Radio from "./Radio";
import Find from "./Find";
import Steps from "./Steps";
import { media } from "../utils/main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  ${media.handheld`
    font-size: 1em;
  `}
`;

const Heading = styled.h1`
  margin-top: 20px;
`;

class Answers extends Component {
  static displayName = "Answers";


  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleOprationChange = this.handleOprationChange.bind(this);
    this.handleExpressionChange = this.handleExpressionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleOprationChange = e => {
    this.setState({
      opration: e.target.value
    });
  };
  handleExpressionChange = e => {
    this.setState({
      expression: e.target.value
    });
  };

  handleSubmit(event) {
    console.log('OPRATIONS: ' + this.state.opration +' Expression: ' + this.state.expression);
    const opration = this.state.opration;
    const expression = this.state.expression;
    const url = 'https://newton.now.sh/'+opration+'/'+expression;
    event.preventDefault();
    let s = this
    fetch(url)
    .then(function(data) {
      // Here you get the data to modify as you please
      // console.log(data);
      data.json().then(function (r) {
        // console.log(this.state);
        // th("result" : r)
        s.setState({"result" : r})
      })

      })

  }

  handleClick = (e) => {

    const { simplify, solve, value } = this.state;
    let steps;

    if (simplify) {
      steps = mathsteps.simplifyExpression(value);
    } else if (solve) {
      steps = mathsteps.solveEquation(value);
    }

    if (steps.length !== 0) {
      this.setState({
        steps: steps
      });
    } else {
      alert("OOPS! No steps for " + this.state.value + ". Try a different equation 😄");
    }
  };

  handleSimplify = (e) => {
    this.setState({
      simplify: e.target.checked,
      solve: false,
      value: "2x + 2x + x + x"
    });
  };

  handleSolve = (e) => {
    this.setState({
      simplify: false,
      solve: e.target.checked,
      value: "2x + 2x = 12"
    });
  };

  render() {

    return (

      <div>
        <Container className="container">
          <Heading>Lets get started. Enter an equation {""} and find the answers</Heading>
          <div className="btn-div">
            <Link className="btn-link" to={'/steps'}>Steps</Link>
          </div>
          <Find
            oprationValue={this.state.opration}
            expressionValue={this.state.expression}
            handleOprationChange={this.handleOprationChange}
            handleExpressionChange={this.handleExpressionChange}
            handleSubmit={this.handleSubmit}
          />
          {this.state.result && <div className="panel">
            <p>{this.state.result.result}</p></div>}
        </Container>
      </div>
    );
  }
}

export default Answers;
