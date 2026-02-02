import React from 'react';
import { HelpCircle, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-brand-cream/80 backdrop-blur-md z-50 px-4 py-3 flex justify-between items-center border-b border-ui-grey/50">
            <div className="flex items-center gap-2">
                <motion.div
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-lg"
                >
                    S
                </motion.div>
                <span className="font-bold text-xl text-text-primary tracking-tight">satispay</span>
            </div>

            <div className="flex items-center gap-4 text-text-secondary">
                <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
                    <HelpCircle size={24} />
                </button>
                <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
};
