import React, { useContext } from 'react';
import { Context } from '../../../store/store';
import { ReactComponent as PlayIcon } from '../../../assets/icons/controls/play.svg';

import ActionsTabs from '../../actionsTabs/ActionsTabs';
import ActionGrid from '../../actionGrid/ActionGrid';

const gamePanel = React.memo(({ tabState, changeTab }) => {
	const state = useContext(Context)[0];

	return (
		<div>
			{state.isPlaying ? (
				<>
					<ActionsTabs tab={tabState} setTab={changeTab} />
					<ActionGrid tab={tabState} />
				</>
			) : (
				<>
					<div className='flex justify-center items-center my-16 px-6'>
						<p className='text-center my-4 text-2xl'>
							To start playing, click the <PlayIcon className='h-6 w-6 mx-2 inline' /> button.
						</p>
					</div>
				</>
			)}
		</div>
	);
});

export default gamePanel;
