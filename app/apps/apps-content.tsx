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

const siteLiveApps = [
  {
    name: 'breakawayroping.pro',
    description: 'The fastest-growing event in rodeo, and it has never had a system of record. Entries, calf draws, divisional payouts, a practice log that stays out of official results, and the equipment check that stops you losing a run to your string.',
    accentColor: '#f472b6',
    href: 'https://www.breakawayroping.pro/',
  },
  {
    name: 'teamrope.pro',
    description: 'Built around the number, because the number is the whole sport. Partner matching that respects your classification, entry eligibility checked before you pay, steer history, and both ends of every run.',
    accentColor: '#4ade80',
    href: 'https://www.teamrope.pro/',
  },
  {
    name: 'tiedown.pro',
    description: 'You were not just an 8.4. Every run split into segments — catch, dismount, down the rope, flank, tie — plus how much of it belonged to your horse, and a six-second hold timer that mimics the judge.',
    accentColor: '#e2701f',
    href: 'https://www.tiedown.pro/',
  },
  {
    name: 'saddlebronc.pro',
    description: 'Half your score belongs to an animal you do not own. Draw analysis with every recorded trip on the horse you drew, buck patterns, buck-off rates, and contractor tools for the people who own the data.',
    accentColor: '#c9a227',
    href: 'https://www.saddlebronc.pro/',
  },
  {
    name: 'barebackbronc.pro',
    description: 'Rigging spec checking before a chute judge does it for you, wither profiles and rigging fit notes on every horse, and the injury and conditioning tracking that decides how long a career lasts.',
    accentColor: '#cc2936',
    href: 'https://www.barebackbronc.pro/',
  },
  {
    name: 'bulldogging.pro',
    description: 'The only event where you cannot compete alone. Hazer boards and credit, horse sharing and mount money on a ledger you both trust, steer history, and run segments.',
    accentColor: '#d9a441',
    href: 'https://www.bulldogging.pro/',
  },
  {
    name: 'ranchrodeo.pro',
    description: 'Placings become points the moment the last team runs, with live standings straight to the arena screen. Card builder, team rosters with a role per event, and working cowboy card tracking.',
    accentColor: '#b3402f',
    href: 'https://www.ranchrodeo.pro/',
  },
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
            <SectionBadge>Websites Live</SectionBadge>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mt-5 mb-3">
              Sites Live Now. Apps In Build.
            </h2>
            <p className="text-[#b8c5d3] text-lg max-w-2xl leading-relaxed">
              Every discipline below has a live website today — rules references, event formats, and everything the community needs to know about what is coming. The apps themselves are in build behind them, each one purpose-built alongside the people who know their event best.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteLiveApps?.map((app: any, i: number) => (
              <AppCard
                key={app?.name ?? i}
                name={app?.name ?? ''}
                description={app?.description ?? ''}
                accentColor={app?.accentColor ?? '#d8b15e'}
                status="live"
                appStatusLabel="App Coming Soon"
                primaryAction={{ label: 'Visit Site →', href: app?.href ?? '#', icon: 'external' as const }}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
