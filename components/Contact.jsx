import React from 'react'

export default function Contact() {
	return (
		<div className=' py-20' id="contact">
			<header className='text-4xl tracking-widest py-8 text-center'>
				CONTACT ME
			</header>
			<form action="#" method="post" className="flex flex-col justify-center items-center">
				<div className='flex justify-between w-96 my-4'>
					<input type="text" name="name" id="name" placeholder="name" className="w-44" />
					<input type="email" name="email" id="email" placeholder="email" className='w-44' />
				</div>
				<input type="text" name="subject" id="subject" placeholder="subject" className='my-4' />
				<input type="text" name="message" id="message" placeholder="message" className='my-4' />

				<button type="submit" className='my-8 bg-[#1FA6CA] p-4 w-32 rounded-full text-white'>Say Hi</button>

			</form>
		</div>
	)
}
