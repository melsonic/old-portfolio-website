import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Home.module.css';
import { login, logout } from '../slices/userSlice';

export default function Createuser() {

	var iname = useRef(null);
	const iemail = useRef(null);
	const iuname = useRef(null);
	const ipword = useRef(null);
	const icountry = useRef(null);
	const iphone = useRef(null);

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch('http://localhost:3000/api/users/register', {
			method: 'POST',
			body: JSON.stringify({
				name: iname.current.value,
				email: iemail.current.value,
				username: iuname.current.value,
				password: ipword.current.value,
				country: icountry.current.value,
				phone: iphone.current.value
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		if (response.status == 201) console.log("user saved successfully...");
		console.log(response);
	}

	return (
		<div className="my-12 flex flex-col items-center">
			<h1 className="text-4xl py-8 text-sky-800" >Signup form</h1>
			<form className="w-40 flex flex-col items-center" onSubmit={handleSubmit} >
				<input
					type="text"
					name="name"
					id="name"
					placeholder="name"
					className='my-2'
					ref={iname}
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="email"
					className='my-2'
					ref={iemail}
				/>
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
				<input
					type="text"
					name="country"
					id="country"
					placeholder="country"
					className='my-2'
					ref={icountry}
				/>
				<input
					type="tel"
					name="phone"
					id="phone"
					placeholder="phone"
					className='my-2'
					ref={iphone}
				/>
				<button type="submit" id="button" className='my-4 rounded-2xl bg-sky-800 text-white py-2 px-4 text-lg' >Submit</button>
			</form>
		</div>
	)
}
