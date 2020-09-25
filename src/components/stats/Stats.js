import React from 'react';
import {ReactComponent as HeartIcon} from '../../assets/icons/stats/heart.svg';
import {ReactComponent as EnergyIcon} from '../../assets/icons/stats/energy.svg';
import {ReactComponent as FoodIcon} from '../../assets/icons/stats/food.svg';
import {ReactComponent as WaterIcon} from '../../assets/icons/stats/water.svg';
import {ReactComponent as MoneyIcon} from '../../assets/icons/stats/money.svg';
import {ReactComponent as WoodIcon} from '../../assets/icons/stats/wood.svg';

const stats = () => (
	<div className='sm:mt-4 mb-4 mt-0 grid grid-flow-row grid-cols-3 sm:grid-cols-6 py-6 px-6 sticky top-0 bg-white shadow-xl'>
		<span className="flex items-center flex-col"><HeartIcon className="sm:h-10 sm:w-10 h-6 w-6"/> 10 / 10</span>
		<span className="flex items-center flex-col"><EnergyIcon className="sm:h-10 sm:w-10 h-6 w-6"/> 6 / 50</span>
		<span className="flex items-center flex-col"><FoodIcon className="sm:h-10 sm:w-10 h-6 w-6"/> 3 / 10</span>
		<span className="flex items-center flex-col"><WaterIcon className="sm:h-10 sm:w-10 h-6 w-6"/> 4 / 10</span>
		<span className="flex items-center flex-col"><WoodIcon className="sm:h-10 sm:w-10 h-6 w-6"/> 35</span>
		<span className="flex items-center flex-col"><MoneyIcon className="sm:h-10 sm:w-10 h-6 w-6"/> 560 $</span>
	</div>
);

export default stats;
