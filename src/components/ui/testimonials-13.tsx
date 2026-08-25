"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
} from "@/components/ui/testimonials-13-utils/logos";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/testimonials-13-utils/marquee";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  id: number;
  name: string;
  designation: string;
  company: string;
  testimonial: string;
  logo: React.ComponentType<any>;
}

export interface Testimonials13Props {
  title?: string;
  subtitle?: string;
  testimonialsList?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Jagadeesh R.",
    designation: "Parent of Class 10 Student",
    company: "Parent Community",
    testimonial:
      "The academic discipline and supportive teachers at this school have helped my child build immense confidence and high exam scores!",
    logo: Logo01,
  },
  {
    id: 2,
    name: "Subramanian V.",
    designation: "Alumnus (Batch 2020)",
    company: "Software Engineer",
    testimonial:
      "The values, study habits, and sports opportunities I received here formed the strong foundation for my engineering career.",
    logo: Logo02,
  },
  {
    id: 3,
    name: "Kavitha M.",
    designation: "Parent of Class 4 Student",
    company: "Parent Association",
    testimonial:
      "Teachers pay attention to every child individually. The environment is safe, clean, and genuinely nurturing for primary kids.",
    logo: Logo03,
  },
  {
    id: 4,
    name: "Rajesh Kannan",
    designation: "Alumnus & Parent",
    company: "Local Entrepreneur",
    testimonial:
      "I studied here myself and now my daughter is enrolled. The commitment to character development and academic clarity remains rock solid.",
    logo: Logo04,
  },
  {
    id: 5,
    name: "Priya Sundaram",
    designation: "Senior Secondary Parent",
    company: "Parent Forum",
    testimonial:
      "Clear communication from the principal and regular parent-teacher meetings give us full confidence in our child's progress.",
    logo: Logo05,
  },
  {
    id: 6,
    name: "Anand Narayan",
    designation: "Parent of Class 7 Student",
    company: "Community Member",
    testimonial:
      "Extracurricular activities, science exhibitions, and annual sports days make school a joyful place my son looks forward to every day.",
    logo: Logo06,
  },
];

export default function Testimonials13({
  title = "Success Stories & Parent Feedback",
  subtitle = "Real feedback from parents, alumni, and students who experience our campus every day",
  testimonialsList = defaultTestimonials,
}: Testimonials13Props) {
  return (
    <div className="px-6 py-20 max-w-7xl mx-auto overflow-hidden">
      <h2 className="text-center font-bold text-3xl tracking-tight md:text-4xl font-heading">
        {title}
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-base md:text-lg font-body max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-12 space-y-px border rounded-2xl bg-muted/40 overflow-hidden shadow-sm">
        <Marquee className="py-2 [--duration:50s] [--gap:16px]" pauseOnHover>
          <TestimonialList items={testimonialsList} />
        </Marquee>
      </div>
    </div>
  );
}

const TestimonialList = ({ items }: { items: TestimonialItem[] }) =>
  items.map((testimonial) => {
    const initial = testimonial.name ? testimonial.name.trim().charAt(0).toUpperCase() : "S";

    return (
      <div
        className="flex w-full max-w-sm flex-col justify-between p-2"
        key={testimonial.id}
      >
        <div className="rounded-xl border bg-background p-6 shadow-xs flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarFallback className="bg-[#172554] text-[#F4B400] font-bold text-base font-heading">
                    {initial}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-sm font-heading">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs font-body">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-600 font-body">
                Verified
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-body">
              "{testimonial.testimonial}"
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400 font-body">
              {testimonial.company}
            </span>
            <testimonial.logo className="h-6 w-24 text-slate-400" />
          </div>
        </div>
      </div>
    );
  });
