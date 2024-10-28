"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import MyTooltipComponent from '@/components/mytooltipcomponent';
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FC } from "react"; 

type HeroComponentProps = {
    title: string;
    description: string;
  };
  
  const HeroComponent: FC<HeroComponentProps> = ({ title, description }) => {
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  };
  

export default function ProductsHeroSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Hero section */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-bold text-transparent md:text-5xl">
            Innovative Solutions, Unleashing Business Potential
          </h1>
          <p className="text-lg text-indigo-200/65 mb-8">
            Explore cutting-edge products designed to transform education, digital advertising, and interactive learning.
          </p>
          <TooltipProvider>         
            <Tooltip>
              <TooltipTrigger asChild>      
                <Button 
                  size="lg" 
                  onClick={() => {/* Handle click event */}} // {{ edit_1 }}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Discover Our Products
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click here to explore the full range of Yahweh's innovative solutions.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Product categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Education Management", icon: "M12 14l9-5-9-5-9 5 9 5z" },
            { name: "Video Learning", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z" },
            { name: "K-12 Content", icon: "M12 14l9-5-9-5-9 5 9 5z" },
            { name: "AdTech Solutions", icon: "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" },
            { name: "Interactive Boards", icon: "M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" },
            { name: "Teacher Training", icon: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" },
          ].map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
              <svg className="w-12 h-12 text-indigo-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-indigo-200/65">Explore our innovative solutions for {category.name.toLowerCase()}.</p>
            </div>
          ))}
        </div>

        {/* Explore more section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">More Solutions to Accelerate Your Growth</h2>
          <p className="text-indigo-200/65 mb-8">
            From digital transformation to educational tools, explore our full suite of products designed to help your organization succeed.
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  size="lg"
                  onClick={() => {/* Handle click event */}} // {{ edit_1 }}
                  className="border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white py-4 px-10 rounded-full transition duration-300 ease-in-out"
                >
                  See All Products
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Discover more ways we can help your business thrive.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
