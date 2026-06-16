import Header from '../components/header'
import Footer from '../components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Rodeo Apps, LLC.',
}

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <div className="prose prose-invert prose-sm max-w-none space-y-6 text-[#b8c5d3] leading-relaxed">
              <p className="text-lg"><strong className="text-white">Effective Date:</strong> January 1, 2026</p>
              <p>These Terms of Service ("Terms") govern your use of the rodeoapps.pro website and associated applications operated by Rodeo Apps, LLC ("we," "us," or "our"), a subsidiary of Apps 1, LLC.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">Acceptance of Terms</h2>
              <p>By accessing or using our website and applications, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">Use of Services</h2>
              <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the services in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
                <li>Collect or harvest information from other users without consent</li>
                <li>Use the services to transmit harmful, offensive, or unauthorized content</li>
              </ul>

              <h2 className="text-xl font-display font-bold text-white mt-8">Intellectual Property</h2>
              <p>All content, features, and functionality of our services — including but not limited to text, graphics, logos, icons, images, software, and the compilation thereof — are the exclusive property of Rodeo Apps, LLC and Apps 1, LLC, and are protected by copyright, trademark, and other intellectual property laws.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">User Accounts</h2>
              <p>If you create an account with any of our applications, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">Disclaimer of Warranties</h2>
              <p>Our services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or secure.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Rodeo Apps, LLC and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page. Your continued use of our services after any changes constitutes acceptance of the revised Terms.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law provisions.</p>

              <h2 className="text-xl font-display font-bold text-white mt-8">Contact Us</h2>
              <p>If you have questions about these Terms, please contact us at <a href="mailto:michael@rodeoapps.pro" className="text-[#d8b15e] hover:underline">michael@rodeoapps.pro</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
