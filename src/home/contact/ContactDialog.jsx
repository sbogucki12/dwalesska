import './contact.css';

//To Do: Fix so that messageData is passing from parent to child
const ContactDialog = (props) => {
	console.log(props)
	return (
		<div>
			<div id="contactDialogContainer">
			<label htmlFor="fName">First Name:</label>
			<input
				type="text"
				id="fName"
				name="fName"
				value={props.fName}
				onChange={(e) => props.handleFormChange(e)}
			/>
			<label htmlFor="lName">Last Name:</label>
			<input
				type="text"
				id="lName"
				name="lName"
				value={props.lName}
				onChange={(e) => props.handleFormChange(e)}
			/>
			<label htmlFor="email">Email:</label>
			<input
				type="text"
				id="email"
				name="email"
				value={props.email}
				onChange={(e) => props.handleFormChange(e)}
			/>
			<label htmlFor="subject">Subject:</label>
			<input
				type="text"
				id="subject"
				name="subject"
				value={props.subject}
				onChange={(e) => props.handleFormChange(e)}
			/>
			<label htmlFor="message">Message:</label>
			<input
				type="text"
				id="message"
				name="message"
				value={props.message}
				onChange={(e) => props.handleFormChange(e)}
			/>
				<button onClick={() => props.setShowDialog(false)}>Send</button>
			</div>
		</div>
	);
};

export default ContactDialog;
