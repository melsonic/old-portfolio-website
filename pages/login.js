import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Home.module.css';
import { login, logout } from '../slices/userSlice';

export default function Createuser() {

	const iuname = useRef(null);
	const ipword = useRef(null);

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch('http://localhost:3000/api/login', {
			method: 'POST',
			body: JSON.stringify({
				username: iuname.current.value,
				password: ipword.current.value,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		if(response.status == 201) console.log("logged in successfully...");
		console.log(response);
	}

	return (
		<div className="my-12 flex flex-col items-center">
			<h1 className="text-4xl py-8 text-sky-800" >Login form</h1>
			<form className="w-40 flex flex-col items-center" onSubmit={handleSubmit} >
				<input
					type="text"
					name="username"
					id="username"
					placeholder="username"
					className='my-2'
					ref={iuname}
				/>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="password"
					className='my-2'
					ref={ipword}
				/>
				<button type="submit" id="button" className='my-4 rounded-2xl bg-sky-800 text-white py-2 px-4 text-lg' >Submit</button>
			</form>
		</div>
	)
}
