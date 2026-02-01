import React from 'react';
import { useWizard } from '../../hooks/useWizard';
import { PrimaryButton } from '../ui/PrimaryButton';
import { CustomSlider } from '../ui/CustomSlider';

export const StepVibeCoding: React.FC = () => {
    const { data, updateData, nextStep } = useWizard();

    return (
        <div className="flex flex-col gap-6 text-center">
            <h1 className="text-3xl font-bold text-text-primary">
                Quanto ti senti "Vibe"?
            </h1>
            <p className="text-text-secondary">
                Imposta il tuo livello di vibe coding per oggi.
            </p>

            <div className="mt-12 px-4">
                <CustomSlider
                    value={data.vibePoints}
                    onChange={(val) => updateData({ vibePoints: val })}
                    min={0}
                    max={100}
                />
            </div>

            <div className="mt-12">
                <PrimaryButton
                    fullWidth
                    onClick={nextStep}
                >
                    Conferma
                </PrimaryButton>
            </div>
        </div>
    );
};
