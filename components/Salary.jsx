import React from 'react'
import InputField from "./InputField";

const Salary = ({handleChange, handleClick}) => {
  return (
    
      <div className=''>
        <h4 className=' '>Price-Range</h4>
        
        <div className='price-range'>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Al l
        </label>

        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000k"
          name="test2"
        />
         <InputField
          handleChange={handleChange}
          value={50}
          title="< 50000k"
          name="test2"
        />
         <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000k"
          name="test2"
        />
         <InputField
          handleChange={handleChange}
          value={100}
          title="< 100000k"
          name="test2"
        />
        </div>
      </div>
    
  )
}

export default Salary