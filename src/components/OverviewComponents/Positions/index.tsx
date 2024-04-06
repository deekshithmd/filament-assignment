import { Positions } from '@/utils/constants'
import { CiCirclePlus } from "react-icons/ci";

export const PositionsTable = () => {
    return (
        <table className='w-auto'>
            <thead className='font-medium text-xs text-[#9CA3AF] border-b border-[#262626] relative'>
                <th className='pr-14 pl-5 py-2'>Token</th>
                <th className='pr-14 pl-5 py-2'>Type</th>
                <th className='pr-5 pl-5 py-2'>Position Size</th>
                <th className='pr-14 pl-5 py-2'>Collateral</th>
                <th className='pr-5 pl-5 py-2'>Levarage</th>
                <th className='pl-5 pr-14 py-2'>Quantity</th>
                <th className='pr-14 py-2'>Entry Price</th>
                <th className='pr-14 pl-5 py-2'>Take Profit</th>
                <th className='pr-14 pl-5 py-2'>Stop Loss</th>
                <th className='pr-14 pl-5 py-2'>PnL</th>
                <th className='pr-14 pl-5 py-2'>Liquidation Price</th>
                <th className='pr-14 pl-5 py-2'>Fees</th>
                <th className='sticky right-0 top-0 bg-[#1B1C1E] px-5'></th>

            </thead>
            <tbody>
                {
                    Positions?.map(position => {
                        return (
                            <tr key={position?.id} className='text-sm text-[#E5E7EB] font-medium border-b border-[#262626] relative'>
                                <td className='py-3 text-center flex flex-col items-center'>
                                    <span>{position?.token?.type}</span>
                                    <span className='text-[#14B8A6] text-[0.6rem] bg-[#059669] bg-opacity-30 px-1 rounded-md'>{position?.token?.tag}</span>
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {position?.type}
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {position?.positionsSize} USDC
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {position?.collateral} USDC
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {position?.laverage}x
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {position?.quantity}
                                </td>
                                <td className='py-3 text-left'>
                                    {position?.entryPrice} USDC
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {position?.takeProfit} USDC
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {position?.stopLoss} USDC
                                </td>
                                <td className='py-3 text-left pl-5 flex flex-col text-[#00CC99]'>
                                    <span>{position?.PnL?.value} USDC</span>
                                    <span className='text-xs font-normal'>{position?.PnL?.percentage}%</span>
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {position?.liquidationPrice} USDC
                                </td>
                                <td className='py-3 text-left pl-5 pr-3 flex'>
                                    {position?.fees} USDC
                                    < CiCirclePlus className='text-white ml-1 h-5 w-5' />
                                </td>
                                <td className='sticky right-0 top-0 bg-[#1B1C1E] px-5'>
                                    <button className='bg-[#2B2B2B] px-2 py-1 rounded-md border text-xs border-[#262626]'>Manage</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}