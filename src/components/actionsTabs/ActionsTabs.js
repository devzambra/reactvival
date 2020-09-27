import React from 'react'

import './ActionTabs.css'

const actionsTabs = React.memo(({tab, setTab}) => {

  const classes = "text-center block rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 cursor-pointer";

  return (
    <ul className="grid grid-flow-row grid-cols-2 sm:grid-cols-4 my-4 px-6">
      <li className="tabLink flex-1" onClick={() => setTab('craft')}>
        <span className={tab === 'craft' ? classes + ' active' : classes}>Craft</span>
      </li>
      <li className="tabLink flex-1" onClick={() => setTab('use')}>
        <span className={tab === 'use' ? classes + ' active' : classes}>Use</span>
      </li>
      <li className="tabLink flex-1" onClick={() => setTab('explore')}>
        <span className={tab === 'explore' ? classes + ' active' : classes}>Explore</span>
      </li>
      <li className="tabLink flex-1" onClick={() => setTab('buy')}>
        <span className={tab === 'buy' ? classes + ' active' : classes}>Buy</span>
      </li>
    </ul>
    )
});

export default actionsTabs;