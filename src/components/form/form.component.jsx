import React from 'react';
import './form.styles.scss'

const FromInput=({handleChange,lable,...otherProps})=>{
    return(
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
       {
            lable? 
            (   
                <lable className={`${otherProps.value.length ? 'shrink':''} form-input-label`}>
                    {lable}
                </lable>
                
            ):
            null
        }
    </div>)
}
export default FromInput;