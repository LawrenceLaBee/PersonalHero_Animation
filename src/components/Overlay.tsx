"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay({ scrollContainerRef }: { scrollContainerRef: React.RefObject<HTMLDivElement | null> }) {
    const { scrollYProgress } = useScroll({
        target: scrollContainerRef,
        offset: ["start start", "end end"]
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.6], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.9], [100, -100]); // Moves slightly up

    return (
        <div className="absolute top-0 left-0 w-full h-[400vh] pointer-events-none z-10">
            {/* Section 1 */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
                <motion.div style={{ opacity: opacity1, y: y1 }} className="text-center">
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mix-blend-difference">
                        LAWRENCE
                        <br />
                        LABEE IV
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase">
                        Marketing Technologist
                    </p>
                </motion.div>
            </div>

            {/* Section 2 */}
            <div className="absolute top-[120vh] w-full px-10 md:px-32">
                <motion.div style={{ opacity: opacity2, y: y2 }} className="max-w-4xl">
                    <h2 className="text-5xl md:text-8xl font-semibold text-white leading-tight">
                        Orchestrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">digital experiences</span> at scale.
                    </h2>
                </motion.div>
            </div>

            {/* Section 3 */}
            <div className="absolute top-[250vh] w-full px-10 md:px-32 flex justify-end">
                <motion.div style={{ opacity: opacity3, y: y3 }} className="max-w-4xl text-right">
                    <h2 className="text-4xl md:text-7xl font-semibold text-white leading-tight">
                        Bridging the gap between <br />
                        <span className="italic font-serif text-yellow-200">marketing strategy</span> & <span className="font-mono text-cyan-200">technical execution</span>.
                    </h2>
                </motion.div>
            </div>
        </div>
    );
}
