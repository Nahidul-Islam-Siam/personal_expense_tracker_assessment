/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export type StepItem = {
  id?: number
  title: string
  description: string
  icon: React.ReactNode | string
  iconAlt?: string
}

type Accent = 'emerald' | 'teal' | 'green' | 'sky' | 'rose' | 'slate'

const COLORS: Record<Accent, { ring: string; dotBg: string; stroke: string; dash: string }> = {
  emerald: { ring: 'ring-emerald-200', dotBg: 'bg-emerald-600', stroke: 'text-emerald-300', dash: 'text-emerald-300' },
  teal: { ring: 'ring-teal-200', dotBg: 'bg-teal-600', stroke: 'text-teal-300', dash: 'text-teal-300' },
  green: { ring: 'ring-green-200', dotBg: 'bg-green-600', stroke: 'text-green-300', dash: 'text-green-300' },
  sky: { ring: 'ring-sky-200', dotBg: 'bg-sky-600', stroke: 'text-sky-300', dash: 'text-sky-300' },
  rose: { ring: 'ring-rose-200', dotBg: 'bg-rose-600', stroke: 'text-rose-300', dash: 'text-rose-300' },
  slate: { ring: 'ring-slate-200', dotBg: 'bg-slate-600', stroke: 'text-slate-300', dash: 'text-slate-300' },
}

function StepIcon({
  icon,
  alt,
  accent = 'emerald',
}: {
  icon: React.ReactNode | string
  alt?: string
  accent?: Accent
}) {
  const color = COLORS[accent]
  return (
    <div
      className={cn(
        'relative mx-auto h-24 w-24 rounded-full bg-white shadow-sm flex items-center justify-center ring-1',
        color.ring
      )}
    >
      {typeof icon === 'string' ? (
        <Image src={icon || '/placeholder.svg'} alt={alt ?? 'Step icon'} width={40} height={40} className="h-10 w-10" loading="lazy" />
      ) : (
        <div className="h-10 w-10 text-foreground [&>svg]:h-full [&>svg]:w-full">{icon}</div>
      )}
    </div>
  )
}

function useCurvePath(
  containerRef: React.RefObject<HTMLDivElement>,
  nodeRefs: React.RefObject<HTMLDivElement>[],
  amplitude = 28
) {
  const [d, setD] = React.useState<string>('')
  const [size, setSize] = React.useState<{ width: number; height: number }>({ width: 0, height: 0 })

  const recompute = React.useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const crect = container.getBoundingClientRect()
    const points: { x: number; y: number }[] = []

    for (const ref of nodeRefs) {
      const el = ref.current
      if (!el) continue
      const r = el.getBoundingClientRect()
      points.push({
        x: r.left - crect.left + r.width / 2,
        y: r.top - crect.top + r.height / 2,
      })
    }

    if (points.length < 2) {
      setD('')
      return
    }

    let path = `M ${Math.round(points[0].x)} ${Math.round(points[0].y)}`
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i]
      const p1 = points[i + 1]
      const dx = p1.x - p0.x
      const sign = i % 2 === 0 ? -1 : 1
      const a = amplitude * sign

      const c1x = p0.x + dx / 3
      const c1y = p0.y + a
      const c2x = p0.x + (2 * dx) / 3
      const c2y = p1.y + a

      path += ` C ${Math.round(c1x)} ${Math.round(c1y)}, ${Math.round(c2x)} ${Math.round(c2y)}, ${Math.round(p1.x)} ${Math.round(p1.y)}`
    }

    setD(path)
    setSize({ width: crect.width, height: crect.height })
  }, [amplitude, containerRef, nodeRefs])

  React.useEffect(() => {
    recompute()
    const ro = new ResizeObserver(() => recompute())
    if (containerRef.current) ro.observe(containerRef.current)
    window.addEventListener('resize', recompute)
    const id = window.setInterval(recompute, 200)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', recompute)
      window.clearInterval(id)
    }
  }, [recompute, containerRef])

  return { d, size }
}

export function StepsProcess({
  title = 'How the Process Works',
  steps = [],
  className,
  accent = 'emerald',
  amplitude = 28,
  dashPattern = '6 10',
}: {
  title?: string
  steps?: StepItem[]
  className?: string
  accent?: Accent
  amplitude?: number
  dashPattern?: string
}) {
  const color = COLORS[accent]
  const normalized = steps.map((s, i) => ({ id: i + 1, ...s }))

  const containerRef = React.useRef<HTMLDivElement>(null)
  const iconRefs = React.useMemo(
    () => normalized.map(() => React.createRef<HTMLDivElement>()),
    [normalized.length]
  )
  const { d, size } = useCurvePath(containerRef, iconRefs, amplitude)

  return (
    <section className={cn('w-full', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14 rounded-2xl bg-[#F1F8F4]">
        <header className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171B26] tracking-tight ">
            {title}
          </h2>
        </header>

        {/* Desktop / Tablet */}
        <div ref={containerRef} className="relative hidden md:block">
          {d && (
            <svg
              className={cn('pointer-events-none absolute inset-0 z-0', color.stroke)}
              width={size.width}
              height={size.height}
              viewBox={`0 0 ${Math.max(1, size.width)} ${Math.max(1, size.height)}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d={d}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={dashPattern}
              />
            </svg>
          )}

          <ol
            className="relative z-10 grid gap-6 md:gap-8"
            style={{ gridTemplateColumns: `repeat(${normalized.length}, minmax(0, 1fr))` }}
          >
            {normalized?.map((step, idx) => (
              <li key={idx} className="flex flex-col items-center text-center">
                <div className="relative" ref={iconRefs[idx]}>
                  <StepIcon icon={step.icon} alt={step.iconAlt} accent={accent} />
                  {/* Number badge (removed leading 0) */}
                  <div
                    className={cn(
                      'absolute -bottom-3 -right-3 h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium shadow-sm text-white',
                      color.dotBg
                    )}
                    aria-hidden="true"
                  >
                    {step.id}
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <h3 className="text-base md:text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[28ch] mx-auto">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <ol className="relative">
            <div aria-hidden="true" className={cn('absolute left-6 top-0 bottom-0 border-l-2 border-dashed border-emerald-300')} />
            <div className="space-y-8">
              {normalized.map((step, idx) => (
                <li key={idx} className="relative flex gap-4">
                  <div className="relative shrink-0">
                    <StepIcon icon={step.icon} alt={step.iconAlt} accent={accent} />
                    <div
                      className={cn(
                        'absolute -bottom-3 -right-3 h-7 w-7 rounded-full flex items-center justify-center text-xs font-medium shadow-sm text-white',
                        color.dotBg
                      )}
                      aria-hidden="true"
                    >
                      {step.id}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#171B26]">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{step.description}</p>
                  </div>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default function StepsProcessDemo() {
  return <StepsProcess />
}
