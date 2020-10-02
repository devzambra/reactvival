import { apple } from './items/buy/apple';
import { water } from './items/buy/water';
import { healthKit } from './items/craft/health-kit';
import { woodenBed } from './items/craft/wooden-bed';
import { forest } from './items/explore/forest';
import { city } from './items/explore/city';
import { lunch } from './items/buy/lunch';

export const CRAFT_ACTIONS = [woodenBed, healthKit];

export const EXPLORE_ACTIONS = [forest, city];

export const BUY_ACTIONS = [water, apple, lunch];
