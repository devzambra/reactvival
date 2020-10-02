export const city = {
	name: 'Explore City',
	effect: '+20 Money',
	cost:8,
	currency: 'energy',
	keep: true,
	action: (state, setState) => {
		if (state.stats.energy.current >= 8) {
			setState((s) => {
				const updated = { ...s };

				updated.stats = {
					...updated.stats,
					money: updated.stats.money + 20,
					energy: { ...updated.stats.energy, current: updated.stats.energy.current - 8 },
				};

				return updated;
			});
			return true;
		}
		return false;
	},
};
