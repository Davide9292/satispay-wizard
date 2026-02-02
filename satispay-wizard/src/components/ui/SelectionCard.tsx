import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SelectionCardProps {
    title: string;
    icon: LucideIcon;
    selected: boolean;
    onClick: () => void;
}

export const SelectionCard: React.FC<SelectionCardProps> = ({ title, icon: Icon, selected, onClick }) => {
    return (
        <motion.div
            onClick={onClick}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            className={cn(
                "cursor-pointer rounded-card p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300",
                "bg-white border",
                selected
                    ? "border-brand-red border-2 bg-red-50 text-brand-red shadow-md"
                    : "border-ui-grey border-1 hover:border-gray-300 text-text-secondary"
            )}
        >
            <div className={cn(
                "p-4 rounded-full transition-colors",
                selected ? "bg-red-100" : "bg-gray-100"
            )}>
                <Icon size={32} className={cn(selected ? "text-brand-red" : "text-gray-400")} />
            </div>
            <span className={cn("font-medium text-lg", selected ? "text-brand-red" : "text-text-primary")}>
                {title}
            </span>
        </motion.div>
    );
};
