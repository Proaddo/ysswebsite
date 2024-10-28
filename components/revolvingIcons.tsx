"use client"

import React, { useState, useEffect } from 'react';
import { Clock, MessageSquare, User, Briefcase, Tag, Upload } from 'lucide-react';

const items = [
  { icon: Clock, title: 'Automation', description: 'Digital transformation for your business.' },
  { icon: MessageSquare, title: 'Responsive', description: 'Better performance on cross platforms.' },
  { icon: User, title: 'Support', description: 'Integrating technologies to solve complex issues.' },
  { icon: Briefcase, title: 'Virtual Team', description: 'Remotely addressing virtual environment challenges.' },
  { icon: Tag, title: 'Affordable', description: 'Offering affordable services.' },
  { icon: Upload, title: 'Dependable', description: 'Creating a strong online presence.' },
];

const RevolvingIcons = () => {
  const [activeIndex, setActiveIndex] = useState(4); // Start with 'Affordable' active
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 1) % 360);
    }, 50); // Rotate every 50ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newIndex = Math.floor(rotation / 60) % 6;
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  }, [rotation, activeIndex]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 text-white mb-16">
      <div className="md:w-1/2 mb-8 md:mb-0 md:ml-40 text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-red-500">Accelerate</span> your Development Process
        </h2>
        <p className="text-gray-300 text-center md:ml-10">
          Dependable software development to deliver integrated and intelligent design, we strive to unlock business growth. Offering bespoke Software development and digital transformation from Conception to Delivery. Working as your digital transformation partner, we work with you every step of the way – from initial planning to delivery, and beyond.
        </p>
      </div>
      <div className="md:w-1/2 relative">
        <div className="w-[400px] h-[400px] mx-auto relative">
          <div className="absolute inset-0 rounded-full bg-gray-900 overflow-hidden">
            <img src="/placeholder.svg?height=400&width=400" alt="Team collaboration" className="w-full h-full object-cover opacity-50" />
            {/* Restored the text display */}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
              <h3 className="text-3xl font-bold">{items[activeIndex].title}</h3>
              <p className="text-center px-8">{items[activeIndex].description}</p>
            </div>
          </div>
          <div 
            className="absolute inset-0"
            style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.05s linear' }}
          >
            {items.map((item, index) => {
              const angle = (index * 60) * (Math.PI / 180);
              const x = 200 + 190 * Math.cos(angle);
              const y = 200 + 190 * Math.sin(angle);
              return (
                <div
                  key={index}
                  className={`absolute w-16 h-16 rounded-2xl bg-gray-800 shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer
                    ${(activeIndex === index) ? 'bg-gradient-to-br from-red-500 to-red-600' : 'hover:scale-110'}`}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolvingIcons;
