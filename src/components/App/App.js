import Footer from '../Footer';
import React from 'react';
import ToastPlayground from '../ToastPlayground';
import ToastProvider from '../ToastProvider/ToastProvider';

function App() {
	return (
		<ToastProvider>
			<ToastPlayground />
			<Footer />
		</ToastProvider>
	);
}

export default App;
