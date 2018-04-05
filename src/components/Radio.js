import React from "react";

let Radio = ({ simplify, handleSimplify, solve, handleSolve }) => {
	return (
    <div className="field has-addons">
      <label className="radio options">
        <input
          name="simplify"
          type="radio"
          checked={simplify}
          onChange={handleSimplify}
        />
        &nbsp;Simplify Expression
      </label>&nbsp;&nbsp;
      <label className="radio options">
        <input
          name="solve"
          type="radio"
          checked={solve}
          onChange={handleSolve}
        />
        &nbsp;Solve Equation
      </label>
    </div>
	);
}

export default Radio;