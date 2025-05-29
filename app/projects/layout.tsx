import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <div className="container max-w-5xl mx-auto px-6 py-8">
        <Link 
          href="/#projects"
          className="inline-flex items-center gap-2 text-[#999] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        {children}
      </div>
    </div>
  )
} 