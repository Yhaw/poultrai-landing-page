import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Headphones } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+233 505953242',
      availability: 'Mon-Fri, 8AM-6PM GMT',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'poultrai@gmail.com',
      availability: '24/7 response within 4 hours',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant help from our support team',
      contact: 'Available on website',
      availability: 'Mon-Fri, 9AM-5PM GMT',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  const offices = [
    {
      city: 'Nsawam, Adoagyiri',
      address: 'Eastern Region, Ghana',
      zipcode: '',
      phone: '+233 505953242',
      type: 'Headquarters',
    },
  ];

  const departments = [
    {
      icon: Users,
      name: 'Sales Team',
      description: 'Product demos and pricing information',
      email: 'poultrai@gmail.com',
    },
    {
      icon: Headphones,
      name: 'Technical Support',
      description: 'Installation and troubleshooting help',
      email: 'poultrai@gmail.com',
    },
    {
      icon: MessageSquare,
      name: 'Partnerships',
      description: 'Collaboration and integration opportunities',
      email: 'poultrai@gmail.com',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-light-bg via-white to-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-dark mb-6">
              Get in Touch
              <span className="block text-primary">We're Here to Help</span>
            </h1>
            <p className="text-xl text-dark-light max-w-4xl mx-auto leading-relaxed">
              Have questions about PoultrAI? Our team of experts is ready to help you find the perfect solution for your poultry operation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Choose the contact method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card 
                  key={method.title}
                  className={`text-center animate-slide-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  hover
                >
                  <div className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon size={32} className={method.color} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                    {method.title}
                  </h3>
                  <p className="text-dark-light mb-4">
                    {method.description}
                  </p>
                  <div className="text-primary font-semibold mb-2">
                    {method.contact}
                  </div>
                  <div className="text-dark-light text-sm">
                    {method.availability}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-slide-up">
              <h2 className="font-heading font-bold text-3xl text-dark mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-dark-light leading-relaxed mb-8">
                Fill out the form below and we'll get back to you within 24 hours. For urgent matters, please call us directly.
              </p>
              
              <div className="space-y-6">
                {departments.map((dept, index) => {
                  const Icon = dept.icon;
                  return (
                    <div key={dept.name} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-1">{dept.name}</h3>
                        <p className="text-dark-light text-sm mb-1">{dept.description}</p>
                        <a href={`mailto:${dept.email}`} className="text-primary text-sm font-medium hover:underline">
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card className="animate-slide-up delay-150">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-light-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-light-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-light-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-light-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Company
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-light-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    How can we help? *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-light-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="demo">Request a demo</option>
                    <option value="pricing">Get pricing information</option>
                    <option value="support">Technical support</option>
                    <option value="partnership">Partnership inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Message *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-light-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us more about your needs..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Visit us at one of our offices or connect with our regional teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card 
                key={office.city}
                className={`animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
                hover
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div className="text-sm text-primary font-medium mb-2">
                  {office.type}
                </div>
                <h3 className="font-heading font-semibold text-xl text-dark mb-4">
                  {office.city}
                </h3>
                <div className="space-y-2 text-dark-light">
                  <p>{office.address}</p>
                  {office.zipcode && <p>{office.zipcode}</p>}
                  <p className="font-medium">{office.phone}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center animate-fade-in">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock size={32} className="text-accent" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-dark mb-6">
              Business Hours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-dark mb-3">Support Hours</h3>
                <div className="space-y-2 text-dark-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM GMT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM GMT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency only</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-3">Sales Hours</h3>
                <div className="space-y-2 text-dark-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM GMT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend</span>
                    <span>By appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our experts to discuss your specific needs.
          </p>
          <Button variant="secondary" size="lg">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </main>
  );
}
