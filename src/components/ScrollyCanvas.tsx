"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 75;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 to 1) to frame index (0 to 74)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          renderFrame(0, loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const renderFrame = (index: number, imgArray: HTMLImageElement[] = images) => {
    if (!canvasRef.current || imgArray.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgArray[index];
    if (!img) return;

    // Handle object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    // Update canvas size on resize
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(Math.round(frameIndex.get()));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]); // Re-run when images are loaded

  // Update canvas on scroll
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => renderFrame(Math.round(latest)));
    });
    return () => unsubscribe();
  }, [frameIndex, images]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* We use a black overlay to blend the edges optionally, or just let it be clean */}
        <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />
      </div>
    </div>
  );
}
