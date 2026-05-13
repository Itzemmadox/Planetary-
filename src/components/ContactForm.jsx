/**
 * ContactForm.jsx
 * A minimalist contact section using glassmorphic surfaces.
 * Features custom client-side validation and a sleek feedback state.
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    city: '',
    phone: '',
    message: '',
    contactMethod: '',
    hearAbout: [],
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.city) newErrors.city = 'City selection is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    try {
      // Mock endpoint submission
      await fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      // Reset form
    } catch (err) {
      // Still show success for demo purposes if endpoint is mock
      setStatus('success');
    }
  };

  const handleCheckbox = (value) => {
    const current = [...formData.hearAbout];
    if (current.includes(value)) {
      setFormData({ ...formData, hearAbout: current.filter(i => i !== value) });
    } else {
      setFormData({ ...formData, hearAbout: [...current, value] });
    }
  };

  return (
    <section id="contact" className="py-24 px-8 bg-white text-black border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Have Questions About Planetary Science?</h2>
          <p className="text-gray-600">
            Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?
            Reach out and we'll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold flex items-center gap-1">Full Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Full name"
                className={cn("w-full px-4 py-3 border rounded-md outline-none transition-all", errors.fullName ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500")}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
              {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-bold flex items-center gap-1">Email<span className="text-red-500">*</span></label>
              <input
                type="email"
                placeholder="example@example.com"
                className={cn("w-full px-4 py-3 border rounded-md outline-none transition-all", errors.email ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500")}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* City */}
            <div className="space-y-2 text-left">
              <label className="text-sm font-bold flex items-center gap-1">City<span className="text-red-500">*</span></label>
              <select
                className={cn("w-full px-4 py-3 border rounded-md outline-none appearance-none bg-no-repeat bg-[right_1rem_center] transition-all", errors.city ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500")}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m19 9-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundSize: '1.2em' }}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              >
                <option value="">Choose city</option>
                <option value="New York">New York</option>
                <option value="London">London</option>
                <option value="Lagos">Lagos</option>
                <option value="Tokyo">Tokyo</option>
              </select>
              {errors.city && <p className="text-xs text-red-500">{errors.city}</p>}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="text-sm font-bold flex items-center gap-1">Phone Number<span className="text-red-500">*</span></label>
              <input
                type="tel"
                placeholder="Please enter a valid phone number."
                className={cn("w-full px-4 py-3 border rounded-md outline-none transition-all", errors.phone ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500")}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-bold flex items-center gap-1">Message<span className="text-red-500">*</span></label>
            <textarea
              rows={4}
              maxLength={100}
              placeholder="Enter your message"
              className={cn("w-full px-4 py-3 border rounded-md outline-none transition-all resize-none", errors.message ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500")}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <div className="flex justify-between items-center text-xs text-gray-400">
               {errors.message ? <p className="text-red-500">{errors.message}</p> : <span />}
               <p>{formData.message.length} / 100 characters</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
            {/* Contact Method */}
            <div className="space-y-4">
              <p className="text-sm font-bold">How should we contact you?</p>
              <div className="flex gap-6">
                {['Phone', 'Email', 'Both'].map((method) => (
                  <label key={method} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Hear About Us */}
            <div className="space-y-4">
              <p className="text-sm font-bold">How did you hear about us?</p>
              <div className="flex flex-wrap gap-6">
                {['Friend', 'TS Academy', 'Others'].map((source) => (
                  <label key={source} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      onChange={() => handleCheckbox(source)}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">{source}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-fit px-12 py-4 bg-blue-700 text-white font-bold rounded-md flex items-center justify-center gap-4 hover:bg-blue-800 transition-all disabled:opacity-50"
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit'}
              <ArrowRight className="w-4 h-4" />
            </button>
            
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-green-600 font-bold text-center sm:text-left"
              >
                Form submitted successfully! We'll get back to you soon.
              </motion.p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
