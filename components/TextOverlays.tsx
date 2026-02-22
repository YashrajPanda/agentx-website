"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface TextOverlaysProps {
    sections: { title: string; subtitle: string }[];
    themeColor: string;
}

export default function TextOverlays({ sections, themeColor }: TextOverlaysProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
            {sections.map((section, index) => {
                // Calculate dynamic scroll ranges for 4 sections across 100% of height
                const start = index * 0.25;
                const fadeStart = start + 0.05;
                const fadeOut = start + 0.20;
                const end = start + 0.25;

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(
                    scrollYProgress,
                    [start, fadeStart, fadeOut, end],
                    [0, 1, 1, 0]
                );

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const y = useTransform(
                    scrollYProgress,
                    [start, fadeStart, fadeOut, end],
                    [50, 0, 0, -50]
                );

                return (
                    <motion.div
                        key={index}
                        className="absolute top-0 left-0 w-full h-[100vh] flex flex-col items-center justify-center px-4 sticky top-0"
                        style={{ opacity, y }}
                    >
                        <div className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-black/20 p-8 pt-20 rounded-2xl border border-white/5 shadow-2xl">
                            <h2
                                className="text-5xl md:text-7xl font-black tracking-tighter mb-4 pb-2 bg-clip-text text-transparent"
                                style={{ backgroundImage: `linear-gradient(to right, #ffffff, ${themeColor})` }}
                            >
                                {section.title}
                            </h2>
                            {section.subtitle && (
                                <p className="text-xl md:text-2xl text-agentx-silver font-light tracking-wide max-w-2xl mx-auto">
                                    {section.subtitle}
                                </p>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
