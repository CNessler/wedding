import React from "react";

const CheckBox = props => {
  return (
    <div className="form-group">
      <label for={props.name} className="form-label">
        {props.title}
      </label>
            <input
            id={props.name}
            name={props.name}
            onChange={props.handleChange}
            value={option}
            checked={props.selectedOptions.indexOf(option) > -1}
            type="checkbox"
            />
      </div>
  );
};

export default CheckBox;
