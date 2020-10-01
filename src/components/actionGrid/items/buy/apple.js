export const apple = {
	name: 'Apple',
	effect: '+2 Food',
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
						effect: '+2 Food',
						action: (state, setState) => {
							if (state.stats.hunger.current + 2 <= state.stats.hunger.total) {
								const newState = { ...state };
								newState.stats.hunger.current += 2;

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
