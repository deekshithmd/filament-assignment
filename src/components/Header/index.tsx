import Image from 'next/image'
import Logo from '../../../public/logo.svg';
import USDC from '../../../public/usdc.svg';
import { IoCaretDownSharp } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";

export const Header = () => {
    return (
        <nav className='w-full h-16 sticky top-0 left-0 right-0 flex items-center justify-between py-3 px-6 bg-[#0D0D0D] max-w-[1440px]'>
            <div className='flex items-center gap-x-5'>
                <div className='flex items-center gap-x-2'>
                    <Image src={Logo} alt="Logo" className='w-5 h-auto' />
                    <span className='text-[#40E0D0] text-base'>FILAMENT</span>
                </div>
                <div className='text-gray-300 text-sm font-medium flex items-center gap-x-5'>
                    <span>Trade</span>
                    <span>Pool</span>
                    <span>Bond</span>
                    <span>Referral</span>
                    <span>Leaderboard</span>
                    <span>Portfolio</span>
                    <p className='flex items-center gap-x-2'>More<IoCaretDownSharp className='text-white' /></p>
                </div>
            </div>
            <div className='flex items-center gap-x-5'>
                <div className='text-[#40E0D0] text-sm font-semibold py-2 px-3 border border-[#40E0D0] rounded-md flex items-center gap-x-2'>
                    <Image src={USDC} height={14} width={14} className='w-5 h-5' alt="USDC" />
                    Earn 62% APR on USDT
                </div>
                <div className='h-7 border-r border-[#262626]'></div>
                <div className='text-[0.6rem] flex items-center px-3 py-1 border border-[#262626] rounded-lg'>
                    <div className='flex flex-col items-center pr-3 border-r border-[#262626]'>
                        <span className='text-[#9CA3AF]'>Portfolio Value</span>
                        <span className='text-white font-semibold'>$12,234,330</span>
                    </div>
                    <div className='flex items-center justify-end pl-3'>
                        <div className='flex flex-col items-end'>
                            <span className='text-[#9CA3AF] text-right'>Linked Wallet</span>
                            <span className='text-white font-semibold'>0x123456...3r45</span>
                        </div>
                        < IoCaretDownSharp className='text-white ml-2' />
                    </div>
                </div>
                <div className='p-2.5 border border-gray-700 rounded-lg w-fit'>
                    <BsBellFill className='text-white' />
                </div>
            </div>
        </nav>
    )
}