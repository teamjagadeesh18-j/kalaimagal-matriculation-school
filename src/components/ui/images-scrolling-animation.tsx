"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";

export interface GalleryProject {
  title: string;
  src: string;
}

interface ImagesScrollingAnimationProps {
  projects?: GalleryProject[];
}

const DEFAULT_PROJECTS: GalleryProject[] = [
  {
    title: "Classroom Learning",
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop&crop=center",
  },
  {
    title: "Annual Day Celebrations",
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=500&fit=crop&crop=center",
  },
  {
    title: "Sports Activity",
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=500&fit=crop&crop=center",
  },
  {
    title: "Library Time",
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=500&fit=crop&crop=center",
  },
  {
    title: "Student Life & Campus",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop&crop=center",
  },
];

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 18 + 160}px)`,
        }}
        className="rounded-2xl sm:rounded-3xl lg:rounded-4xl relative -top-1/4 flex origin-top flex-col overflow-hidden shadow-2xl border border-slate-200/80 bg-white
                   h-[220px] w-[300px] 
                   sm:h-[260px] sm:w-[420px] 
                   md:h-[320px] md:w-[540px] 
                   lg:h-[360px] lg:w-[680px]"
      >
        <img src={src || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
          <p className="text-sm md:text-base font-semibold font-body">{title}</p>
        </div>
      </motion.div>
    </div>
  );
};

const ImagesScrollingAnimation = ({ projects = DEFAULT_PROJECTS }: ImagesScrollingAnimationProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const activeProjects = projects && projects.length > 0 ? projects : DEFAULT_PROJECTS;

  return (
    <ReactLenis root>
      <div
        ref={container}
        className="relative flex w-full flex-col items-center justify-center 
                                     pb-[35vh] pt-[4vh] 
                                     sm:pb-[45vh] sm:pt-[6vh] 
                                     lg:pb-[55vh] lg:pt-[8vh]"
      >
        {activeProjects.map((project, i) => {
          const targetScale = Math.max(0.6, 1 - (activeProjects.length - i - 1) * 0.08);
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * (1 / activeProjects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </ReactLenis>
  );
};

export { ImagesScrollingAnimation, StickyCard_001 };
