import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<div className='dark:bg-gray-900 bg-gray-50 min-h-screen text-gray-800 dark:text-gray-100'>
			<Component {...pageProps} />
		</div>
	);
}
