import linkedin from '../assets/linekdin.png';
import footerlog0 from '../assets/footerlogo.png';
const Footer = () => {
  return (
    <footer className="bg-white text-[#0057FF]">
  <div className="max-w-7xl mx-auto py-10 px-6 flex flex-col">

    <div className="md:col-span-2 flex flex-col">
      <img src={footerlog0} alt="MobuisEngine Logo" className="h-10 w-16" />
      <p className='mb-6 font-bold'>MobiusEngine</p>
      <hr className="border-gray-300 w-96" />
    </div>

    <div className='flex justify-between items-center mt-6'>

        <div className='flex justify-between w-3/5'>


    <div className="flex flex-col gap-1">
      <h4 className="font-semibold underline text-xs">Address</h4>
      <p className="text-xs font-semibold">
        1875 Mission St Ste 103 #450<br />
        San Francisco, CA 94103
      </p>
    </div>


    <div className="flex flex-col gap-1">
      <h4 className="font-semibold text-xs underline">Email</h4>
      <a href="mailto:finance@mobiusengine.ai" className="text-xs underline">
        finance@mobiusengine.ai
      </a>
    </div>


    <div className="flex flex-col gap-1">
      <h4 className="font-semibold text-xs underline">Telephone</h4>
      <a href="tel:6508896026" className="text-sm ">
        650-889-6026
      </a>
    </div>

    </div>
   

    <div className="flex flex-col gap-2 items-start">
      <h4 className="font-semibold underline text-xs">Socials</h4>
      <div className="flex items-center gap-4">
        <a href="#" className="border border-[#0057FF] rounded-full p-2 hover:bg-blue-100 transition">
          <img src={linkedin} alt="LinkedIn" className="h-3 w-3" /> 
        </a>
        <a href="#" className="border border-[#0057FF] rounded-full p-2 hover:bg-blue-100 transition">
          <img src={linkedin} alt="LinkedIn" className="h-3 w-3" />
        </a>
      </div>
    </div>
  </div>
  </div>

  <div className="bg-[#0057FF] text-white text-sm py-4">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <p className='text-xs'>© 2023 Mobiusservices LLC</p>
      <div className="flex gap-10 mt-2 md:mt-0">
        <a href="#" className="hover:underline text-xs">Terms & Conditions</a>
        <a href="#" className="hover:underline text-xs">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer