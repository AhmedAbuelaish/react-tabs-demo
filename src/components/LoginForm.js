import React from 'react'

const LoginForm = ({
	usernameVal,
	passwordVal,
	handleSubmit,
	handleChangeUsername,
	handleChangePassword
}) => {
    console.log('handleSubmit',handleSubmit)
	return (
		<form onSubmit={handleSubmit}>
			<div className='field'>
				<label className='label'>Username</label>
				<div className='control'>
					<input
						placeholder='Username'
						type='text'
						id='usernameInput'
						className='input is-medium'
						onChange={e => handleChangeUsername(e)}
						value={usernameVal}
					/>
				</div>
			</div>
			<div className='field'>
				<label className='label'>Password</label>
				<div className='control'>
					<input
						placeholder='Password'
						type='password'
						className='input is-medium'
						onChange={e => handleChangePassword(e)}
						value={passwordVal}
					/>
				</div>
			</div>
			<div className='field'>
				<div className='control'>
					<button className='button is-primary is-medium' type='submit'>
						Login
					</button>
				</div>
			</div>
		</form>
	)
}

export default LoginForm
