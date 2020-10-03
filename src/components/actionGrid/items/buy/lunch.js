export const lunch = {
	name: 'Lunch',
	effect: '+3 Food / +3 Water',
	cost: 120,
	currency: 'money',
	keep: true,
	action: (state, setState) => {
		if (state.stats.money >= 120) {
			setState((s) => {
				const updated = { ...s };

				updated.inventory = [
					...updated.inventory,
					{
						name: 'Lunch',
						effect: '+3 Food / +3 Water',
						action: (state, setState) => {
							if (state.stats.hunger.current + 3 <= state.stats.hunger.total && state.stats.thirst.current + 3 <= state.stats.thirst.total) {
								const newState = { ...state };
								newState.stats.hunger.current += 3;
								newState.stats.thirst.current += 3;

								setState(newState);
								return true;
							}
							return false;
						},
					},
				];
				updated.stats = {
					...updated.stats,
					money: updated.stats.money - 120 ,
				};

				return updated;
			});
			return true;
		}
		return false;
	},
};
