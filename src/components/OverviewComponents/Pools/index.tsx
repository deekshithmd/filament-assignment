import { Pools } from '@/utils/constants'

export const PoolsTable = () => {
    return (
        <table className='w-full'>
            <thead className='font-medium text-xs text-[#9CA3AF] border-b border-[#262626] relative w-full'>
                <th className='py-2'>Pool</th>
                <th className='py-2'>Liquidity Provided</th>
                <th className='py-2'>Apr</th>
                <th className='py-2'>Unrealised PnL</th>
            </thead>
            <tbody>
                {
                    Pools?.map(pool => {
                        return (
                            <tr key={pool?.id} className='text-sm text-[#E5E7EB] font-medium border-b border-[#262626] relative'>
                                <td className='py-3 text-center'>
                                    {pool?.pool}
                                </td>
                                <td className='py-3 text-center'>
                                    ${pool?.liquidityProvided.toLocaleString()}
                                </td>
                                <td className='py-3 text-center'>
                                    {pool?.apr}%
                                </td>
                                <td className='py-3 text-center'>
                                    ${pool?.unrealisedPnl?.toLocaleString()}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}