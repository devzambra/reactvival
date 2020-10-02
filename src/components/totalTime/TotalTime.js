import React from 'react';

import { parseTime } from '../../utils/time'

const totalTime = React.memo(({time}) => {

    return (
        <div className="px-6 flex justify-center items-center">
            <div className="rounded bg-white shadow-lg flex flex-col sm:py-4 py-2 sm:px-10 px-2 text-center">
                <h1 className="text-lg">Time survived</h1>
                <span className="text-xl font-bold">{parseTime(time)}</span>
            </div>
        </div>
    )
});

export default totalTime;