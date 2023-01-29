import React from 'react'
import { DiJava, DiJavascript1, DiPython, DiHtml5, DiCss3Full, DiReact } from 'react-icons/di';
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb';
import { SiC, SiCplusplus, SiTailwindcss, SiMaterialui, SiMongodb, SiMysql, SiInkscape, SiGimp } from 'react-icons/si';
import { IoLogoNodejs, IoLogoWordpress } from 'react-icons/io';

export default function Skills() {
	return (
		<div className='bg-[#404040] w-screen pt-12 pb-28 flex flex-col itmes-center' id="skills">
			<header className="text-4xl tracking-widest text-center text-white pb-20">
				SKILLS
			</header>
			<div className="skill-logos grid grid-cols-4 place-content-center place-items-center gap-y-16 xl:mx-40">
				<div className="lang-icon-box">
					<abbr title='java'>
						<DiJava className='lang-icon text-orange-600' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title='javascript'>
						<DiJavascript1 className='lang-icon text-yellow-400' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="c">
						<SiC className='lang-icon text-blue-500' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="python">
						<DiPython className='lang-icon text-sky-700' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="html5">
						<DiHtml5 className='lang-icon text-orange-500' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="css3">
						<DiCss3Full className='lang-icon text-blue-500' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="reactjs">
						<DiReact className='lang-icon text-sky-500' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="next-js">
						<TbBrandNextjs className='lang-icon' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="tailwind-css">
						<TbBrandTailwind className='lang-icon text-sky-400' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="material-ui">
						<SiMaterialui className='lang-icon text-sky-500' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="node-js">
						<IoLogoNodejs className='lang-icon text-emerald-700' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="mongodb">
						<SiMongodb className='lang-icon text-emerald-600' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="mysql">
						<SiMysql className='lang-icon text-sky-700' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="wordpress">
						<IoLogoWordpress className='lang-icon text-sky-600' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="inkscape">
						<SiInkscape className='lang-icon' />
					</abbr>
				</div>
				<div className="lang-icon-box">
					<abbr title="gimp">
						<SiGimp className='lang-icon text-zinc-700' size='1.5rem' />
					</abbr>
				</div>
			</div>
		</div>
	)
}
