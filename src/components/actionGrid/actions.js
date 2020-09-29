import { apple } from './items/buy/apple';
import { water } from './items/buy/water';
import { healthKit } from './items/craft/health-kit';
import { woodenBed } from './items/craft/wooden-bed';
import { forest } from './items/explore/forest';

export const CRAFT_ACTIONS = [woodenBed, healthKit];

export const EXPLORE_ACTIONS = [forest];

export const BUY_ACTIONS = [water, apple];
