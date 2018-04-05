import React from "react";
import styled from "styled-components";
import { media } from "../utils/main";

const StyledDiv = styled.div`
  font-size: 0.8em;
  background-color: black
  color: green;
  height: 500px;
  width: 800px;
  padding: 10px;
  margin-top: 10px;
  border: 0.06px solid #b3b3b3;
  overflow: auto;
  box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.20);
  ${media.handheld`
    font-size: 0.5em;
    height: 300px;
    width: 300px;
  `}
`;

let Show = ({ renderer }) => {
	return (
		<div>
			<StyledDiv>
				<br />
				{renderer}
			</StyledDiv>
		</div>
	);
};

export default Show;