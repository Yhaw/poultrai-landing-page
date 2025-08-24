import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import hero_pic from "../../../src/images/content/hero3.png";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-light-bg via-white to-light-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-dark leading-tight mb-6">
              <span className="block text-primary">Smart Poultry</span>
              <span className="block">Monitoring</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-light leading-relaxed mb-8 max-w-xl">
              Transform your poultry operations with AI-powered sensors, real-time analytics, and automated controls for optimal productivity and animal welfare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play size={20} className="mr-2" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-8 text-sm text-dark-light">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Real-time Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>AI-Powered</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 shadow-2xl flex items-center justify-center">
                <img
                  src={hero_pic}
                  alt="Modern poultry farm with smart monitoring technology"
                  className="max-h-[400px] w-auto object-contain rounded-2xl shadow-lg"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg animate-scale-in">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-dark">Live Monitoring</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg animate-scale-in delay-150">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">35%</div>
                  <div className="text-xs text-dark-light">Efficiency Boost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}