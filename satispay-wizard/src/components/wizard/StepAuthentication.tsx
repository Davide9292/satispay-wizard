import React, { useState } from 'react';
import { useWizard } from '../../hooks/useWizard';
import { InputText } from '../ui/InputText';
import { PrimaryButton } from '../ui/PrimaryButton';

export const StepAuthentication: React.FC = () => {
    const { data, updateData, nextStep } = useWizard();
    const [name, setName] = useState(data.name);

    const handleNext = () => {
        if (name.trim()) {
            updateData({ name });
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
                    placeholder="Inserisci il tuo nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                />
            </div>

            <div className="mt-8">
                <PrimaryButton
                    fullWidth
                    onClick={handleNext}
                    disabled={!name.trim()}
                >
                    Continua
                </PrimaryButton>
            </div>
        </div>
    );
};
