import React from "react";
import { normalize } from "../utils/main";

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

let Solve = ({ step, i }) => {
	return (
		<div>
    	<strong>
      	Step {i + 1}
    	</strong>
    	<p>
      	Previous expression : {step.oldEquation.print()}
    	</p>
    	<p>
      	New expression: {step.newEquation.print()} {" "}
      	({normalize(step.changeType).capitalize()})
    	</p>
  	</div>
	);
}

export default Solve;