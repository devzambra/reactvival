export const healthKit = {
	name: 'Health Kit',
	effect: '+2 Health',
	cost: 50,
	currency: 'resources',
	keep: true,
	action: (state, setState) => {
		if (state.stats.resources >= 50) {
			setState((s) => {
				const updated = { ...s };
				updated.inventory = [
					...updated.inventory,
					{
						name: 'Health Kit',
						effect: '+2 Health',
						action: (state, setState) => {
							if (state.stats.health.current + 2 <= state.stats.health.total) {
								const newState = { ...state };
								newState.stats.health.current += 2;

								setState(newState);
								return true;
							}
							return false;
						},
					},
				];
				updated.stats = { ...updated.stats, resources: updated.stats.resources - 50 };

				return updated;
			});
			return true;
		}
		return false;
	},
};
