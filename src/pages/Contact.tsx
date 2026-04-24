import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about membership, chapters, or upcoming events? Our support team is here to help you navigate your KBN journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 h-full">
              <div className="bg-blue-50 text-brand-blue p-3 rounded-lg shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Headquarters</h3>
                <p className="text-gray-600 leading-relaxed">
                  D No 23-5-339a, Gayathri Nagar 02-<br />
                  M R Palli, Tirupati, Chittoor,<br />
                  Tirupati (Urban), Andhra Pradesh 517501, India
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="bg-blue-50 text-brand-blue p-3 rounded-lg mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+91 9494593222</p>
                <p className="text-xs text-gray-400 mt-2">Mon-Fri, 9am - 6pm</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="bg-blue-50 text-brand-blue p-3 rounded-lg mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">contact@kbn.org</p>
                <p className="text-xs text-brand-blue font-medium mt-2 hover:underline cursor-pointer">Support Form &rarr;</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue bg-white">
                  <option>Membership Inquiry</option>
                  <option>Event Question</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue resize-none"></textarea>
              </div>
              <button className="w-full bg-brand-blue text-white font-bold py-3 px-4 rounded-md hover:bg-brand-blue/90 flex justify-center items-center gap-2 transition-colors">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
