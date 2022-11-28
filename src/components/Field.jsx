import React from "react";

export default class Field extends React.Component{
  render(){
    const { label, value, onChange, type, hint } = this.props
    return (
      <div className="Field">
        <div className="Field__Label">{label}</div>
        {type === "password" ? (
        <input 
        className="Field__Input" 
        name={label} 
        onChange={onChange} 
        type={type} 
        value={value}
        />
        ) : (
        <input 
        className="Field__Input" 
        name={label} 
        onChange={onChange} 
        type={type} 
        value={value}
        />
        )}
        {!!hint && (<div className="Field__HelperMessage" >{hint}</div>)}
      </div>
    );
  }
}
