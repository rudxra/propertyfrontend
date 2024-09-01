import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="">Location</h4>

      <div className="location">
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
          value="Mumbai"
          title="Mumbai"
          name="test"
        />
         <InputField
          handleChange={handleChange}
          value="Delhi"
          title="Delhi"
          name="test"
        />
         <InputField
          handleChange={handleChange}
          value="Bangalore"
          title="Bangalore"
          name="test"
        />
         <InputField
          handleChange={handleChange}
          value="Hyderabad"
          title="Hyderabad"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;