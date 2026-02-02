import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full py-6 text-center text-xs text-text-secondary mt-auto border-t border-ui-grey/30">
            <p>© 2026 Satispay Europe S.A.</p>
            <div className="flex justify-center gap-4 mt-2">
                <span className="cursor-pointer hover:underline">Privacy</span>
                <span className="cursor-pointer hover:underline">Cookie</span>
                <span className="cursor-pointer hover:underline">Legal</span>
            </div>
        </footer>
    );
};
