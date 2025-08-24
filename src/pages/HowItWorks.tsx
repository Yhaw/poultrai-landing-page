import React from 'react';
import { CheckCircle, Clock, Users, Shield, ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function HowItWorks() {
  const processSteps = [
    {
      number: '01',
      title: 'Site Assessment',
      description: 'Our experts evaluate your facility and design a customized monitoring solution.',
      duration: '1-2 days',
      color: 'bg-blue-500',
    },
    {
      number: '02',
      title: 'System Installation',
      description: 'Professional installation of sensors, gateways, and automation equipment.',
      duration: '3-5 days',
      color: 'bg-green-500',
    },
    {
      number: '03',
      title: 'Configuration & Training',
      description: 'System setup, calibration, and comprehensive staff training.',
      duration: '2-3 days',
      color: 'bg-purple-500',
    },
    {
      number: '04',
      title: 'Go Live & Support',
      description: 'System activation with ongoing monitoring and technical support.',
      duration: 'Ongoing',
      color: 'bg-accent',
    },
  ];

  const timeline = [
    { phase: 'Initial Survey', duration: 'Week 1', activities: ['Site assessment', 'Requirements analysis', 'Custom design'] },
    { phase: 'Installation', duration: 'Week 2-3', activities: ['Equipment deployment', 'Network setup', 'System integration'] },
    { phase: 'Onboarding', duration: 'Week 4', activities: ['Staff training', 'System calibration', 'Testing & validation'] },
    { phase: 'Support', duration: 'Ongoing', activities: ['24/7 monitoring', 'Regular maintenance', 'Performance optimization'] },
  ];

  const requirements = [
    { category: 'Power', items: ['Stable electrical supply', 'Solar panel mounting space', 'Battery backup area'] },
    { category: 'Connectivity', items: ['Cellular coverage', 'Wi-Fi network (optional)', 'Internet access'] },
    { category: 'Infrastructure', items: ['Sensor mounting points', 'Gateway installation space', 'Equipment protection'] },
    { category: 'Access', items: ['Site accessibility', 'Equipment maintenance access', 'Staff training area'] },
  ];

  const supportLevels = [
    {
      title: 'Basic Support',
      features: ['Email support', 'System monitoring', 'Monthly reports', 'Software updates'],
      sla: '48-hour response',
      price: 'Included',
    },
    {
      title: 'Premium Support',
      features: ['24/7 phone support', 'Real-time alerts', 'Weekly reports', 'Priority updates', 'Remote diagnostics'],
      sla: '4-hour response',
      price: 'Available',
    },
    {
      title: 'Enterprise Support',
      features: ['Dedicated account manager', 'On-site visits', 'Custom integrations', 'Advanced analytics', 'Training programs'],
      sla: '1-hour response',
      price: 'Custom',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-light-bg via-white to-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-dark mb-6">
              Simple Implementation
              <span className="block text-primary">Powerful Results</span>
            </h1>
            <p className="text-xl text-dark-light max-w-4xl mx-auto leading-relaxed">
              From initial consultation to full deployment, we guide you through every step of implementing PoultrAI technology in your facility.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              4-Step Implementation Process
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Our proven methodology ensures smooth deployment and optimal results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className={`relative animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="text-center h-full" hover>
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative`}>
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-dark-light leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-primary font-medium">
                    <Clock size={16} />
                    <span>{step.duration}</span>
                  </div>
                </Card>
                
                {/* Connection Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-light-gray transform -translate-y-1/2">
                    <ArrowRight size={16} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Implementation Timeline
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Detailed breakdown of activities and milestones throughout the deployment process.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <Card 
                key={phase.phase}
                className={`animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                      {phase.phase}
                    </h3>
                    <div className="text-primary font-medium">{phase.duration}</div>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {phase.activities.map((activity) => (
                        <div key={activity} className="flex items-center space-x-3">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-dark-light">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Site Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Site Requirements
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Ensure your facility meets these basic requirements for optimal system performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <Card 
                key={req.category}
                className={`animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
                hover
              >
                <h3 className="font-heading font-semibold text-lg text-dark mb-4">
                  {req.category}
                </h3>
                <ul className="space-y-2">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-dark-light text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support & SLA */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Support & Service Levels
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Choose the support level that best fits your operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <Card 
                key={level.title}
                className={`animate-slide-up ${index === 1 ? 'ring-2 ring-primary' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
                hover
              >
                {index === 1 && (
                  <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading font-semibold text-xl text-dark mb-4">
                  {level.title}
                </h3>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary mb-2">{level.price}</div>
                  <div className="text-sm text-dark-light">{level.sla}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {level.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-dark-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={index === 1 ? 'primary' : 'outline'} 
                  className="w-full"
                >
                  {index === 2 ? 'Contact Sales' : 'Learn More'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Ready to transform your poultry operation? Contact our team to begin your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center animate-slide-up" hover>
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone size={32} className="text-blue-600" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-4">
                Schedule a Call
              </h3>
              <p className="text-dark-light mb-6">
                Speak with our experts about your specific needs and requirements.
              </p>
              <Button variant="outline" className="w-full">
                Book Consultation
              </Button>
            </Card>

            <Card className="text-center animate-slide-up delay-150" hover>
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail size={32} className="text-green-600" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-4">
                Request Quote
              </h3>
              <p className="text-dark-light mb-6">
                Get a detailed proposal tailored to your facility and budget.
              </p>
              <Button variant="outline" className="w-full">
                Get Quote
              </Button>
            </Card>

            <Card className="text-center animate-slide-up delay-300" hover>
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={32} className="text-purple-600" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-4">
                Live Demo
              </h3>
              <p className="text-dark-light mb-6">
                See PoultrAI in action with a personalized demonstration.
              </p>
              <Button className="w-full">
                Watch Demo
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of farms already benefiting from PoultrAI technology.
          </p>
          <Button variant="secondary" size="lg">
            Start Implementation
          </Button>
        </div>
      </section>
    </main>
  );
}