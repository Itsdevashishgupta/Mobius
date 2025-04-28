import React from 'react';

interface ProfileCardProps {
  image: string;
  name: string;
  description: string;
  vision:string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, description,vision }) => {
  return (
    <div className="flex items-center gap-24">
   
      <div className="relative">
        <img src={image} alt={name} className=" h-[200px] object-cover object-top rounded-full bg-white max-w-[266px] w-[200px]" />
       
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#D9D9D94D] backdrop-blur-sm border-white border-[1px] rounded-full flex items-center justify-center shadow-md">
          <img src="/src/assets/shape.png" alt="LinkedIn" className="w-6 h-6" />
        </div>
      </div>

      {/* Profile Details */}
      <div>
        
        <p className="text-gray-300 text-sm mt-2">{description}</p>
        <p className="text-gray-300 text-sm mt-2">{vision}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
