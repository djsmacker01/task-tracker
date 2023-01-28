import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {

    // const handleClick =(e)=>{
    //     console.log( e, 'Button clicked')
    // }

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        className="btn"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
Button.propTypes = {
text: PropTypes.string,
color: PropTypes.string,
onClick: PropTypes.func,
}


export default Button;
