import React, { useContext } from 'react';

import { Context } from '../../store/store';

const parseTime = (time) => {
    const hours = ('0' + Math.floor(time / 3600)).slice(-2);
    const minutes = ('0' + Math.floor((time % 3600) / 60)).slice(-2);
    const seconds = ('0' + Math.floor((time % 3600) % 60)).slice(-2);

    return `${hours}:${minutes}:${seconds}`;
};

const totalTime = React.memo(() => {

    const state = useContext(Context)[0];

    return (
        <div className="px-6 flex justify-center items-center">
            <div className="rounded bg-white shadow-lg flex flex-col sm:py-4 py-2 sm:px-10 px-2 text-center">
                <h1 className="text-lg">Time survived</h1>
                <span className="text-xl font-bold">{parseTime(state.time)}</span>
            </div>
        </div>
    )
});

export default totalTime;