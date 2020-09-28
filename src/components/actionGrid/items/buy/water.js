export const water = {
	name: 'Water',
	effect: '+1 Water',
	cost: 50,
	currency: 'money',
	keep: true,
	action: (_, setState) => {
		setState((s) => {
			const updated = { ...s };

			if (updated.stats.money.current >= 50) {
				updated.inventory = [
					...updated.inventory,
					{
						name: 'Water',
						effect: '+1 Water',
						action: (state, setState) => {
							const newState = { ...state };
							newState.stats.thirst.current += 1;

							setState(newState);
						},
					},
				];
				updated.stats = {
					...updated.stats,
					money: { ...updated.stats.money, current: updated.stats.money.current - 50 },
				};
			}

			return updated;
		});
	},
};
