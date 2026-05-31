'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Globe, Zap, TrendingUp, CheckCircle, ArrowRight, Filter } from 'lucide-react';

const PartSourcingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Parts data
  const parts = [
    {
      id: 1,
      name: 'Engine Components',
      category: 'Engine',
      region: 'Europe',
      leadTime: '5-7 days',
      availability: 'High',
      suppliers: 12,
      image: '🔧',
    },
    {
      id: 2,
      name: 'Transmission Systems',
      category: 'Transmission',
      region: 'Germany',
      leadTime: '7-10 days',
      availability: 'Medium',
      suppliers: 8,
      image: '⚙️',
    },
    {
      id: 3,
      name: 'Brake Components',
      category: 'Brakes',
      region: 'Japan',
      leadTime: '3-5 days',
      availability: 'High',
      suppliers: 15,
      image: '🛑',
    },
    {
      id: 4,
      name: 'Suspension Parts',
      category: 'Suspension',
      region: 'USA',
      leadTime: '4-6 days',
      availability: 'High',
      suppliers: 10,
      image: '🔄',
    },
    {
      id: 5,
      name: 'Electrical Systems',
      category: 'Electrical',
      region: 'South Korea',
      leadTime: '6-8 days',
      availability: 'Medium',
      suppliers: 11,
      image: '⚡',
    },
    {
      id: 6,
      name: 'Fuel Injection Systems',
      category: 'Engine',
      region: 'Germany',
      leadTime: '5-7 days',
      availability: 'High',
      suppliers: 9,
      image: '💧',
    },
    {
      id: 7,
      name: 'Cooling Systems',
      category: 'Cooling',
      region: 'Japan',
      leadTime: '4-6 days',
      availability: 'High',
      suppliers: 13,
      image: '❄️',
    },
    {
      id: 8,
      name: 'Lighting Systems',
      category: 'Electrical',
      region: 'Europe',
      leadTime: '3-5 days',
      availability: 'High',
      suppliers: 14,
      image: '💡',
    },
  ];

  const categories = ['All', 'Engine', 'Transmission', 'Brakes', 'Suspension', 'Electrical', 'Cooling'];
  const regions = ['All', 'Europe', 'Germany', 'Japan', 'USA', 'South Korea', 'Asia-Pacific'];

  // Filter parts
  const filteredParts = useMemo(() => {
    return parts.filter(part => {
      const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        part.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || part.category === selectedCategory;
      const matchesRegion = selectedRegion === 'All' || part.region === selectedRegion;
      return matchesSearch && matchesCategory && matchesRegion;
    });
  }, [searchTerm, selectedCategory, selectedRegion]);

  // Stats
  const stats = useMemo(() => [
    { value: 200, suffix: '+', label: 'Global Partners', icon: Globe },
    { value: 50, suffix: 'K+', label: 'Parts Available', icon: Zap },
    { value: 24, suffix: '/7', label: 'Support', icon: TrendingUp },
    { value: 98, suffix: '%', label: 'On-Time Delivery', icon: CheckCircle },
  ], []);
  const [displayStats, setDisplayStats] = useState(() => stats.map(() => 0));

  useEffect(() => {
    let frameId;
    const duration = 1200;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayStats(stats.map((stat) => Math.round(stat.value * progress)));
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [stats]);

  // Process steps
  const processSteps = [
    {
      step: 1,
      title: 'Request',
      description: 'Submit your part requirements with specifications',
      icon: '📋',
    },
    {
      step: 2,
      title: 'Search',
      description: 'We search our global network of suppliers',
      icon: '🔍',
    },
    {
      step: 3,
      title: 'Quote',
      description: 'Receive competitive quotes with best pricing',
      icon: '💰',
    },
    {
      step: 4,
      title: 'Verify',
      description: 'Quality inspection and verification',
      icon: '✅',
    },
    {
      step: 5,
      title: 'Deliver',
      description: 'Fast and secure delivery to your location',
      icon: '🚚',
    },
    {
      step: 6,
      title: 'Support',
      description: 'Ongoing support and warranty coverage',
      icon: '🤝',
    },
  ];

  // Regions coverage
  const regionsCoverage = [
    { name: 'Europe', suppliers: 45, response: '2-4 hours' },
    { name: 'Asia-Pacific', suppliers: 52, response: '1-3 hours' },
    { name: 'North America', suppliers: 38, response: '2-5 hours' },
    { name: 'Middle East', suppliers: 28, response: '3-6 hours' },
  ];

  const features = [
    { icon: '🌍', title: 'Global Network', desc: '200+ verified suppliers worldwide' },
    { icon: '⚡', title: 'Fast Delivery', desc: '3-10 day lead time on most parts' },
    { icon: '💰', title: 'Competitive Pricing', desc: 'Best prices through bulk partnerships' },
    { icon: '✅', title: 'Quality Assured', desc: '100% OEM verified components' },
    { icon: '🛡️', title: 'Full Warranty', desc: 'Comprehensive coverage on all parts' },
    { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock customer assistance' },
  ];

  return (
    <main className="w-full overflow-hidden bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--gold-accent)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--gold-accent)] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Global Part Sourcing
              <span className="block text-[var(--gold-accent)]">Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Access 200+ global suppliers with 50,000+ automotive parts. Fast, reliable, and competitive pricing with 24/7 support.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-2xl p-2 sm:p-3 max-w-2xl mx-auto mb-8">
              <div className="flex items-center gap-3 px-4 sm:px-6 py-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search parts, brands, or specifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 outline-none text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[var(--gold-accent)] hover:bg-[var(--gold-accent)] text-black font-semibold py-3 px-8 rounded-full transition flex items-center justify-center gap-2">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-[var(--gold-accent)] hover:bg-[var(--gold-accent)]/10 text-white font-semibold py-3 px-8 rounded-full transition">
                Browse Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-12 sm:py-16 border-b border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-3">
                    <Icon className="w-10 h-10 text-[var(--gold-accent)]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {displayStats[idx].toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="bg-slate-800 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-[var(--gold-accent)]" />
            <h2 className="text-xl font-bold text-white">Filter Parts</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[var(--gold-accent)]"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Region</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[var(--gold-accent)]"
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            {/* Reset */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedRegion('All');
                }}
                className="w-full px-4 py-2 bg-[var(--gold-accent)] hover:bg-[var(--gold-accent)] text-black font-semibold rounded-lg transition"
              >
                Reset Filters
              </button>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-400">
            Found <span className="font-bold text-[var(--gold-accent)]">{filteredParts.length}</span> parts
          </div>
        </div>
      </section>

      {/* Parts Grid */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredParts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredParts.map(part => (
                <div key={part.id} className="bg-white/5 border border-white/10 rounded-xl hover:shadow-lg hover:border-[var(--gold-accent)]/50 transition overflow-hidden group">
                  <div className="h-24 bg-gradient-to-br from-[var(--gold-accent)]/20 to-white/5 flex items-center justify-center text-4xl group-hover:scale-110 transition">
                    {part.image}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-2 line-clamp-2">{part.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Category:</span>
                        <span className="font-semibold text-gray-200">{part.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Region:</span>
                        <span className="font-semibold text-gray-200">{part.region}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Lead Time:</span>
                        <span className="font-semibold text-[var(--gold-accent)]">{part.leadTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Suppliers:</span>
                        <span className="font-semibold text-gray-200">{part.suppliers}</span>
                      </div>
                      <div className="pt-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          part.availability === 'High'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-[var(--gold-accent)]/20 text-[var(--gold-accent)]'
                        }`}>
                          {part.availability} Availability
                        </span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-[var(--gold-accent)] hover:bg-[var(--gold-accent)] text-black font-semibold py-2 rounded-lg transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg mb-4">No parts found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedRegion('All');
                }}
                className="px-6 py-2 bg-[var(--gold-accent)] hover:bg-[var(--gold-accent)] text-black font-semibold rounded-lg transition"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Sourcing Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map(step => (
              <div key={step.step} className="bg-slate-700/50 border border-[var(--gold-accent)]/30 rounded-xl p-6 hover:border-[var(--gold-accent)] transition">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-[var(--gold-accent)] text-slate-900 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Global Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionsCoverage.map(region => (
              <div key={region.name} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:shadow-lg hover:border-[var(--gold-accent)]/50 transition">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-[var(--gold-accent)]" />
                  <h3 className="text-xl font-bold text-white">{region.name}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Active Suppliers</p>
                    <p className="text-2xl font-bold text-[var(--gold-accent)]">{region.suppliers}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Avg. Response Time</p>
                    <p className="font-semibold text-gray-300">{region.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-800 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:shadow-lg hover:border-[var(--gold-accent)]/50 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-12 sm:py-16 text-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Source Your Parts?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get instant quotes from our global network of suppliers. Fast, reliable, and competitive pricing guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--gold-accent)] hover:bg-[var(--gold-accent)] text-black font-semibold py-3 px-8 rounded-full transition flex items-center justify-center gap-2">
              Get Started Now <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-[var(--gold-accent)] hover:bg-[var(--gold-accent)]/10 text-white font-semibold py-3 px-8 rounded-full transition">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PartSourcingPage;