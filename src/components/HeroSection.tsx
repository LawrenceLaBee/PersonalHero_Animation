"use client";

import { useRef } from "react";
import ScrollyCanvas from "./ScrollyCanvas";
import Overlay from "./Overlay";

export default function HeroSection({ numFrames }: { numFrames: number }) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            <ScrollyCanvas numFrames={numFrames} scrollContainerRef={containerRef} />
            <Overlay scrollContainerRef={containerRef} />
        </div>
    );
}
