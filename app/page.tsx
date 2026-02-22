"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { solutions } from "@/data/solutions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AbstractCanvasScroll from "@/components/AbstractCanvasScroll";
import TextOverlays from "@/components/TextOverlays";
import { Shield, Zap, Server, Activity } from "lucide-react";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const solution = solutions[currentIndex];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % solutions.length);
    };

    return (
        <main className="min-h-screen bg-black flex flex-col">
            <Navbar />

            <AnimatePresence mode="wait">
                <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="relative flex-grow"
                >
                    {/* Hero Section (Canvas + Text) */}
                    <section className="relative w-full">
                        {/* Background glowing effects */}
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-agentx-cyan/20 rounded-full blur-[120px] pointer-events-none animate-pulse z-0" />
                        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-agentx-blue/20 rounded-full blur-[150px] pointer-events-none animate-pulse z-0" style={{ animationDelay: '2s' }} />

                        <AbstractCanvasScroll folderPath={solution.folderPath} totalFrames={176} />

                        {/* Founders & Focus Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="absolute top-28 left-4 md:left-12 z-40 max-w-sm md:max-w-md pointer-events-none backdrop-blur-xl bg-black/40 p-6 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                        >
                            <h1 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <Zap size={20} className="text-agentx-cyan animate-pulse" />
                                AGENTX
                            </h1>
                            <div className="h-px w-full bg-gradient-to-r from-agentx-cyan to-transparent mb-4 opacity-50" />
                            <p className="text-agentx-cyan text-xs uppercase tracking-widest mb-1 font-semibold">Founders & CEOs</p>
                            <p className="text-white font-medium text-lg mb-4 tracking-wide">Yashraj Panda & Ritam Patra</p>
                            <p className="text-sm text-agentx-silver/90 leading-relaxed font-light">
                                Dedicated to building high-impact <span className="text-white font-medium">small projects</span> powered by <span className="text-agentx-cyan font-medium flex-inline items-center gap-1">Machine Learning</span>, <span className="text-white font-medium">Agentic AI</span>, and <span className="text-agentx-blue font-medium">Generative AI</span>.
                            </p>
                        </motion.div>

                        <TextOverlays
                            sections={[solution.section1, solution.section2, solution.section3, solution.section4]}
                            themeColor={solution.themeColor}
                        />
                    </section>

                    {/* Details Section */}
                    <section className="py-32 px-8 max-w-7xl mx-auto relative z-20 bg-black" id="solutions">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                        >
                            <div>
                                <h3 className="text-agentx-silver text-sm tracking-[0.2em] uppercase mb-4 opacity-80">
                                    {solution.subName}
                                </h3>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    {solution.detailsSection.title}
                                </h2>
                                <p className="text-agentx-silver/80 text-lg leading-relaxed mb-8">
                                    {solution.detailsSection.description}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {solution.features.map((feature, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white shadow-lg backdrop-blur-sm">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent z-10" />
                                <div
                                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                                    style={{ background: solution.gradient }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center p-8 z-20">
                                    {/* Diagram placeholder representation */}
                                    <div className="w-full h-full border border-white/20 rounded-xl relative flex items-center justify-center overflow-hidden">
                                        <Activity size={100} color={solution.themeColor} className="opacity-50 absolute animate-pulse" />
                                        <div className="w-64 h-64 border-2 border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
                                        <div className="w-48 h-48 border border-white/30 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* Metrics Banner */}
                    <section className="border-y border-white/10 bg-black/50 backdrop-blur-xl relative z-20 py-12">
                        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10 relative">
                            {/* Subtle background glow */}
                            <div className="absolute inset-0 opacity-10 filter blur-3xl pointer-events-none" style={{ background: solution.themeColor }} />
                            {solution.metrics.map((metric, i) => (
                                <div key={i} className="py-4 md:py-0 relative z-10">
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2">{metric.val}</div>
                                    <div className="text-xs uppercase tracking-[0.2em] text-agentx-silver">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Impact Section */}
                    <section className="py-32 px-8 max-w-7xl mx-auto relative z-20 bg-black text-center" id="impact">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl mx-auto"
                        >
                            <Shield className="w-12 h-12 mx-auto mb-8 opacity-80" color={solution.themeColor} />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                {solution.impactSection.title}
                            </h2>
                            <p className="text-xl text-agentx-silver/80 leading-relaxed font-light">
                                {solution.impactSection.description}
                            </p>
                        </motion.div>
                    </section>

                    {/* Deployment Section */}
                    <section className="py-24 px-8 relative z-20 bg-[#06060A]" id="research">
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-16 md:flex justify-between items-end border-b border-white/10 pb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                                        <Server className="w-6 h-6" color={solution.themeColor} />
                                        Deployment Architecture
                                    </h2>
                                    <p className="text-agentx-silver">Enterprise-grade infrastructure specifications.</p>
                                </div>
                                <div className="mt-6 md:mt-0 text-right">
                                    <div className="text-sm text-agentx-silver uppercase tracking-wider mb-1">Model</div>
                                    <div className="text-white font-semibold">{solution.deploymentSection.model}</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-black border border-white/5 p-8 rounded-xl hover:border-white/20 transition-colors">
                                    <h4 className="text-white font-semibold mb-4 text-lg">Architecture</h4>
                                    <p className="text-agentx-silver">{solution.deploymentSection.architecture}</p>
                                    <div className="mt-8 space-y-3">
                                        {solution.deploymentSection.processingParams.map((param, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-agentx-silver/80">
                                                <Zap size={14} color={solution.themeColor} /> {param}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-black border border-white/5 p-8 rounded-xl hover:border-white/20 transition-colors">
                                    <h4 className="text-white font-semibold mb-4 text-lg">Integration</h4>
                                    <p className="text-agentx-silver">{solution.deploymentSection.integrationPromise}</p>
                                </div>
                                <div className="bg-black border border-white/5 p-8 rounded-xl hover:border-white/20 transition-colors">
                                    <h4 className="text-white font-semibold mb-4 text-lg">Security</h4>
                                    <p className="text-agentx-silver">{solution.deploymentSection.securityPolicy}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Next Module Transition */}
                    <section className="py-32 px-8 flex justify-center relative z-20 bg-black">
                        <button
                            onClick={handleNext}
                            className="group relative px-12 py-6 bg-transparent border-none outline-none overflow-hidden rounded-full w-full max-w-2xl text-center"
                        >
                            <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500 backdrop-blur-md rounded-full border border-white/10" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: solution.gradient }} />
                            <span className="relative z-10 flex items-center justify-center gap-4 text-white text-lg font-medium tracking-wide">
                                Initialize Next System Module
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    →
                                </motion.div>
                            </span>
                        </button>
                    </section>

                </motion.div>
            </AnimatePresence>
            <Footer />

            {/* Floating Module Toggle Navigation */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-2 bg-black/60 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-2xl">
                {solutions.map((s, i) => (
                    <button
                        key={s.id}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-white' : 'bg-white/30 hover:bg-white/50'}`}
                        aria-label={`Switch to ${s.name}`}
                        style={currentIndex === i ? { background: s.themeColor, boxShadow: `0 0 10px ${s.themeColor}` } : {}}
                    />
                ))}
            </div>
        </main>
    );
}
