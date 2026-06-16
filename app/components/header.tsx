'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Apps', href: '/apps' },
  { label: 'About', href: '/about' },
  { label: 'Investor Relations', href: '/investor-relations' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a1118]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#0a1118]/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/images/rodeo-apps-logo.png"
                alt="Rodeo Apps logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
              Rodeo Apps
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks?.map((link: any) => {
              const isActive = pathname === link?.href
              return (
                <Link
                  key={link?.href}
                  href={link?.href ?? '/'}
                  className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#0a1118] bg-[#d8b15e]'
                      : 'text-[#b8c5d3] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link?.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#b8c5d3] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a1118]/98 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks?.map((link: any) => {
                const isActive = pathname === link?.href
                return (
                  <Link
                    key={link?.href}
                    href={link?.href ?? '/'}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-[#0a1118] bg-[#d8b15e]'
                        : 'text-[#b8c5d3] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link?.label}
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
