export const healthKit = {
	name: 'Health Kit',
	effect: '+3 Health',
	cost: 60,
	currency: 'resources',
	keep: true,
	action: (state, setState) => {
		if (state.stats.resources >= 60) {
			setState((s) => {
				const updated = { ...s };
				updated.inventory = [
					...updated.inventory,
					{
						name: 'Health Kit',
						effect: '+3 Health',
						action: (state, setState) => {
							if (state.stats.health.current + 3 <= state.stats.health.total) {
								const newState = { ...state };
								newState.stats.health.current += 3;

								setState(newState);
								return true;
							}
							return false;
						},
					},
				];
				updated.stats = { ...updated.stats, resources: updated.stats.resources - 60 };

				return updated;
			});
			return true;
		}
		return false;
	},
};
