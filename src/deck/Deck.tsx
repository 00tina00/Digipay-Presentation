import { ChevronLeft, ChevronRight, LayoutGrid, Maximize2, Minimize2, X } from 'lucide-react'
import type { ReactNode } from 'react'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { SLIDES } from './slides'
import { fa } from './ui'

const W = 1600
const H = 900

function readHash() {
  const id = window.location.hash.slice(1)
  const i = SLIDES.findIndex((s) => s.id === id)
  return i >= 0 ? i : 0
}

export default function Deck() {
  const [index, setIndex] = useState(readHash)
  const [overview, setOverview] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [scale, setScale] = useState(1)
  const viewport = useRef<HTMLDivElement>(null)

  const go = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(SLIDES.length - 1, i)))
  }, [])

  useEffect(() => {
    window.history.replaceState(null, '', `#${SLIDES[index].id}`)
  }, [index])

  useLayoutEffect(() => {
    const el = viewport.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect
      setScale(Math.min(width / W, height / H))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const onFs = () => setFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFs)
    return () => document.removeEventListener('fullscreenchange', onFs)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen()
    else document.documentElement.requestFullscreen?.()
  }, [])

  useEffect(() => {
    // RTL deck: left/down moves forward, right/up moves back. PageUp/PageDown cover presenter clickers.
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const next = ['ArrowLeft', 'ArrowDown', 'PageDown', ' ', 'Enter']
      const prev = ['ArrowRight', 'ArrowUp', 'PageUp', 'Backspace']
      if (overview) {
        if (e.key === 'Escape' || e.key.toLowerCase() === 'g') setOverview(false)
        return
      }
      if (next.includes(e.key)) {
        e.preventDefault()
        setIndex((i) => Math.min(SLIDES.length - 1, i + 1))
      } else if (prev.includes(e.key)) {
        e.preventDefault()
        setIndex((i) => Math.max(0, i - 1))
      } else if (e.key === 'Home') go(0)
      else if (e.key === 'End') go(SLIDES.length - 1)
      else if (e.key.toLowerCase() === 'g') setOverview(true)
      else if (e.key.toLowerCase() === 'f') toggleFullscreen()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, overview, toggleFullscreen])

  const slide = SLIDES[index]
  const Current = slide.Component

  return (
    <div dir="rtl" className="flex h-full flex-col bg-[#05081a] font-sans text-white select-none">
      <div ref={viewport} className="relative min-h-0 flex-1">
        <div
          className="absolute top-1/2 left-1/2 overflow-hidden rounded-[6px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          style={{ width: W, height: H, transform: `translate(-50%, -50%) scale(${scale})` }}
        >
          <div key={slide.id} className="h-full w-full">
            <Current />
          </div>
          {index > 0 && (
            <div
              className={`pointer-events-none absolute inset-x-24 bottom-9 flex items-center justify-between text-[13px] font-semibold ${slide.dark ? 'text-white/35' : 'text-ink/35'}`}
            >
              <span dir="ltr" className="font-latin tracking-[0.14em] uppercase">
                Digipay · Installment research
              </span>
              <span className="font-latin">
                {fa(String(index + 1).padStart(2, '0'))} / {fa(SLIDES.length)}
              </span>
            </div>
          )}
          {/* Click zones: start side (right) goes back, end side (left) goes forward. */}
          <button aria-label="اسلاید قبلی" className="absolute inset-y-0 right-0 w-[8%] cursor-e-resize" onClick={() => go(index - 1)} />
          <button aria-label="اسلاید بعدی" className="absolute inset-y-0 left-0 w-[8%] cursor-w-resize" onClick={() => go(index + 1)} />
        </div>
      </div>

      {!fullscreen && (
        <div className="flex h-16 shrink-0 items-center gap-5 px-6">
          <div className="flex items-center gap-1">
            <IconBtn label="اسلاید قبلی" onClick={() => go(index - 1)} disabled={index === 0}>
              <ChevronRight size={18} />
            </IconBtn>
            <IconBtn label="اسلاید بعدی" onClick={() => go(index + 1)} disabled={index === SLIDES.length - 1}>
              <ChevronLeft size={18} />
            </IconBtn>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-3">
              <span className="font-latin text-[13px] font-bold text-white/90">
                {fa(index + 1)} <span className="text-white/35">/ {fa(SLIDES.length)}</span>
              </span>
              <span className="truncate text-[13px] text-white/50">{slide.label}</span>
            </div>
            <div className="mt-2 flex gap-1">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  aria-label={s.label}
                  onClick={() => go(i)}
                  className={`h-1 flex-1 rounded-full transition-colors ${i <= index ? 'bg-[#7fe7c4]' : 'bg-white/12 hover:bg-white/25'}`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <IconBtn label="نمای کلی (G)" onClick={() => setOverview(true)}>
              <LayoutGrid size={17} />
            </IconBtn>
            <IconBtn label="تمام‌صفحه (F)" onClick={toggleFullscreen}>
              {fullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
            </IconBtn>
          </div>
        </div>
      )}

      {overview && <Overview current={index} onPick={(i) => (go(i), setOverview(false))} onClose={() => setOverview(false)} />}
    </div>
  )
}

function IconBtn({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string
  onClick: () => void
  disabled?: boolean
  children: ReactNode
}) {
  return (
    <button
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className="grid size-9 place-items-center rounded-lg text-white/70 transition hover:bg-white/10 hover:text-white disabled:opacity-25 disabled:hover:bg-transparent"
    >
      {children}
    </button>
  )
}

function Overview({ current, onPick, onClose }: { current: number; onPick: (i: number) => void; onClose: () => void }) {
  const thumbW = 300
  const s = thumbW / W
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-[#05081a]/95 p-10 backdrop-blur">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between pb-8">
        <div className="text-[18px] font-bold">همه اسلایدها</div>
        <button onClick={onClose} aria-label="بستن" className="grid size-9 place-items-center rounded-lg text-white/70 hover:bg-white/10">
          <X size={18} />
        </button>
      </div>
      <div className="mx-auto grid max-w-[1380px] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {SLIDES.map((sl, i) => {
          const C = sl.Component
          return (
            <button key={sl.id} onClick={() => onPick(i)} className="group text-right">
              <div
                className={`static-slide relative overflow-hidden rounded-lg ring-2 transition ${i === current ? 'ring-[#7fe7c4]' : 'ring-transparent group-hover:ring-white/30'}`}
                style={{ width: thumbW, height: H * s }}
              >
                <div className="pointer-events-none origin-top-right" style={{ width: W, height: H, transform: `scale(${s})`, position: 'absolute', top: 0, right: 0 }}>
                  <C />
                </div>
              </div>
              <div className="mt-2.5 flex gap-2 text-[13px]">
                <span className="font-latin font-bold text-white/40">{fa(i + 1)}</span>
                <span className="text-white/75">{sl.label}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
