'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../components/animated-section'
import SectionBadge from '../components/section-badge'
import AppCard from '../components/app-card'

const liveApps = [
  {
    name: 'BarrelConnect',
    description: 'The command center for barrel racing. Live results, event discovery, rider profiles, and performance tracking — all in one place. No more scattered Facebook groups and lost run times. Built with barrel racers, for barrel racers.',
    logoSrc: '/images/barrelconnect-logo.png',
    accentColor: '#85d5ff',
    status: 'live' as const,
    primaryAction: { label: 'Download on App Store', href: 'https://apps.apple.com/us/app/barrelconnect/id6742752498', icon: 'download' as const },
    secondaryAction: { label: 'Visit Website', href: 'https://www.barrelconnect.pro/' },
  },
  {
    name: 'Bullrider.Pro',
    description: 'Purpose-built for the bull riding world. Event coverage, rider rankings, stock contractor data, and community — organized the way bull riders actually need it. From PBR to local jackpots, Bullrider.Pro has it covered.',
    logoSrc: '/images/bullrider-logo.png',
    accentColor: '#e6c97f',
    status: 'live' as const,
    primaryAction: { label: 'Visit Website', href: 'https://www.bullrider.pro/', icon: 'external' as const },
  },
]

const comingSoonApps = [
  { name: 'teamrope.pro', description: 'Header-heeler matching, practice scheduling, jackpot management, and results tracking for team ropers.', accentColor: '#4ade80' },
  { name: 'breakawayroping.pro', description: 'Results tracking, event calendars, and community features built specifically for breakaway ropers at every level.', accentColor: '#f472b6' },
  { name: 'saddlebronc.pro', description: 'Scoring breakdowns, stock data, draw analysis, and training insights for saddle bronc riders.', accentColor: '#38bdf8' },
  { name: 'barebackbronc.pro', description: 'Draw alerts, mark-out analysis, fitness tracking, and community tools for bareback riders.', accentColor: '#f87171' },
  { name: 'bulldogging.pro', description: 'Run analysis, hazing coordination, competition tracking, and stock data for steer wrestlers.', accentColor: '#a78bfa' },
  { name: 'tiedown.pro', description: 'Competition tracking, practice tools, event information, and performance insights for tie-down ropers.', accentColor: '#e6c97f' },
  { name: 'ranchrodeo.pro', description: 'Team management, event coordination, scoring tools, and ranch-to-rodeo connections for ranch rodeo crews.', accentColor: '#fb923c' },
]

export default function AppsContent() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 sm:py-24 bg-[#0a1118]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <SectionBadge>App Portfolio</SectionBadge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mt-5 mb-5">
              Every Discipline. <span className="text-[#d8b15e]">One Ecosystem.</span>
            </h1>
            <p className="text-xl text-[#b8c5d3] leading-relaxed">
              Each app is purpose-built for its discipline — designed alongside the athletes and organizers who live it. Together, they form the most comprehensive technology platform rodeo has ever seen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Apps */}
      <section className="py-16 sm:py-24 bg-[#0d1520]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-10">
            <SectionBadge>Live Now</SectionBadge>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mt-5">
              Featured Apps
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveApps?.map((app: any, i: number) => (
              <AppCard key={app?.name ?? i} {...(app ?? {})} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 sm:py-24 bg-[#0a1118]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-10">
            <SectionBadge>Under Development</SectionBadge>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mt-5 mb-3">
              Apps in Development
            </h2>
            <p className="text-[#b8c5d3] text-lg max-w-2xl leading-relaxed">
              We\'re building the complete rodeo ecosystem — one discipline at a time. Each app gets the same obsessive attention, purpose-built alongside the people who know their event best.
            </p>
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
    </>
  )
}
