

const steps = [
  {
    number: 1,
    text: "Submit Intake Form",
  },
  {
    number: 2,
    text: "We do the search and curation for list of jobs",
  },
  {
    number: 3,
    text: (
      <>
        You approve, we do the{" "}
        <span className="">
          tedious part (applying)
        </span>
      </>
    ),
  },
  {
    number: 4,
    text: "You get the interviews",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-36 py-8 flex flex-col justify-center ">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-12">
          How we work?
        </h2>

        
        <div className="flex flex-col md:flex-row  items-start gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="w-16 h-16 border-2 border-[#022183] rounded-full flex items-center justify-center text-black text-4xl  mb-2">
                {step.number}
              </div>
              <div className="w-36 border-b-2 border-primary mb-2 "></div>
              <p className="text-primary max-w-[250px] text-xl">{step.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
