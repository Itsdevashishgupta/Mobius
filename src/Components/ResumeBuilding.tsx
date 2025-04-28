import { Check } from "lucide-react";


const Resume = [
  {
    title: "Resume Rebuild",
    desc:"Crafted for senior to VP-level professionals ready for their next big step.",
    price: "$1000",
    frequency: "one time",
    features: [
      "3× 30-min coaching ",
      "Focused on storytelling, not just formatting",
      "Analyst + full application team on Pacific hours",
      "Tailored to your target industry, company, or role",
      "Direct work with our co-founder (ex-Google, JP Morgan)",
      "Executive coaching from UC Berkeley alum with 10+ yrs experience",
      "Resume Rebuild portfolio available upon request"
    ],
    buttonText: "Get Started",
   
  },
  {
    title: "Interview Prep",
    desc:"Two sessions to sharpen your story, confidence, and clarity — fast.",
    price: "$500",
    frequency: "one time",
    features: [
      "2× 45-min live coaching with our co-founder",
      "Real-time, practical feedback",
      "Build clarity, empathy & executive presence",
      "For senior and leadership roles — technical & non-technical",
    ],
    buttonText: "Get Started",

  },
  
];

const ResumeBuilding = () => {
  return (
    <div className="pb-16 pt-10 px-4 md:mx-48">

<h1 className="text-primary font-bold text-3xl mb-2">Resume Building & Coaching</h1>
<p className="text-xs text-primary font-semibold">Let’s talk about where you’re headed — and how your resume can get you there.</p>
<p  className=" text-xs font-bold text-primary">Schedule a call to get started.</p>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch mt-16">

        {Resume.map((plan, idx) => (
          <div
            key={idx}
            className="relative border border-primary rounded-2xl p-8 flex flex-col justify-between w-full max-w-[340px] min-h-[500px] gap-4 bg-white shadow-sm"

          >
         

            <div>
              <h3 className="text-primary text-2xl font-semibold">{plan.title}</h3>
              <p className=" text-primary text-xs mb-5">{plan.desc}</p>

              <div className="text-primary text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-xl font-semibold">{plan.frequency}</span>
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

            <button className="w-2/3 mt-1 bg-primary text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition">
              {plan.buttonText} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeBuilding;
