import Header from '../components/header'
import Footer from '../components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Rodeo Apps, LLC.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 sm:py-24 bg-[#0a1118]">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] text-[#d8b15e] bg-[#d8b15e]/10 border border-[#d8b15e]/20 mb-5">
              Legal
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-invert prose-sm max-w-none space-y-6 text-[#b8c5d3] leading-relaxed">
              <p className="text-lg"><strong className="text-white">Effective Date:</strong> January 1, 2026</p>
              <p>Rodeo Apps, LLC ("we," "us," or "our"), a subsidiary of Apps 1, LLC, operates the rodeoapps.pro website and associated applications. This Privacy Policy explains how we collect, use, and protect your information.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-white">Personal Information:</strong> Name, email address, and other information you voluntarily provide through our contact forms or when creating an account.</li>
                <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website and applications, including pages visited, features used, and time spent.</li>
                <li><strong className="text-white">Device Information:</strong> Browser type, operating system, device type, and IP address.</li>
              </ul>

              <h2 className="text-xl font-display font-bold text-white mt-8">How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To send relevant updates about our products and services</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To protect against unauthorized access and ensure security</li>
              </ul>

              <h2 className="text-xl font-display font-bold text-white mt-8">Data Protection</h2>
              <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">Third-Party Services</h2>
              <p>Our applications may integrate with third-party services. Each service has its own privacy policy, and we encourage you to review them. We do not sell your personal information to third parties.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us at <a href="mailto:michael@rodeoapps.pro" className="text-[#d8b15e] hover:underline">michael@rodeoapps.pro</a>.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised effective date.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:michael@rodeoapps.pro" className="text-[#d8b15e] hover:underline">michael@rodeoapps.pro</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
