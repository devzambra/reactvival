export const water = {
	name: 'Water',
	effect: '+2 Water',
	cost: 50,
	currency: 'money',
	keep: true,
	action: (state, setState) => {
		if (state.stats.money >= 50) {
			setState((s) => {
				const updated = { ...s };

				updated.inventory = [
					...updated.inventory,
					{
						name: 'Water',
						effect: '+2 Water',
						action: (state, setState) => {
							if (state.stats.thirst.current + 2 <= state.stats.thirst.total) {
								const newState = { ...state };
								newState.stats.thirst.current += 2;

								setState(newState);
								return true;
							}
							return false;
						},
					},
				];
				updated.stats = {
					...updated.stats,
					money: updated.stats.money - 50 ,
				};

				return updated;
			});
			return true;
		}
		return false;
	},
};
