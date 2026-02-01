import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useWizard } from '../../hooks/useWizard';

export const StepThankYou: React.FC = () => {
    const { data } = useWizard();

    return (
        <div className="flex flex-col items-center gap-6 text-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-24 h-24 bg-ui-success rounded-full flex items-center justify-center shadow-xl text-white mb-4"
            >
                <Check size={48} strokeWidth={3} />
            </motion.div>

            <h1 className="text-4xl font-bold text-text-primary">
                Tutto pronto!
            </h1>

            <div className="bg-white p-6 rounded-card border border-ui-grey w-full shadow-sm text-left mt-4">
                <h3 className="text-text-secondary text-sm font-medium uppercase tracking-wider mb-4">Riepilogo</h3>
                <div className="space-y-3">
                    <div className="flex justify-between border-b border-ui-grey pb-2">
                        <span className="text-text-secondary">Nome</span>
                        <span className="font-bold text-text-primary">{data.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-ui-grey pb-2">
                        <span className="text-text-secondary">Ruolo</span>
                        <span className="font-bold text-text-primary">{data.role}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-text-secondary">Vibe Points</span>
                        <span className="font-bold text-brand-red">{data.vibePoints}</span>
                    </div>
                </div>
            </div>

            <p className="text-text-secondary mt-4">
                Grazie per aver completato l'onboarding.
            </p>
        </div>
    );
};
