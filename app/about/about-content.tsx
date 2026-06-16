'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Heart, Lightbulb, Mountain, Users, Compass } from 'lucide-react'
import AnimatedSection from '../components/animated-section'
import SectionBadge from '../components/section-badge'

const values = [
  { icon: Target, title: 'Purpose-Built', desc: 'Every app is designed for a specific discipline by people who understand that discipline. No one-size-fits-all. No compromise.' },
  { icon: Heart, title: 'Community-First', desc: 'We build with the community, not just for it. Real input from real athletes, organizers, and fans shapes every feature.' },
  { icon: Lightbulb, title: 'Western Work Ethic', desc: 'We build things that work. Practical, reliable tools that solve real problems — not vanity features for investor decks.' },
  { icon: Mountain, title: 'Long-Term Vision', desc: 'We\'re not chasing trends. We\'re building the infrastructure rodeo will run on for the next 20 years.' },
  { icon: Users, title: 'Every Discipline', desc: 'From barrel racing to bull riding, team roping to steer wrestling — every event deserves world-class technology.' },
  { icon: Compass, title: 'Rodeo-Native', desc: 'Our team lives in the rodeo world. We don\'t need focus groups to understand the culture — we are the culture.' },
]

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ranch-hero.jpg"
            alt="Wyoming ranch landscape"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1118] via-[#0a1118]/80 to-[#0a1118]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <SectionBadge>About Rodeo Apps</SectionBadge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mt-5 mb-5">
              Building the <span className="text-[#d8b15e]">Home</span> of Rodeo
            </h1>
            <p className="text-xl text-[#b8c5d3] leading-relaxed">
              Rodeo Apps is the first technology company dedicated entirely to the rodeo industry. We\'re building the unified platform that connects every discipline, every competitor, and every fan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 sm:py-28 bg-[#0d1520]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <SectionBadge>Our Story</SectionBadge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-5 mb-5">
                The Opportunity No One Else Saw
              </h2>
              <div className="space-y-4 text-[#b8c5d3] leading-relaxed">
                <p>
                  Rodeo is a $34 billion industry. It has 83 million fans in the U.S. alone. Professional rodeo athletes travel hundreds of thousands of miles per year, competing at hundreds of events. And the technology serving them? Facebook groups and paper entry forms.
                </p>
                <p>
                  We saw a massive industry with zero real technology infrastructure — and athletes who deserved better. Not a flashy app that looks good in a pitch deck. Real tools. The kind that actually solve problems people face every single weekend.
                </p>
                <p>
                  Rodeo Apps was founded as a subsidiary of Apps 1, LLC with a simple but ambitious mission: build the operating system for rodeo. Not one app — an entire ecosystem. Discipline-specific tools that work independently but grow stronger together.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/ranch-hero.jpg"
                  alt="The Triple Bar M Ranch — the spirit behind Rodeo Apps"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118]/60 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <span className="text-[10px] text-white/50 tracking-wider uppercase">The Triple Bar M Ranch, Wyoming</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-20 sm:py-28 bg-[#0a1118]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection className="max-w-3xl mb-16">
            <SectionBadge>The Vision</SectionBadge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-5 mb-5">
              The Operating System for <span className="text-[#d8b15e]">Rodeo</span>
            </h2>
            <div className="space-y-4 text-[#b8c5d3] leading-relaxed">
              <p>
                We\'re not building one app. We\'re building the platform — the connected ecosystem that every discipline plugs into. Think of it like this: each sport within rodeo gets its own purpose-built app, designed for the unique needs of that discipline. But underneath, they share infrastructure, data, and community features that make the whole greater than the sum of its parts.
              </p>
              <p>
                When a barrel racer opens BarrelConnect, she sees her world. When a bull rider opens Bullrider.Pro, he sees his. But they\'re all part of the same ecosystem — the same operating system. Results flow across disciplines. Events are discoverable. The rodeo community is finally connected.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-[#0d1520]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <SectionBadge>How We Build</SectionBadge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-5">
              Our Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values?.map((v: any, i: number) => (
              <AnimatedSection key={v?.title ?? i} delay={i * 0.08}>
                <div className="rounded-xl bg-[#111a24] border border-[#1e2d3d] p-6 h-full hover:border-[#d8b15e]/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#d8b15e]/10 flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-[#d8b15e]" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{v?.title}</h3>
                  <p className="text-sm text-[#b8c5d3] leading-relaxed">{v?.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Company */}
      <section className="py-20 sm:py-28 bg-[#0a1118]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="rounded-2xl bg-[#111a24] border border-[#1e2d3d] p-8 sm:p-12">
              <SectionBadge>Parent Company</SectionBadge>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-5 mb-4">
                A Subsidiary of Apps 1, LLC
              </h2>
              <p className="text-[#b8c5d3] text-lg leading-relaxed max-w-3xl mb-6">
                Rodeo Apps operates as a subsidiary of Apps 1, LLC — a technology holding company focused on building practical, community-driven applications. Apps 1, LLC provides the operational infrastructure, development resources, and strategic direction that allows Rodeo Apps to focus entirely on serving the rodeo industry.
              </p>
              <a
                href="https://www.apps1llc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#d8b15e]/30 text-[#d8b15e] font-semibold text-sm hover:bg-[#d8b15e]/10 transition-colors"
              >
                Visit Apps 1, LLC
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
