import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '../ui/Card';

export function Testimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto text-center animate-fade-in">
          <Quote size={48} className="text-primary mx-auto mb-8 opacity-50" />
          
          <blockquote className="text-xl sm:text-2xl text-dark-light font-medium leading-relaxed mb-8">
            "PoultrAI has completely transformed our operations. We've seen a 35% increase in productivity 
            and significantly better animal welfare outcomes. The AI insights are incredibly accurate."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-accent fill-current" />
            ))}
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Jerry Afenyo Denou"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-semibold text-dark">Jerry Afenyo Denou</div>
              <div className="text-dark-light text-sm">Farm Manager, Adeiso Nsawam</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}