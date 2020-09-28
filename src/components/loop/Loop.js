import React, { useContext, useEffect } from 'react';

import { Context } from '../../store/store';

const loop = React.memo(() => {
	const [state, setState] = useContext(Context);

	const updateTime = () => {
		setState((s) => {
			const updatedState = {
				...s,
				time: s.time + 1,
				stats: {
					...s.stats,
					health: {
						...s.stats.health,
						time: s.stats.health.time + 1,
					},
					energy: {
						...s.stats.energy,
						time: s.stats.energy.time + 1,
					},
					hunger: {
						...s.stats.hunger,
						time: s.stats.hunger.time + 1,
					},
					thirst: {
						...s.stats.thirst,
						time: s.stats.thirst.time + 1,
					},
					money: {
						...s.stats.money,
						time: s.stats.money.time + 1,
					},
				},
			};

			if (updatedState.time % 60 === 0) {
				updatedState.stats.health = {
					...updatedState.stats.health,
					time: 0,
					current: updatedState.stats.health.current - 1,
				};

				updatedState.stats.money = {
					...updatedState.stats.money,
					time: 0,
					current: updatedState.stats.money.current + 50,
				};

				updatedState.stats.hunger = {
					...updatedState.stats.hunger,
					time: 0,
					current: updatedState.stats.hunger.current - 1,
				};

				updatedState.stats.thirst = {
					...updatedState.stats.thirst,
					time: 0,
					current: updatedState.stats.thirst.current - 1,
				};

				updatedState.notifications = [
					...updatedState.notifications,
					{ shown: false, text: 'Food -1', time: 0 },
					{ shown: false, text: 'Water -1', time: 0 },
					{ text: 'Health -1', time: 0 },
					{ text: 'Money +50', time: 0 },
				];
			}

			if (updatedState.time % 15 === 0) {
				updatedState.stats.energy = {
					...updatedState.stats.energy,
					time: 0,
					current: updatedState.stats.energy.current - 2,
				};

				updatedState.notifications = [...updatedState.notifications, { text: 'Energy -2', time: 0 }];
			}

			for (let i = 0; i < updatedState.notifications.length; i++) {
				const not = updatedState.notifications[i];

				if (not.time < 5) {
					not.time += 1;
				} else {
					updatedState.notifications.splice(i, 1);
				}
			}

			return updatedState;
		});
	};

	useEffect(() => {
		let timer;

		if (state.isPlaying) {
			timer = setInterval(updateTime, 1000);
		}

		return () => {
			if (timer) {
				clearInterval(timer);
			}
		};
	});

	return <></>;
});

export default loop;
