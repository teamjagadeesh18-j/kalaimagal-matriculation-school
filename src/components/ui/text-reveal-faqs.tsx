"use client";

import React from "react";
import { TextEffect } from "@/components/core/text-effect";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQs() {
  const faqItems = [
    {
      id: "item-1",
      question: "What curriculum and syllabus does the school follow?",
      answer: "Our school follows the Tamil Nadu State Board Matriculation curriculum, combining core academic subjects with hands-on science experiments, digital learning modules, and value-based education.",
    },
    {
      id: "item-2",
      question: "What age groups and classes are open for admission?",
      answer: "Admissions are offered across Early Years (LKG & UKG), Primary Stage (Class 1-5), Middle School (Class 6-8), High School (Class 9-10), and Higher Secondary (Class 11-12).",
    },
    {
      id: "item-3",
      question: "What safety and security measures are in place on campus?",
      answer: "We ensure campus safety with 24/7 CCTV surveillance, gate security desk, female staff attendants for kindergarten/primary classes, and structured daily attendance tracking.",
    },
    {
      id: "item-4",
      question: "What co-curricular and sports activities are available?",
      answer: "Students participate in annual sports day competitions, athletics, yoga, arts & crafts, science exhibitions, inter-school cultural events, and public speaking clubs.",
    },
    {
      id: "item-5",
      question: "How can parents schedule a campus visit or interview?",
      answer: "Parents are welcome to visit our admissions desk Monday through Saturday (8:30 AM – 4:00 PM) or complete our quick inquiry form in the connect section.",
    },
  ];

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#f9fafb] border-t border-[#e5e7eb] font-body relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <span 
              className="inline-block px-3.5 py-1 rounded-xl text-xs font-extrabold uppercase tracking-widest border shadow-xs"
              style={{
                backgroundColor: "rgba(87, 39, 231, 0.08)",
                color: "#5727e7",
                borderColor: "rgba(87, 39, 231, 0.2)"
              }}
            >
              ADMISSIONS & HELP DESK
            </span>
            <TextEffect 
              as="h2" 
              preset="fade-in-blur" 
              speedReveal={1.1} 
              speedSegment={0.3} 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#030712] font-heading tracking-tight leading-tight"
            >
              Frequently Asked Questions
            </TextEffect>
            <TextEffect 
              as="p" 
              preset="fade-in-blur" 
              speedReveal={1.1} 
              speedSegment={0.3} 
              className="text-slate-600 text-base md:text-lg leading-relaxed font-body"
            >
              Everything you need to know about our admissions process, academic structure, and campus guidelines.
            </TextEffect>

            <div 
              className="p-5 rounded-xl border bg-white shadow-xs mt-6 space-y-2"
              style={{ borderColor: "#e5e7eb" }}
            >
              <h4 className="font-extrabold text-sm text-[#030712] font-heading">Need Direct Guidance?</h4>
              <p className="text-xs text-slate-600 font-body">
                Can't find your answer here? Reach out directly to our{" "}
                <Link
                  href="#connect"
                  className="font-bold underline hover:no-underline transition-all"
                  style={{ color: "#5727e7" }}
                >
                  admissions desk
                </Link>{" "}
                for personalized assistance.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div 
              className="p-6 md:p-8 rounded-xl bg-white border border-[#e5e7eb]"
              style={{
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)"
              }}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border border-slate-200/80 rounded-xl px-5 py-1 bg-slate-50/50 data-[state=open]:bg-white data-[state=open]:shadow-xs transition-all duration-200"
                  >
                    <AccordionTrigger 
                      className="cursor-pointer text-left text-sm md:text-base font-extrabold text-[#030712] hover:no-underline font-heading py-4"
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-xs md:text-sm leading-relaxed font-body pb-4 pt-1">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
