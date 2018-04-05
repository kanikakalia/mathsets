import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import mathsteps from "mathsteps-test";
import Radio from "./Radio";
import Search from "./Search";
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

class Demo extends Component {
  static displayName = "Demo";

  state = {
    value: "2x + 2x + x + x",
    steps: [],
    simplify: true,
    solve: false
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

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
      value: " "
    });
  };

  handleSolve = (e) => {
    this.setState({
      simplify: false,
      solve: e.target.checked,
      value: " "
    });
  };

  render() {
    const { simplify, solve, value, steps } = this.state;

    return (
      <div>
        <Container>
          <div className="btn-div">
            <Link className="btn-link" to={'/'}>Answers</Link>
          </div>
          <Heading>Enter an equation and get step by step math solutions</Heading>
          <Search
            value={value}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
          <Radio
            simplify={simplify}
            solve={solve}
            handleSimplify={this.handleSimplify}
            handleSolve={this.handleSolve}
          />
          <Steps
            steps={steps}
            simplify={simplify}
            solve={this.state.solve}
          />
        </Container>
      </div>
    );
  }
}

export default Demo;
