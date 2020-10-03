export const forest = {
	name: 'Explore Forest',
	effect: '+12 resources',
	cost:10,
	currency: 'energy',
	keep: true,
	action: (state, setState) => {
		if (state.stats.energy.current >= 10) {
			setState((s) => {
				const updated = { ...s };

				updated.stats = {
					...updated.stats,
					resources: updated.stats.resources + 12,
					energy: { ...updated.stats.energy, current: updated.stats.energy.current - 10 },
				};

				return updated;
			});
			return true;
		}
		return false;
	},
};
