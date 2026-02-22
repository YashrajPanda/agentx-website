import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-black/50 border-b border-agentx-silver/20 transition-all duration-300">
            <div className="flex items-center gap-2 text-2xl font-black tracking-tighter uppercase relative group cursor-pointer text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-agentx-silver to-white group-hover:from-white group-hover:to-agentx-cyan transition-all duration-500">
                    AGENTX
                </span>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-agentx-silver">
                <Link href="#solutions" className="hover:text-white transition-colors duration-200">Solutions</Link>
                <Link href="#impact" className="hover:text-white transition-colors duration-200">Impact</Link>
                <Link href="#research" className="hover:text-white transition-colors duration-200">Research</Link>
            </div>

            <button className="px-6 py-2.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-agentx-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                Request Demo
            </button>
        </nav>
    );
}
