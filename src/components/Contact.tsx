import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  Loader2,
  Copy,
  Check,
  ArrowRight
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "96c3c376-21d5-4ec5-9582-d18dd33e0b3b",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        console.error("Web3Forms Error:", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-transparent border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Let's Work Together
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Interested in analytics, business intelligence, digital solutions, or simply want to connect professionally? I'd be happy to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct CTAs & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 3 Explicit Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                href={PROFILE_DATA.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 shadow-sm transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PROFILE_DATA.contact.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 shadow-sm transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Direct Information Cards */}
            <div className="space-y-3 pt-2">
              
              {/* Email */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-blue-100/70 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Email
                    </span>
                    <a
                      href={`mailto:${PROFILE_DATA.contact.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      {PROFILE_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-sky-100/70 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Telephone
                  </span>
                  <a
                    href={`tel:${PROFILE_DATA.contact.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                  >
                    {PROFILE_DATA.contact.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-emerald-100/70 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    {PROFILE_DATA.contact.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Note */}
            <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-xs text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-blue-700 dark:text-blue-400">Professional Note:</span> Actively open to Business Analyst, Data Analyst, BI, and process improvement opportunities.
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slateDark-850 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Direct Message
              </h3>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Thank You! Your message has been received.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    I appreciate you reaching out and will respond promptly via email.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-900 rounded-xl"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs sm:text-sm mb-4">
                      Something went wrong while sending your message. Please try again or email me directly.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.name
                            ? 'border-rose-400 dark:border-rose-500 ring-1 ring-rose-400'
                            : 'border-slate-200 dark:border-slate-700'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="form-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.email
                            ? 'border-rose-400 dark:border-rose-500 ring-1 ring-rose-400'
                            : 'border-slate-200 dark:border-slate-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Analytics / Power BI Project Discussion"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.subject
                          ? 'border-rose-400 dark:border-rose-500 ring-1 ring-rose-400'
                          : 'border-slate-200 dark:border-slate-700'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, requirements, or inquiries..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.message
                          ? 'border-rose-400 dark:border-rose-500 ring-1 ring-rose-400'
                          : 'border-slate-200 dark:border-slate-700'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-70 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
