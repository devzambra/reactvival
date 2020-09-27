export const CRAFT_ACTIONS = [
    { 
        name: 'Wood Bed', 
        effect: '+1 energy/minute', 
        cost: 5, 
        currency: 'resources', 
        action: (state, setState) => {
            const updated = { ...state };
            updated.inventory.push({amount: 1, stat: 'energy', max: false, type: 'single'})

            setState(updated)
        } 
    }
];

export const USE_ACTIONS = [
    { name: 'Apple', effect: '+1 Food', cost: null, currency: null }
];

export const EXPLORE_ACTIONS = [
    { name: 'Explore Forest', effect: '+10 resources', cost: 10, currency: 'energy' }
];

export const BUY_ACTIONS = [
    { name: 'Water', effect: '+1 Water', cost: 50, currency: 'money' }
];