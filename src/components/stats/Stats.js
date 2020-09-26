import React, { useContext } from 'react';

import {ReactComponent as HeartIcon} from '../../assets/icons/stats/heart.svg';
import {ReactComponent as EnergyIcon} from '../../assets/icons/stats/energy.svg';
import {ReactComponent as FoodIcon} from '../../assets/icons/stats/food.svg';
import {ReactComponent as WaterIcon} from '../../assets/icons/stats/water.svg';
import {ReactComponent as MoneyIcon} from '../../assets/icons/stats/money.svg';
import {ReactComponent as WoodIcon} from '../../assets/icons/stats/wood.svg';

import { Context } from '../../store/store';

const stats = React.memo(() => {
	const state = useContext(Context)[0]

	return (
		<div className='sm:mt-4 mb-4 mt-0 grid grid-flow-row grid-cols-3 sm:grid-cols-6 py-6 px-6 sticky top-0 bg-white shadow-xl'>
			<span className="flex items-center flex-col"><HeartIcon className="sm:h-10 sm:w-10 h-6 w-6" />
			 { state.stats.health.current } / { state.stats.health.total }
			 </span>
			<span className="flex items-center flex-col"><EnergyIcon className="sm:h-10 sm:w-10 h-6 w-6"/>
			 { state.stats.energy.current } / { state.stats.energy.total }
			 </span>
			<span className="flex items-center flex-col"><FoodIcon className="sm:h-10 sm:w-10 h-6 w-6"/>
			 { state.stats.hunger.current } / { state.stats.hunger.total }
			 </span>
			<span className="flex items-center flex-col"><WaterIcon className="sm:h-10 sm:w-10 h-6 w-6"/>
			 { state.stats.thirst.current } / { state.stats.thirst.total }
			 </span>
			<span className="flex items-center flex-col"><WoodIcon className="sm:h-10 sm:w-10 h-6 w-6"/>
			 { state.stats.resources } 
			 </span>
			<span className="flex items-center flex-col"><MoneyIcon className="sm:h-10 sm:w-10 h-6 w-6"/>
			 { state.stats.money } $
			 </span>
		</div>
	)
});

export default stats;
