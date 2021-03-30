import './landing.css';
import Logo from '../home/Studio Beach Logo with Waves Icon.jpg';

function Landing() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={Logo} className="App-logo" alt="logo" />
				<p id="logoCaption">👋 Site currently under construction.</p>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<div>
						<img src="/images/ig_icon.svg" className="igIcon" alt="instagram" />
					</div>
					<div>
						{' '}
						<a
							className="App-link"
							href="https://www.instagram.com/dwalesska_coaching/"
							target="_blank"
							rel="noopener noreferrer"
						>
							@dwalesska_coaching
						</a>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Landing;
