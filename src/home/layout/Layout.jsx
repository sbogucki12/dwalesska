import './layout.css';

const Layout = (props) => {
	return (
		<div>
			<div id='layoutHeader'>
                {props.header}
            </div>
			<div id='layoutLanding'>
                {props.landing}
            </div>
            <div>
                {props.row0}
            </div>
            <div>
                {props.row1}
            </div>
            <div>
                {props.row2}
            </div>
            <div>
                {props.row3}
            </div>
            <div>
                {props.footer}
            </div>
		</div>
	);
}

export default Layout;
