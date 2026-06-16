'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, MapPin } from 'lucide-react'
import AnimatedSection from '../components/animated-section'
import SectionBadge from '../components/section-badge'
import { toast } from 'sonner'

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData?.name?.trim() || !formData?.email?.trim() || !formData?.message?.trim()) {
      toast.error('Please fill in all required fields.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res?.ok) {
        setSubmitted(true)
        toast.success('Message sent successfully!')
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="py-16 sm:py-24 bg-[#0a1118]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <SectionBadge>Contact</SectionBadge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mt-5 mb-5">
              Get in <span className="text-[#d8b15e]">Touch</span>
            </h1>
            <p className="text-xl text-[#b8c5d3] leading-relaxed">
              Whether you\'re an athlete, organizer, potential partner, or investor — we\'d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#0d1520]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-white tracking-tight mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#d8b15e]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#d8b15e]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#b8c5d3] mb-1">Email</p>
                    <a href="mailto:michael@rodeoapps.pro" className="text-white font-medium hover:text-[#d8b15e] transition-colors">
                      michael@rodeoapps.pro
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#d8b15e]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#d8b15e]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#b8c5d3] mb-1">Location</p>
                    <p className="text-white font-medium">Wyoming, United States</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-xl bg-[#111a24] border border-[#1e2d3d]">
                <p className="text-sm text-[#b8c5d3] leading-relaxed">
                  <strong className="text-white">Response Time:</strong> We typically respond within 24 hours during business days. For urgent matters, please indicate so in your subject line.
                </p>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-xl bg-[#111a24] border border-[#1e2d3d] p-8 sm:p-12 text-center">
                  <CheckCircle className="w-12 h-12 text-[#d8b15e] mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Message Sent</h3>
                  <p className="text-[#b8c5d3]">Thank you for reaching out. We\'ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#b8c5d3] mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData?.name ?? ''}
                        onChange={(e: any) => setFormData({ ...(formData ?? {}), name: e?.target?.value ?? '' })}
                        className="w-full px-4 py-3 rounded-lg bg-[#111a24] border border-[#1e2d3d] text-white placeholder:text-[#b8c5d3]/40 focus:outline-none focus:border-[#d8b15e]/50 focus:ring-1 focus:ring-[#d8b15e]/30 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#b8c5d3] mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData?.email ?? ''}
                        onChange={(e: any) => setFormData({ ...(formData ?? {}), email: e?.target?.value ?? '' })}
                        className="w-full px-4 py-3 rounded-lg bg-[#111a24] border border-[#1e2d3d] text-white placeholder:text-[#b8c5d3]/40 focus:outline-none focus:border-[#d8b15e]/50 focus:ring-1 focus:ring-[#d8b15e]/30 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#b8c5d3] mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData?.subject ?? ''}
                      onChange={(e: any) => setFormData({ ...(formData ?? {}), subject: e?.target?.value ?? '' })}
                      className="w-full px-4 py-3 rounded-lg bg-[#111a24] border border-[#1e2d3d] text-white placeholder:text-[#b8c5d3]/40 focus:outline-none focus:border-[#d8b15e]/50 focus:ring-1 focus:ring-[#d8b15e]/30 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#b8c5d3] mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData?.message ?? ''}
                      onChange={(e: any) => setFormData({ ...(formData ?? {}), message: e?.target?.value ?? '' })}
                      className="w-full px-4 py-3 rounded-lg bg-[#111a24] border border-[#1e2d3d] text-white placeholder:text-[#b8c5d3]/40 focus:outline-none focus:border-[#d8b15e]/50 focus:ring-1 focus:ring-[#d8b15e]/30 transition-colors resize-none"
                      placeholder="Tell us what you're thinking..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#d8b15e] text-[#0a1118] font-semibold text-sm hover:bg-[#c9a24f] transition-colors disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="text-xs text-[#b8c5d3]/50">
                    Your information is stored securely and will only be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
