import React from 'react'

const Success = ({reset}) => {
	return (
		<section className='content'>
			<div style={{height: '40px'}} />
			<div className='columns is-centered'>
				<div className='column is-half'>
					<div className='box'>
						<h1 className='title'>Login Success!</h1>
						<button className='button is-primary is-medium' onClick={()=>reset()}>
							Reset Login Form
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Success
