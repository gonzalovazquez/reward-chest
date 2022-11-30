import React from 'react';

type RewardProps = {
  rewardName: string,
  currentCost: number,
  lowestCost: number,
  link: string,
  unlocked: boolean
}


export const Reward = ({ records }) =>
  <div className="mt-8 flex flex-col">
    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Current Cost
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Lowest Price
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Image
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Unlocked
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {records.map((reward) => (
                <tr key={reward.Name}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {reward.Name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{reward['Current Cost']}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{reward['Lowest Price']}</td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={reward['Image']} alt="" />
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{reward['Unlocked'] ? 'Yes' : 'No'}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <a href={reward['Link']} className="text-indigo-600 hover:text-indigo-900">
                      Visit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>