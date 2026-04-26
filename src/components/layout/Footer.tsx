import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gold-500">
                <Users size={24} />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">Kammas Business Network</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering business owners to connect, collaborate, and grow. Joining leaders into a premier business ecosystem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gold-600 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gold-600 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gold-600 transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 font-serif tracking-wide text-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/membership" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Membership</Link></li>
              <li><Link to="/directory" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Member Directory</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 font-serif tracking-wide text-gray-100">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Community Guidelines</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 font-serif tracking-wide text-gray-100">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">D No 23-5-339a, Gayathri Nagar 02- M R Palli, Tirupati, Chittoor, Tirupati (Urban), Andhra Pradesh 517501, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <span className="text-gray-400 text-sm">+91 8803562999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <span className="text-gray-400 text-sm">contact@kbn.org</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kammas Business Network (KBN). All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Designed for professional growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
