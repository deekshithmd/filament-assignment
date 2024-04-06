import { OpenOrders } from '@/utils/constants'
import { CiCirclePlus } from "react-icons/ci";
import { CgCloseO } from "react-icons/cg";

export const OpenOrdersTable = () => {
    return (
        <table className='w-full'>
            <thead className='font-medium text-xs text-[#9CA3AF] border-b border-[#262626] relative w-full'>
                <th className='pr-14 pl-5 py-2'>Date</th>
                <th></th>
                <th className='pr-14 pl-5 py-2'>Token</th>
                <th className='pr-14 pl-5 py-2'>Type</th>
                <th className='pr-5 pl-5 py-2'>Position Size</th>
                <th className='pr-14 pl-5 py-2'>Collateral</th>
                <th className='pr-14 pl-5 py-2'>Levarage</th>
                <th className='pl-5 pr-14 py-2'>Quantity</th>
                <th className='pl-5 pr-14 py-2'>Entry Price</th>
                <th className='pr-14 pl-5 py-2'>Take Profit</th>
                <th className='pr-14 pl-5 py-2'>Stop Loss</th>
                <th className='pr-14 pl-5 py-2'>PnL</th>
                <th className='pr-14 pl-5 py-2'>Liquidation Price</th>
                <th className='pr-14 pl-5 py-2'>Fees</th>
                <th className='sticky right-0 top-0 bg-[#1B1C1E] px-5'>
                </th>
            </thead>
            <tbody>
                {
                    OpenOrders?.map(order => {
                        return (
                            <tr key={order?.id} className='text-sm text-[#E5E7EB] font-medium border-b border-[#262626] relative'>
                                <td className='py-3 text-center flex flex-col items-center'>
                                    <span>{order?.date?.day}</span>
                                    <span className='text-[0.6rem] text-gray-500 bg-opacity-30 px-1 rounded-md'>{order?.date?.time}</span>
                                </td>
                                <td></td>
                                <td className='py-3 text-center flex flex-col items-center'>
                                    <span>{order?.token?.type}</span>
                                    <span className='text-[#14B8A6] text-[0.6rem] bg-[#059669] bg-opacity-30 px-1 rounded-md'>{order?.token?.tag}</span>
                                </td>

                                <td className='py-3 text-left pl-5'>
                                    {order?.type}
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {order?.positionsSize} USDC
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {order?.collateral} USDC
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {order?.laverage}x
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {order?.quantity}
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {order?.entryPrice} USDC
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {order?.takeProfit} USDC
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {order?.stopLoss} USDC
                                </td>
                                <td className='py-3 text-left pl-5 flex flex-col text-[#00CC99]'>
                                    <span>{order?.PnL?.value} USDC</span>
                                    <span className='text-xs font-normal'>{order?.PnL?.percentage}%</span>
                                </td>
                                <td className='py-3 text-left pl-5'>
                                    {order?.liquidationPrice} USDC
                                </td>
                                <td className='py-3 text-left pl-5 pr-3 flex items-center'>
                                    {order?.fees} USDC
                                    < CiCirclePlus className='text-white ml-1 h-6 w-6' />
                                </td>
                                <td className='sticky right-0 top-0 bg-[#1B1C1E] px-5'>
                                    <button className='bg-[#2B2B2B] p-2 rounded-md border text-xs border-[#262626]'><CgCloseO /></button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}