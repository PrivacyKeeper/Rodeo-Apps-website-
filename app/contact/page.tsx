import Header from '../components/header'
import Footer from '../components/footer'
import ContactContent from './contact-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Rodeo Apps — the operating system for rodeo.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
