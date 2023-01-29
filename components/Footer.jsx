import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import Navbar from './Navbar';

export default function Footer() {
	return (
		<div>
			<div className='h-96 bg-[#404040] w-screen flex flex-col justify-center items-center'>

				<div className='flex justify-center items-center'>
					<a href="https://www.facebook.com/" target="_blank" rel="noreferrer" >
						<FaFacebookSquare className='footer-icon' />
					</a>
					<a href="https://twitter.com/Melsonic1" target="_blank" rel="noreferrer" >
						<FaTwitterSquare className='footer-icon' />
					</a>
					<a href="https://www.linkedin.com/in/madhurjya-kalita-946286221/" target="_blank" rel="noreferrer" >
						<FaLinkedin className='footer-icon' />
					</a>
					<a href="https://github.com/melsonic" target="_blank" rel="noreferrer" >
						<FaGithubSquare className='footer-icon' />
					</a>
					<a href="mailto:madhurjyakalita2017@gmail.com" target="_blank" rel="noreferrer" >
						<MdMail className='footer-icon' />
					</a>
				</div>

				<div className='flex flex-col items-center py-8 text-white mx-4'>
					<p className='text-center'>
						Email me with any kind of suggestions, collaborations or just want to talk
					</p>
					<p>madhurjyakalita2017@gmail.com</p>
				</div>
			</div>

			<div className='hidden bottom-0 h-16 w-screen justify-center items-center bg-black text-white sm:flex'>
				{/* <div> */}
				<a href="#" className="px-6 text-xl">
					Melsonic
				</a>
				<a href="#about" className="px-6 text-xl">
					About
				</a>
				<a href="#skills" className="px-6 text-xl">
					Skills
				</a>
				<a href="#software" className="px-6 text-xl">
					Software
				</a>
				<a href="#contact" className="px-6 text-xl">
					Contact
				</a>
				{/* </div> */}
			</div>

		</div>
	)
}
