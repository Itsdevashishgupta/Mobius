import React from 'react';
import ProfileCard from './ProfileCard'; 

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#010829] to-[#051757] py-20">
      <div className="max-w-[1500px] mx-auto px-40">

        <h2 className="text-whiteCustom text-3xl font-bold mb-12">About Us</h2>


        <div className="max-w-[800px] flex flex-col gap-16 justify-center items-center mx-auto">

          <ProfileCard
            image="/src/assets/image2.png" 
            name="Ashwin"
            description="Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University."
            vision=" Ashwin’s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams."          
          />

          {/* Divider Line */}
          {/* <div className="relative flex items-center justify-center">
            <div className="w-full h-px bg-gray-500"></div>
            <div className="absolute bg-[#010829] px-4"> 
              <span className="text-2xl text-whiteCustom">✖</span>
            </div>
          </div> */}

          
          <ProfileCard
            image="/src/assets/image3.png" 
            name="Nicole"
            description="Nicole is an Executive coach at Mobius specializing in resume builds and career advisory."
            vision="With a B.S in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential."
          />
        </div>

        <div className="text-gray-400 text-sm mt-12 space-y-2 text-center">
          <p className='ml-16'>Learn more about our Board of Advisors ↗</p>
          <p>Follow us on our LinkedIn page ↗</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
