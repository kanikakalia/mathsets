import React from "react";

let Search = ({ value, handleChange, handleClick }) => {
	return (
    <div className="field has-addons">
      <p className="control">
        <input
          style={{ marginTop: "30px" }}
          className="input"
          type="text"
          placeholder="Start here"
          value={value}
          onChange={handleChange}
        />
      </p>
      <p className="control">
        <button
          className="button is-info"
          style={{ marginTop: "30px" }}
          onClick={handleClick}
        >
          Get steps
        </button>
      </p>
    </div>
	);
}

export default Search;