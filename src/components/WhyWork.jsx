import React from 'react';

const WhyWork = () => {
  const items = [
    {
      normalLabel: 'THE POWER OF',
      label: 'GROWTH',
      points: [
        'A culture that nurtures your potential with career paths, training, and collaboration.',
      ],
    },
    {
      normalLabel: 'THE POWER OF',
      label: 'EXCELLENCE',
      points: [
        'Work on iconic projects driven by quality, design, and sustainable innovation.',
      ],
    },
    {
      normalLabel: 'THE POWER OF',
      label: 'CARE',
      points: [
        'Enjoy competitive pay, wellness benefits, and an inclusive, people-first environment.',
      ],
    },
  ];

  return (
    <section className="lg:py-20 py-10 bg-[#966326] text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16">

        <div className="w-full md:w-5/12 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-4xl font-light mb-6">Build Your Future</h2>
          <p className="text-base leading-relaxed">
            {`At KGK Realty, we don’t just build developments—we build careers. Join a culture driven by innovation, trust, and limitless growth opportunities.`}
          </p>
        </div>

        <div className="w-full md:w-7/12 space-y-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start">
            
              <div className="flex-shrink-0 w-full md:w-52">
                <h3 className="uppercase text-sm tracking-wide text-black md:text-right">
                  <span className="text-black text-lg lg:text-2xl ml-1">{item.normalLabel}</span>
                  <br />
                  <strong className="text-black text-lg lg:text-2xl ml-1">{item.label}</strong>
                </h3>
              </div>

              <div className="w-8 h-px bg-white mt-2 mr-6 mx-4 hidden md:block" />

              <ul className="text-sm text-white max-w-md space-y-1">
                {item.points.map((point, idx) => (
                  <li key={idx} className="lg:pl-1">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWork;
