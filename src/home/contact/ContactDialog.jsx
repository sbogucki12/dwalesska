import './contact.css';
import { useSelector } from 'react-redux';

const ContactDialog = (props) => {
	const contactData = useSelector((state) => state.contact);

	const handleSubmit = () => {
		props.setShowContactMessage(false);
		props.setShowDialog(false);
	};
	return (
		<div>
			<div id="contactDialogExitContainer">
				<button onClick={() => handleSubmit()}>Exit</button>
			</div>
			<div id="contactDialogContainer">
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
				<button onClick={() => handleSubmit()}>Send</button>
			</div>
		</div>
	);
};

export default ContactDialog;
