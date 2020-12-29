import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src="/images/dwalesska_smalllogo.jpg" className="App-logo" alt="logo" />
				<p>👋 Site currently under construction.</p>
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

export default App;
