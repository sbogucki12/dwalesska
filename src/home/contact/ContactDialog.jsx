import './contact.css';

const ContactDialog = (props) => {
	return (
		<div>
			<div id="contactDialogContainer">
				<p>First Name</p>
				<p>Last Name</p>
				<p>Email</p>
				<p>Subject</p>
				<p>Message</p>
				<button onClick={() => props.setShowDialog(false)}>Send</button>
			</div>
		</div>
	);
};

export default ContactDialog;
