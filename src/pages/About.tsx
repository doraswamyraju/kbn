import React from 'react';
import { Target, Lightbulb, Shield, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-blue py-20 text-white border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">About KBN</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            We are more than just a networking group. We are a community of driven business owners dedicated to mutual growth, integrity, and success.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
               <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                 <Lightbulb size={28} />
               </div>
               <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Vision</h2>
               <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                 To be the premier, most respected professional business networking organization in the region, recognized for generating substantial economic value and fostering principled leadership among members.
               </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
               <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                 <Target size={28} />
               </div>
               <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
               <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                 To provide a structured, positive, and professional referral marketing program that enables members to develop long-term, meaningful relationships with quality business professionals.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">What Drives Us</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Our Core Values</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Givers Gain", desc: "We believe in giving business to others as the best way to get business in return.", icon: HandshakeIcon },
              { title: "Integrity", desc: "We uphold the highest ethical standards in all our business dealings.", icon: Shield },
              { title: "Lifelong Learning", desc: "We continuously invest in our professional and personal development.", icon: Award },
              { title: "Accountability", desc: "We hold ourselves and each other accountable to our commitments.", icon: Target }
            ].map((val, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-xl">
                 <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-6 text-gold-500">
                   <val.icon size={28} />
                 </div>
                 <h4 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h4>
                 <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Guiding the Community</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-12">Leadership Team</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Our network is guided by experienced business leaders dedicated to maintaining the quality and growth of the community.
          </p>
          <div className="flex justify-center">
             {/* This could map over leadership data in a real app */}
             <div className="bg-white/5 border border-white/10 p-8 rounded-2xl max-w-sm w-full backdrop-blur-sm">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-300 mb-6">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="President" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold mb-1">Rajesh Kamma</h4>
                <div className="text-gold-500 font-medium text-sm mb-4 uppercase tracking-wider">Chapter President</div>
                <p className="text-sm text-gray-300">RK Tech Solutions</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HandshakeIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
      <path d="m21 3 1 11h-2"/>
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>
      <path d="M3 4h8"/>
    </svg>
  );
}
