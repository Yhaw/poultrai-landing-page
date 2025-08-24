import React from 'react';
import { Activity, Brain, Zap, Sun, Wrench } from 'lucide-react';
import { Card } from '../ui/Card';

const GhanaFlag = ({ className = 'w-5 h-3' }) => (
  <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
    <rect width="3" height="2" fill="#006B3F"/>
    <rect width="3" height="1.333" fill="#FCD116"/>
    <rect width="3" height="0.666" fill="#CE1126"/>
    <polygon points="1.5,0.77 1.65,1.25 2.13,1.25 1.74,1.55 1.88,2.02 1.5,1.74 1.12,2.02 1.26,1.55 0.87,1.25 1.35,1.25" fill="#111827" />
  </svg>
);

export function ValueProps() {
  const valueProps = [
    {
      icon: Activity,
      title: 'Real time Monitoring',
      description:
        'Track temperature, humidity, air quality, and bird behavior with precision sensors and instant alerts.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Brain,
      title: 'AI Powered Insights',
      description:
        'Advanced machine learning analyzes patterns to predict health issues and optimize conditions before problems arise.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description:
        'Automated ventilation, feeding, and climate control systems respond instantly to changing conditions.',
      color: 'text-accent',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Sun,
      title: 'Solar Integration',
      description:
        'Sustainable power solutions with solar panels and battery backup ensure continuous operation.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    // 5th card (no hyphens)
    {
      icon: Wrench,
      title: 'Built for Ghana and Africa',
      description:
        'Engineered for local conditions like heat, dust, and variable connectivity with fast on ground support, easy maintenance, and rapid results.',
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      flag: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
            Why Choose PoultrAI?
          </h2>
          <p className="text-lg text-dark-light max-w-3xl mx-auto">
            Our comprehensive platform combines cutting edge technology with practical farming solutions.
          </p>
        </div>

        {/* Keep original card width on large screens (4 cols); let the 5th wrap to next row.
            Stretch items so all cards get same height; slightly tighter gaps on rows. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-6 lg:gap-8 gap-y-10">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <Card
                key={prop.title}
                hover
                className="h-full flex flex-col text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${prop.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon size={32} className={prop.color} />
                </div>

                <h3 className="font-heading font-semibold text-xl text-dark mb-2 flex items-center justify-center gap-2">
                  {prop.title}
                  {prop.flag && <GhanaFlag />}
                </h3>

                {/* Let the description take remaining space so buttons/footers align if added later */}
                <p className="text-dark-light leading-relaxed flex-1">
                  {prop.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
