import { Check } from "lucide-react";


const plans = [
  {
    title: "April Promo",
    price: "$35",
    frequency: "/week",
    features: [
      "Curated jobs from 1M+ listings, refreshed every 48 hours",
      "Up to 20 human–applied roles per week (no bots, no fluff — just real company sites)",
      "Need more? Add extra apps for just $1.5 each",
      "Your own dedicated application analyst",
      "Personalized with up to 10 filters & 5 job titles",
    ],
    buttonText: "Get Started",
    isPopular: false,
  },
  {
    title: "Starter",
    price: "$50",
    frequency: "/week",
    features: [
      "All the perks of the Promo Plan, plus:",
      "Resume review & story–focused feedback",
      "Dedicated search specialist",
      "Up to 50 job apps/week",
      "Extra apps at $1.5 each",
      "Analyst support within 6 hours (SLA/PST hours)",
    ],
    buttonText: "Get Started",
    isPopular: true,
  },
  {
    title: "Plus",
    price: "$100",
    frequency: "/week",
    features: [
      "Everything in Starter, with more muscle:",
      "Up to 75 apps/week",
      "Apply to 15 job titles",
      "Analyst + full application team on Pacific hours",
    ],
    buttonText: "Get Started",
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <>
    <div className="pb-16 pt-4 px-4 md:mx-48">
      <h1 className="text-primary font-bold text-2xl mb-16">Job Application Service Plans</h1>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch">

        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="relative border border-primary rounded-2xl p-8 flex flex-col justify-between w-full max-w-[340px] min-h-[500px] gap-4 bg-white shadow-sm"

          >
        
            {plan.isPopular && (
              <div className="absolute top-8 right-4 px-3 py-1 border border-primary rounded-full text-xs font-semibold text-primary bg-white">
                Popular
              </div>
            )}

            <div>
              <h3 className="text-primary text-2xl font-semibold mb-4">{plan.title}</h3>

              <div className="text-primary text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-xl font-normal">{plan.frequency}</span>
              </div>

              <hr className="border-gray-300 mb-6" />

              <ul className="flex flex-col gap-4 text-primary">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-whiteCustom text-sm p-1"><Check size={14} className="bg-green-500 rounded-full"/></span>
                    <span className="text-xs font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-1 bg-primary text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition w-2/3">
              {plan.buttonText} →
            </button>
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-7xl mx-auto md:mx-48">
  <div className="bg-[#0057FF] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Left Section */}
    <div className="flex-1">
      <div className="flex justify-between">
        <span>
      <h2 className="text-2xl font-semibold">Advance</h2>
      <p className=" text-base">Top-tier support for serious job hunters:</p>
      </span>
      <div className="text-4xl font-bold">
        <span className="text-white">$150</span>
        <span className="text-white text-xl font-medium">/week</span>
      </div>
      </div>
      <hr className="my-4 border-blue-300 w-96" />
          <div className="flex justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start gap-2">
        <span className="text-whiteCustom text-sm p-1"><Check size={14} className="bg-green-500 rounded-full"/></span>
          <p className="text-xs">Everything in Plus</p>
        </div>
        <div className="flex items-start gap-2">
        <span className="text-whiteCustom text-sm p-1"><Check size={14} className="bg-green-500 rounded-full"/></span>
          <p className="text-xs">Custom Resumes & Cover Letters</p>
        </div>
        <div className="flex items-start gap-2">
         <span className="text-whiteCustom text-sm p-1"><Check size={14} className="bg-green-500 rounded-full"/></span>
          <p className="text-xs">20 fully customized applications/week</p>
        </div>
        <div className="flex items-start gap-2">
         <span className="text-whiteCustom text-sm p-1"><Check size={14} className="bg-green-500 rounded-full"/></span>
          <p className="text-xs">Help with complex job searches</p>
        </div>
        <div className="flex items-start gap-2 col-span-2">
         <span className="text-whiteCustom text-sm p-1"><Check size={14} className="bg-green-500 rounded-full"/></span>
          <p className="text-xs">Access to senior resume experts, Founder & Exec Coaches</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 ">
    
    <button className="relative right-0 -bottom-8 bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition">
      Get Started →
    </button>
  </div>
  </div>
    </div>

 
  </div>
  <hr className="mt-16 mb-6 border-gray-300 "/>
</div>

    </>
  );
};

export default Pricing;
