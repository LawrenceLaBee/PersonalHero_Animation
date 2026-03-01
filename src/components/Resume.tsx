"use client";

import { motion } from "framer-motion";

const experience = [
    {
        company: "MRM (Client: Corebridge Financial)",
        role: "Salesforce Marketing Cloud Email Consultant",
        dates: "2024 – Present",
        highlights: [
            "Technical Lead for email marketing modernization",
            "Architected 'Active Retention', 'Onboarding', 'Job Change', and 'Pause Contributions' journeys",
            "Implemented Dynamic Publishing and complex DCD logic for hyper-personalized content",
            "Managed offshore development teams and defined QA standards"
        ],
        color: "from-blue-500 to-cyan-400"
    },
    {
        company: "Opens and Clicks",
        role: "Principal Consultant",
        dates: "July 2020 – Present",
        highlights: [
            "Manage 3rd party email delivery and ESP integrations",
            "Secured annual $1.6M scope of digital work",
            "CRM implementations and database build-outs"
        ],
        color: "from-emerald-500 to-teal-400"
    },
    {
        company: "NFL",
        role: "Marketing Manager",
        dates: "April 2023 – April 2024",
        highlights: [
            "Centralized League fan data using Adobe tools",
            "Developed fan segmentation strategy",
            "Owned Product Marketing/GTM for NFL Sunday Ticket",
            "Lead on Kickoff 2023 go-to-market campaign"
        ],
        color: "from-blue-800 to-red-500"
    },
    {
        company: "EPIC Insurance & Consultants",
        role: "Email Marketing Manager",
        dates: "October 2022 – August 2023",
        highlights: [
            "Led transition to Adobe Experience Platform, AJO, and AEM",
            "Journey design, build, and orchestration",
            "SQL/JSON/XML data calls"
        ],
        color: "from-purple-500 to-pink-400"
    },
    {
        company: "Kaplan University",
        role: "Email Marketing Manager",
        dates: "January 2021 – December 2022",
        highlights: [
            "SFMC Journey development matriculating 25k monthly students",
            "Launched 22 emails → $226k monthly revenue increase",
            "Owned campaigns, deployments, and quarterly reporting"
        ],
        color: "from-orange-500 to-amber-400"
    },
    {
        company: "Oscar Health Insurance",
        role: "Email Marketing Manager",
        dates: "July 2021 – October 2022",
        highlights: [
            "Managed 3 SFMC orgs, 5 business units, 40+ users",
            "Migrated 60+ client emails from Hubspot to SFMC",
            "Oversaw lead lifecycle, scoring, and CRM pipeline"
        ],
        color: "from-pink-500 to-rose-400"
    },
    {
        company: "Maverick Digital",
        role: "Email Marketing & Automation Consultant",
        dates: "January 2021 – October 2021",
        highlights: [
            "Consulted 24+ Salesforce and AEM clients",
            "Architected data feeds and platform configurations",
            "Completed 12+ implementations/migrations"
        ],
        color: "from-violet-500 to-purple-400"
    },
    {
        company: "Persistent Systems / Texas Health Resources",
        role: "Sr. Computer Programmer Analyst",
        dates: "January 2020 – January 2021",
        highlights: [
            "Supported Salesforce Health Cloud implementation",
            "Sent 10M monthly HIPAA-compliant emails",
            "Oversaw all internal Marketing Cloud data processes"
        ],
        color: "from-red-500 to-orange-400"
    },
    {
        company: "SiriusXM (Toyota/Lexus Contract)",
        role: "Email Marketing Specialist",
        dates: "February 2019 – July 2019",
        highlights: [
            "Supported Adobe Experience Cloud team",
            "QA/UAT for Lexus, Infiniti, Toyota, Nissan campaigns",
            "Oversaw vendors for HTML, CSS, AMPscript"
        ],
        color: "from-gray-600 to-gray-400"
    },
    {
        company: "Neighborly",
        role: "Email Marketing Specialist",
        dates: "September 2017 – February 2019",
        highlights: [
            "Managed 15 business units in SFMC",
            "Responsible for $250k+ monthly ad spend",
            "Assisted C-level marketing decisions"
        ],
        color: "from-yellow-500 to-lime-400"
    },
    {
        company: "Texas Trust Credit Union",
        role: "Email Marketing Specialist",
        dates: "February 2017 – September 2017",
        highlights: [
            "Digital marketing for billion-dollar financial institution",
            "Negotiated $100k scope for feature updates",
            "Digital Display campaign setup and delivery"
        ],
        color: "from-sky-500 to-blue-400"
    },
    {
        company: "Castro Roofing of Texas",
        role: "Email Marketing Specialist",
        dates: "September 2014 – January 2017",
        highlights: [
            "Website redesign → 30%+ lift in commercial conversions",
            "Managed editorials, trade-show leads, CRM implementation",
            "SFMC, Adobe Creative Suite, FCS Core Roofing CRM"
        ],
        color: "from-amber-600 to-yellow-500"
    }
];

