import React from 'react'
import cx from "classnames"
const Switch = ({rounded = false,isToggled, onToggle}) => {
    const sliderCX = cx("slider",{
        rounded:rounded
    });
  return (
    <label className='switch'>
        <input type="check-box" checked={isToggled} onChange={onToggle} />
    </label>
  )
}

export default Switch