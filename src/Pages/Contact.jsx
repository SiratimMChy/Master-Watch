import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for your message! We will get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Phone, title: "Phone Number", value: "+880-1234-567890" },
    { icon: Mail, title: "Email Address", value: "support@masterwatch.com" },
    { icon: MapPin, title: "Location", value: "Dhaka, Bangladesh" }
  ];

  const hours = [
    { day: "Monday - Friday", time: "10:00 AM - 8:00 PM" },
    { day: "Saturday", time: "10:00 AM - 9:00 PM" },
    { day: "Sunday", time: "Closed", isClosed: true }
  ];

  return (
    <div className="min-h-screen bg-white py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4 border border-blue-100">
            <span className="text-blue-600 font-bold text-sm uppercase">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contact Master Watch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our premium timepieces? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-10">
          {/* Form Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-md">
                <Send className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['name', 'email'].map(field => (
                  <div key={field}>
                    <label className="block text-sm font-bold text-gray-700 mb-2 capitalize">{field} *</label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      placeholder={`Enter your ${field}`}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-gray-50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-gray-50 focus:bg-white h-32 resize-none transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:to-blue-800 text-white flex items-center justify-center gap-3 transition-transform hover:-translate-y-0.5"
              >
                <Send size={20} />Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 md:p-8 text-white shadow-xl space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Contact Information</h3>
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                    <info.icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-blue-100 text-sm font-semibold">{info.title}</p>
                    <p className="text-base sm:text-lg font-bold break-all sm:break-normal">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6"><Clock className="text-blue-600" size={24} /><h4 className="font-bold text-gray-900 text-lg md:text-xl">Showroom Hours</h4></div>
              <div className="space-y-3 text-sm md:text-base text-gray-600">
                {hours.map((h, i) => (
                  <div key={i} className={`flex justify-between items-center ${i !== hours.length - 1 ? 'pb-3 border-b border-gray-100' : ''}`}>
                    <span className="font-semibold">{h.day}</span>
                    <span className={h.isClosed ? "text-blue-600 font-semibold" : ""}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;