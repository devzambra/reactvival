import React from 'react'

const actionsTabs = () => (
<ul className="grid grid-flow-row grid-cols-2 sm:grid-cols-4 my-4 px-6">
  <li className="flex-1 mr-2">
    <span className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white cursor-pointer">Craft</span>
  </li>
  <li className="flex-1 mr-2">
    <span className="text-center block rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 cursor-pointer">Use</span>
  </li>
  <li className="text-center flex-1">
    <span className="text-center block rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 cursor-pointer">Explore</span>
  </li>
  <li className="text-center flex-1">
    <span className="text-center block rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 cursor-pointer">Buy</span>
  </li>
</ul>
);

export default actionsTabs;