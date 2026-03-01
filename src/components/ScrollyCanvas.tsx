"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollyCanvas({ numFrames, scrollContainerRef }: { numFrames: number, scrollContainerRef: React.RefObject<HTMLDivElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 0; i < numFrames; i++) {
      const img = new Image();
      // Assuming images are named 000.webp, 001.webp, etc.
      const src = `/sequence/${i.toString().padStart(3, "0")}.webp`;
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === numFrames) {
          setIsLoaded(true);
        }
      };
      imgArray.push(img);
    }
    setImages(imgArray);
  }, [numFrames]);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw image - cover logic
    const img = images[index];

    // Calculate aspect ratios
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || images.length === 0) return;
    const frameIndex = Math.min(
      numFrames - 1,
      Math.floor(latest * numFrames)
    );
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Initial render when loaded
  useEffect(() => {
    if (isLoaded) {
      renderFrame(0);
    }
  }, [isLoaded]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame
        if (isLoaded) {
          const latest = scrollYProgress.get();
          const frameIndex = Math.min(numFrames - 1, Math.floor(latest * numFrames));
          renderFrame(frameIndex);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial size
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, scrollYProgress, numFrames]); // Added dependencies

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#121212] z-50">
        <div className="text-white text-xl font-light tracking-widest animate-pulse">
          LOADING EXPERIENCE...
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
      <canvas ref={canvasRef} className="block w-full h-full object-cover" />
    </div>
  );
}
