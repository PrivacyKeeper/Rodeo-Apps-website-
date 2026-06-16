import Header from '../components/header'
import Footer from '../components/footer'
import AppsContent from './apps-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apps',
  description: 'Explore the Rodeo Apps portfolio — purpose-built tools for barrel racing, bull riding, team roping, and every discipline in rodeo.',
}

export default function AppsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <AppsContent />
      </main>
      <Footer />
    </>
  )
}
