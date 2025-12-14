import React from 'react';

// A reusable SVG component representing stylised Imigongo patterns
export const ImigongoDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full overflow-hidden h-6 ${className}`}>
        <svg width="100%" height="24" preserveAspectRatio="none">
            <defs>
                <pattern id="imigongo-zigzag" x="0" y="0" width="40" height="24" patternUnits="userSpaceOnUse">
                    <path d="M0 24 L20 0 L40 24" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#imigongo-zigzag)" />
        </svg>
    </div>
  );
};

export const ImigongoCardBg: React.FC = () => (
    <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <svg width="100%" height="100%">
            <defs>
                 <pattern id="imigongo-diamond" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect x="20" y="0" width="28" height="28" transform="rotate(45 20 0)" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#imigongo-diamond)" />
        </svg>
    </div>
);