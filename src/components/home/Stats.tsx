import React from 'react';
import { TrendingUp, Users, Shield, Award } from 'lucide-react';
import { Card } from '../ui/Card';

export function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: '35%',
      label: 'Productivity Increase',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Farms Monitored',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime Guarantee',
      color: 'text-primary',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Award,
      value: '98%',
      label: 'Customer Satisfaction',
      color: 'text-accent',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-dark-light max-w-3xl mx-auto">
            Join thousands of farmers who have transformed their operations with PoultrAI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.label}
                className={`text-center animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon size={32} className={stat.color} />
                </div>
                <div className="text-3xl font-heading font-bold text-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-dark-light font-medium">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}