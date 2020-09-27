import React, { useContext } from 'react'
import { Context } from '../../store/store'
import './Notification.css'

const notification = React.memo(() => {

    const state = useContext(Context)[0];
    let counter = 0;
    return (
        <>
        { state.notifications.map((notification, index) => {
            
            const cName = `absolute left-0 top-0 mtop-${counter*20} flex items-center text-center justify-center`
            counter++;
            
            return (
                <div className={cName} key={index} >
                    <div className="bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                        <div className="flex">
                            <div className="py-1 animate-bounce">
                                <svg className="fill-current h-6 w-6 text-yellow-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                            </div>
                            <div>
                                <p className="font-bold">{notification.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )

        })}
        </>  
    )
});

export default notification;