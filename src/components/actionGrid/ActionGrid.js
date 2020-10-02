import React, { useContext } from 'react';
import { Context } from '../../store/store';

import { ReactComponent as WoodIcon } from '../../assets/icons/stats/wood.svg';
import { ReactComponent as EnergyIcon } from '../../assets/icons/stats/energy.svg';
import { ReactComponent as MoneyIcon } from '../../assets/icons/stats/money.svg';

import { CRAFT_ACTIONS } from './actions.js';
import { EXPLORE_ACTIONS } from './actions.js';
import { BUY_ACTIONS } from './actions.js';

const actionGrid = React.memo(({ tab }) => {
	const [state, setState] = useContext(Context);

	let actions;

	switch (tab) {
		case 'craft':
			actions = CRAFT_ACTIONS;
			break;
		case 'use':
			actions = state.inventory;
			break;
		case 'explore':
			actions = EXPLORE_ACTIONS;
			break;
		case 'buy':
			actions = BUY_ACTIONS;
			break;
		default:
			actions = null;
	}

	return (
		<div className='px-6 grid grid-flow-row sm:grid-cols-6 grid-cols-2 gap-2'>
			{actions &&
				actions.map((a, index) => {
					let icon;

					switch (a.currency) {
						case 'resources':
							icon = <WoodIcon className='w-6 h-6' />;
							break;
						case 'energy':
							icon = <EnergyIcon className='w-6 h-6' />;
							break;
						case 'money':
							icon = <MoneyIcon className='w-6 h-6' />;
							break;
						default:
							icon = null;
					}

					return (
						<div
							onClick={() => {
								const result = a.action(state, setState);
								if (!a.keep && result) {
									actions.splice(index, 1);
								}
							}}
							key={index}
							className='py-2 flex flex-col justify-center items-center bg-white border border-blue-700 rounded cursor-pointer hover:bg-blue-500 hover:text-white'
						>
							<p className='font-bold text-center'>{a.name}</p>
							<small>{a.effect}</small>
							{a.cost && (
								<span className='flex items-center'>
									{a.cost}
									{icon}
								</span>
							)}
						</div>
					);
				})}
		</div>
	);
});

export default actionGrid;
