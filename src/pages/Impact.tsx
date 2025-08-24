import React from 'react';
import { TrendingUp, Heart, Leaf, Award, Users, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function Impact() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Productivity',
      description: 'Optimize feed conversion, reduce mortality, and improve overall farm efficiency.',
      stats: ['35% higher productivity', '20% better feed conversion', '15% reduced mortality'],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Heart,
      title: 'Enhanced Animal Welfare',
      description: 'Monitor stress levels, behavior patterns, and environmental comfort.',
      stats: ['50% faster health issue detection', '30% improved comfort scores', '25% reduced stress indicators'],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Leaf,
      title: 'Environmental Efficiency',
      description: 'Reduce resource waste and minimize environmental impact.',
      stats: ['40% energy savings', '30% water conservation', '25% reduced emissions'],
      color: 'text-primary',
      bgColor: 'bg-emerald-50',
    },
  ];

  const outcomes = [
    { label: 'Farms Transformed', value: '500+', icon: Users },
    { label: 'Productivity Increase', value: '35%', icon: TrendingUp },
    { label: 'Energy Savings', value: '40%', icon: Leaf },
    { label: 'Customer Satisfaction', value: '98%', icon: Award },
  ];

const sdgs = [
  { 
    number: '2', 
    title: 'Zero Hunger', 
    description: 'Sustainable food production', 
    icon: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-02.jpg' 
  },
  { 
    number: '3', 
    title: 'Good Health', 
    description: 'Animal welfare & food safety', 
    icon: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg' 
  },
  { 
    number: '7', 
    title: 'Clean Energy', 
    description: 'Solar-powered solutions', 
    icon: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-07.jpg' 
  },
  { 
    number: '12', 
    title: 'Responsible Consumption', 
    description: 'Resource efficiency', 
    icon: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg' 
  },
  { 
    number: '13', 
    title: 'Climate Action', 
    description: 'Reduced emissions', 
    icon: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg' 
  },
  { 
    number: '15', 
    title: 'Life on Land', 
    description: 'Sustainable agriculture', 
    icon: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-15.jpg' 
  },
];


  const testimonials = [
    {
      quote: "PoultrAI has revolutionized our operations. We've seen remarkable improvements in both productivity and animal welfare.",
      author: "Maria Santos",
      role: "Farm Manager",
      company: "Green Valley Poultry",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      quote: "The AI insights help us make data-driven decisions that have significantly improved our bottom line.",
      author: "James Wilson",
      role: "Operations Director",
      company: "Wilson Farms",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    },
    {
      quote: "The environmental benefits are outstanding. We've reduced our carbon footprint while increasing profitability.",
      author: "Dr. Sarah Chen",
      role: "Sustainability Manager",
      company: "EcoFarms International",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-light-bg via-white to-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-dark mb-6">
              Measurable Impact
              <span className="block text-primary">Real Results</span>
            </h1>
            <p className="text-xl text-dark-light max-w-4xl mx-auto leading-relaxed">
              See how PoultrAI is transforming poultry farming with quantifiable improvements in productivity, animal welfare, and environmental sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Benefit Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Three Pillars of Impact
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Our comprehensive approach delivers benefits across all aspects of modern poultry farming.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={benefit.title}
                  className={`animate-slide-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  hover
                >
                  <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon size={32} className={benefit.color} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-dark mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-dark-light mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.stats.map((stat) => (
                      <li key={stat} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${benefit.color.replace('text-', 'bg-')}`}></div>
                        <span className="text-dark-light text-sm font-medium">{stat}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quantified Outcomes */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Real data from farms using PoultrAI technology worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <Card 
                  key={outcome.label}
                  className={`text-center animate-scale-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-dark mb-2">
                    {outcome.value}
                  </div>
                  <div className="text-dark-light font-medium">
                    {outcome.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Case */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Case Study: Green Valley Poultry
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              A 12-month transformation journey with measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="animate-slide-up">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-red-600" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-dark">Before PoultrAI</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-dark-light">Manual monitoring every 4 hours</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-dark-light">5% mortality rate</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-dark-light">High energy consumption</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-dark-light">Reactive problem solving</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-dark-light">Limited data insights</span>
                </li>
              </ul>
            </Card>

            <Card className="animate-slide-up delay-150">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-green-600" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-dark">After PoultrAI</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-dark-light">24/7 automated monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-dark-light">2% mortality rate (60% reduction)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-dark-light">40% energy savings</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-dark-light">Predictive health management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-dark-light">AI-driven optimization</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* SDG Badges */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Supporting Global Goals
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Our technology contributes to the United Nations Sustainable Development Goals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
  {sdgs.map((sdg, index) => (
    <Card 
      key={sdg.number}
      className={`text-center animate-scale-in`}
      style={{ animationDelay: `${index * 100}ms` }}
      hover
    >
      <img
        src={sdg.icon}
        alt={`SDG ${sdg.number} ${sdg.title}`}
        className="w-16 h-16 mx-auto mb-4 object-contain rounded-lg"
      />
      <h3 className="font-semibold text-sm text-dark mb-2">
        {sdg.title}
      </h3>
      <p className="text-dark-light text-xs">
        {sdg.description}
      </p>
    </Card>
  ))}
</div>
           
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Customer Success Stories
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Hear from farmers who have transformed their operations with PoultrAI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.author}
                className={`animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
                hover
              >
                <blockquote className="text-dark-light mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-dark">{testimonial.author}</div>
                    <div className="text-dark-light text-sm">{testimonial.role}</div>
                    <div className="text-primary text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Join the Success Stories
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Transform your farm with proven technology that delivers measurable results.
          </p>
          <Button variant="secondary" size="lg">
            Start Your Transformation
          </Button>
        </div>
      </section>
    </main>
  );
}