import React from 'react';

import Header from './components/ui/header/Header';
import Footer from './components/ui/footer/Footer';
import Stats from './components/stats/Stats';

function App() {
	return (
		<div className='App flex flex-col min-h-screen'>
			<Header />
			<div className='main flex flex-1 flex-col items-center'>
				<main className='container'>
					<Stats />
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;
