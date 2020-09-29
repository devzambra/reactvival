import React, { useContext, useEffect } from 'react';

import { Context } from '../../store/store';

const loop = React.memo(() => {
	const [state, setState] = useContext(Context);

	const updateTime = () => {
		setState((s) => {
			const updatedState = {
				...s,
				time: s.time + 1,
			};

			if (updatedState.time % 30 === 0) {
				if (updatedState.stats.health.current >= 1) {
					updatedState.stats.health = {
						...updatedState.stats.health,
						current: updatedState.stats.health.current - 1 >= 0 ? updatedState.stats.health.current - 1 : 0,
					};
				}

				updatedState.stats.money = updatedState.stats.money + 50;

				updatedState.notifications = [
					...updatedState.notifications,
					{ text: 'Health -1', time: 0 },
					{ text: 'Money +50', time: 0 },
				];
			}

			if (updatedState.time % 20 === 0) {
				if (updatedState.stats.hunger.current === 0) {
					updatedState.stats.health = {
						...updatedState.stats.health,
						current: updatedState.stats.health.current - 1 >= 0 ? updatedState.stats.health.current - 1 : 0,
					};
					updatedState.notifications = [...updatedState.notifications, { text: 'Health -1', time: 0 }];
				} else {
					const hungerAmount = Math.floor((Math.random() + 1) * 1.6);

					updatedState.stats.hunger = {
						...updatedState.stats.hunger,
						current:
							updatedState.stats.hunger.current - hungerAmount >= 0
								? updatedState.stats.hunger.current - hungerAmount
								: 0,
					};
					updatedState.notifications = [
						...updatedState.notifications,
						{ shown: false, text: 'Food -' + hungerAmount, time: 0 },
					];
				}

				if (updatedState.stats.thirst.current === 0) {
					updatedState.stats.health = {
						...updatedState.stats.health,
						current: updatedState.stats.health.current - 1 >= 0 ? updatedState.stats.health.current - 1 : 0,
					};
					updatedState.notifications = [...updatedState.notifications, { text: 'Health -1', time: 0 }];
				} else {
					const thirstAmount = Math.floor((Math.random() + 1) * 1.6);

					updatedState.stats.thirst = {
						...updatedState.stats.thirst,
						current:
							updatedState.stats.thirst.current - thirstAmount >= 0
								? updatedState.stats.thirst.current - thirstAmount
								: 0,
					};
					updatedState.notifications = [
						...updatedState.notifications,
						{ shown: false, text: 'Water -' + thirstAmount, time: 0 },
					];
				}
			}

			if (updatedState.time % 5 === 0) {
				if (updatedState.stats.energy.current >= 2) {
					updatedState.stats.energy = {
						...updatedState.stats.energy,
						current: updatedState.stats.energy.current - 2 >= 0 ? updatedState.stats.energy.current - 2 : 0,
					};

					updatedState.notifications = [...updatedState.notifications, { text: 'Energy -2', time: 0 }];
				}
			}

			if (updatedState.stats.health.current === 0) {
				updatedState.isPlaying = false;
			}

			for (let i = 0; i < updatedState.notifications.length; i++) {
				const not = updatedState.notifications[i];

				if (not.time < 5 && updatedState.isPlaying) {
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
