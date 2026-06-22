import React, { useState } from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Are all your watches authentic?",
      answer: "Yes, absolutely. Every timepiece in our collection is 100% authentic and sourced directly from authorized dealers or certified manufacturers. Each watch comes with its original packaging, papers, and an international warranty.",
      color: "from-blue-600 to-blue-800"
    },
    {
      question: "What is your return policy?",
      answer: "We offer a hassle-free 7-day return policy. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange, provided the watch is unworn, in its original condition, and has all tags attached.",
      color: "from-blue-600 to-blue-800"
    },
    {
      question: "Do you offer nationwide shipping?",
      answer: "Yes, we operate and ship across Bangladesh. We offer secure, insured, and complimentary fast delivery to all major cities nationwide. Your premium timepiece is guaranteed to reach you safely.",
      color: "from-blue-600 to-blue-800"
    },
    {
      question: "How do I care for my luxury watch?",
      answer: "To keep your watch in perfect condition, avoid exposing it to extreme temperatures or strong magnetic fields. For mechanical watches, we recommend servicing them every 3-5 years. Regular gentle cleaning with a soft cloth helps maintain its shine.",
      color: "from-blue-600 to-blue-800"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50 transition-colors duration-300 relative overflow-hidden min-h-screen">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Quick Answers
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Questions</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Everything you need to know about Master Watch. Can't find your answer? Reach out to our support team.
          </p>
        </div>

        {/* FAQ Cards with Unique Design */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-sm border overflow-hidden transition-all duration-500 ${openIndex === index
                  ? 'border-blue-500 shadow-xl scale-[1.02]'
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6 transition-colors duration-300 focus:outline-none"
              >
                {/* Question Number & Text */}
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${faq.color} flex items-center justify-center shrink-0 font-black text-white text-lg shadow-md transition-transform duration-500 ${openIndex === index ? 'scale-110 rotate-6' : ''
                    }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 flex items-center min-h-[48px]">
                    <h3 className={`text-base md:text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                      {faq.question}
                    </h3>
                  </div>
                </div>

                {/* Toggle Icon */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${openIndex === index
                    ? 'bg-blue-600 rotate-180'
                    : 'bg-gray-100 group-hover:bg-blue-50'
                  }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                  )}
                </div>
              </button>

              {/* Answer with Gradient Border */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                  <div className={`relative bg-gradient-to-br ${faq.color} p-[2px] rounded-xl`}>
                    <div className="bg-white rounded-[10px] p-5 md:p-6">
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;