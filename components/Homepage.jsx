import React from "react";

export default function Homepage() {
	return (
		<div className="
      w-screen h-screen bg-[url('../public/background.webp')] bg-center bg-fixed flex justify-center items-center bg-cover">
			{/* small intro */}
			<div className="text-white flex flex-col ">
				<h1 className="text-3xl tracking-[0.3em] font-light text-center sm:text-5xl">MADHURJYA KALITA</h1>
				<p className="text-base my-4 text-center sm:text-left sm:text-lg">
					A full-stack web developer passionate for innovative technology and digital media.
				</p>
			</div>
		</div>
	)
}
