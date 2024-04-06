'use client';
import clsx from 'clsx';
import { useState } from 'react'

type TabType = {
    id: number;
    label: string;
}

const SidebarTabList: TabType[] = [
    {
        id: 1,
        label: 'Overview'
    },
    {
        id: 2,
        label: 'Perpetuals'
    },
    {
        id: 3,
        label: 'Pools'
    },
    {
        id: 4,
        label: 'Points'
    },
    {
        id: 5,
        label: 'Rewards'
    },
    {
        id: 6,
        label: 'History'
    }
]

export const Sidebar = () => {
    const [selctedTab, setSelectedTab] = useState<TabType>(SidebarTabList[0])
    return (
        <aside className='flex flex-col w-full h-full overflow-y-auto p-4 font-medium text-sm text-[#E5E7EB] border-r border-[#25272A]'>
            {
                SidebarTabList?.map(tab => {
                    return (
                        <span
                            className={clsx(selctedTab?.id === tab?.id ? 'text-[#40E0D0]' : '', 'p-3 cursor-pointer')}
                            key={tab?.id}
                            onClick={() => setSelectedTab(tab)}
                        >
                            {tab?.label}
                        </span>
                    )
                })
            }
        </aside>
    )
}