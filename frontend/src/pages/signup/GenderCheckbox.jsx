import React from 'react'

function GenderCheckbox({onCheckboxChange, selectedGender}) {
  return (
    <div className='flex justify-evenly items-center m-2'>
        
        <div className='form-control'>
              <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
                <span className='label-text'>Male</span>
                <input type="checkbox" className='checkbox border-slate-500 hover:scale-[120%] duration-150'
                       checked={selectedGender === "male"}
                       onChange={()=>{
                        onCheckboxChange('male')
                       }}/>
              </label>
        </div>
        
        <div className='form-control'>
              <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""} `}>
                <span className='label-text'>Female</span>
                <input type="checkbox" className='checkbox selected border-slate-500 hover:scale-[120%] duration-150'
                        checked={selectedGender === 'female'}
                        onChange={()=>{
                          onCheckboxChange('female')
                        }}/>
              </label>
        </div>

    </div>
  )
}

export default GenderCheckbox
