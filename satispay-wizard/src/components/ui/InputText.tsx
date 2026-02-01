import React from 'react';
import { cn } from '../../lib/utils';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const InputText: React.FC<InputTextProps> = ({ label, className, ...props }) => {
    return (
        <div className="flex flex-col gap-1 w-full text-left">
            <label className="text-sm text-text-secondary pl-3 font-medium tracking-wide">{label}</label>
            <input
                className={cn(
                    "bg-white border text-text-primary text-lg border-ui-grey rounded-card px-5 py-4 outline-none transition-all placeholder:text-gray-300",
                    "focus:border-brand-red focus:ring-1 focus:ring-brand-red",
                    className
                )}
                {...props}
            />
        </div>
    );
};
