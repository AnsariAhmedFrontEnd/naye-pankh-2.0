import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the mission of NayePankh Foundation?",
      answer:
        "NayePankh Foundation is a non-governmental organization committed to uplifting underprivileged and marginalized communities by providing access to education, healthcare, and basic necessities. Our mission is to create a better society for all by addressing the needs of those who are often overlooked.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, NayePankh Foundation is registered under sections 80G and 12A of the Indian Income Tax Act. This registration allows donors to claim tax deductions for their contributions.",
    },
    {
      question: "How can I make a donation?",
      answer:
        "You can donate through our official website by clicking on the 'Donate Now' button. We accept various payment methods, including credit/debit cards, net banking, and UPI. For alternative donation methods or assistance, please contact us at president@nayepankh.com or +91-8318500748.",
    },
    {
      question: "How will my donation be utilized?",
      answer:
        "Your contribution will directly support our initiatives, including providing education and skill development programs to underprivileged children and distributing essential resources to marginalized communities. We are committed to transparency and will provide updates on how funds are allocated.",
    },
    {
      question: "Can I volunteer with NayePankh Foundation?",
      answer:
        "Absolutely! We welcome individuals passionate about making a difference. To join our team, please visit the 'Join Us' section on our website or contact us directly at president@nayepankh.com. Together, we can create positive change.",
    },
    {
      question: "How can I stay updated on your activities?",
      answer:
        "Stay connected with us through our social media channels:\nFacebook: NayePankh Foundation NGO\nInstagram: @nayepankhfoundation\nYou can also subscribe to our newsletter by providing your email address on our website.",
    },
    {
      question: "Are there other ways to support besides donating?",
      answer:
        "Yes, you can support us by:\n- Volunteering your time and skills.\n- Spreading awareness about our initiatives within your network.\n- Participating in our fundraising events and campaigns.\nEvery effort counts and helps us move closer to our mission.",
    },
    {
      question: "How do I contact NayePankh Foundation for further inquiries?",
      answer:
        "For any questions or additional information, please reach out to us at:\nEmail: president@nayepankh.com\nPhone: +91-8318500748",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#004085" }}>
        Frequently Asked Questions
      </h2>
      <div className="d-flex flex-column gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-3 rounded"
            style={{
              border: "1px solid #004085",
            }}
          >
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleFAQ(index)}
            >
              <h5 style={{ color: "#004085", margin: 0 }}>{faq.question}</h5>
              <span style={{ color: "#004085" }}>
                {openIndex === index ? <FaMinus size={20} /> : <FaPlus size={20} />}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2" style={{ color: "#4D455D" }}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
