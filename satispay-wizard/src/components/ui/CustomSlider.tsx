import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface CustomSliderProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
}

export const CustomSlider: React.FC<CustomSliderProps> = ({ value, onChange, min = 0, max = 100 }) => {
    const constraintsRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const widthRef = useRef(0);

    // Update x when value changes externally
    useEffect(() => {
        if (widthRef.current) {
            const percentage = (value - min) / (max - min);
            x.set(percentage * widthRef.current);
        }
    }, [value, min, max, x]);

    useEffect(() => {
        if (constraintsRef.current) {
            widthRef.current = constraintsRef.current.offsetWidth;
            // Initialize position
            const percentage = (value - min) / (max - min);
            x.set(percentage * widthRef.current);
        }
    }, []); // Run once on mount

    const handleDrag = (_: any, _info: any) => {
        if (constraintsRef.current) {
            const width = constraintsRef.current.offsetWidth;
            widthRef.current = width;
            const currentX = x.get();
            // Clamp x between 0 and width
            const clampedX = Math.max(0, Math.min(currentX, width));

            const newValue = Math.round(min + (clampedX / width) * (max - min));
            onChange(newValue);
        }
    };

    const backgroundWidth = useTransform(x, (latest) => {
        if (!widthRef.current) return "0%";
        const percentage = (latest / widthRef.current) * 100;
        return `${Math.min(100, Math.max(0, percentage))}%`;
    });

    return (
        <div className="w-full py-4 px-2 select-none touch-none">
            <div
                ref={constraintsRef}
                className="relative w-full h-2 bg-ui-grey rounded-full"
            >
                {/* Track Fill */}
                <motion.div
                    className="absolute top-0 left-0 h-full bg-brand-red rounded-full pointer-events-none"
                    style={{ width: backgroundWidth }}
                />

                {/* Thumb */}
                <motion.div
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragElastic={0}
                    dragMomentum={false}
                    onDrag={handleDrag}
                    style={{ x }}
                    className="absolute top-1/2 -mt-4 -ml-4 w-8 h-8 bg-white border-2 border-brand-red rounded-full shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center z-10 box-border"
                    tabIndex={0}
                />
            </div>
            <div className="mt-4 text-center font-bold text-brand-red text-xl">
                {value} Vibe Points
            </div>
        </div>
    );
};
