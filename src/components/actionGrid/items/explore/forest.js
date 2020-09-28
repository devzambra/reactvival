export const forest = {
	name: 'Explore Forest',
	effect: '+10 resources',
	cost: 10,
	currency: 'energy',
	keep: true,
	action: (_, setState) => {
		setState((s) => {
			const updated = { ...s };

			updated.stats = {
				...updated.stats,
				resources: updated.stats.resources + 10,
				energy: { ...updated.stats.energy, current: updated.stats.energy.current - 10 },
			};

			return updated;
		});
	},
};
