export const OverviewData = () => {
    return (
        <div className='grid grid-cols-4 gap-x-5 text-[#E8E8E8] w-full'>
            <div className='w-full rounded-lg bg-[#1B1C1E] border border-[#262626] p-5'>
                <p className='w-full flex items-center justify-between text-xs font-normal mb-2'>
                    24Pnl <span className='text-[#00CC99] text-xs font-semibold'>+$10001.54(18.27%)</span>
                </p>
                <span className='text-xl font-semibold text-[#00CC99]'>$241,500.00</span>
            </div>
            <div className='w-full rounded-lg bg-[#1B1C1E] border border-[#262626] p-5'>
                <p className='w-full flex items-center justify-between text-xs font-normal mb-2'>
                    Liquidity Pool Provided
                </p>
                <span className='text-xl font-semibold text-[#00CC99]'>$241,500.00</span>
            </div>
            <div className='w-full rounded-lg bg-[#1B1C1E] border border-[#262626] p-5'>
                <p className='w-full flex items-center justify-between text-xs font-normal mb-2'>
                    Liquidity Pool Bonded
                </p>
                <span className='text-xl font-semibold text-[#00CC99]'>$241,500.00</span>
            </div>
            <div className='w-full rounded-lg bg-gradient-to-r from-stone-800 to-teal-800 border border-[#262626] p-5'>
                <p className='w-full flex items-center justify-between text-xs font-normal mb-2'>
                    Rewards
                </p>
                <span className='text-xl font-semibold text-[#00CC99]'>$241,500.00</span>
            </div>
        </div>
    )
}