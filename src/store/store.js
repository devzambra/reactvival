import React, { useState } from 'react';

const initialState = {
    stats: {
        health: {
            current: 10,
            total: 10
        },
        energy: {
            current: 50,
            total: 50
        },
        hunger: {
            current: 10,
            total: 10
        },
        thirst: {
            current: 10,
            total: 10
        },
        resources: 20,
        money: 100
    },
    time: {
        total: 0,
        current: 0
    },
    isPlaying: false
};

export const Context = React.createContext();

const Store = ({children}) => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
};

export default Store;