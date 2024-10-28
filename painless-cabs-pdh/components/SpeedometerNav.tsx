import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { name: 'Home', angle: -120, color: '#4CAF50' },
  { name: 'Mission', angle: -60, color: '#2196F3' },
  { name: 'Drivers', angle: 0, color: '#FFC107' },
  { name: 'Why Us', angle: 60, color: '#9C27B0' },
  { name: 'Contact', angle: 120, color: '#F44336' },
];

export function SpeedometerNav() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const scrollPercentage = scrollPosition / (docHeight - windowHeight);
      const sectionIndex = Math.min(
        Math.floor(scrollPercentage * sections.length),
        sections.length - 1
      );

      setActiveSection(sectionIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 w-64 h-64 z-50">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Outer ring */}
        <circle cx="100" cy="100" r="90" fill="#1a1a1a" stroke="#333" strokeWidth="4" />
        
        {/* Inner ring */}
        <circle cx="100" cy="100" r="80" fill="none" stroke="#444" strokeWidth="2" />
        
        {/* Speedometer background */}
        <path
          d="M100 180 A80 80 0 1 1 100 20 L100 30 A70 70 0 1 0 100 170 Z"
          fill="url(#speedGradient)"
        />
        
        {/* Tick marks */}
        {Array.from({ length: 25 }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="20"
            x2="100"
            y2={i % 5 === 0 ? "30" : "25"}
            stroke="#666"
            strokeWidth={i % 5 === 0 ? "2" : "1"}
            transform={`rotate(${i * 10 - 120} 100 100)`}
          />
        ))}
        
        {/* Section markers */}
        {sections.map((section, index) => (
          <React.Fragment key={section.name}>
            <line
              x1="100"
              y1="30"
              x2="100"
              y2="20"
              stroke={section.color}
              strokeWidth="3"
              transform={`rotate(${section.angle} 100 100)`}
            />
            <text
              x="100"
              y="45"
              fill={index === activeSection ? section.color : '#999'}
              fontSize="8"
              fontWeight="bold"
              textAnchor="middle"
              transform={`
                rotate(${section.angle} 100 100)
                ${section.angle > 0 ? 'rotate(180 100 45)' : ''}
              `}
            >
              {section.name}
            </text>
          </React.Fragment>
        ))}
        
        {/* Needle */}
        <motion.g
          initial={{ rotate: -120 }}
          animate={{ rotate: sections[activeSection].angle }}
          transition={{ type: 'spring', stiffness: 50, damping: 10 }}
          style={{ originX: '100px', originY: '100px' }}
        >
          <path
            d="M97 100 L100 30 L103 100 Z"
            fill={sections[activeSection].color}
          />
          <circle cx="100" cy="100" r="8" fill={sections[activeSection].color} />
        </motion.g>
        
        {/* Center cap */}
        <circle cx="100" cy="100" r="5" fill="#333" stroke="#666" strokeWidth="2" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {sections.map((section, index) => (
              <stop
                key={index}
                offset={`${(index / (sections.length - 1)) * 100}%`}
                stopColor={section.color}
              />
            ))}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
