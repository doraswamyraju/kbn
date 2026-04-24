import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(formData);
      setSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center bg-white p-10 rounded-xl shadow-sm border border-gray-100">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Application Received</h2>
          <p className="text-gray-600">
            Thank you for applying to KBN. Your application is now pending review by our membership committee. We will contact you shortly.
          </p>
          <p className="text-sm text-gray-400 mt-4">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-serif font-bold tracking-tight text-gray-900">
          Apply for Membership
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already a member?{' '}
          <a href="/login" className="font-medium text-gold-600 hover:text-gold-500">
            Sign in
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto text-left sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1">
                  <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm" />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="mt-1">
                  <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm" />
                </div>
              </div>
            </div>

            <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
               <div className="mt-1">
                 <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange}
                   className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm" />
               </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                <div className="mt-1">
                  <input id="company" name="company" type="text" required value={formData.company} onChange={handleChange}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm" />
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry / Category</label>
                <div className="mt-1">
                  <select id="industry" name="industry" required value={formData.industry} onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 bg-white shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm">
                    <option value="">Select Industry</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Finance">Finance & Law</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Create Password</label>
              <div className="mt-1">
                <input id="password" name="password" type="password" required value={formData.password} onChange={handleChange}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm" />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md border border-transparent bg-brand-blue py-3 px-4 text-sm font-bold text-white shadow-sm hover:bg-brand-blue/90 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 disabled:opacity-70 transition-colors"
              >
                {loading ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this form, you agree to the KBN Membership Guidelines and Code of Ethics.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
