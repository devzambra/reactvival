import React, { useState } from 'react';

const initialState = {
    stats: {
        health: {
            current: 10,
            total: 10,
            time: 0
        },
        energy: {
            current: 50,
            total: 50,
            time: 0
        },
        hunger: {
            current: 10,
            total: 10,
            time: 0
        },
        thirst: {
            current: 10,
            total: 10,
            time: 0
        },
        resources: 20,
        money: {
            current: 100,
            time: 0
        }
    },
    inventory: [],
    time: 0,
    isPlaying: false,
    activeTab: 'craft'
};

export const Context = React.createContext();

const Store = ({children}) => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
};

export default Store;