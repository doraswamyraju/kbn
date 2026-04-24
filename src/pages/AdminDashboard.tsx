import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Check, X, ShieldAlert, Users } from 'lucide-react';

export default function AdminDashboard() {
  const { user } = useAuth();
  
  // Mock pending members
  const [pendingMembers, setPendingMembers] = useState([
    { id: 1, name: 'Harish Kumar', company: 'Kumar Logistics', industry: 'Logistics', date: '2026-04-20' },
    { id: 2, name: 'Priya Reddy', company: 'Reddy Associates', industry: 'Legal Services', date: '2026-04-22' },
    { id: 3, name: 'Murali Krishna', company: 'Krishna Traders', industry: 'Retail', date: '2026-04-24' }
  ]);

  const handleApprove = (id: number) => {
    setPendingMembers(pendingMembers.filter(m => m.id !== id));
    // In real app, make API call
  };

  const handleReject = (id: number) => {
    setPendingMembers(pendingMembers.filter(m => m.id !== id));
    // In real app, make API call
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Admin Control Panel</h1>
            <p className="text-gray-600 mt-2">Manage members, events, and application requests.</p>
          </div>
          <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium text-sm">
            <ShieldAlert size={18} className="mr-2" />
            Admin Access
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
             { label: 'Total Members', value: '342', trend: '+12 this month' },
             { label: 'Pending Applications', value: pendingMembers.length.toString(), trend: 'Requires review' },
             { label: 'Active Events', value: '4', trend: 'Next in 2 days' },
             { label: 'Business Generated', value: '₹12.5Cr', trend: 'This quarter' }
          ].map((stat, i) => (
             <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">{stat.label}</div>
                <div className="text-3xl font-bold text-brand-blue mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.trend}</div>
             </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pending Approvals */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
               <h2 className="text-xl font-bold text-gray-900 flex items-center">
                 <Users className="mr-2 text-gold-500" /> Member Applications
               </h2>
            </div>
            
            <div className="overflow-x-auto">
              {pendingMembers.length > 0 ? (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider border-b border-gray-200">
                      <th className="p-4 font-medium">Applicant</th>
                      <th className="p-4 font-medium">Industry</th>
                      <th className="p-4 font-medium">Date Applied</th>
                      <th className="p-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pendingMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-50/50">
                        <td className="p-4">
                          <div className="font-bold text-gray-900">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.company}</div>
                        </td>
                        <td className="p-4">
                          <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                            {member.industry}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-500">{member.date}</td>
                        <td className="p-4 text-right">
                           <div className="flex justify-end gap-2">
                             <button 
                               onClick={() => handleApprove(member.id)}
                               className="p-2 bg-green-50 text-green-600 hover:bg-green-100 rounded-md transition-colors"
                               title="Approve"
                             >
                               <Check size={18} />
                             </button>
                             <button 
                               onClick={() => handleReject(member.id)}
                               className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-md transition-colors"
                               title="Reject"
                             >
                               <X size={18} />
                             </button>
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-12 text-center text-gray-500">
                  No pending applications to review right now.
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-brand-blue text-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
               <div className="space-y-2">
                 <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 text-sm font-medium rounded-md transition-colors">
                   Create New Event
                 </button>
                 <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 text-sm font-medium rounded-md transition-colors">
                   Broadcast Broadcast Message
                 </button>
                 <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 text-sm font-medium rounded-md transition-colors">
                   Download Member Directory (CSV)
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
