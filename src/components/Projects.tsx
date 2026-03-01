"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Corebridge Financial",
        role: "Technical Lead (MRM)",
        description: "Architected 'Active Retention' & 'Onboarding' journeys. Implemented Dynamic Publishing and complex DCD logic for hyper-personalized content.",
        color: "from-blue-600 to-cyan-500",
        stats: "Personalization at Scale"
    },
    {
        title: "NFL",
        role: "Marketing Manager",
        description: "Owned product marketing/GTM strategy for NFL Sunday Ticket. Centralized League fan data and developed segmentation strategy.",
        color: "from-blue-800 to-red-600",
        stats: "32 Teams Integrated"
    },
    {
        title: "Opens and Clicks",
        role: "Principal Consultant",
        description: "Managing 3rd party email delivery and ESP integrations. Secured $1.6M annual scope for digital work and database build-outs.",
        color: "from-emerald-400 to-teal-600",
        stats: "$1.6M Scope Secured"
    },
    {
        title: "Oscar Health",
        role: "Email Marketing Manager",
        description: "Managed 3 SFMC orgs and migrated 60+ client emails from Hubspot. Oversaw lead lifecycle, scoring, and CRM pipeline.",
        color: "from-pink-500 to-orange-400",
        stats: "60+ Migrations"
    }
];

export default function Projects() {
    return (
        <section className="relative z-20 min-h-screen bg-[#121212] py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                        Selected Experience
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer border border-white/5"
                        >
                            {/* Card Background / Image Placeholder */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                            <div className="absolute inset-0 backdrop-blur-3xl bg-white/5" />

                            <div className="relative h-full flex flex-col justify-between p-8 md:p-12 z-10">
                                <div className="flex justify-between items-start">
                                    <span className="px-3 py-1 text-xs font-mono text-white/50 border border-white/10 rounded-full uppercase tracking-wider backdrop-blur-md">
                                        {project.role}
                                    </span>
                                    <span className="text-xl text-white/20 group-hover:text-white/40 transition-colors">↗</span>
                                </div>

                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                    <div className="h-[1px] w-12 bg-white/20 mb-4 group-hover:w-full transition-all duration-500" />
                                    <p className="text-gray-300 text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500 mb-6">
                                        {project.description}
                                    </p>
                                    <p className="text-sm font-mono text-cyan-200/80 tracking-wide">
                                        {project.stats}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-5 blur-2xl group-hover:animate-shine left-[-100%]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
