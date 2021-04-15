import './header.css';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

const Header = () => {
	const [isEmailHover, setIsEmailHover] = useState(false);

	return (
		<div id="headerContainer">
			<div>
				<h4>header</h4>
			</div>
			<div style={{ marginRight: '5vw' }}>
				<HashLink to="/new#layoutFooter" style={{ textDecoration: 'none' }} >
					<div onMouseEnter={() => setIsEmailHover(true)} onMouseLeave={() => setIsEmailHover(false)}>
						{isEmailHover ? (
							<h6>Contact Dania!</h6>
						) : (
							<span role="img" aria-label="email">
								&#x1f4e7;
							</span>
						)}
					</div>
				</HashLink>
			</div>
		</div>
	);
};

export default Header;
