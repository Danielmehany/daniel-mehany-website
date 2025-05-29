import Image from 'next/image'
import { Github } from 'lucide-react'

export default function BestBuddProject() {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Content */}
        <div className="flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">BestBudd</h1>
            <div className="flex items-center gap-4 text-[#999]">
              <span>03/2024 - Present</span>
              <span>•</span>
              <a 
                href="https://github.com/danielmehany/bestbudd" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </header>

          <div className="prose prose-invert">
            <p className="text-[#999] text-lg">
              An innovative educational platform using Next.js and Express.js, featuring a modern UI for both teachers 
              and students. The platform provides real-time progress tracking, interactive course content, and 
              automated grading capabilities.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-[300px] flex-shrink-0">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="/bestbudd.png"
              alt="BestBudd Project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
              priority
            />
          </div>
        </div>
      </div>
    </article>
  )
} 