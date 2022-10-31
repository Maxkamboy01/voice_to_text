import React from "react";
import { useState } from "react";
import "./forminput.css";

function FormInput(props) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  const { label, errorMessage, id, onChange, ...inputProps } = props;
  return (
    <div className="form_input">
      <label className="login_labels">{label}</label>
      <input className="login_inputs"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={()=>inputProps.name==="confirmpassword" &&setFocused(true)}
        focused={focused.toString()}
      />
      <span className="login_span">{errorMessage}</span>
    </div>
  );
}

export default FormInput;
