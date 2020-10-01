import React from 'react'
import ReactDOM  from 'react-dom'

import { parseTime } from '../../../utils/time'


const endGame = React.memo(({time}) => {

    return ReactDOM.createPortal(
        <div className="h-100 v-100 fixed top-0 bottom-0 right-0 left-0 bg-opacity-75 bg-gray-900 flex items-center justify-center">
            <div className="flex flex-col justify-center items-center bg-white shadow-lg py-6 w-1/2">
                <h2 className="text-3xl">GAME OVER!!</h2>
                <h2 className="text-xl">Your total survival time is: <strong>{ parseTime(time) }</strong></h2>
                <button onClick={() => window.location.reload()} className="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">NEW GAME</button>
            </div>
        </div>,
        document.querySelector('#modal')
        )
    
})

export default endGame;