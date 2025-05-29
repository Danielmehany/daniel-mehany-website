import Image from 'next/image'
import { Github } from 'lucide-react'

export default function ImuStm32Project() {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Content */}
        <div className="flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">IMU STM32 Board</h1>
            <div className="flex items-center gap-4 text-[#999]">
              <span>04/2024</span>
              <span>•</span>
              <a 
                href="https://github.com/danielmehany/imu-stm32" 
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
              Custom 4-layer PCB with STM32 microcontroller and MPU-6050 accelerometer for motion tracking. 
              The board features high-performance processing capabilities and precise motion detection in a 
              compact form factor.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-[300px] flex-shrink-0">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="/stm32.png"
              alt="IMU STM32 Board"
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 300px"
              priority
            />
          </div>
        </div>
      </div>
    </article>
  )
} 