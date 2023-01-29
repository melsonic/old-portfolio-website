import React, { useEffect } from 'react'
import { TbToiletPaper } from 'react-icons/tb';

export default function Software() {

	const [projects, setProjects] = React.useState(null);

	useEffect(() => {
		fetch('/api/software')
			.then(response => response.json())
			.then(data => setProjects(data))
	}, [])

	return (
		<div className="pb-32 pt-12" id='software'>
			<header className="text-4xl text-center py-12 tracking-widest">
				SOFTWARE
			</header>
			<div className="flex flex-col items-center mx-auto lg:flex-row justify-center">
				{projects?.map((p) => {
					const { id, title, about, techs, link } = p;
					return (
						<div className="w-80 mx-8 my-4 lg:mx-16" key={id}>
							<h1 className='text-center tracking-widest text-3xl py-8 hover:text-blue-600'>
								<a href={link}>
									{title}
								</a>
							</h1>
							<h3 className='text-xl font-bold'>{about}</h3>
							<div>
								{techs.map((techeach, index) => {
									return (
										<p className='pt-4 text-lg' key={index} >
											{`> ${techeach}`}
										</p>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
