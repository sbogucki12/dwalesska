import '../home.css';

function Layout(props) {
	return (
		<div id='layoutContainer'>
			<div>
                {props.header}
            </div>
			<div>
                {props.body}
            </div>
		</div>
	);
}

export default Layout;
