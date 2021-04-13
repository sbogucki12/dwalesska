import './contact.css';
import { Fragment, useState } from 'react';
import ContactDialog from './ContactDialog';

const Contact = () => {
	const [showContactMessage, setShowContactMessage] = useState(false);
	const [showDialog, setShowDialog] = useState(false);

	const initialContact = (
		<Fragment>
			{' '}
			<label htmlFor="fName">First Name:</label>
			<input type="text" id="fName" />
			<label htmlFor="lName">Last Name:</label>
			<input type="text" id="lName" />
			<label htmlFor="email">Email:</label>
			<input type="email" id="email" />
			<div className="contactBtnContainer">
				<button onClick={() => setShowContactMessage(true)}>&#8594;</button>
			</div>
		</Fragment>
	);

	const contactMessage = (
		<Fragment>
			<label htmlFor="subject">Subject:</label>
			<input type="text" id="subject" />
			<label htmlFor="message">Message:</label>
			<input type="text" id="message" />
			<div className="contactBtnContainer">
				<button onClick={() => setShowDialog(true)}>Review</button>
			</div>
		</Fragment>
	);

	return (
		<div id="contactContainer">
			<div id="contactTitle">
				<h4>Contact Dania...</h4>
			</div>
			<div id="contactFormContainer">{showContactMessage ? contactMessage : initialContact}</div>
			{showDialog ? (
				<div id="contactDialog">
					<ContactDialog setShowDialog={setShowDialog} />
				</div>
			) : null}
		</div>
	);
};

export default Contact;
