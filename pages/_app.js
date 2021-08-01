import Navbar from '../src/components/navbar'
import '../src/scss/styles.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Github Repo Explorer</title>
			</Head>
			<Navbar />
			<div className="page">
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp