import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question: 'What types of properties does KGK Realty offer?',
    answer:
      'KGK Realty specializes in residential, commercial, and industrial real estate developments. Their portfolio includes luxury apartments, affordable housing, commercial spaces, and plots across Jaipur and Mumbai.',
  },
  {
    question: "Where are KGK Realty's projects located?",
    answer:
      'In Jaipur, notable locations include Mansarovar, Jagatpura, Tonk Road, and C-Scheme. In Mumbai, projects are situated in Vashi, Navi Mumbai.',
  },
  {
    question: 'Are the properties RERA registered?',
    answer:
      'Yes, all KGK Realty projects are registered with the Real Estate Regulatory Authority (RERA). For instance, the Akshar project in Mansarovar is registered under RERA No. RAJ/P/2022/1884.',
  },
  {
    question: "What amenities are included in KGK Realty's residential projects?",
    answer: [
      'Clubhouses and community halls',
      'Swimming pools and gymnasiums',
      "Children's play areas and senior citizen zones",
      'Rainwater harvesting and sewage treatment plants',
      '24/7 security and CCTV surveillance',
      'Modular kitchens and premium fittings',
    ],
  },
  {
    question: 'How can I book a site visit or get more information?',
    answer:
      "You can contact KGK Realty directly through their website's contact page or by calling their Jaipur office at +91 9829625004.",
  },
  {
    question: 'What is the possession timeline for properties?',
    answer:
      'Possession timelines vary by project. For example, the Akshar project in Mansarovar is expected to be ready for possession by November 2026.',
  },
  {
    question: 'Are there any ongoing or upcoming projects?',
    answer: [
      'Aarohan (C-Scheme, Jaipur)',
      'Aahvan (Vaishali Nagar West, Jaipur)',
      'Aakar (Jagatpura, Jaipur)',
      'Nav Nilay (Bagru, Jaipur)',
      'Infiniti Homes (Bhankrota, Jaipur)',
    ],
  },
  {
    question: 'What makes KGK Realty stand out in the market?',
    answer:
      "KGK Realty is recognized for its commitment to quality, customer-centric approach, and timely delivery. The company has received accolades such as the 'Best Industrial Park Developer' at the Times of India’s Rajasthan Industrial Icon 2021 and the 'Smart Project of the Year Residential Realty' award for Akshar at the Estate Awards 2023 by Franchise India.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleIndex = (index) => setOpenIndex(openIndex === index ? null : index);

  const midIndex = Math.ceil(faqItems.length / 2);
  const leftFaqs = faqItems.slice(0, midIndex);
  const rightFaqs = faqItems.slice(midIndex);

  const renderAnswer = (answer) => {
    if (Array.isArray(answer)) {
      return (
        <ul className="list-disc ml-6 space-y-1 text-sm text-gray-600">
          {answer.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-sm text-gray-600">{answer}</p>;
  };

  return (
    <section className="lg:py-12  py-8">
      <div className="flex items-center justify-center mb-12">
        <div className="flex-grow border-t border-gray-300 mr-4" />
        <h2 className="text-2xl lg:text-4xl font-light text-center">Frequently Asked Questions</h2>
        <div className="flex-grow border-t border-gray-300 ml-4" />
      </div>

      <div className="container-fluid lg:mb-4">
        <div className="flex flex-col md:flex-row gap-8 lg:px-10">
          {[leftFaqs, rightFaqs].map((faqs, colIndex) => (
            <div key={colIndex} className="flex-1 space-y-4">
              {faqs.map((item, index) => {
                const actualIndex = colIndex === 0 ? index : index + midIndex;
                return (
                  <div
                    key={actualIndex}
                    className="border-2 shadow-[0_1px_3px_rgba(229,228,228,0.5)] border-gray-300 rounded-xl cursor-pointer"
                    onClick={() => toggleIndex(actualIndex)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && toggleIndex(actualIndex)}
                  >
                    <div className="flex items-center p-4">
                      <div className="flex items-center justify-center bg-[#B18047] text-white rounded-full w-7 h-7 mr-4">
                        {openIndex === actualIndex ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                      <span className="text-sm text-gray-700">{item.question}</span>
                    </div>
                    {openIndex === actualIndex && (
                      <div className="px-4 pb-4 transition-all duration-300 ease-in-out">
                        {renderAnswer(item.answer)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
