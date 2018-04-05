import React, { Component } from "react";
import {Router, Route} from 'react-router';
import styled from "styled-components";
import { media } from "../utils/main";
import Steps from "./Demo";
import Answers from "./Answers";

const Heading = styled.div`
  font-family: AvenirNext-Regular;
  font-size: 64px;
  color: #cocac4;
  letter-spacing: 10.84px;
  margin-top: 30px;
  ${media.handheld`
    font-size: 40px;
    letter-spacing: 7px;
    margin-top: 20px;
  `}
`;

const Quote = styled.p`
  font-family: AvenirNext-Regular;
  font-size: 18px;
  color: #4A4A4A;
  letter-spacing: 5.14px;
  margin-top: 5px;
  padding: 15px;
  ${media.handheld`
    font-size: 10px;
    letter-spacing: 1px;
    margin-top: 2px;
    padding: 10px;
  `}
`;

const StyledDiv = styled.div`
  padding: 20px;
`;

const NameSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Header extends Component {
  static displayName = "Header";

  render() {
    return (
      <StyledDiv>
        <NameSpace>
          <Heading>Mαth∫etΣs</Heading>
        </NameSpace>
      </StyledDiv>
    );
  }
}

export default Header;
