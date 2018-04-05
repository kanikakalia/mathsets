import React from "react";
import CONST from '../constants/constants';



let Find = ({ oprationValue, expressionValue, handleOprationChange, handleExpressionChange, handleSubmit }) => {

	return (
    <div className="field has-addons col-md-12">
			<div className="control col-md-4">
				<select
					style={{ marginTop: "50px" }}
					className="input" value={oprationValue} onChange={handleOprationChange}>
					<option  value="select">Select</option>
					{CONST.OPRATIONS.map((data, index) => (
						<option key={index} value={data.value}>{data.name}</option>
					))}
				</select>
			</div>
      <div className="control col-md-6">
        <input
					name="expression"
          style={{ marginTop: "50px" }}
          className="input"
          type="text"
          placeholder="Enter Equation"
          value={expressionValue}
          onChange={handleExpressionChange}
        />
      </div>
      <div className="control">
        <button
          className="button is-info"
          style={{ marginTop: "50px" }}
          onClick={handleSubmit}
        >
          Get Answer
        </button>
      </div>
    </div>
	);
}

export default Find;
