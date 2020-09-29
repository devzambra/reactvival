export const woodenBed = {
	name: 'Wooden Bed',
	effect: '+5 energy',
	cost: 5,
	currency: 'resources',
	keep: true,
	action: (state, setState) => {
		if (state.stats.resources >= 5) {
			setState((s) => {
				const updated = { ...s };
				updated.inventory = [
					...updated.inventory,
					{
						name: 'Wooden Bed',
						effect: '+5 energy',
						action: (state, setState) => {
							if (state.stats.energy.current + 5 <= state.stats.energy.total) {
								const newState = { ...state };
								newState.stats.energy.current += 5;

								newState.notifications = [
									...newState.notifications,
									{ shown: false, text: 'Used: Wooden Bed', time: 0 },
									{ shown: false, text: 'Energy +5', time: 0 },
								];

								setState(newState);
								return true;
							}
							return false;
						},
					},
				];
				updated.stats = { ...updated.stats, resources: updated.stats.resources - 5 };
				updated.notifications = [
					...updated.notifications,
					{ shown: false, text: 'Crafted: Wooden Bed', time: 0 },
					{ shown: false, text: 'Resources -5', time: 0 },
				];

				return updated;
			});
			return true;
		}
		return false;
	},
};
