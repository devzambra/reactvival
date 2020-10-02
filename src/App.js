import React, { useState, useEffect } from 'react';

import Header from './components/ui/header/Header';
import Footer from './components/ui/footer/Footer';
import Stats from './components/stats/Stats';
import TotalTime from './components/totalTime/TotalTime';
import PlayButton from './components/playButton/PlayButton';
import ResetButton from './components/resetButton/ResetButton';

import Store from './store/store';
import Loop from './components/loop/Loop';
import GamePanel from './components/ui/gamePanel/GamePanel';

function App() {
	const [tabState, setTabState] = useState('craft');
	const [time, setTime] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const changeTab = (tab) => setTabState(tab);

	const updateTime = () => {
		const newTime = time + 1;

		setTime(newTime);
	}

	useEffect(() => {
		let timer;
		
		if (isPlaying) {
			timer = setInterval(updateTime, 1000);
		}

		return () => {
			if (timer) {
				clearInterval(timer);
			}
		};
	});

	return (
		<Store>
			<Loop time={time} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
			<div className='App flex flex-col min-h-screen'>
				<Header />
				<div className='main flex flex-1 flex-col items-center'>
					<main className='container'>
						<Stats />
						<div className='grid grid-flow-row grid-cols-3 gap-0'>
							<ResetButton />
							<TotalTime time={time} />
							<PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
						</div>
						<GamePanel isPlaying={isPlaying} tabState={tabState} changeTab={changeTab} />
					</main>
				</div>
				<Footer />
			</div>
		</Store>
	);
}

export default App;
