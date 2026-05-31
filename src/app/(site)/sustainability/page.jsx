'use client';

import React from 'react';
import { Leaf, Recycle, Zap, Globe, BarChart3, Users, Droplets, Wind } from 'lucide-react';

const SustainabilityPage = () => {
  const initiatives = [
    {
      icon: Recycle,
      title: 'Parts Recycling Program',
      description:
        'We promote and support the recycling of automotive components, reducing waste and environmental impact while providing cost-effective solutions.',
      stats: '10,000+ parts recycled annually',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Logistics',
      description:
        'Optimized shipping routes, consolidated deliveries, and partnership with green logistics providers to minimize carbon footprint.',
      stats: '40% reduction in emissions',
    },
    {
      icon: Zap,
      title: 'Green Technology Support',
      description:
        'Specialized sourcing for electric vehicles, hybrid systems, and renewable energy components for modern sustainable transportation.',
      stats: '500+ EV-specific parts',
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description:
        'Sustainable manufacturing practices with focus on minimizing water usage in our operations and supplier partnerships.',
      stats: '30% water reduction',
    },
  ];

  const goals = [
    {
      year: '2024',
      target: 'Carbon Neutral Operations',
      status: 'In Progress',
      description: 'Achieve carbon-neutral shipping and office operations',
    },
    {
      year: '2025',
      target: 'Zero Waste Packaging',
      status: 'Planned',
      description: 'Transition to 100% recyclable and biodegradable packaging',
    },
    {
      year: '2026',
      target: 'Supply Chain Sustainability',
      status: 'Planned',
      description: 'Ensure all suppliers meet strict environmental standards',
    },
    {
      year: '2027',
      target: 'Net Positive Impact',
      status: 'Planned',
      description: 'Offset more carbon than we produce',
    },
  ];

  const certifications = [
    { name: 'ISO 14001', desc: 'Environmental Management' },
    { name: 'ISO 9001', desc: 'Quality Management' },
    { name: 'B Corp', desc: 'Certified Sustainable Business' },
    { name: 'Green Logistics', desc: 'Carbon-Neutral Shipping Partner' },
  ];

  const impacts = [
    { number: '50K+', label: 'Tons of Waste Diverted', icon: '📊' },
    { number: '25K+', label: 'Carbon Emissions Reduced (MT)', icon: '☁️' },
    { number: '100+', label: 'Eco-Suppliers Partnered', icon: '🌍' },
    { number: '98%', label: 'Parts Recoverable/Recyclable', icon: '♻️' },
  ];

  return (
    <main className="w-full overflow-hidden bg-[var(--primary)] text-white relative">
      {/* Background Glow (match ContactBanner) */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[var(--gold-accent)] opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--gold-accent)] opacity-10 blur-3xl" />

      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Sustainability
            <span className="block text-green-400">Driving Change</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Committed to environmental responsibility and sustainable practices in the automotive industry
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative rounded-2xl bg-white/5 border border-white/10 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Sustainability Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At AutoExperts, we believe sustainable automotive solutions are not just a responsibility but an opportunity.
                We are committed to reducing environmental impact, promoting circular economy principles, and supporting the
                transition to sustainable transportation. Through innovation, partnerships, and continuous improvement, we aim
                to be a leader in green automotive sourcing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Key Initiatives</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, idx) => {
              const Icon = initiative.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:shadow-lg hover:border-[var(--gold-accent)]/50 transition"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-[var(--gold-accent)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[var(--gold-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{initiative.title}</h3>
                      <p className="text-sm text-[var(--gold-accent)] font-semibold mt-1">{initiative.stats}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{initiative.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Environmental Impact</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {impacts.map((impact, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{impact.icon}</div>
                <div className="text-3xl font-bold mb-2 text-[var(--gold-accent)]">{impact.number}</div>
                <div className="text-sm text-gray-300">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">2024-2027 Goals</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[var(--gold-accent)]/50 transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-[var(--gold-accent)] uppercase tracking-wide">{goal.year}</p>
                    <h3 className="text-xl font-bold text-white mt-1">{goal.target}</h3>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      goal.status === 'In Progress'
                        ? 'bg-[var(--gold-accent)]/20 text-[var(--gold-accent)]'
                        : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {goal.status}
                  </span>
                </div>
                <p className="text-gray-300">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Certifications & Standards</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:shadow-lg hover:border-[var(--gold-accent)]/50 transition"
              >
                <div className="w-16 h-16 bg-[var(--gold-accent)]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-[var(--gold-accent)]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-300">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">How We Practice Sustainability</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Supplier Standards',
                items: [
                  'Strict environmental compliance requirements',
                  'Regular sustainability audits',
                  'Preference for certified eco-suppliers',
                  'Carbon footprint tracking',
                ],
              },
              {
                title: 'Operations',
                items: [
                  'Energy-efficient facilities',
                  'LED lighting throughout',
                  'Renewable energy integration',
                  'Waste segregation programs',
                ],
              },
              {
                title: 'Customer Solutions',
                items: [
                  'Promote remanufactured parts',
                  'EV component sourcing',
                  'Eco-packaging options',
                  'Sustainability education',
                ],
              },
              {
                title: 'Logistics',
                items: [
                  'Consolidated shipments',
                  'Route optimization',
                  'Electric delivery vehicles',
                  'Carbon offset programs',
                ],
              },
              {
                title: 'Community',
                items: [
                  'Environmental education',
                  'Recycling initiatives',
                  'Tree planting programs',
                  'Partnership with NGOs',
                ],
              },
              {
                title: 'Innovation',
                items: [
                  'Green technology R&D',
                  'Sustainable materials research',
                  'Circular economy models',
                  'Waste reduction technology',
                ],
              },
            ].map((practice, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-[var(--gold-accent)]">{practice.title}</h3>
                <ul className="space-y-2">
                  {practice.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
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

      {/* EV Support */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Supporting the EV Revolution</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">EV Component Expertise</h3>
              <ul className="space-y-4">
                {[
                  'Battery management systems',
                  'Electric motors and controllers',
                  'High-voltage charging systems',
                  'Thermal management components',
                  'EV-specific electronics',
                  'Sustainable cooling solutions',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[var(--gold-accent)] flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us for EV Parts</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-[var(--gold-accent)] mb-2">Global EV Suppliers</p>
                  <p className="text-gray-400">Direct partnerships with leading EV component manufacturers worldwide</p>
                </div>
                <div>
                  <p className="font-bold text-[var(--gold-accent)] mb-2">Fast-Growing Inventory</p>
                  <p className="text-gray-400">Expanding catalog with latest EV technology and components</p>
                </div>
                <div>
                  <p className="font-bold text-[var(--gold-accent)] mb-2">Expert Consultation</p>
                  <p className="text-gray-400">Specialized technical support for EV conversions and repairs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Join Us in Building a Sustainable Future</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Together, we can make automotive sourcing more sustainable. Choose AutoExperts for eco-conscious parts sourcing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--gold-accent)] hover:bg-[var(--gold-accent)] text-black font-semibold py-3 px-8 rounded-full transition">
              Request Sustainable Parts
            </button>
            <button className="border-2 border-[var(--gold-accent)] hover:bg-[var(--gold-accent)]/10 text-white font-semibold py-3 px-8 rounded-full transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SustainabilityPage;
