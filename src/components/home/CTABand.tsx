import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function CTABand() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
          Ready to Transform Your Farm?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join the future of poultry farming with our comprehensive monitoring and automation solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" className="group">
            Start Free Trial
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}