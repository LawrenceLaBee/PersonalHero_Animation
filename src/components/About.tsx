"use client";

export default function About() {
    return (
        <section className="py-32 bg-[#0a0a0a] px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                    The "Technical Marketer" Bridge.
                </h2>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
                    I sit at the intersection of marketing strategy and technical execution.
                    With a track record of managing multi-million dollar scopes and architecting
                    complex personalized journeys for global brands like <span className="text-white font-semibold">Corebridge Financial</span>, <span className="text-white font-semibold">NFL</span>, and <span className="text-white font-semibold">Toyota</span>,
                    I translate creative vision into code and data that drives revenue.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a href="mailto:lawrence.labee@gmail.com" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                        Get in Touch
                    </a>
                    <a href="https://linkedin.com/in/lawrence-labee" target="_blank" className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors">
                        LinkedIn Profile
                    </a>
                </div>
            </div>
        </section>
    );
}
