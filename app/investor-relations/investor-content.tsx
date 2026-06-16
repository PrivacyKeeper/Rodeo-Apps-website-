'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Users, BarChart3, Globe, Shield, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/animated-section'
import SectionBadge from '../components/section-badge'
import Counter from '../components/counter'

const highlights = [
  { icon: DollarSign, value: 34, suffix: 'B', label: 'Industry Size', desc: 'The rodeo and western lifestyle industry generates $34 billion annually in the United States alone.' },
  { icon: Users, value: 83, suffix: 'M', label: 'U.S. Fans', desc: '83 million Americans identify as rodeo fans — a massive, passionate, and underserved market.' },
  { icon: Globe, value: 8, suffix: '+', label: 'Disciplines', desc: 'Each discipline is a distinct market with unique needs, creating multiple vertical opportunities.' },
  { icon: BarChart3, value: 0, suffix: '', label: 'Competitors', desc: 'There is no other technology company building a unified platform for the rodeo industry. Zero.' },
]

export default function InvestorContent() {
  return (
    <>
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#0a1118]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <SectionBadge>Investor Relations</SectionBadge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mt-5 mb-5">
              A <span className="text-[#d8b15e]">$34 Billion</span> Industry With Zero Technology
            </h1>
            <p className="text-xl text-[#b8c5d3] leading-relaxed">
              The rodeo industry has 83 million fans, generates billions in annual revenue, and has no real technology company serving it. Rodeo Apps is building the operating system for the entire sport.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-16 sm:py-24 bg-[#0d1520]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <SectionBadge>Market Opportunity</SectionBadge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-5">
              The Numbers Speak for <span className="text-[#d8b15e]">Themselves</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights?.map((h: any, i: number) => (
              <AnimatedSection key={h?.label ?? i} delay={i * 0.1}>
                <div className="rounded-xl bg-[#111a24] border border-[#1e2d3d] p-6 text-center h-full">
                  <h.icon className="w-7 h-7 text-[#d8b15e] mx-auto mb-4" />
                  <div className="font-display text-4xl font-bold text-white mb-1">
                    {(h?.value ?? 0) > 0 ? (
                      <Counter end={h?.value ?? 0} suffix={h?.suffix ?? ''} prefix="" />
                    ) : (
                      <span>0</span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-[#d8b15e] mb-3">{h?.label}</div>
                  <p className="text-xs text-[#b8c5d3] leading-relaxed">{h?.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section className="py-16 sm:py-24 bg-[#0a1118]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection className="max-w-3xl">
            <SectionBadge>Investment Thesis</SectionBadge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-5 mb-6">
              Why Rodeo Apps
            </h2>
            <div className="space-y-6">
              {[
                { icon: TrendingUp, title: 'First-Mover Advantage', text: 'No other company is building a unified technology platform for rodeo. We are creating the category and defining the standard. The first platform that gets it right wins the entire market.' },
                { icon: Users, title: 'Massive Underserved Market', text: 'With 83 million fans and a $34B economic footprint, rodeo is one of the largest underserved markets in sports technology. The opportunity is enormous and undeniable.' },
                { icon: Shield, title: 'Multi-App Ecosystem Strategy', text: 'Each discipline is its own market. Each app is its own revenue stream. The platform grows stronger with each addition. Network effects compound as more disciplines come online.' },
                { icon: Globe, title: 'Rodeo-Native Team', text: 'Our team doesn\'t just study the rodeo market — we live in it. That authenticity creates trust, adoption, and word-of-mouth growth that outsiders can\'t replicate.' },
              ]?.map((item: any, i: number) => (
                <div key={item?.title ?? i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#d8b15e]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-[#d8b15e]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-1">{item?.title}</h3>
                    <p className="text-sm text-[#b8c5d3] leading-relaxed">{item?.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#0d1520]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="rounded-2xl bg-[#111a24] border border-[#1e2d3d] p-8 sm:p-12 text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Interested in <span className="text-[#d8b15e]">Learning More</span>?
              </h2>
              <p className="text-[#b8c5d3] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                We welcome conversations with aligned investors who understand the opportunity in bringing technology to a $34 billion industry. Reach out to learn more about the Rodeo Apps vision.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#d8b15e] text-[#0a1118] font-semibold text-sm hover:bg-[#c9a24f] transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
