import React from "react";

export default function About() {
	return (
		<div className="flex justify-center items-center my-20 lg:my-40" id="about">

			<div className="max-w-6xl flex flex-col lg:flex-row items-center mx-8">

				{/* image */}
				<img src="portfolio.jpg" alt="my-image" className="w-48  object-cover  rounded-full aspect-square border-4 border-[#575757] mb-12 lg:mr-8 lg:mb-0" />

				{/* about */}
				<p className="text-lg text-justify lg:ml-8 lg:text-left ">
					Welcome to my website. I am a third year computer science undergraduate at National Institute of Technology, Silchar. Throughout these years i have worked on many individual projects alongside my formal education. I have advanced knowledge in java, javascript and python and c. I mainly like to build responsive website with full stack integration and also make it scalable using microservices. Additionally i am a hobbyst graphic designer who uses the open source technologies like inkscape, gimp. I created this site to showcase my work and connect with like minded people.

				</p>

			</div>

		</div>
	)
}
