import Link from 'next/link'

const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Contact', href: '/contact' },
  { label: 'Investor Relations', href: '/investor-relations' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070d14]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#b8c5d3]/60">
            © 2026 Rodeo Apps, LLC. All rights reserved. A subsidiary of Apps 1, LLC.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            {footerLinks?.map((link: any) => (
              <Link
                key={link?.href}
                href={link?.href ?? '/'}
                className="text-xs text-[#b8c5d3]/60 hover:text-[#d8b15e] transition-colors"
              >
                {link?.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
