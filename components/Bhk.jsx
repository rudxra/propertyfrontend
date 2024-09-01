import React from "react";
import InputField from "../Components/InputField";

const Bhk = ({ handleChange }) => {
  return (
    <div>
      <h4 >BHK</h4>

      <div className="room-size">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="1BHK"
          title="1BHK"
          name="test"
        />
         <InputField
          handleChange={handleChange}
          value="2BHK"
          title="2BHK"
          name="test"
        />
         <InputField
          handleChange={handleChange}
          value="3BHK"
          title="3BHK"
          name="test"
        />
        
      </div>
    </div>
  );
};

export default Bhk;