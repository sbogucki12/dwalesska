import Header from './Header';
import Body from './Body';
import './home.css';
import Layout from './layout/Layout';

function Home() {
	return (
		<div>
			<Layout header={<Header />} body={<Body />} />
		</div>
	);
}

export default Home;
