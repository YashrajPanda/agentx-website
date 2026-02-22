import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black py-16 px-8 border-t border-agentx-silver/10 mt-auto z-10 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2">
                    <Link href="/" className="text-2xl font-black tracking-tighter text-white mb-6 inline-block">
                        AGENTX
                    </Link>
                    <p className="text-agentx-silver text-sm max-w-sm mb-6 leading-relaxed">
                        Building advanced AI, agentic systems, and smart automation to solve complex problems for society, the environment, and the world.
                    </p>
                    <div className="flex items-center gap-4 text-agentx-silver">
                        <Link href="#" className="hover:text-agentx-cyan transition-colors duration-200"><Twitter size={20} /></Link>
                        <Link href="#" className="hover:text-agentx-cyan transition-colors duration-200"><Linkedin size={20} /></Link>
                        <Link href="#" className="hover:text-agentx-cyan transition-colors duration-200"><Github size={20} /></Link>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Solutions</h4>
                    <ul className="space-y-3 text-sm text-agentx-silver">
                        <li><Link href="#" className="hover:text-white transition-colors">Civic Intelligence</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Eco-Automation</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Global Networks</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Neural Assets</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
                    <ul className="space-y-3 text-sm text-agentx-silver">
                        <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
                    <ul className="space-y-3 text-sm text-agentx-silver">
                        <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Ethics Board</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Security Controls</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-agentx-silver/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-agentx-silver">
                <p>© {new Date().getFullYear()} AGENTX Corporation. All rights reserved.</p>
                <p className="mt-2 md:mt-0 flex items-center gap-2">Built with relentless optimization.</p>
            </div>
        </footer>
    );
}
