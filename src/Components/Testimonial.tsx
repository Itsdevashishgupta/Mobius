import {  ArrowRight, ArrowUpRight, Play } from "lucide-react"; // You can use any arrow icon

const testimonials = [
  {
    id: 1,
    description: (
      <>
        Holly is a <strong>senior executive</strong> who got over{" "}
        <strong>10 job interviews</strong> and an offer she accepted
      </>
    ),
  },
  {
    id: 2,
    description: (
      <>
        Holly is a <strong>senior executive</strong> who got over{" "}
        <strong>10 job interviews</strong> and an offer she accepted
      </>
    ),
  },
  {
    id: 3,
    description: (
      <>
        Holly is a <strong>senior executive</strong> who got over{" "}
        <strong>10 job interviews</strong> and an offer she accepted
      </>
    ),
  },
];

const whyChooseUs = [
  {
    icon: "/src/assets/Asset 3 1.png",
    title: "Tried, Tested, Trusted",
    description: "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.",
  },
  {
    icon: "/src/assets/Profile 1.png",
    title: "Real People, Real Help",
    description: "A hands-on team that actually cares — guiding you through every twist in your career path.",
  },
  {
    icon: "/src/assets/Star 1.png",
    title: "Beat the Line",
    description: "We search, shortlist, and apply for you so your name shows up first — every single day.",
  },
];

const TestimonialsAndWhyChooseUs = () => {
  return (
    <div className="bg-white py-16 px-4">
    
      <section className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h2 className="text-primary text-2xl md:text-3xl font-semibold mb-20 w-full max-w-[1100px] text-left ml-40">
          What our clients have to say
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-start mb-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative w-full max-w-[300px] border-2 border-primary rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="flex-1 flex items-center justify-center py-16">
                <div className="bg-primary rounded-full border-2 border-primary w-12 h-12 flex items-center justify-center">
                <Play className="border-white text-white" />
                </div>
              </div>
              <div className="bg-[#0047FF] pb-16">
              <div className=" text-white p-4 text-sm flex justify-between items-center">
                <p>{item.description}</p>
                <ArrowRight size={16} />
              </div>

            
              
               
                  <div className='absolute right-3 bottom-4 bg-whiteCustom text-primary rounded-full px-1 shadow-md w-10 h-10 flex items-center justify-center'>
                <ArrowUpRight size={20} className='text-primary text-xl'/>
            </div>
                </div>
              
            </div>
          ))}
        </div>

      
        <div className="flex flex-wrap justify-center gap-4">
          <button className="border border-primary text-primary rounded-full px-6 py-3 text-sm flex items-center gap-2 hover:bg-primary hover:text-white transition">
            More customer testimonials <ArrowRight size={16} />
          </button>
          <button className="bg-primary text-white rounded-full px-6 py-3 text-sm flex items-center gap-2 hover:bg-darkPrimary transition">
            Get Started <ArrowRight size={16} />
          </button>
        </div>
      </section>

   
      <section className="max-w-[1200px] mt-24 bg-[#F8F9FB] rounded-2xl p-10 md:mx-48">
        <h2 className="text-darkPrimary text-2xl md:text-3xl  text-left mb-10">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="border-2 border-primary rounded-xl p-6 flex flex-col items-start text-left"
            >
              <img src={item.icon} alt="" className="w-10 pb-8"/>
              <h3 className="text-lg font-semibold text-darkPrimary mb-4 text-left">
                {item.title}
              </h3>
              <p className="text-darkPrimary text-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestimonialsAndWhyChooseUs;
