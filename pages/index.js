import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Homepage from '../components/Homepage';
import About from '../components/About';
import Skills from '../components/Skills';
import Software from '../components/Software';
import GraphicDesign from '../components/GraphicDesign';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>Melsonic Portfolio</title>
				<meta name="This is a portfolio website" content="Showcasing skills and works" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>

				<Navbar />

				{/* first image background home */}
				<Homepage />

				{/* introduction about */}
				<About />

				{/* skills */}
				<Skills />

				{/* software */}
				<Software />

				{/* graphic design */}
				<GraphicDesign />

				{/* contact me */}
				<Contact />

				{/* footer */}
				<Footer />

			</main>
		</>
	)
}
