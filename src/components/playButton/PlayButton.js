import React, { useContext } from 'react'
import { ReactComponent as PlayIcon } from '../../assets/icons/controls/play.svg'
import { ReactComponent as PauseIcon } from '../../assets/icons/controls/pause.svg'

import { Context } from '../../store/store'

const playButton = React.memo(() => {
    const [state, setState] = useContext(Context);

    const setPlayState = () => {
        const updatedState = { ...state };

        updatedState.isPlaying = !updatedState.isPlaying;

        setState(updatedState);
    };

    return (
        <div className="px-6 flex justify-center items-center">
            <button onClick={() => setPlayState() }>
                <div className="bg-white shadow-lg flex flex-col sm:py-4 py-2 sm:px-10 px-2 justify-center items-center">
                    { state.isPlaying ? <PauseIcon className="sm:h-10 sm:w-10 h-6 w-6"/> : <PlayIcon className="sm:h-10 sm:w-10 h-6 w-6"/>}
                </div>
            </button>
        </div>
    )
});

export default playButton;