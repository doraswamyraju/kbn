import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900">Welcome back, {user?.name}</h1>
          <p className="text-gray-600 mt-2">Manage your KBN membership, events, and referrals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Stats */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-1">Referrals Given</div>
            <div className="text-4xl font-bold text-brand-blue">12</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-1">Referrals Received</div>
            <div className="text-4xl font-bold text-brand-blue">8</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-1">Business Closed (₹)</div>
            <div className="text-4xl font-bold text-gold-500">2.4Cr</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 line-clamp-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
                <Link to="/events" className="text-sm font-medium text-brand-blue hover:underline">View All</Link>
              </div>
              <div className="space-y-4">
                <div className="flex bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex flex-col items-center justify-center p-3 bg-white rounded-md border border-gray-200 mr-4 min-w-16">
                    <span className="text-xs text-red-500 font-bold uppercase">May</span>
                    <span className="text-xl font-bold text-gray-900">15</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">KBN Annual Leadership Summit</h4>
                    <p className="text-sm text-gray-600">ITC Kakatiya, Hyderabad</p>
                    <div className="mt-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Registered</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 line-clamp-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Referrals</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">To: Suresh Babu (Balaji Constructions)</div>
                    <div className="text-sm text-gray-500">Interior design consultation for new villa project</div>
                  </div>
                  <div className="text-xs font-medium bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Pending</div>
                </div>
                <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">From: Anitha Chowdhary</div>
                    <div className="text-sm text-gray-500">Website redesign for architecture firm</div>
                  </div>
                  <div className="text-xs font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">Closed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-brand-blue text-white rounded-xl p-6 shadow-sm">
               <h2 className="text-xl font-bold mb-2">My Profile</h2>
               <div className="flex items-center gap-4 py-4 border-b border-white/10 mb-4">
                 <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                   {user?.name.charAt(0)}
                 </div>
                 <div>
                   <div className="font-bold text-lg">{user?.name}</div>
                   <div className="text-sm text-gray-300">{user?.email}</div>
                 </div>
               </div>
               <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded text-sm font-medium transition-colors">
                 Edit Profile
               </button>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-blue-50 hover:text-brand-blue text-gray-700 text-sm font-medium rounded-md transition-colors border border-gray-100 border-transparent">
                  + Submit a Referral
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-blue-50 hover:text-brand-blue text-gray-700 text-sm font-medium rounded-md transition-colors border border-gray-100 border-transparent">
                  + Register Guest
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-blue-50 hover:text-brand-blue text-gray-700 text-sm font-medium rounded-md transition-colors border border-gray-100 border-transparent">
                  Report Closed Business
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
