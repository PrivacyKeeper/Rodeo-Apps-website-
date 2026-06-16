'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Smartphone, Target, Users, TrendingUp, Shield, Zap } from 'lucide-react'
import AnimatedSection from './animated-section'
import SectionBadge from './section-badge'
import AppCard from './app-card'
import Counter from './counter'

const featuredApps = [
  {
    name: 'BarrelConnect',
    description: 'The command center for barrel racing. Live results, event discovery, rider profiles, and performance tracking — all in one place. No more scattered Facebook groups and lost run times.',
    logoSrc: '/images/barrelconnect-logo.png',
    accentColor: '#85d5ff',
    status: 'live' as const,
    primaryAction: { label: 'App Store', href: 'https://apps.apple.com/us/app/barrelconnect/id6742752498', icon: 'download' as const },
    secondaryAction: { label: 'Visit Website', href: 'https://www.barrelconnect.pro/' },
  },
  {
    name: 'Bullrider.Pro',
    description: 'Purpose-built for the bull riding world. Event coverage, rider rankings, stock contractor data, and community — organized the way bull riders actually need it.',
    logoSrc: '/images/bullrider-logo.png',
    accentColor: '#e6c97f',
    status: 'live' as const,
    primaryAction: { label: 'Visit Website', href: 'https://www.bullrider.pro/', icon: 'external' as const },
  },
]

const comingSoonApps = [
  { name: 'Team Roping', description: 'Header-heeler matching, practice scheduling, and jackpot management for the fastest-growing discipline in rodeo.', accentColor: '#4ade80' },
  { name: 'Breakaway', description: 'Results tracking, event calendars, and community features built specifically for breakaway ropers at every level.', accentColor: '#f472b6' },
  { name: 'Ranch Rodeo', description: 'Team management, event coordination, and scoring tools for ranch rodeo crews across the country.', accentColor: '#fb923c' },
  { name: 'Steer Wrestling', description: 'Run analysis, hazing coordination, and competition tracking for bulldoggers who take their craft seriously.', accentColor: '#a78bfa' },
  { name: 'Saddle Bronc', description: 'Scoring breakdowns, stock data, and training insights for saddle bronc riders chasing that perfect ride.', accentColor: '#38bdf8' },
  { name: 'Bareback', description: 'Draw-out alerts, mark-out analysis, and community tools for bareback riders who refuse to be an afterthought.', accentColor: '#f87171' },
]

