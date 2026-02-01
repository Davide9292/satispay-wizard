import React from 'react';
import { useWizard } from '../../hooks/useWizard';
import type { Role } from '../../context/WizardContext';
import { PrimaryButton } from '../ui/PrimaryButton';
import { SelectionCard } from '../ui/SelectionCard';
import { Code2, Palette, KanbanSquare } from 'lucide-react';

export const StepRoleSelection: React.FC = () => {
    const { data, updateData, nextStep } = useWizard();

    const roles: { id: Role; label: string; icon: any }[] = [
        { id: 'Developer', label: 'Developer', icon: Code2 },
        { id: 'Designer', label: 'Designer', icon: Palette },
        { id: 'Product Manager', label: 'Product Manager', icon: KanbanSquare },
    ];

    const handleSelect = (role: Role) => {
        updateData({ role });
    };

    return (
        <div className="flex flex-col gap-6 text-center">
            <h1 className="text-3xl font-bold text-text-primary">
                Di cosa ti occupi?
            </h1>
            <p className="text-text-secondary">
                Scegli il ruolo che ti rappresenta meglio.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4">
                {roles.map((roleItem) => (
                    <SelectionCard
                        key={roleItem.id}
                        title={roleItem.label}
                        icon={roleItem.icon}
                        selected={data.role === roleItem.id}
                        onClick={() => handleSelect(roleItem.id)}
                    />
                ))}
            </div>

            <div className="mt-8">
                <PrimaryButton
                    fullWidth
                    onClick={nextStep}
                    disabled={!data.role}
                >
                    Continua
                </PrimaryButton>
            </div>
        </div>
    );
};
