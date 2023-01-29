import React, { useState, useEffect } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { IoMenu } from 'react-icons/io5';


export default function Navbar() {

	const [scrolled, setScrolled] = useState(false);

	// display nav items on clicking hamburger menu
	const [clicked, setClicked] = useState(false);

	const changeBg = () => {
		if (window.scrollY > 0 || window.innerWidth <= 640) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	}

	useEffect(() => {
		changeBg();
		window.addEventListener("scroll", changeBg);
		window.addEventListener("resize", changeBg);
	})

	return (
		<div className={scrolled ? 'navbar navbarbg' : 'navbar'}>
			<img src="#" alt="logo" className={`flex text-xl`} />

			{/* menu  */}
			<div className={clicked ? `flex flex-col pt-8 sm:flex-row sm:bg-transparent sm:pt-0 transition-transform` : `hidden sm:flex flex-row sm:bg-transparent`} >

				<a href="#" className="px-6 text-xl py-2 sm:py-0 sm:w-auto" onClick={() => setClicked(false)} >
					Melsonic
				</a>
				<a href="#about" className="px-6 text-xl py-2 sm:py-0 sm:w-auto" onClick={() => setClicked(false)} >
					About
				</a>
				<a href="#skills" className="px-6 text-xl py-2 sm:py-0 sm:w-auto" onClick={() => setClicked(false)} >
					Skills
				</a>
				<a href="#software" className="px-6 text-xl py-2 sm:py-0 sm:w-auto" onClick={() => setClicked(false)} >
					Software
				</a>
				<a href="#contact" className="px-6 text-xl py-2 sm:py-0 sm:w-auto" onClick={() => setClicked(false)} >
					Contact
				</a>
			</div>

			{/* social media icons */}
			<div className='hidden lg:flex'>
				<a href="https://github.com/melsonic" className="px-4 text-xl">
					<GoMarkGithub />
				</a>
				<a href="https://twitter.com/Melsonic1" className="px-4 text-xl">
					<AiFillTwitterCircle />
				</a>
				<a href="https://www.linkedin.com/in/madhurjya-kalita-946286221/" className="px-4 text-xl">
					<AiFillLinkedin />
				</a>
			</div>

			{/* hamburger menu  */}
			<div className='flex text-black text-3xl sm:hidden'>
				<IoMenu onClick={() => setClicked(!clicked)} />
			</div>

		</div>
	)
}
