import { PiCaretDoubleUpLight } from "react-icons/pi";

export const Footer = () => {
    return (
        <footer className='w-full sticky bottom-0 left-0 right-0 bg-[#1B1C1E] py-1 px-4 flex items-center justify-between max-w-[1440px]'>
            <div className='flex items-center gap-x-4'>
                <div className='flex items-center gap-x-1 text-[#10B981] text-[0.6rem] font-medium'>
                    <p className='h-2 w-2 bg-[#00CC99] rounded-full' />
                    Operational
                </div>
                <div className='flex items-center text-[#9CA3AF] text-[0.6rem] gap-x-1'>
                    <PiCaretDoubleUpLight className='w-3 h-3' />
                    Operational  Update
                </div>
            </div>
            <div className='flex items-center gap-x-3 text-[#9CA3AF] text-[0.6rem]'>
                <span>Help</span>
                <span>Docs</span>
                <span>Share Feedback</span>
            </div>
        </footer>
    )
}