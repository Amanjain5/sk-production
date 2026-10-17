import React, { useEffect, useRef, useState } from 'react'

// Rolling-digit counter preloader: 0 → 90 (1.6s), → 100 (0.4s), hold 1s, fade 0.5s.
function Preloader({ onReveal }: { onReveal: () => void }) {
  const [value, setValue] = useState(0)
  const [fading, setFading] = useState(false)
  const [gone, setGone] = useState(false)
  const revealed = useRef(false)

  useEffect(() => {
    document.documentElement.classList.add('is-loading')
    const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
    let raf = 0
    const start = performance.now()
    const timers: number[] = []
    let finished = false
    const run = () => {
      if (finished) return
      const t = performance.now() - start
      let v: number
      if (t < 1600) v = 90 * easeInOut(t / 1600)
      else v = 90 + 10 * easeInOut(Math.min(1, (t - 1600) / 400))
      setValue(v)
      if (t >= 2000) {
        finished = true
        window.clearInterval(raf)
        document.documentElement.classList.remove('is-loading')
        timers.push(window.setTimeout(() => {
          setFading(true)
          if (!revealed.current) { revealed.current = true; onReveal() }
        }, 1000))
        timers.push(window.setTimeout(() => setGone(true), 1500))
      }
    }
    raf = window.setInterval(run, 16)
    return () => {
      window.clearInterval(raf)
      timers.forEach(clearTimeout)
      document.documentElement.classList.remove('is-loading')
    }
  }, [onReveal])

  if (gone) return null
  const hundreds = value >= 99.999 ? 1 : 0
  const tens = Math.floor(value / 10)
  const units = Math.floor(value % 10)

  const roller = (pos: number) => (
    <span className="preloader_mask">
      <span className="preloader_roller" style={{ transform: `translateY(${-pos * 1.1}em)`, transition: 'transform 0.25s cubic-bezier(0.215,0.61,0.355,1)' }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((d, i) => <span key={i}>{d}</span>)}
      </span>
    </span>
  )

  return (
    <div className="preloader" style={{ opacity: fading ? 0 : 1 }}>
      <div className="preloader_bar" style={{ transform: `scaleY(${value / 100})` }} />
      <div className="preloader_numbers">
        <span className="preloader_mask" style={{ width: hundreds ? '0.6em' : 0, transition: 'width 0.4s ease' }}>
          <span className="preloader_roller" style={{ transform: `translateY(${hundreds ? 0 : 1.2}em)`, transition: 'transform 0.4s cubic-bezier(0.45,0,0.55,1)' }}>
            <span>1</span>
          </span>
        </span>
        {roller(Math.min(tens, 10))}
        {roller(hundreds ? 10 : units)}
        <span className="preloader_pct">%</span>
      </div>
    </div>
  )
}

export default Preloader
