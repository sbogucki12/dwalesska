const contactReducer = (
	state = {
		fName: 'First',
		lName: 'Last',
		email: 'Email',
		subject: 'Subject',
		message: 'Message',
	},
	action
) => {
	switch (action.type) {
		case 'FNAME':
			return { ...state, fName: action.payload };
		case 'LNAME':
			return { ...state, lName: action.payload };
		case 'EMAIL':
			return { ...state, email: action.payload };
		case 'SUBJECT':
			return { ...state, subject: action.payload };
		case 'MESSAGE':
			return { ...state, message: action.payload };
		default:
			return state;
	}
};

export default contactReducer;
