import React, { useContext, useEffect, useRef, useCallback } from 'react';

import { Context } from '../../store/store';

const loop = React.memo(() => {

    const [state, setState] = useContext(Context);
    let timer = useRef();

	const updateTime = useCallback(() => {
		const updatedState = {...state};
        updatedState.time = updatedState.time + 1;
        
        updatedState.stats.health.time = updatedState.stats.health.time + 1;
        updatedState.stats.energy.time = updatedState.stats.energy.time + 1;
        updatedState.stats.hunger.time = updatedState.stats.hunger.time + 1;
        updatedState.stats.thirst.time = updatedState.stats.thirst.time + 1;
        updatedState.stats.money.time = updatedState.stats.money.time + 1;
        
        if (updatedState.stats.health.time >= 60) {
            updatedState.stats.health.time = 0;
            updatedState.stats.health.current -= 1;
        }

        if (updatedState.stats.energy.time >= 30) {
            updatedState.stats.energy.time = 0;
            updatedState.stats.energy.current -= 1;
        }

        if (updatedState.stats.hunger.time >= 120) {
            updatedState.stats.hunger.time = 0;
            updatedState.stats.hunger.current -= 1;
        }

        if (updatedState.stats.thirst.time >= 120) {
            updatedState.stats.thirst.time = 0;
            updatedState.stats.thirst.current -= 1;
        }

        if (updatedState.stats.money.time >= 60) {
            updatedState.stats.money.time = 0;
            updatedState.stats.money.current += 50;
        }

        setState(updatedState);
        
	}, [setState, state]);

    useEffect(() => {
        if (state.isPlaying === true) {
            timer.current = setTimeout( updateTime, 1000);
        } else if (timer) {
            clearInterval(timer.current);
        }
    }, [state, updateTime]);

    

    return (
        <></>
    )
});

export default loop;