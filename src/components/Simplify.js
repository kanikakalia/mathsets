import React from "react";
import { trimAll, trimOne, normalize } from "../utils/main";

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

let Simplify = ({ step }) => {
	return (
		<div>
    	<p>
      	<strong>Input expression:</strong>{" "}
      	{trimAll(step.oldNode.toString())}{" "}
    	</p>
    	<p>
      	<strong>Simplified expression:</strong>{" "}
      	{trimOne(step.newNode.toString())} {" "} ({normalize(step.changeType).capitalize()})
    	</p>
  	</div>
	);
}

export default Simplify;