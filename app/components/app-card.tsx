'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Download, Clock } from 'lucide-react'

interface AppCardProps {
  name: string
  description: string
  logoSrc?: string
  accentColor: string
  status: 'live' | 'coming-soon'
  primaryAction?: {
    label: string
    href: string
    icon: 'download' | 'external'
  }
  secondaryAction?: {
    label: string
    href: string
  }
  index?: number
}

export default function AppCard({
  name,
  description,
  logoSrc,
  accentColor,
  status,
  primaryAction,
  secondaryAction,
  index = 0,
}: AppCardProps) {
  const IconComponent = primaryAction?.icon === 'download' ? Download : ExternalLink

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index ?? 0) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-xl bg-[#111a24] border border-[#1e2d3d] p-6 hover:border-[#d8b15e]/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(216,177,94,0.1)]"
    >
      <div className="flex items-start gap-4">
        {logoSrc ? (
          <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-[#0a1118]">
            <Image
              src={logoSrc}
              alt={`${name ?? 'App'} logo`}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className="w-14 h-14 rounded-xl shrink-0 flex items-center justify-center"
            style={{ backgroundColor: `${accentColor}15` }}
          >
            <Clock className="w-6 h-6" style={{ color: accentColor }} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3
              className="font-display font-bold text-lg tracking-tight"
              style={{ color: accentColor }}
            >
              {name}
            </h3>
            {status === 'coming-soon' && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#d8b15e] bg-[#d8b15e]/10">
                Coming Soon
              </span>
            )}
          </div>
          <p className="text-sm text-[#b8c5d3] leading-relaxed">{description}</p>
        </div>
      </div>

      {(primaryAction || secondaryAction) && (
        <div className="flex items-center gap-3 mt-5">
          {primaryAction && (
            <a
              href={primaryAction?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#d8b15e] text-[#0a1118] text-sm font-semibold hover:bg-[#c9a24f] transition-colors"
            >
              <IconComponent className="w-4 h-4" />
              {primaryAction?.label}
            </a>
          )}
          {secondaryAction && (
            <a
              href={secondaryAction?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#d8b15e]/30 text-[#d8b15e] text-sm font-semibold hover:bg-[#d8b15e]/10 transition-colors"
            >
              {secondaryAction?.label}
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}
