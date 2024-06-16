import React from 'react'

function GenderCheckbox() {
  return (
    <div className='flex justify-evenly items-center m-2'>
        
        <div className='form-control'>
              <label className='label gap-2 cursor-pointer'>
                <span className='label-text'>Male</span>
                <input type="checkbox" className='checkbox border-slate-500'/>
              </label>
        </div>
        
        <div className='form-control'>
              <label className='label gap-2 cursor-pointer'>
                <span className='label-text'>Female</span>
                <input type="checkbox" className='checkbox border-slate-500'/>
              </label>
        </div>

    </div>
  )
}

export default GenderCheckbox
