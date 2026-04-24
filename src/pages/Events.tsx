import React from 'react';
import { events } from '../data/mockData';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function Events() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Upcoming Events</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Attend exclusive networking mixers, leadership summits, and virtual panels to grow your connections within KBN.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const dateObj = new Date(event.date);
            const formattedDate = dateObj.toLocaleDateString('en-US', {
              weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
            });
            const formattedTime = dateObj.toLocaleTimeString('en-US', {
              hour: '2-digit', minute: '2-digit'
            });

            return (
              <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="relative h-48 w-full group overflow-hidden">
                  <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-brand-blue z-20 shadow-sm uppercase tracking-wide">
                    {event.type}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{event.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-3 text-gold-600" />
                      {formattedDate} at {formattedTime}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 text-gold-600" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-3 text-gold-600" />
                      {event.attendees} Registered
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-grow">{event.description}</p>
                  
                  <button className="w-full bg-brand-blue text-white py-3 rounded-md font-medium hover:bg-brand-blue/90 transition-colors shadow-sm mt-auto">
                    Register Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
