"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface AbstractCanvasScrollProps {
    folderPath: string;
    totalFrames?: number;
}

export default function AbstractCanvasScroll({ folderPath, totalFrames = 120 }: AbstractCanvasScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Calculate the current frame 0 to totalFrames - 1
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        // Determine image extension and padding string based on given folder
        // E.g ezgif-frame-001.jpg
        const padNumber = (num: number) => num.toString().padStart(3, '0');

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `${folderPath}/ezgif-frame-${padNumber(i)}.jpg`; // Use generic ezgif format from user's assets

            // Fallback for .webp if jpg fails for custom assets later
            img.onerror = () => {
                // In real app, we'd handle fallback safely. For now, assume format is jpg as per ezgif folder
            }

            img.onload = () => {
                loadedCount++;
                setImagesLoaded(loadedCount);
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, [folderPath, totalFrames]);

    // Render to canvas
    useEffect(() => {
        if (imagesLoaded < totalFrames || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        let renderTask: number;

        const render = (val: number) => {
            const frame = Math.floor(val);
            if (images[frame]) {
                // Clear and draw maintaining aspect ratio
                context.clearRect(0, 0, canvas.width, canvas.height);

                const img = images[frame];
                const canvasRatio = canvas.width / canvas.height;
                const imgRatio = img.width / img.height;

                let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

                if (canvasRatio > imgRatio) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgRatio;
                    offsetY = -(drawHeight - canvas.height) / 2;
                } else {
                    drawHeight = canvas.height;
                    drawWidth = canvas.height * imgRatio;
                    offsetX = -(drawWidth - canvas.width) / 2;
                }

                context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        // Initial render
        render(0);

        // Subscribe to frame changes
        const unsubscribe = frameIndex.on("change", (val) => {
            // throttle with requestAnimationFrame
            if (renderTask) cancelAnimationFrame(renderTask);
            renderTask = requestAnimationFrame(() => render(val));
        });

        return () => {
            unsubscribe();
            if (renderTask) cancelAnimationFrame(renderTask);
        }
    }, [imagesLoaded, totalFrames, images, frameIndex]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        handleResize(); // Set initial size
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={containerRef} className="h-[500vh] relative w-full bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {imagesLoaded < totalFrames && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 bg-black">
                        <div className="text-agentx-cyan font-mono text-sm tracking-widest flex flex-col items-center">
                            <span>INITIALIZING AI CORE</span>
                            <span className="mt-2 text-white/50">{Math.round((imagesLoaded / totalFrames) * 100)}%</span>
                        </div>
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 z-10 filter contrast-125 brightness-75"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-black via-transparent to-black opacity-80 pointer-events-none" />
            </div>
        </div>
    );
}
