import React from 'react';
import { members } from '../data/mockData';

export default function Directory() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [industryFilter, setIndustryFilter] = React.useState('');

  const industries = Array.from(new Set(members.map(m => m.industry)));

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          member.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = industryFilter ? member.industry === industryFilter : true;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-brand-blue mb-4">Member Directory</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Connect with verified business owners and professionals across various industries within the Kammas Business Network.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name or company..."
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="md:w-64">
            <select
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue appearance-none bg-white"
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
            >
              <option value="">All Industries</option>
              {industries.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.length > 0 ? (
            filteredMembers.map(member => (
              <div key={member.id} className="bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                <div className="flex p-6 gap-4 border-b border-gray-50 h-32">
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 bg-gray-100">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1">{member.name}</h3>
                    <div className="text-sm text-brand-blue font-medium">{member.role}</div>
                    <div className="text-sm text-gray-500">{member.company}</div>
                  </div>
                </div>
                <div className="p-6 bg-gray-50/50 flex-grow flex flex-col justify-between gap-4">
                  <div>
                     <span className="inline-block px-3 py-1 bg-gold-50 text-gold-900 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      {member.industry}
                    </span>
                    <p className="text-sm text-gray-600 line-clamp-2">{member.about}</p>
                  </div>
                  <button className="w-full py-2.5 border border-brand-blue text-brand-blue rounded-md font-medium hover:bg-brand-blue hover:text-white transition-colors">
                    View Full Profile
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">
              No members found matching your search criteria.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
