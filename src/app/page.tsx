'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { Statistics } from '@/components/OverviewComponents/Statistics.tsx';
import { OverviewData } from '@/components/OverviewComponents/OverviewData';
import { OpenOrdersTable } from '@/components/OverviewComponents/OpenOrders';
import { PositionsTable } from '@/components/OverviewComponents/Positions';
import { PoolsTable } from '@/components/OverviewComponents/Pools';

type TabType = {
  id: number;
  label: string;
  value: string;
}

const Tabs: TabType[] = [
  {
    id: 1,
    label: 'Positions',
    value: 'positions'
  },
  {
    id: 2,
    label: 'Open Orders',
    value: 'openOrders'
  },
  {
    id: 3,
    label: 'Pools',
    value: 'pools'
  }
]

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<TabType>(Tabs[0]);

  return (
    <div className='flex h-full w-full flex-col items-start justify-start gap-y-10 px-20 py-10' >
      <div className='flex flex-col gap-y-2'>
        <h1 className='font-medium text-2xl'>My Portfolio</h1>
        <p className='text-xs text-[#939191] font-normal'>0x122gr...4576</p>
      </div>
      <div className='w-full h-auto flex flex-col gap-y-4'>
        <Statistics />
        <OverviewData />
        <div className='border border-[#262626] bg-[#1B1C1E] w-full'>
          <div className='w-full flex items-center justify-start border-b border-[#262626]'>
            {
              Tabs?.map(tab => {
                return (
                  <span
                    key={tab?.id}
                    className={clsx(selectedTab?.id === tab?.id ? "text-white border-b-2 border-white" : "text-[#BABABA] border-b-2 border-transparent", 'text-xs font-semibold p-3 cursor-pointer')}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab?.label}
                  </span>
                )
              })
            }
          </div>
          <div className='w-full overflow-x-auto'>
            {
              selectedTab?.value === 'positions' &&
              <PositionsTable />
            }
            {
              selectedTab?.value === 'openOrders' &&
              <OpenOrdersTable />
            }
            {
              selectedTab?.value === 'pools' &&
              <PoolsTable />
            }
          </div>
        </div>
      </div>
    </div >
  )
}