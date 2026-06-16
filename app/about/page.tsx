import Header from '../components/header'
import Footer from '../components/footer'
import AboutContent from './about-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Rodeo Apps is building the operating system for rodeo — the first unified technology platform for every discipline.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}
