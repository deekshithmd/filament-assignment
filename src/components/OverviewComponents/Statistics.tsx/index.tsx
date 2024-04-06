'use client'
import clsx from 'clsx';
import { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import Chart from "react-apexcharts";

const ToggleStates: { id: number; state: string; label: string }[] = [
    {
        id: 1,
        state: 'portfolio',
        label: 'Portfolio'
    },
    {
        id: 1,
        state: 'pnl',
        label: 'PnL'
    }
]

export const Statistics = () => {
    const [selectedState, setSelectedState] = useState(ToggleStates[0])

    //constructing options for drawing graph
    const options = {
        chart: {
            toolbar: {
                show: false
            },
            foreColor: '#767676',
        },
        colors: ['#40E0D0'],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            min: 10,
            labels: {
                formatter: (value: any) => { return `$${Math.floor(value / 10)}Mn` },
            },
        },
        stroke: {
            width: 2,
        },
        grid: {
            show: true,
            borderColor: '#767676',
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
        },
        series: [
            { data: [100, 70, 75, 80, 60, 65, 70, 75, 80, 84] }
        ],
        tooltip: {
            enabled: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0,
                opacityFrom: 0.5,
                opacityTo: 0.1,
                stops: [0, 100],
            },
        },
        markers: {
            size: 0,
        },
        dataLabels: {
            enabled: false,
        }
    }

    return (
        <div className='w-full bg-[#1B1C1E] h-max rounded-lg border border-[#262626] flex'>
            <div className='w-[28.7%] p-6 h-full border-r border-[#262626]'>
                <div className='flex flex-col items-start justify-start pb-5'>
                    <p className='text-xs text-[#BABABA] mb-1'>Portfolio</p>
                    <p className='text-3xl text-[#E8E8E8] font-medium '>$210,234.00</p>
                </div>
                <div className='flex flex-col gap-y-2 items-start justify-start py-5 border-y border-[#262626] text-[#939191]'>
                    <p className='w-full flex items-center justify-between text-xs font-normal'>
                        24Pnl <span className='text-[#00CC99] text-xs font-semibold'>+$10001.54(18.27%)</span>
                    </p>
                    <p className='w-full flex items-center justify-between text-xs font-normal'>
                        Total Pnl <span className='text-[#00CC99] text-xs font-semibold'>+$10001.54(18.27%)</span>
                    </p>
                </div>
                <div className='flex flex-col gap-y-2 items-start justify-start py-5 text-[#939191]'>
                    <p className='w-full flex items-center justify-between text-xs font-normal'>
                        Account Leverage <span className='text-white text-xs font-semibold'>55.2x</span>
                    </p>
                    <p className='w-full flex items-center justify-between text-xs font-normal'>
                        Staked Liquidity <span className='text-white text-xs font-semibold'>223.11</span>
                    </p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start flex-1 p-6'>
                <div className='w-full flex items-center justify-between'>
                    <div className='bg-[#34363C] rounded-lg flex items-center border border-[#34363C] overflow-hidden'>
                        {
                            ToggleStates?.map(state => {
                                return (
                                    <p
                                        key={state?.id}
                                        className={clsx(selectedState?.state === state?.state ? 'bg-[#1A1A1A] text-white h-full' : 'text - [#BABABA]', 'text-base font-normal px-3 py-1 cursor-pointer')}
                                        onClick={() => setSelectedState(state)}
                                    >
                                        {state?.label}
                                    </p>
                                )
                            })
                        }
                    </div>
                    <div>
                        <div className='w-[8.6rem] flex items-center justify-between gap-x-4 rounded-lg p-2 bg-[#26282C] border border-[#34363C]'>
                            <span className='text-base text-[#BABABA]'>1 Year</span>
                            <div className='flex flex-col text-[#969696]'>
                                <AiFillCaretDown className='rotate-180 h-2.5 w-2.5' />
                                <AiFillCaretDown className='h-2.5 w-2.5' />
                            </div>
                        </div>
                    </div>
                </div>
                <Chart
                    options={options}
                    series={options.series}
                    type="area"
                    width="600"
                    height="200"
                />
            </div>
        </div>
    )
}