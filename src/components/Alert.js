import React from 'react'

const Alert = ({message, handleClick}) => {
	return (
		<div className='notification is-danger'>
			<button className='delete' onClick={()=>handleClick()}/>
			{message}
		</div>
	)
}

export default Alert
