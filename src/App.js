import React from 'react';

import Header from './components/ui/header/Header';
import Footer from './components/ui/footer/Footer';
import Stats from './components/stats/Stats';
import TotalTime from './components/totalTime/TotalTime'
import PlayButton from './components/playButton/PlayButton'
import ResetButton from './components/resetButton/ResetButton'
import ActionsTabs from './components/actionsTabs/ActionsTabs'
import ActionGrid from './components/actionGrid/ActionGrid'

import Store from './store/store';
import Loop from './components/loop/Loop';

function App() {
	return (
		<Store>
			<Loop />
			<div className='App flex flex-col min-h-screen'>
				<Header />
				<div className='main flex flex-1 flex-col items-center'>
					<main className='container'>
						<Stats />
						<div className="grid grid-flow-row grid-cols-3 gap-0">
							<ResetButton />
							<TotalTime />
							<PlayButton />
						</div>
						<ActionsTabs />
						<ActionGrid />
					</main>
				</div>
				<Footer />
			</div>
		</Store>
	);
}

export default App;
