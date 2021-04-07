import './bio.css';
import MainDaniaBackgroundImage from './ProfilePlaceholderSuit.png';

function Bio() {
	return (
		<div id="bioContainer">
			<div id="bioContentContainer">
				<img id="mainDaniaBackgroundImage" src={MainDaniaBackgroundImage} alt="DWalesska" title="DWalesska" />
				<div id="bioContentCard">
					<h1>Bio</h1>
				</div>
			</div>
		</div>
	);
}

export default Bio;
