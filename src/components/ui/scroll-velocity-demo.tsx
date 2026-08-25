"use client"

import React from "react"
import { ScrollVelocity } from "@/components/ui/scroll-velocity"

const images = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=640&auto=format&fit=crop"
];
const velocity = [3, -3];

export function ScrollVelocityDemo() {
  return (
    <div className="w-full py-8 bg-transparent overflow-hidden my-6">
      <div className="flex flex-col space-y-5">
        {velocity.map((v, index) => (
          <ScrollVelocity key={index} velocity={v}>
            {images.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative h-[6.5rem] w-[11rem] md:h-[9rem] md:w-[15rem] xl:h-[12rem] xl:w-[21rem] rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src={imgUrl}
                  alt="Campus Moment"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </ScrollVelocity>
        ))}
      </div>
    </div>
  )
}
