"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface LandingAnimationProps {
  onComplete: () => void
  onSkip: () => void
}

export default function LandingAnimation({ onComplete, onSkip }: LandingAnimationProps) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 500)
    const timer2 = setTimeout(() => setPhase(2), 2000)
    const timer3 = setTimeout(() => setPhase(3), 3500)
    const timer4 = setTimeout(() => onComplete(), 4500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-50">
      <Button
        onClick={onSkip}
        variant="ghost"
        className="absolute top-8 right-8 text-white hover:text-yellow-400 transition-colors"
      >
        Skip Animation
      </Button>

      <div className="text-center">
        {phase === 0 && (
          <div className="animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 transform rotate-45 rounded-lg shadow-2xl animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-red-800 font-bold text-4xl transform rotate-45">
                S
              </div>
            </div>
          </div>
        )}

        {phase === 1 && (
          <div className="animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 relative transform transition-all duration-1000 scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 transform rotate-45 rounded-lg shadow-2xl"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-red-800 font-bold text-4xl transform rotate-45 animate-pulse">
                S
              </div>
            </div>
          </div>
        )}

        {phase === 2 && (
          <div className="animate-fade-in transition-all duration-1000">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-red-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              Utkar<span className="text-red-500">S</span>h
            </h1>
          </div>
        )}

        {phase === 3 && (
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-red-500 to-yellow-400 bg-clip-text text-transparent mb-4">
              Utkar<span className="text-red-500">S</span>h
            </h1>
            <p className="text-xl text-blue-300 animate-fade-in-delay">Portfolio Loading...</p>
          </div>
        )}
      </div>
    </div>
  )
}
