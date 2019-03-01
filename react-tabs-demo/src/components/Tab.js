import React from 'react'

// Deconstruct props you want instead of using (props) then using {label} = props.label
const Tab = ({label, isActive, handleClick}) => {
  return (
    <li className={isActive ? "is-active" : ""}
        onClick={()=>handleClick()}>
        <a>{label}</a>
    </li>
  )
}

export default Tab
