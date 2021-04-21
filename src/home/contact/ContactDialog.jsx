import './contact.css';
import { useSelector } from 'react-redux';
import { useState, Fragment } from 'react';

const ContactDialog = (props) => {
	const contactData = useSelector((state) => state);
	const [showSentConfirmation, setShowSentConfirmation] = useState(false);

	const handleSubmit = () => {
		props.setShowContactMessage(false);
		setShowSentConfirmation(true);
	};

	const handleExit = () => {
		props.setShowContactMessage(false);
		props.setShowDialog(false);
	}

	const form = (
		<Fragment>
			{' '}
			<div>
				<label htmlFor="fName">First Name:</label>
				<input
					type="text"
					id="fName"
					name="fName"
					value={contactData.fName}
					onChange={(e) => props.handleFormChange(e)}
				/>
			</div>
			<div>
				<label htmlFor="lName">Last Name:</label>
				<input
					type="text"
					id="lName"
					name="lName"
					value={contactData.lName}
					onChange={(e) => props.handleFormChange(e)}
				/>
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="text"
					id="email"
					name="email"
					value={contactData.email}
					onChange={(e) => props.handleFormChange(e)}
				/>
			</div>
			<div>
				<label htmlFor="subject">Subject:</label>
				<input
					type="text"
					id="subject"
					name="subject"
					value={contactData.subject}
					onChange={(e) => props.handleFormChange(e)}
				/>
			</div>
			<div>
				<label htmlFor="message">Message:</label>
				<input
					type="text"
					id="message"
					name="message"
					value={contactData.message}
					onChange={(e) => props.handleFormChange(e)}
				/>
			</div>
			<div>
				<button onClick={() => handleSubmit()}>Send</button>
			</div>
		</Fragment>
	);

	const sentConfirmation = (
		<div id="sentConfirmationContainer">
			<h4>Sent!</h4>
		</div>
	);
	return (
		<div id='contactDialogContainer'>
			<div id="contactDialogExitContainer">
				<button onClick={() => handleExit()}>Exit</button>
			</div>
			<div>
				{showSentConfirmation ? sentConfirmation : form}
			</div>
		</div>
	);
};

export default ContactDialog;
