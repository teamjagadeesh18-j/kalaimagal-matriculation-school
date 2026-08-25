'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What curriculum does Kalaimagal Matriculation School follow?',
      answer: 'Kalaimagal Matriculation School follows the Tamil Nadu State Board Matriculation curriculum, combining academic rigor with practical science, digital learning, and holistic value education.',
    },
    {
      id: 'item-2',
      question: 'What classes are offered at Kalaimagal Matriculation School?',
      answer: 'We offer comprehensive schooling from Early Childhood (LKG & UKG) through Primary, Middle, Secondary, and Higher Secondary levels with specialized academic streams.',
    },
    {
      id: 'item-3',
      question: 'What facilities are available on campus?',
      answer: 'Our campus features modern smart classrooms, well-equipped science and computer laboratories, a spacious library, safe play areas, and dedicated sports grounds.',
    },
    {
      id: 'item-4',
      question: 'How does the school support student safety and discipline?',
      answer: 'We maintain a secure campus with CCTV monitoring, supervised study hours, female attendants for primary classes, and structured daily routines.',
    },
    {
      id: 'item-5',
      question: 'How can parents apply for admissions for the upcoming session?',
      answer: 'Admissions are open! Parents can visit our campus office in Thiruninravur or submit an inquiry through our website connect section for counseling and campus tours.',
    },
  ];

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white border-t border-[#e5e7eb] font-body">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="inline-block px-3.5 py-1 rounded-[8px] bg-[#f2f2ff] text-[#5727e7] border border-[#5727e7]/20 text-xs font-semibold tracking-wide uppercase font-body mb-3">
              HELP & ADMISSIONS
            </span>
            <h2 className="text-[#030712] text-3xl md:text-4xl font-bold font-heading">Frequently Asked Questions</h2>
            <p className="text-[#4b5563] mt-4 text-balance text-base md:text-lg">
              Everything you need to know about admissions, academics, and life at Kalaimagal Matriculation School.
            </p>
            <p className="text-[#4b5563] mt-6 hidden md:block text-sm">
              Can’t find what you’re looking for? Reach out to our{' '}
              <Link
                href="#connect"
                className="text-[#5727e7] font-semibold hover:underline"
              >
                admissions support team
              </Link>{' '}
              for guidance.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-[#e5e7eb]">
                  <AccordionTrigger className="cursor-pointer text-left text-base font-semibold text-[#030712] hover:text-[#5727e7] hover:no-underline font-heading">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4b5563]">
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="text-[#4b5563] mt-6 md:hidden text-sm">
            Can't find what you're looking for? Contact our{' '}
            <Link
              href="#connect"
              className="text-[#5727e7] font-semibold hover:underline">
              admissions team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export const BlurredStagger = ({
  text,
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <div className="w-full pt-1">
      <motion.p
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-sm md:text-base text-[#4b5563] leading-relaxed break-words whitespace-normal font-body"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};
