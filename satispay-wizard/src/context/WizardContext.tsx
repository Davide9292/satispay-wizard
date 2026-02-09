import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Role = 'Developer' | 'Designer' | 'Product Manager' | null;

interface WizardData {
    name: string;
    role: Role;
    vibePoints: number;
}

interface WizardContextType {
    currentStep: number;
    totalSteps: number;
    data: WizardData;
    updateData: (partialData: Partial<WizardData>) => void;
    nextStep: () => void;
    prevStep: () => void;
    goToStep: (step: number) => void;
    isFirstStep: boolean;
    isLastStep: boolean;
}

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export const WizardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Initialize state from localStorage if available
    const [currentStep, setCurrentStep] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('wizard_step');
            return saved ? parseInt(saved, 10) : 0;
        }
        return 0;
    });

    const [data, setData] = useState<WizardData>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('wizard_data');
            if (saved) {
                try {
                    return JSON.parse(saved);
                } catch (e) {
                    console.error('Failed to parse wizard data', e);
                }
            }
        }
        return {
            name: '',
            role: null,
            vibePoints: 50,
        };
    });

    // Save to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem('wizard_step', currentStep.toString());
        localStorage.setItem('wizard_data', JSON.stringify(data));
    }, [currentStep, data]);

    const totalSteps = 4; // Auth, Role, Vibe, ThankYou

    const updateData = (partialData: Partial<WizardData>) => {
        setData((prev) => ({ ...prev, ...partialData }));
    };

    const nextStep = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const goToStep = (step: number) => {
        if (step >= 0 && step < totalSteps) {
            setCurrentStep(step);
        }
    }

    return (
        <WizardContext.Provider
            value={{
                currentStep,
                totalSteps,
                data,
                updateData,
                nextStep,
                prevStep,
                goToStep,
                isFirstStep: currentStep === 0,
                isLastStep: currentStep === totalSteps - 1,
            }}
        >
            {children}
        </WizardContext.Provider>
    );
};

export const useWizard = () => {
    const context = useContext(WizardContext);
    if (!context) {
        throw new Error('useWizard must be used within a WizardProvider');
    }
    return context;
};
