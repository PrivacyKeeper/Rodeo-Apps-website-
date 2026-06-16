import Header from '../components/header'
import Footer from '../components/footer'
import InvestorContent from './investor-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investor Relations',
  description: 'Investment opportunity in the first unified technology platform for the $34B rodeo industry.',
}

export default function InvestorRelationsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <InvestorContent />
      </main>
      <Footer />
    </>
  )
}
