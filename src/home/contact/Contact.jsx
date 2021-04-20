import './contact.css';
import { Fragment, useState } from 'react';
import ContactDialog from './ContactDialog';


//To Do: Fix so that messageData is passing from parent to child
const Contact = () => {
	const [showContactMessage, setShowContactMessage] = useState(false);
	const [showDialog, setShowDialog] = useState(false);
	const [messageData, setMessageData] = useState({
		fName: '',
		lName: '',
		email: '',
		subject: '',
		message: ''
		});

	const handleFormChange = (e) => {
		setMessageData({
			[e.target.name]: e.target.value,
		});		
	};

	const initialContact = (
		<Fragment>
			{' '}
			<label htmlFor="fName">First Name:</label>
			<input
				type="text"
				id="fName"
				name="fName"
				value={messageData.fName}
				onChange={(e) => handleFormChange(e)}
			/>
			<label htmlFor="lName">Last Name:</label>
			<input
				type="text"
				id="lName"
				name="lName"
				value={messageData.lName}
				onChange={(e) => handleFormChange(e)}
			/>
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				id="email"
				name="email"
				value={messageData.email}
				onChange={(e) => handleFormChange(e)}
			/>
			<div className="contactBtnContainer">
				<button onClick={() => setShowContactMessage(true)}>&#8594;</button>
			</div>
		</Fragment>
	);

	const contactMessage = (
		<Fragment>
			<label htmlFor="subject">Subject:</label>
			<input
				type="text"
				id="subject"
				name="subject"
				value={messageData.subject}
				onChange={(e) => handleFormChange(e)}
			/>
			<label htmlFor="message">Message:</label>
			<input
				type="text"
				id="message"
				name="message"
				value={messageData.message}
				onChange={(e) => handleFormChange(e)}
			/>
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
					<ContactDialog 
					setShowDialog={setShowDialog} 
					fName={messageData.fName}
					lName={messageData.lName}
					email={messageData.email}
					subject={messageData.subject}
					message={messageData.message}  
					handleFormChange={handleFormChange}/>
				</div>
			) : null}
		</div>
	);
};

export default Contact;
