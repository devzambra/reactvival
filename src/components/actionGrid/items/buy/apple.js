export const apple = {
	name: 'Apple',
	effect: '+1 Food',
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
						name: 'Apple',
						effect: '+1 Food',
						action: (state, setState) => {
							if (state.stats.hunger.current + 1 <= state.stats.hunger.total) {
								const newState = { ...state };
								newState.stats.hunger.current += 1;

								setState(newState);
								return true;
							}
							return false;
						},
					},
				];
				updated.stats = {
					...updated.stats,
					money: { ...updated.stats.money, current: updated.stats.money - 50 },
				};

				return updated;
			});
			return true;
		}
		return false;
	},
};
