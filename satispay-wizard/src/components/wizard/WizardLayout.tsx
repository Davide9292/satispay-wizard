import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WizardLayout: React.FC<{ children: React.ReactNode; currentStep: number }> = ({ children, currentStep }) => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-[480px] flex flex-col items-center">
                {/* Simple Progress Bar or Header if needed */}
                <div className="w-full mb-8 flex gap-2">
                    {[0, 1, 2, 3].map((step) => (
                        <div
                            key={step}
                            className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step <= currentStep ? 'bg-brand-red' : 'bg-ui-grey'}`}
                        />
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
