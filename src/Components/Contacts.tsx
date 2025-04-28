import { ArrowRight } from 'lucide-react'


const Contacts = () => {
  return (
    <div className="max-w-7xl mx-auto md:mx-40 mb-10">
    <div className="bg-[#0057FF] text-white rounded-3xl px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <h1 className='text-2xl w-1/4'>STILL HAVE DOUBTS?</h1>
        <h1 className='text-6xl font-bold'>Contact us</h1>
        <div className=' bg-whiteCustom text-primary rounded-full px-1 shadow-md w-20 h-20 flex items-center justify-center'>
                <ArrowRight size={36} className='text-primary text-xl'/>
            </div>
    </div>
  </div>
  )
}

export default Contacts