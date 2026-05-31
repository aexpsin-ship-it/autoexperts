'use client';

import React, { useState } from 'react';
import { Wrench, Truck, Search, CheckCircle, BarChart3, Headphones, Cog, Zap } from 'lucide-react';
import { whatWeDo } from '../data';

const WhatWeDoPage = () => {
  const [expandedService, setExpandedService] = useState(0);

  const services = [
    {
      id: 1,
      icon: Search,
      title: 'Parts Sourcing',
      short: 'Global supplier network',
      description:
        'Access to 50,000+ automotive parts from 200+ verified suppliers worldwide. We search, compare, and deliver the best options for your needs.',
      features: [
        'Global supplier database',
        'Real-time availability tracking',
        'Competitive pricing',
        'Quality verification',
        'Express delivery options',
      ],
    },
    {
      id: 2,
      icon: Wrench,
      title: 'Technical Support',
      short: 'Expert consultation',
      description:
        'Our certified technicians provide expert guidance on part selection, compatibility, and installation. Multilingual support available 24/7.',
      features: [
        'Expert consultation',
        'Technical documentation',
        'Installation guides',
        'Compatibility checking',
        'Problem diagnosis',
      ],
    },
    {
      id: 3,
      icon: Truck,
      title: 'Logistics & Delivery',
      short: 'Fast & reliable shipping',
      description:
        'Streamlined logistics network ensures fast and secure delivery worldwide. Track your shipment in real-time with our advanced system.',
      features: [
        'Express delivery options',
        'Real-time tracking',
        'Insured shipments',
        'Customs handling',
        'Door-to-door service',
      ],
    },
    {
      id: 4,
      icon: BarChart3,
      title: 'Quality Management',
      short: 'OEM certified',
      description:
        'Every part undergoes rigorous quality inspection to ensure OEM compliance. We guarantee authenticity and durability of all products.',
      features: [
        'OEM verification',
        'Quality testing',
        'Authentication certificates',
        'Warranty coverage',
        'Compliance reporting',
      ],
    },
    {
      id: 5,
      icon: Headphones,
      title: 'Customer Support',
      short: '24/7 assistance',
      description:
        'Dedicated support team available round-the-clock. Multiple communication channels for your convenience and peace of mind.',
      features: [
        '24/7 availability',
        'Multilingual support',
        'Dedicated account managers',
        'Quick response times',
        'Issue resolution',
      ],
    },
    {
      id: 6,
      icon: Cog,
      title: 'Custom Solutions',
      short: 'Tailored services',
      description:
        'We provide customized sourcing strategies for fleet operators, workshops, and dealerships. Bulk ordering with special pricing available.',
      features: [
        'Bulk discounts',
        'Fleet programs',
        'Workshop partnerships',
        'Custom catalogs',
        'Preferred pricing',
      ],
    },
  ];

  const workflow = [
    {
      step: 1,
      title: 'Request',
      description: 'You submit your part requirements with specifications and quantity',
      icon: '📋',
    },
    {
      step: 2,
      title: 'Search',
      description: 'Our team searches the global network for best matches and pricing',
      icon: '🔍',
    },
    {
      step: 3,
      title: 'Quote',
      description: 'You receive competitive quotes within 24 hours with options',
      icon: '💰',
    },
    {
      step: 4,
      title: 'Verification',
      description: 'Parts are quality checked and authenticated before shipping',
      icon: '✅',
    },
    {
      step: 5,
      title: 'Delivery',
      description: 'Fast and secure delivery with real-time tracking worldwide',
      icon: '🚚',
    },
    {
      step: 6,
      title: 'Support',
      description: 'Ongoing technical support and warranty coverage included',
      icon: '🤝',
    },
  ];

  const expertise = [
    { category: 'Engine Systems', items: ['Cylinder Blocks', 'Pistons', 'Valve Systems', 'Fuel Injectors'] },
    { category: 'Transmission', items: ['Manual Transmissions', 'Automatic Gearboxes', 'CVT Systems', 'Differentials'] },
    { category: 'Brake Systems', items: ['Brake Discs', 'Brake Pads', 'Brake Fluid', 'ABS Components'] },
    { category: 'Suspension', items: ['Springs', 'Dampers', 'Control Arms', 'Stabilizer Bars'] },
    { category: 'Electrical', items: ['Alternators', 'Starters', 'Batteries', 'Wiring Harnesses'] },
    { category: 'Climate Control', items: ['Air Compressors', 'Radiators', 'Thermostats', 'Cooling Fans'] },
  ];

  const { capabilities } = whatWeDo;

  return (
    <main className="w-full overflow-hidden bg-[var(--primary)]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--gold-accent)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--gold-accent)] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            What We Do
            <span className="block text-[var(--gold-accent)]">Comprehensive Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            End-to-end automotive sourcing and logistics with expert support at every step
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Our Core Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isExpanded = expandedService === service.id;

              return (
                <div
                  key={service.id}
                  className={`border rounded-xl transition-all duration-300 cursor-pointer overflow-hidden ${
                    isExpanded
                      ? 'bg-[var(--gold-accent)] text-slate-900 border-[var(--gold-accent)]'
                      : 'bg-slate-800 border-slate-700 hover:shadow-lg hover:border-[var(--gold-accent)]/50 text-white'
                  }`}
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                >
                  <div className="p-6">
                    <div
                      className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition ${
                        isExpanded ? 'bg-slate-900' : 'bg-[var(--gold-accent)]/10'
                      }`}
                    >
                      <Icon className={`w-7 h-7 text-[var(--gold-accent)]`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className={`text-sm mb-4 ${isExpanded ? 'text-slate-900' : 'text-gray-300'}`}>
                      {isExpanded ? service.description : service.short}
                    </p>

                    {isExpanded && (
                      <ul className="space-y-2 mt-4 pt-4 border-t border-current/20">
                        {service.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center gap-2 text-sm font-medium">
                            <span className="w-2 h-2 rounded-full bg-current"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

                <div className="mt-8 text-center text-gray-400">
            Click on any service to learn more
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-slate-800 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Our Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflow.map((item) => (
                <div key={item.step} className="bg-slate-700 border border-slate-600 rounded-xl p-6 hover:shadow-lg hover:border-[var(--gold-accent)]/50 transition">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[var(--gold-accent)] text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Areas of Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((area, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:shadow-lg hover:border-[var(--gold-accent)]/50 transition">
                <h3 className="text-xl font-bold text-[var(--gold-accent)] mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-[var(--gold-accent)]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Our Services Excel</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, idx) => (
              <div key={idx} className="bg-slate-700/50 border border-slate-600 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-[var(--gold-accent)]">{capability.title}</h3>
                <ul className="space-y-3">
                  {capability.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--gold-accent)] flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Experience Our Services?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let AutoExperts handle your automotive sourcing needs with professional expertise and global reach
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--gold-accent)] hover:bg-[var(--gold-accent)]/90 text-black font-semibold py-3 px-8 rounded-full transition">
              Request a Quote
            </button>
            <button className="border-2 border-[var(--gold-accent)] hover:bg-[var(--gold-accent)]/10 text-white font-semibold py-3 px-8 rounded-full transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhatWeDoPage;
