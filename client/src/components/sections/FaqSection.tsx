import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  // FAQ data
  const faqs = [
    // {
    //   question: "What are the library membership fees?",
    //   answer: "We offer different membership tiers starting from $25/month for basic access, $45/month for standard membership including cabin access, and $65/month for premium membership with all facilities. Student discounts are available with valid ID."
    // },
    {
      question: "Can I reserve a study cabin in advance?",
      answer:
        "Yes, members can reserve study cabins up to 7 days in advance through our website or mobile app. Non-members can make same-day reservations based on availability.",
    },
    {
      question: "Is WiFi available in the library?",
      answer:
        "Yes, we provide high-speed WiFi throughout the entire facility free of charge for all library users. The connection is secured and optimized for research and studying needs.",
    },
    {
      question: "Are food and drinks allowed in the library?",
      answer:
        "Bottled water and covered drinks are allowed throughout the library. Food is only permitted in designated refreshment areas to maintain cleanliness and preserve our materials.",
    },
    {
      question: "What safety measures do you have in place?",
      answer:
        "Our library features 24/7 security cameras, key card access during evening hours, well-lit premises, and staff trained in emergency procedures. We also enforce strict COVID-19 safety protocols when necessary.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find answers to common questions about our library services.
          </motion.p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
