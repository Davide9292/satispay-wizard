import React from 'react';
import { useWizard } from '../../hooks/useWizard';
import { InputText } from '../ui/InputText';
import { PrimaryButton } from '../ui/PrimaryButton';

export const StepAuthentication: React.FC = () => {
    const { data, updateData, nextStep } = useWizard();

    const handleNext = () => {
        if (data.name.trim()) {
            nextStep();
        }
    };

    return (
        <div className="flex flex-col gap-6 text-center">
            <h1 className="text-3xl font-bold text-text-primary">
                Ciao! <br /> Come ti chiami?
            </h1>
            <p className="text-text-secondary">
                Iniziamo a personalizzare la tua esperienza.
            </p>

            <div className="mt-4">
                <InputText
                    label="Nome"
                    placeholder="Es. Mario Rossi"
                    value={data.name}
                    onChange={(e) => updateData({ name: e.target.value })}
                    autoFocus
                />
            </div>

            <div className="mt-8">
                <PrimaryButton
                    fullWidth
                    onClick={handleNext}
                    disabled={!data.name.trim()}
                >
                    Continua
                </PrimaryButton>
            </div>
        </div>
    );
};
