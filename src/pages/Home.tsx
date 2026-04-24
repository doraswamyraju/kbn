import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Handshake, ShieldCheck } from 'lucide-react';
import { members, events, testimonials } from '../data/mockData';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-blue py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Elevate Your Business with <span className="text-gold-500">Premium Connections</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Kammas Business Network (KBN) is a professional ecosystem where driven entrepreneurs connect, refer, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/signup" className="px-8 py-4 bg-gold-500 text-brand-blue font-bold rounded-md hover:bg-gold-400 transition-colors flex items-center gap-2">
              Apply for Membership <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="px-8 py-4 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-colors backdrop-blur-sm">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">The Process</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">How KBN Works</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-brand-blue" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">1. Connect</h4>
              <p className="text-gray-600 leading-relaxed">Join a chapter of motivated business owners. Build meaningful relationships built on trust and mutual respect.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="text-brand-blue" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">2. Collaborate</h4>
              <p className="text-gray-600 leading-relaxed">Share qualified referrals and industry insights. Become the go-to resource in your specific business category.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-brand-blue" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">3. Grow</h4>
              <p className="text-gray-600 leading-relaxed">Watch your revenue scale as you leverage the collective network of your fellow KBN members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">Why Join Us</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Unlocking the Power of Network</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Traditional networking is often transactional and exhausting. KBN is different. We focus on building deep, referral-based relationships where your fellow members act as your extended sales team.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Exclusive category representation in your chapter',
                  'Rigorous member vetting for high-quality connections',
                  'Structured weekly meetings focused on ROI',
                  'Access to regional and national networking summits'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ShieldCheck className="text-brand-blue shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/membership" className="inline-flex items-center font-bold text-brand-blue hover:text-gold-600 transition-colors">
                Explore Membership Benefits <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Networking Meeting" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-gray-100 hidden sm:block">
                <div className="font-serif text-4xl font-bold text-gold-500 mb-1">₹50Cr+</div>
                <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Business Generated Annually</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">Our Community</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Featured Members</h3>
            </div>
            <Link to="/directory" className="hidden sm:inline-flex items-center text-brand-blue font-medium hover:text-gold-600 transition-colors">
              View All Members <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.filter(m => m.featured).map((member) => (
              <div key={member.id} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-square w-full overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-gold-600 uppercase tracking-wider mb-2">{member.industry}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-500 mb-4">{member.role}, {member.company}</p>
                  <Link to={`/directory`} className="text-sm font-medium text-brand-blue hover:text-gold-600">View Profile &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
            Join the most exclusive professional business networking organization and tap into a system that generates millions in closed business.
          </p>
          <Link to="/signup" className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-brand-blue font-bold rounded-md hover:bg-gold-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            Apply For Membership Today
          </Link>
        </div>
      </section>
    </div>
  );
}
