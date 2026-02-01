import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface PrimaryButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    fullWidth?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    className,
    fullWidth = false,
    ...props
}) => {
    return (
        <motion.button
            whileHover={{ scale: 1.02, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "bg-brand-red text-white text-lg font-medium py-3 px-8 rounded-pill shadow-sm transition-all border-none outline-none focus:ring-4 focus:ring-brand-red/30",
                fullWidth && "w-full",
                props.disabled && "opacity-50 cursor-not-allowed hover:scale-100 dark:opacity-50",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};
