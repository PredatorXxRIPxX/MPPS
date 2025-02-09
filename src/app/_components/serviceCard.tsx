'use client';

import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  options: string[];
  image: string;
  isImageRight: boolean;
  index?: number;
}

export default function ServiceCard({ title, description, options, image, isImageRight, index }: ServiceCardProps) {
  return (
    <div key={index} className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
        <div className="flex-1 space-y-6">
          <div className="inline-block">
            <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Service
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            {title}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>

          <div className="space-y-4 pt-4">
            {options.map((option, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="p-1 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors duration-200">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                  {option}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-fourth transition-colors duration-200 shadow-md hover:shadow-lg">
              En savoir plus
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl transform rotate-6 scale-95 opacity-40" />
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={image}
                alt={title}
                loading='lazy'
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}