import React, { useContext, useEffect, useRef, useCallback } from 'react';

import { Context } from '../../store/store';

const loop = React.memo(() => {

    const [state, setState] = useContext(Context);
    let timer = useRef();

	const updateTime = useCallback(() => {
		const updatedState = {...state};
		updatedState.time.total = updatedState.time.total + 1;
        updatedState.time.current = updatedState.time.current + 1;
        
        if (updatedState.time.current >= 5) {
            updatedState.time.current = 0;
            updatedState.stats.health.current -= 1;
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