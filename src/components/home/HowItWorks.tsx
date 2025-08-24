import React from 'react';
import { Scissors as Sensors, Wifi, Cloud, Settings } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Sensors,
      title: 'Deploy Sensors',
      description: 'Install environmental and behavioral monitoring sensors throughout your facility.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Wifi,
      title: 'Connect Network',
      description: 'Sensors communicate via LoRa to gateways with cellular or Wi-Fi connectivity.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Cloud,
      title: 'AI Analysis',
      description: 'Cloud-based AI processes data in real-time, generating insights and predictions.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Settings,
      title: 'Smart Control',
      description: 'Automated systems adjust conditions while alerts keep you informed.',
      color: 'text-accent',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
            How PoultrAI Works
          </h2>
          <p className="text-lg text-dark-light max-w-3xl mx-auto">
            Our comprehensive platform works seamlessly to monitor, analyze, and optimize your poultry operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.title}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-center">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 relative`}>
                      <Icon size={32} className={step.color} />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-dark mb-4">
                      {step.title}
                    </h3>
                    <p className="text-dark-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-light-gray transform -translate-y-1/2">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}