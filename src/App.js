import React, { useState } from 'react';

import Header from './components/ui/header/Header';
import Footer from './components/ui/footer/Footer';
import Stats from './components/stats/Stats';
import TotalTime from './components/totalTime/TotalTime';
import PlayButton from './components/playButton/PlayButton';
import ResetButton from './components/resetButton/ResetButton';
import Notification from './components/ui/Notification';

import Store from './store/store';
import Loop from './components/loop/Loop';
import GamePanel from './components/ui/gamePanel/GamePanel';

function App() {
	const [tabState, setTabState] = useState('craft');

	const changeTab = (tab) => setTabState(tab);

	return (
		<Store>
			<Loop />
			<div className='App flex flex-col min-h-screen'>
				<Header />
				<div className='main flex flex-1 flex-col items-center'>
					<main className='container'>
						<Stats />
						<div className='grid grid-flow-row grid-cols-3 gap-0'>
							<ResetButton />
							<TotalTime />
							<PlayButton />
						</div>
						<GamePanel tabState={tabState} changeTab={changeTab} />
					</main>
				</div>
				<Footer />
				<Notification />
			</div>
		</Store>
	);
}

export default App;
