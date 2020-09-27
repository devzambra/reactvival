import React, { useContext, useEffect, useCallback } from 'react';

import { Context } from '../../store/store';

const loop = React.memo(() => {

    const [state, setState] = useContext(Context);


	const updateTime = useCallback(() => {
		const updatedState = {...state};
        updatedState.time = updatedState.time + 1;
        
        updatedState.stats.health.time = updatedState.stats.health.time + 1;
        updatedState.stats.energy.time = updatedState.stats.energy.time + 1;
        updatedState.stats.hunger.time = updatedState.stats.hunger.time + 1;
        updatedState.stats.thirst.time = updatedState.stats.thirst.time + 1;
        updatedState.stats.money.time = updatedState.stats.money.time + 1;

        const inventoryEnergy = updatedState.inventory.filter(i => i.stat === 'energy');

        if (updatedState.time % 120 === 0) {
            updatedState.stats.hunger.time = 0;
            updatedState.stats.hunger.current -= 1;

            updatedState.stats.thirst.time = 0;
            updatedState.stats.thirst.current -= 1;

            updatedState.notifications.push({shown: false, text: 'Food -1', time: 0});
            updatedState.notifications.push({shown: false, text: 'Water -1', time: 0});
        }
        
        if (updatedState.time % 60 === 0) {
            updatedState.stats.health.time = 0;
            updatedState.stats.health.current -= 1;

            updatedState.stats.money.time = 0;
            updatedState.stats.money.current += 50;


            for(let i = 0; i < inventoryEnergy.length; i++) {
                const item = inventoryEnergy[i];
                
                if (!item.max) {
                    console.log('+1')
                    updatedState.stats.energy.current += item.amount;
                } else {
                    console.log('+1 total')
                    updatedState.stats.energy.total += item.amount;
                }
                if (item.type === 'single') {
                    updatedState.inventory.splice(i, 1);
                }
            }

            updatedState.notifications.push({text: 'Health -1', time: 0});
            updatedState.notifications.push({text: 'Money +50', time: 0});
        } 
        
        if (updatedState.time % 30 === 0) {
            updatedState.stats.energy.time = 0;
            updatedState.stats.energy.current -= 1;

            updatedState.notifications.push({text: 'Energy -1', time: 0});
        }

        for (let i = 0; i < updatedState.notifications.length; i++) {
            const not = updatedState.notifications[i]

            if (not.time < 5) {
                not.time += 1;
            } else {
                updatedState.notifications.splice(i, 1);
            }
        }

        setState(updatedState);
        
    }, [setState, state]);

    useEffect(() => {
        let timer;

        if (state.isPlaying) {
            timer = setInterval( updateTime, 1000);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        }
    });

    

    return (
        <></>
    )
});

export default loop;