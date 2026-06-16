export default function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] text-[#d8b15e] bg-[#d8b15e]/10 border border-[#d8b15e]/20">
      {children}
    </span>
  )
}
