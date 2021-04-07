import './home.css';
import MainLogoImage from './Studio Beach Logo with Waves Icon.jpg';
import { useState } from 'react';
import Bio from '../bio/Bio';
import HomeContent from './HomeContent';
import Footer from '../footer/Footer';

function Home() {
	const [slideOut, setSlideOut] = useState(false);
	const [showBio, setShowBio] = useState(false);

	let animation = null;
	function handleOnClick() {
		setSlideOut(true);
		setTimeout(() => {
			setShowBio(true);
		}, 1800);
	}

	if (slideOut) {
		animation = 'slideAnimation';
	}

	let view = (
		<main className={animation}>
			<HomeContent handleOnClick={handleOnClick} />
		</main>
	);
	if (showBio) {
		view = (
			<main>
				<Bio />
			</main>
		);
	}

	return (
		<div id="homeContainer">
			<div id="header">
				<header>Header</header>
			</div>
			<div id="mainContainer" >
				<img id="mainBackgroundImage" src={MainLogoImage} alt="DWalesska" title="DWalesska" />
				{view}
			</div>
			<div id="footer">
				<Footer />
			</div>
		</div>
	);
}

export { Home };
