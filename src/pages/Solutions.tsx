import React from 'react';
import { Wifi, Zap, Cloud, Shield, Smartphone, Settings, Thermometer, Wind, Activity, Eye, Volume2, Sun } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function Solutions() {
  const sensors = [
    { icon: Thermometer, name: 'Temperature', description: 'Precise climate monitoring' },
    { icon: Wind, name: 'Humidity', description: 'Moisture level tracking' },
    { icon: Activity, name: 'NH₃ Detection', description: 'Ammonia gas monitoring' },
    { icon: Cloud, name: 'CO₂ Levels', description: 'Air quality assessment' },
    { icon: Sun, name: 'Light Sensors', description: 'Illumination optimization' },
    { icon: Eye, name: 'Motion Detection', description: 'Behavioral analysis' },
    { icon: Volume2, name: 'Sound Monitoring', description: 'Acoustic health indicators' },
  ];

  const modules = [
    {
      title: 'Sensor Network',
      description: 'Comprehensive environmental and behavioral monitoring',
      features: ['Multi-parameter sensors', 'Wireless connectivity', 'Long battery life', 'Weather-resistant design']
    },
    {
      title: 'Connectivity',
      description: 'Reliable data transmission via LoRa and cellular networks',
      features: ['LoRa long-range communication', 'Cellular backup', 'Wi-Fi integration', 'Edge computing']
    },
    {
      title: 'Energy Management',
      description: 'Sustainable power solutions with solar integration',
      features: ['Solar panel systems', 'Battery backup', 'Power optimization', 'Grid integration']
    },
    {
      title: 'Automation',
      description: 'Smart actuators for climate and feeding control',
      features: ['Ventilation control', 'Feeding systems', 'Lighting automation', 'Emergency responses']
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-light-bg via-white to-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-dark mb-6">
              Complete Technology
              <span className="block text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-dark-light max-w-4xl mx-auto leading-relaxed mb-8">
              From sensors to cloud analytics, our integrated platform provides end-to-end monitoring and automation for modern poultry operations.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-sm font-medium">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg">Sensors</span>
                <span className="text-light-gray">→</span>
                <span className="bg-green-50 text-green-600 px-3 py-1 rounded-lg">LoRa Network</span>
                <span className="text-light-gray">→</span>
                <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-lg">Gateway</span>
                <span className="text-light-gray">→</span>
                <span className="bg-amber-50 text-accent px-3 py-1 rounded-lg">Cloud AI</span>
                <span className="text-light-gray">→</span>
                <span className="bg-emerald-50 text-primary px-3 py-1 rounded-lg">Actuators</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Advanced Sensor Network
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Multi-parameter monitoring with precision sensors designed for harsh agricultural environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sensors.map((sensor, index) => {
              const Icon = sensor.icon;
              return (
                <Card 
                  key={sensor.name}
                  className={`text-center animate-slide-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  hover
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-dark mb-2">
                    {sensor.name}
                  </h3>
                  <p className="text-dark-light text-sm">
                    {sensor.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Modules */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Integrated Platform Modules
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Each component works seamlessly together to provide comprehensive farm management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card 
                key={module.title}
                className={`animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
                hover
              >
                <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                  {module.title}
                </h3>
                <p className="text-dark-light mb-6">
                  {module.description}
                </p>
                <ul className="space-y-2">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-dark-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard & Alerts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="font-heading font-bold text-3xl text-dark mb-6">
                Smart Dashboard & Alerts
              </h2>
              <p className="text-lg text-dark-light leading-relaxed mb-8">
                Real-time monitoring with intelligent alerts delivered via SMS, email, and mobile app notifications.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Smartphone className="text-primary" size={20} />
                  <span className="text-dark-light">Mobile app with real-time data</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap className="text-primary" size={20} />
                  <span className="text-dark-light">Instant SMS/USSD alerts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Settings className="text-primary" size={20} />
                  <span className="text-dark-light">Customizable thresholds</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="text-primary" size={20} />
                  <span className="text-dark-light">Emergency response protocols</span>
                </li>
              </ul>
            </div>
            
            <div className="animate-slide-up delay-150">
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-dark-light">Temperature</span>
                    <span className="text-green-600 font-semibold">24.5°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-light">Humidity</span>
                    <span className="text-blue-600 font-semibold">65%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-light">Air Quality</span>
                    <span className="text-green-600 font-semibold">Good</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-light">Activity Level</span>
                    <span className="text-amber-600 font-semibold">Normal</span>
                  </div>
                  <div className="pt-4 border-t border-light-gray">
                    <div className="flex items-center space-x-2 text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>All systems operational</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready to Upgrade Your Farm?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover how our technology solutions can transform your poultry operations.
          </p>
          <Button variant="secondary" size="lg">
            Request Technical Demo
          </Button>
        </div>
      </section>
    </main>
  );
}