export default function HomeContent() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 -top-20"
        >
          <Image
            src="/images/ranch-hero.jpg"
            alt="The Triple Bar M Ranch, Wyoming — aerial view of green valleys and mountain peaks at sunset"
            fill
            priority
            className="object-cover"
            quality={90}
          />
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118] via-[#0a1118]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1118]/70 via-transparent to-transparent" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-24"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <span className="inline-block px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] text-[#d8b15e] bg-[#d8b15e]/15 border border-[#d8b15e]/25 mb-6">
                The Operating System for Rodeo
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5 text-balance">
                While the rest of rodeo is stuck in the <span className="text-[#d8b15e]">past</span>, your competitors are moving to the future.
              </h1>
              <p className="text-lg sm:text-xl text-[#b8c5d3] leading-relaxed mb-8 max-w-xl">
                Rodeo Apps is the first unified technology platform built for every discipline. Purpose-built tools that replace the chaos of group texts, lost results, and disconnected communities.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/apps"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#d8b15e] text-[#0a1118] font-semibold text-sm hover:bg-[#c9a24f] transition-all duration-200 shadow-[0_0_20px_-3px_rgba(216,177,94,0.3)]"
                >
                  Explore Our Apps
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/investor-relations"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-200"
                >
                  Investor Relations
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Location Caption */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
            <span className="text-[10px] text-white/40 font-medium tracking-wider uppercase">
              The Triple Bar M Ranch, Wyoming
            </span>
          </div>
        </motion.div>
      </section>

      {/* ===== PAIN POINT SECTION ===== */}
      <section className="py-20 sm:py-28 bg-[#0a1118]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge>The Problem</SectionBadge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-5 mb-5">
              Rodeo Has a <span className="text-[#d8b15e]">Technology Problem</span>
            </h2>
            <p className="text-[#b8c5d3] text-lg leading-relaxed">
              Every other sport has its own digital ecosystem. Rodeo? It has Facebook groups, paper entries, and results that vanish after the weekend. The athletes are world-class — the technology serving them is not.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Smartphone, title: 'Scattered Information', desc: 'Results on one site, entries on another, schedules in a Facebook post from 3 weeks ago. Athletes waste hours just trying to find what they need.' },
              { icon: Target, title: 'No Performance Data', desc: 'Barrel racers have no easy way to track runs over time. Bull riders can\'t analyze stock patterns. Other sports have had this for a decade.' },
              { icon: Users, title: 'Disconnected Communities', desc: 'Every discipline is siloed. Group chats fill up and die. There\'s no single place where the rodeo community actually lives online.' },
              { icon: Shield, title: 'Zero Business Tools', desc: 'Producers run events on spreadsheets. Trainers book clients through DMs. Farriers and haulers have no way to get found. The pros behind the sport have been completely ignored by tech.' },
            ]?.map((item: any, i: number) => (
              <AnimatedSection key={item?.title ?? i} delay={i * 0.1}>
                <div className="rounded-xl bg-[#111a24] border border-[#1e2d3d] p-6 h-full hover:border-[#d8b15e]/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#d8b15e]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#d8b15e]" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{item?.title}</h3>
                  <p className="text-sm text-[#b8c5d3] leading-relaxed">{item?.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED APPS ===== */}
      <section className="py-20 sm:py-28 bg-[#0d1520]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-12">
            <SectionBadge>Portfolio</SectionBadge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-5 mb-4">
              Featured Apps
            </h2>
            <p className="text-[#b8c5d3] text-lg max-w-2xl leading-relaxed">
              Each app is purpose-built for its discipline — designed with the people who live and breathe that event, not by someone who watched a rodeo once on TV.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredApps?.map((app: any, i: number) => (
              <AppCard key={app?.name ?? i} {...(app ?? {})} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMING SOON APPS ===== */}
      <section className="py-20 sm:py-28 bg-[#0a1118]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-12">
            <SectionBadge>Under Development</SectionBadge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-5 mb-4">
              Apps in Development
            </h2>
            <p className="text-[#b8c5d3] text-lg max-w-2xl leading-relaxed">
              We\'re building the complete rodeo ecosystem — one discipline at a time. Each app gets the same obsessive attention to detail, built alongside the athletes and organizers who know their event best.
            </p>
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-[#d8b15e] text-[#0a1118] font-semibold text-sm hover:bg-[#c9a24f] transition-colors"
            >
              View All Apps
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonApps?.map((app: any, i: number) => (
              <AppCard
                key={app?.name ?? i}
                name={app?.name ?? ''}
                description={app?.description ?? ''}
                accentColor={app?.accentColor ?? '#d8b15e'}
                status="coming-soon"
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS / SOCIAL PROOF ===== */}
      <section className="py-20 sm:py-28 bg-[#0d1520]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <SectionBadge>By The Numbers</SectionBadge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-5">
              Building <span className="text-[#d8b15e]">Momentum</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 8, suffix: '+', label: 'Rodeo Disciplines', icon: Target },
              { value: 2, suffix: '', label: 'Live Apps', icon: Zap },
              { value: 6, suffix: '', label: 'Apps in Development', icon: TrendingUp },
              { value: 1, suffix: '', label: 'Unified Platform', icon: Shield },
            ]?.map((stat: any, i: number) => (
              <AnimatedSection key={stat?.label ?? i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl bg-[#111a24] border border-[#1e2d3d]">
                  <stat.icon className="w-6 h-6 text-[#d8b15e] mx-auto mb-3" />
                  <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-1">
                    <Counter end={stat?.value ?? 0} suffix={stat?.suffix ?? ''} />
                  </div>
                  <p className="text-sm text-[#b8c5d3]">{stat?.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT / VISION ===== */}
      <section className="py-20 sm:py-28 bg-[#0a1118]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <SectionBadge>Our Vision</SectionBadge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-5 mb-5">
                Building the <span className="text-[#d8b15e]">Home</span> of Rodeo
              </h2>
              <div className="space-y-4 text-[#b8c5d3] leading-relaxed">
                <p>
                  Rodeo is a $34 billion industry with no real technology company serving it. Think about that. Every major sport has its platforms, its data, its connected ecosystem. Rodeo has been left behind — until now.
                </p>
                <p>
                  Rodeo Apps isn't just another app company. We're building the operating system — the unified platform that connects every discipline, every competitor, every event, and every fan under one roof.
                </p>
                <p>
                  We start with what athletes need today, and we build toward the connected future rodeo deserves. Each app is a piece of the puzzle. Together, they create something no one has attempted before: the digital home of rodeo.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-[#d8b15e] text-[#0a1118] font-semibold text-sm hover:bg-[#c9a24f] transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/ranch-hero.jpg"
                  alt="Wyoming ranch landscape representing the western heritage of rodeo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118]/60 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 sm:py-28 bg-[#0d1520]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="rounded-2xl bg-[#111a24] border border-[#1e2d3d] p-8 sm:p-12 text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                The Future of Rodeo is <span className="text-[#d8b15e]">Being Built Now</span>
              </h2>
              <p className="text-[#b8c5d3] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Whether you're an athlete looking for better tools, an organizer wanting to modernize, or an investor who sees the opportunity in a $34B underserved market — there's a place for you here.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/apps"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#d8b15e] text-[#0a1118] font-semibold text-sm hover:bg-[#c9a24f] transition-colors"
                >
                  Explore Our Apps
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/investor-relations"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#d8b15e]/30 text-[#d8b15e] font-semibold text-sm hover:bg-[#d8b15e]/10 transition-colors"
                >
                  Investor Information
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
