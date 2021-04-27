import './contact.css';
import { Fragment, useState } from 'react';
import ContactDialog from './ContactDialog';
import { useDispatch } from 'react-redux';
import fName from '../../utils/actions/fName';
import lName from '../../utils/actions/lName';
import email from '../../utils/actions/email';
import subject from '../../utils/actions/subject';
import message from '../../utils/actions/message';

//To Do: Fix so that messageData is passing from parent to child
const Contact = () => {
	const [showContactMessage, setShowContactMessage] = useState(false);
	const [showDialog, setShowDialog] = useState(false);
	const [initialState, setInitialState] = useState({
		fName: 'First',
		lName: 'Last',
		email: 'Email',
		subject: 'Subject',
		message: 'Message',
	});

	const handleChange = (e) => {
		setInitialState({
			...initialState,
			[e.target.name]: e.target.value,
		});
	};

	const dispatch = useDispatch();

	const handleSubmit = () => {
		console.log(initialState);
		dispatch(fName(initialState.fName));
		dispatch(lName(initialState.lName));
		dispatch(email(initialState.email));
		dispatch(subject(initialState.subject));
		dispatch(message(initialState.message));
		setShowDialog(true);
	};

	const initialContact = (
		<Fragment>
			{' '}
			<label htmlFor="fName">First Name:</label>
			<input type="text" id="fName" name="fName" value={initialState.fName} onChange={(e) => handleChange(e)} />
			<label htmlFor="lName">Last Name:</label>
			<input type="text" id="lName" name="lName" value={initialState.lName} onChange={(e) => handleChange(e)} />
			<label htmlFor="email">Email:</label>
			<input type="email" id="email" name="email" value={initialState.email} onChange={(e) => handleChange(e)} />
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
				value={initialState.subject}
				onChange={(e) => handleChange(e)}
			/>
			<label htmlFor="message">Message:</label>
			<input
				type="text"
				id="message"
				name="message"
				value={initialState.message}
				onChange={(e) => handleChange(e)}
			/>
			<div className="contactBtnContainer">
				<button onClick={(initialState) => handleSubmit(initialState)}>Review</button>
			</div>
		</Fragment>
	);

	return (
		<div id="contactContainer">
			<div id="contactTitle">
				<h4><span id='contactText'>Contact</span> <span id='contactDaniaText'>Dania...</span></h4>
			</div>
			<div id="contactFormContainer">{showContactMessage ? contactMessage : initialContact}</div>
			{showDialog ? (
				<div id="contactDialog">
					<ContactDialog setShowDialog={setShowDialog} setShowContactMessage={setShowContactMessage} />
				</div>
			) : null}
		</div>
	);
};

export default Contact;
