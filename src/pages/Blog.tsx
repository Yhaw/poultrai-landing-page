import React from 'react';
import { Calendar, User, Tag, ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function Blog() {
  const featuredPost = {
    title: 'The Future of Poultry Farming: AI and IoT Integration',
    excerpt: 'Discover how artificial intelligence and Internet of Things technologies are revolutionizing modern poultry operations, improving efficiency and animal welfare.',
    author: 'Dr. Sarah Chen',
    date: 'March 15, 2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/4505464/pexels-photo-4505464.jpeg',
    tags: ['AI', 'Technology', 'Innovation']
  };

  const posts = [
    {
      title: 'Optimizing Feed Conversion Ratios with Smart Monitoring',
      excerpt: 'Learn how real-time monitoring can help improve feed efficiency and reduce costs in your poultry operation.',
      author: 'Michael Rodriguez',
      date: 'March 12, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/4505464/pexels-photo-4505464.jpeg',
      tags: ['Feed Management', 'Efficiency']
    },
    {
      title: 'Environmental Control: The Key to Healthy Flocks',
      excerpt: 'Understanding the critical role of temperature, humidity, and air quality in maintaining optimal bird health.',
      author: 'Dr. Emily Watson',
      date: 'March 10, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/4505464/pexels-photo-4505464.jpeg',
      tags: ['Environment', 'Health']
    },
    {
      title: 'Sustainable Poultry Farming: Solar Power Integration',
      excerpt: 'How renewable energy solutions can reduce operational costs while supporting environmental sustainability.',
      author: 'James Wilson',
      date: 'March 8, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/4505464/pexels-photo-4505464.jpeg',
      tags: ['Sustainability', 'Solar Energy']
    },
    {
      title: 'Early Disease Detection Through Behavioral Analysis',
      excerpt: 'Leveraging AI to identify health issues before they become critical problems in your flock.',
      author: 'Dr. Lisa Park',
      date: 'March 5, 2025',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/4505464/pexels-photo-4505464.jpeg',
      tags: ['Health', 'AI', 'Prevention']
    },
    {
      title: 'ROI Analysis: Smart Farming Technology Investment',
      excerpt: 'A comprehensive look at the financial benefits and return on investment for modern poultry monitoring systems.',
      author: 'Robert Chen',
      date: 'March 3, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/4505464/pexels-photo-4505464.jpeg',
      tags: ['ROI', 'Business']
    },
    {
      title: 'Best Practices for Sensor Placement and Maintenance',
      excerpt: 'Expert tips on optimal sensor positioning and maintenance schedules for maximum system effectiveness.',
      author: 'Technical Team',
      date: 'March 1, 2025',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/4505464/pexels-photo-4505464.jpeg',
      tags: ['Technical', 'Maintenance']
    }
  ];

  const resources = [
    {
      title: 'Complete Guide to Smart Poultry Monitoring',
      type: 'PDF Guide',
      description: 'Comprehensive 50-page guide covering all aspects of modern poultry monitoring technology.',
      size: '2.3 MB'
    },
    {
      title: 'ROI Calculator Spreadsheet',
      type: 'Excel Tool',
      description: 'Calculate the potential return on investment for your smart farming technology upgrade.',
      size: '1.1 MB'
    },
    {
      title: 'Implementation Checklist',
      type: 'PDF Checklist',
      description: 'Step-by-step checklist to ensure successful deployment of monitoring systems.',
      size: '0.8 MB'
    }
  ];

  const allTags = ['AI', 'Technology', 'Innovation', 'Feed Management', 'Efficiency', 'Environment', 'Health', 'Sustainability', 'Solar Energy', 'Prevention', 'ROI', 'Business', 'Technical', 'Maintenance'];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-light-bg via-white to-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-dark mb-6">
              Insights & Resources
              <span className="block text-primary">for Modern Farming</span>
            </h1>
            <p className="text-xl text-dark-light max-w-4xl mx-auto leading-relaxed">
              Stay informed with the latest trends, best practices, and innovations in smart poultry farming technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Featured Article
            </h2>
          </div>

          <Card className="animate-slide-up overflow-hidden" hover>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="order-2 lg:order-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-dark mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-dark-light leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-dark-light mb-6">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button className="group">
                  Read Full Article
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Expert insights and practical advice for modern poultry farming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card 
                key={post.title}
                className={`animate-slide-up overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
                hover
              >
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover mb-6"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-light-gray/50 text-dark-light px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading font-semibold text-lg text-dark mb-3">
                  {post.title}
                </h3>
                <p className="text-dark-light text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-dark-light">
                  <div className="flex items-center space-x-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Browse by Topic
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Find articles on specific topics that interest you.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((tag, index) => (
              <button
                key={tag}
                className={`bg-light-bg hover:bg-primary hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 animate-fade-in`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail size={32} className="text-primary" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-dark mb-4">
              Stay Updated
            </h2>
            <p className="text-dark-light mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, case studies, and technology updates in smart poultry farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-light-gray focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark mb-4">
              Free Resources
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Download our comprehensive guides and tools to help optimize your poultry operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card 
                key={resource.title}
                className={`animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
                hover
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Download size={32} className="text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-dark mb-2">
                  {resource.title}
                </h3>
                <div className="text-sm text-primary font-medium mb-3">
                  {resource.type} • {resource.size}
                </div>
                <p className="text-dark-light text-sm leading-relaxed mb-6">
                  {resource.description}
                </p>
                <Button variant="outline" className="w-full group">
                  <Download size={16} className="mr-2" />
                  Download Free
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready to Implement These Ideas?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Turn insights into action with PoultrAI's comprehensive monitoring solutions.
          </p>
          <Button variant="secondary" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </main>
  );
}