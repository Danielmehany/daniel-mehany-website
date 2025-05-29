import Image from 'next/image'
import { Github } from 'lucide-react'

export default function ExamPredictorProject() {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Content */}
        <div className="flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Student Exam Score Predictor</h1>
            <div className="flex items-center gap-4 text-[#999]">
              <span>01/2024 - 02/2024</span>
              <span>•</span>
              <a 
                href="https://github.com/danielmehany/exam-predictor" 
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
              A machine learning model that analyzes student data to predict exam performance with high accuracy. 
              The system processes over 30,000 student records, considering various academic and demographic factors 
              to provide personalized performance predictions and recommendations.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-[300px] flex-shrink-0">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="/predictor.png"
              alt="Student Exam Score Predictor"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 300px"
              priority
            />
          </div>
        </div>
      </div>
    </article>
  )
} 