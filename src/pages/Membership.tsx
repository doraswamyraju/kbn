import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, X } from 'lucide-react';

export default function Membership() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-brand-blue py-20 text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">Invest in Your Growth</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Join KBN to access exclusive networking opportunities, qualified referrals, and standard-setting member benefits.
          </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Standard Tier */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual Membership</h3>
              <p className="text-sm text-gray-500 mb-6">For emerging and established business owners.</p>
              <div className="mb-8">
                <span className="text-4xl font-serif font-bold text-gray-900">₹30,000</span>
                <span className="text-gray-500">/year + taxes</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Weekly chapter meetings', 'Exclusive category locked out', 'Access to regional member directory', '1 included flagship event ticket', 'Monthly networking mixers'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/signup" className="w-full text-center px-4 py-3 border-2 border-brand-blue text-brand-blue font-bold rounded-md hover:bg-brand-blue hover:text-white transition-colors">
                Apply for Standard
              </Link>
            </div>

            {/* Premium Tier */}
            <div className="p-10 bg-gradient-to-b from-blue-50/50 to-white flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold-500 text-brand-blue text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
              <h3 className="text-2xl font-bold text-brand-blue mb-2">Corporate Patron</h3>
              <p className="text-sm text-gray-500 mb-6">For large enterprises and premium networking.</p>
              <div className="mb-8">
                <span className="text-4xl font-serif font-bold text-gray-900">₹75,000</span>
                <span className="text-gray-500">/year + taxes</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['All Annual Membership benefits', 'Premium placement in directory', 'Speaking opportunities at summits', 'Access to National Patron Mastermind', '4 included flagship event tickets', 'Sponsorship recognition'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/signup" className="w-full text-center px-4 py-3 bg-brand-blue text-white font-bold rounded-md hover:bg-brand-blue/90 shadow-md transition-colors">
                Apply for Patron
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Eligibility Criteria</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">To ensure the highest quality of networking, all members must meet specific criteria before approval.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="bg-gray-50 text-brand-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h4 className="font-bold text-gray-900 mb-2">Business Legitimacy</h4>
                <p className="text-sm text-gray-600">Must represent a registered, full-time business operation.</p>
             </div>
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="bg-gray-50 text-brand-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h4 className="font-bold text-gray-900 mb-2">Category Availability</h4>
                <p className="text-sm text-gray-600">Your core business category must be open in your requested chapter.</p>
             </div>
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="bg-gray-50 text-brand-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h4 className="font-bold text-gray-900 mb-2">Commitment</h4>
                <p className="text-sm text-gray-600">Willingness to attend weekly meetings and actively provide referrals.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