const education = [
    { school: "Full Sail University", degree: "MS - Entertainment Business" },
    { school: "Southern University A&M College", degree: "BA - Communications / PR" }
];

const skills = {
    platforms: ["Salesforce Marketing Cloud", "Adobe Experience Cloud", "Adobe Journey Optimizer", "Real-Time CDP", "Pardot", "Marketo", "Iterable", "Braze", "Datorama", "Google Analytics", "Tableau"],
    languages: ["AMPscript", "SQL", "HTML", "CSS", "JavaScript", "JSON"],
    tools: ["Jira", "Asana", "Trello", "Slack", "Litmus", "Email on Acid", "Github", "Confluence"],
    competencies: ["Omnichannel Orchestration", "Real-Time Data Management", "A/B Testing", "Journey Builder", "Automation Studio"]
};

export default function Resume() {
    return (
        <section className="relative z-20 bg-[#0d0d0d] py-32 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                        Full Resume
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6" />
                    <p className="text-xl text-gray-400">10+ Years of Marketing Technology Excellence</p>
                </motion.div>

                {/* Contact Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 mb-20 text-sm text-gray-400"
                >
                    <span>📍 Dallas, TX</span>
                    <span>📧 lawrence.labee@gmail.com</span>
                    <span>📞 214.908.2045</span>
                    <a href="https://linkedin.com/in/lawrence-labee" target="_blank" className="text-cyan-400 hover:underline">LinkedIn</a>
                </motion.div>

                {/* Experience Timeline */}
                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30" />

                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-cyan-500 z-10" />

                            {/* Content */}
                            <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                <div className={`p-6 rounded-xl bg-gradient-to-br ${job.color} bg-opacity-10 backdrop-blur-sm border border-white/10`}>
                                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{job.dates}</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mt-1">{job.company}</h3>
                                    <p className="text-sm text-cyan-300 font-medium mb-3">{job.role}</p>
                                    <ul className={`space-y-1 text-sm text-gray-300 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                        {job.highlights.map((highlight, i) => (
                                            <li key={i}>• {highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 mb-16"
                >
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">Education</h3>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        {education.map((edu, index) => (
                            <div key={index} className="px-8 py-6 rounded-xl bg-white/5 border border-white/10 text-center">
                                <p className="text-lg font-semibold text-white">{edu.degree}</p>
                                <p className="text-sm text-gray-400">{edu.school}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3">Platforms</h4>
                            <div className="flex flex-wrap gap-2">
                                {skills.platforms.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-3">Languages</h4>
                            <div className="flex flex-wrap gap-2">
                                {skills.languages.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-3">Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {skills.tools.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 text-xs bg-pink-500/20 text-pink-300 rounded-full">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-3">Core Competencies</h4>
                            <div className="flex flex-wrap gap-2">
                                {skills.competencies.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 text-xs bg-amber-500/20 text-amber-300 rounded-full">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
