
import sampleImage from '../assets/mob.png'; 
import { ArrowDownLeft, ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <section className="pb-24 pt-28">
      <div className="max-w-full w-full max-h-[445px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
        {/* Left: Text Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-semibold text-whiteCustom mb-6 font-[Sora]">
            Land job interviews <span className='text-primary'>10x</span> faster
          </h1>
          <p className="text-whiteCustom mb-8 max-w-lg">
          Custom-built resumes that match your goals, keywords, and recruiter expectations.
          </p>
          <a
  href="#"
  className="inline-flex items-center  bg-whiteCustom text-darkPrimary px-6 py-3 rounded-full text-lg font-medium hover:bg-darkPrimary hover:text-whiteCustom transition"
>
  Get Started
  <ArrowRight size={20} />
</a>
        </div>

        {/* Right: Image */}
        <div className='relatiive'>
            <div className='flex flex-col gap-10'>
          <img src={sampleImage} alt="Hero" className="max-w-60 h-auto" />
          <p className='text-sm text-right text-whiteCustom pr-12'>Download Free E-Book</p>
          </div>
          <div className="absolute right-56 bottom-36">
            <div className="relative w-28 h-28 rounded-full border-[1px] border-white backdrop-blur-sm bg-[#D9D9D94D] flex items-center justify-center shadow-md">
            <span className='text-5xl'>📖</span>

            <div className='absolute right-[79px] bottom-0 bg-whiteCustom text-darkPrimary rounded-full p-1 shadow-md w-6 h-6 flex items-center justify-center'>
                <ArrowDownLeft size={16} className='text-darkPrimary'/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
