import React, { useContext, useEffect } from 'react';

import { Context } from '../../store/store';
import { setHighScore } from '../../utils/highScore';

import EndGame from '../ui/endGame'

const loop = React.memo(({time, isPlaying, setIsPlaying}) => {
	const [state, setState] = useContext(Context);


	useEffect(() => {
		if (isPlaying && time > 0) {
			setState(s => {
				const updatedState = {
					...s,
				};
			
				if (time % 60 === 0) {
					updatedState.stats.resources = updatedState.stats.resources + 15;
					updatedState.stats.energy = {
						...updatedState.stats.energy,
						current: updatedState.stats.energy.current + 10 <= updatedState.stats.energy.total ? updatedState.stats.energy.current + 10 : updatedState.stats.energy.total,
					};
				}

				if (time % 30 === 0) {
					if (updatedState.stats.health.current >= 1) {
						updatedState.stats.health = {
							...updatedState.stats.health,
							current: updatedState.stats.health.current - 1 >= 0 ? updatedState.stats.health.current - 1 : 0,
						};
					}
			
					updatedState.stats.money = updatedState.stats.money + 40;
				}
			
				if (time % 20 === 0) {
					if (updatedState.stats.hunger.current === 0) {
						updatedState.stats.health = {
							...updatedState.stats.health,
							current: updatedState.stats.health.current - 1 >= 0 ? updatedState.stats.health.current - 1 : 0,
						};
					} else {
						const hungerAmount = Math.floor((Math.random() + 1) * 1.6);
			
						updatedState.stats.hunger = {
							...updatedState.stats.hunger,
							current:
								updatedState.stats.hunger.current - hungerAmount >= 0
									? updatedState.stats.hunger.current - hungerAmount
									: 0,
						};
					}
			
					if (updatedState.stats.thirst.current === 0) {
						updatedState.stats.health = {
							...updatedState.stats.health,
							current: updatedState.stats.health.current - 1 >= 0 ? updatedState.stats.health.current - 1 : 0,
						};
					} else {
						const thirstAmount = Math.floor((Math.random() + 1) * 1.6);
			
						updatedState.stats.thirst = {
							...updatedState.stats.thirst,
							current:
								updatedState.stats.thirst.current - thirstAmount >= 0
									? updatedState.stats.thirst.current - thirstAmount
									: 0,
						};
					}
				}
			
				if (time % 5 === 0) {
					if (updatedState.stats.energy.current >= 2) {
						updatedState.stats.energy = {
							...updatedState.stats.energy,
							current: updatedState.stats.energy.current - 2 >= 0 ? updatedState.stats.energy.current - 2 : 0,
						};
					}
				}
			
				if (updatedState.stats.health.current === 0) {
					setHighScore(time);
					setIsPlaying(false);
					updatedState.endGame = true;
				}
				return updatedState;
			});
		}
	}, [isPlaying, setIsPlaying, setState, time]);

	return (
	<>
		{
			state.endGame && <EndGame time={time} />
		}
	</>);
});

export default loop;
