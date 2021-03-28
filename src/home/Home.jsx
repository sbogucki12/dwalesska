import './home.css';
import PlaceholderImage from './ProfilePlaceholderSuit.png';
import { useState } from 'react';
import Bio from '../bio/Bio';
import HomeContent from './HomeContent';

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
				<img id="mainBackgroundImage" src={PlaceholderImage} alt="DWalesska" title="DWalesska" />
				{view}
			</div>
			<div id="footer">
				<div>Footer</div>
			</div>
		</div>
	);
}

export default Home;
