import React from 'react';
import { Users, Target, Heart, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function About() {
  const timeline = [
    {
      year: '2024',
      title: 'Founded',
      description: 'Started with a vision to revolutionize poultry farming through technology.',
    },
    {
      year: '2025',
      title: 'First Product',
      description: 'Launched our first monitoring sensors in partnership with local farms.',
    },
    {
      year: '2026',
      title: 'AI Platform',
      description: 'Introduced comprehensive AI analytics and automation platform.',
    },
    {
      year: '2027',
      title: 'Global Expansion',
      description: 'Serving farms across 15 countries with sustainable solutions.',
    },
  ];

  const team = [
    {
      name: 'Arnold Sylvian Kimkpe',
      role: 'CEO & Co-Founder',
      image: 'data:image/jpeg;base64,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',
    },
    {
      name: 'Jerry Afenyo Denuo',
      role: 'CTO & Co-Founder',
      image: 'data:image/jpeg;base64,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',
    },
    {
      name: 'Samuel Adranyi',
      role: 'Head of AI',
      image: 'data:image/jpeg;base64,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',
    },
    {
      name: 'Mr Fisal',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1181524/pexels-photo-1181524.jpeg',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of agricultural technology.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible farming solutions.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Working closely with farmers to understand real-world needs.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering the highest quality products and services.',
      color: 'text-accent',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-light-bg via-white to-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-dark mb-6">
              Transforming Agriculture
              <span className="block text-primary">Through Innovation</span>
            </h1>
            <p className="text-xl text-dark-light max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make poultry farming more efficient, sustainable, and profitable through cutting-edge AI and IoT technology.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="font-heading font-bold text-3xl text-dark mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-dark-light leading-relaxed mb-8">
                Traditional poultry farming faces numerous challenges including disease outbreaks, 
                inefficient resource usage, poor animal welfare monitoring, and lack of real-time insights.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-dark-light">Manual monitoring is time-intensive and error-prone</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-dark-light">Disease detection often comes too late</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-dark-light">High energy costs and waste</span>
                </li>
              </ul>
            </div>
            
            <div className="animate-slide-up delay-150">
              <h2 className="font-heading font-bold text-3xl text-dark mb-6">
                Our Solution
              </h2>
              <p className="text-lg text-dark-light leading-relaxed mb-8">
                PoultrAI combines advanced sensors, machine learning, and automation to provide 
                comprehensive monitoring and control systems that optimize every aspect of poultry farming.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-dark-light">24/7 automated monitoring and alerts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-dark-light">Early disease detection through AI</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-dark-light">Optimized resource usage and sustainability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              From a small startup to a global leader in agricultural technology.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-light-gray hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-slide-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="text-2xl font-heading font-bold text-primary mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-dark-light">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                  
                  <div className="hidden lg:flex w-6 h-6 bg-primary rounded-full z-10 flex-shrink-0"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Passionate experts combining agricultural knowledge with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className={`text-center animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
                hover
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg text-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-dark-light text-sm">
                  {member.role}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Our Values
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title}
                  className={`text-center animate-slide-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  hover
                >
                  <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon size={32} className={value.color} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="text-dark-light leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join us in revolutionizing agriculture. Let's build a more sustainable future together.
          </p>
          <Button variant="secondary" size="lg" className="group">
            Get in Touch
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </main>
  );
}