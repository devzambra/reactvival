import React from 'react'

import { ReactComponent as ResetIcon } from '../../assets/icons/controls/reset.svg'

const resetButton = React.memo(() => {

    const reset = () => {
        window.location.reload();
    };

    return (
        <div className="px-6 flex justify-center items-center">
            <button onClick={() => reset()}>
                <div className="rounded bg-white shadow-lg flex flex-col sm:py-4 py-2 sm:px-10 px-2 justify-center items-center">
                    <ResetIcon className="sm:h-10 sm:w-10 h-6 w-6"/>
                </div>
            </button>
        </div>
    )
});

export default resetButton;