import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-white border-t border-ui-grey/50 pt-12 pb-6 mt-16 text-text-primary">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                {/* Column 1: Brand */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-lg rotate-3">
                            S
                        </div>
                        <span className="font-bold text-2xl tracking-tight">satispay</span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        Semplifica la tua vita con i pagamenti digitali. Sicuro, veloce e smart.
                    </p>
                </div>

                {/* Column 2: Products */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-lg mb-1">Prodotti</h4>
                    <a href="#" className="text-text-secondary hover:text-brand-red transition-colors text-sm">Privati</a>
                    <a href="#" className="text-text-secondary hover:text-brand-red transition-colors text-sm">Business</a>
                    <a href="#" className="text-text-secondary hover:text-brand-red transition-colors text-sm">Servizi</a>
                </div>

                {/* Column 3: Company */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-lg mb-1">Azienda</h4>
                    <a href="#" className="text-text-secondary hover:text-brand-red transition-colors text-sm">Chi siamo</a>
                    <a href="#" className="text-text-secondary hover:text-brand-red transition-colors text-sm">Lavora con noi</a>
                    <a href="#" className="text-text-secondary hover:text-brand-red transition-colors text-sm">Stampa</a>
                    <a href="#" className="text-text-secondary hover:text-brand-red transition-colors text-sm">Blog</a>
                </div>

                {/* Column 4: Newsletter/Support */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-lg mb-1">Resta aggiornato</h4>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="La tua email"
                            className="bg-ui-grey/20 border border-ui-grey rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-brand-red transition-colors"
                        />
                        <button className="bg-brand-red text-white p-2 rounded-lg hover:bg-red-600 transition-colors">
                            <Send size={18} />
                        </button>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <Facebook size={20} className="text-text-secondary hover:text-brand-red cursor-pointer transition-colors" />
                        <Twitter size={20} className="text-text-secondary hover:text-brand-red cursor-pointer transition-colors" />
                        <Instagram size={20} className="text-text-secondary hover:text-brand-red cursor-pointer transition-colors" />
                        <Linkedin size={20} className="text-text-secondary hover:text-brand-red cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-6xl mx-auto px-6 pt-6 border-t border-ui-grey/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
                <p>© 2026 Satispay Europe S.A.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-brand-red">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-red">Cookie Policy</a>
                    <a href="#" className="hover:text-brand-red">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};
