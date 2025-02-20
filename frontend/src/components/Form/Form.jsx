import React from "react";
import './Form.css';

const Form = ({ fields }) => {
  return (
    <form action="">
        <div className="head">Login Form</div>
        <div className="form-container">
            <div className="form-control">
                <label htmlFor="">UserName: </label>
                <input type="text" name="" id="" />
            </div>
            <div className="form-control">
                <label htmlFor="">UserName: </label>
                <input type="text" name="" id="" />
            </div>
            <button className="submit-btn" type="submit">
                Submit
            </button>
        </div>
    </form>
  );
};

export default Form;
