import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    // Simulate API call
    try {
      // In a real app, you would use:
      // await fetch('https://example.com/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(formData)
      // });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-glow">Contact Us</h2>
            <p className="text-gray-400">
              Have questions about the cosmos? Reach out to our team of explorers.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-xl"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">Message Transmitted!</h3>
                <p className="text-gray-400 mb-8">
                  Your signal has been received. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-blue-400 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form key="form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-black/50 border ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    } rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all`}
                    placeholder="Major Tom"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-2 ml-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-black/50 border ${
                      errors.email ? 'border-red-500' : 'border-white/10'
                    } rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all`}
                    placeholder="tom@groundcontrol.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-2 ml-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Your Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-black/50 border ${
                      errors.message ? 'border-red-500' : 'border-white/10'
                    } rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none`}
                    placeholder="Tell us about your discovery..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-2 ml-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
