"use client";

import { motion } from "framer-motion";

const skills = [
    "Salesforce Marketing Cloud", "Adobe Experience Cloud", "AMPscript", "SQL",
    "JavaScript", "React.js", "Adobe Journey Optimizer", "Real-Time CDP",
    "Hubspot", "Pardot", "HTML/CSS", "Datorama", "Google Analytics",
    "Jira", "Omnichannel Orchestration", "Next.js"
];

export default function Skills() {
    return (
        <section className="py-20 bg-[#121212] border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
                <h3 className="text-2xl text-white/50 font-light tracking-wide uppercase">Technical Arsenal</h3>
            </div>

            <div className="relative flex">
                <motion.div
                    className="flex space-x-10 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <span key={index} className="text-4xl md:text-6xl font-bold text-white/10 hover:text-white/30 transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
