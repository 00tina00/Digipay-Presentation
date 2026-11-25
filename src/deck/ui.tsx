import type { CSSProperties, ReactNode } from 'react'
import { ArrowLeft, Sparkles } from 'lucide-react'

const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹'
export const fa = (value: number | string) =>
  String(value).replace(/\d/g, (d) => FA_DIGITS[Number(d)])

export function Reveal({
  delay = 0,
  className = '',
  style,
  children,
}: {
  delay?: number
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  return (
    <div className={`reveal ${className}`} style={{ ...style, ['--d' as string]: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function Latin({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span dir="ltr" className={`font-latin ${className}`}>
      {children}
    </span>
  )
}

export function Code({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      dir="ltr"
      className={`font-latin inline-flex h-6 min-w-8 items-center justify-center rounded-md px-1.5 text-[11px] font-bold tracking-wider ${dark ? 'bg-white/10 text-white/80' : 'bg-ink/[0.06] text-ink/70'}`}
    >
      {children}
    </span>
  )
}

type ChipTone = 'neutral' | 'accent' | 'mint' | 'coral' | 'amber' | 'dark'
const CHIP_TONES: Record<ChipTone, string> = {
  neutral: 'bg-white text-ink ring-1 ring-line',
  accent: 'bg-accent-soft text-accent',
  mint: 'bg-mint-soft text-[#08835b]',
  coral: 'bg-coral-soft text-[#d63a2f]',
  amber: 'bg-amber-soft text-[#a86a00]',
  dark: 'bg-white/10 text-white',
}

export function Chip({
  children,
  tone = 'neutral',
  className = '',
}: {
  children: ReactNode
  tone?: ChipTone
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[14px] font-semibold whitespace-nowrap ${CHIP_TONES[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

/** Body paragraph: the research text is kept verbatim, so it needs a comfortable reading size. */
export function P({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-[19.5px] leading-[2] text-ink/80 ${className}`}>{children}</p>
}

export function Value({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <Reveal delay={delay} className={`flex gap-5 rounded-[26px] bg-ink p-6 text-white ${className}`}>
      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent">
        <Sparkles size={18} strokeWidth={2.2} />
      </div>
      <div>
        <div className="mb-1 text-[14px] font-semibold text-[#7fe7c4]">ارزش برای دیجی‌پی</div>
        <p className="text-[18px] leading-[1.95] text-white/90">{children}</p>
      </div>
    </Reveal>
  )
}

export function Card({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <Reveal delay={delay} className={`rounded-[26px] bg-white p-6 ring-1 ring-line ${className}`}>
      {children}
    </Reveal>
  )
}

export function Footnote({ children, delay = 500 }: { children: ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay} className="mt-auto flex gap-4 border-t border-line pt-4">
      <span className="mt-0.5 shrink-0 rounded-md bg-ink/[0.06] px-2 py-0.5 text-[13px] font-bold">پانویس</span>
      <p className="text-[15px] leading-[1.9] text-muted">{children}</p>
    </Reveal>
  )
}

export function Arrow({ className = '' }: { className?: string }) {
  return (
    <div className={`grid shrink-0 place-items-center text-ink/30 ${className}`}>
      <ArrowLeft size={18} />
    </div>
  )
}

/** A labelled box used inside the explanatory diagrams. */
export function Node({
  children,
  tone = 'paper',
  className = '',
}: {
  children: ReactNode
  tone?: 'paper' | 'accent' | 'ink' | 'mint' | 'coral' | 'amber' | 'white'
  className?: string
}) {
  const tones = {
    paper: 'bg-paper text-ink',
    white: 'bg-white text-ink ring-1 ring-line',
    accent: 'bg-accent text-white',
    ink: 'bg-ink text-white',
    mint: 'bg-mint-soft text-[#08835b]',
    coral: 'bg-coral-soft text-[#d63a2f]',
    amber: 'bg-amber-soft text-[#8a5700]',
  }
  return <div className={`rounded-2xl px-4 py-3 text-[15px] leading-[1.6] font-semibold ${tones[tone]} ${className}`}>{children}</div>
}

export function Phone({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[38px] bg-ink p-[7px] shadow-[0_30px_60px_-28px_rgba(10,16,36,0.5)] ${className}`}>
      <div dir="ltr" className="font-latin relative flex h-full flex-col overflow-hidden rounded-[32px] bg-white text-ink">
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-bold">
          <span>9:41</span>
          <span className="h-[18px] w-16 rounded-full bg-ink" />
          <span className="flex gap-0.5">
            <span className="h-2 w-3 rounded-[2px] bg-ink" />
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

/** Grey bar used where the original screenshots blur out personal amounts. */
export function Blur({ w = 40 }: { w?: number }) {
  return <span className="inline-block h-2.5 rounded-sm bg-ink/10 align-middle" style={{ width: w }} />
}

export const PRODUCTS = [
  { id: 'ebanx', name: 'EBANX', country: 'آمریکای لاتین', code: 'LATAM' },
  { id: 'afterpay', name: 'Afterpay', country: 'استرالیا', code: 'AU' },
  { id: 'affirm', name: 'Affirm', country: 'آمریکا', code: 'US' },
  { id: 'alma', name: 'Alma', country: 'فرانسه', code: 'FR' },
  { id: 'sequra', name: 'seQura', country: 'اسپانیا', code: 'ES' },
  { id: 'kueski', name: 'Kueski', country: 'مکزیک', code: 'MX' },
  { id: 'monzo', name: 'Monzo Flex', country: 'بریتانیا', code: 'GB' },
  { id: 'tabby', name: 'Tabby', country: 'امارات', code: 'AE' },
  { id: 'tamara', name: 'Tamara', country: 'عربستان سعودی', code: 'SA' },
  { id: 'india', name: 'Bajaj Finance · Paytm', country: 'هند', code: 'IN' },
  { id: 'nubank', name: 'Nubank', country: 'برزیل', code: 'BR' },
  { id: 'kredivo', name: 'Kredivo', country: 'اندونزی', code: 'ID' },
  { id: 'fuliza', name: 'Fuliza · M-Pesa', country: 'کنیا', code: 'KE' },
] as const

export type ProductId = (typeof PRODUCTS)[number]['id']

/** Section header used by every benchmark slide: the product name is the page's anchor. */
export function ProductFrame({
  product,
  subtitle,
  part,
  children,
}: {
  product: ProductId
  subtitle?: ReactNode
  part?: [number, number]
  children: ReactNode
}) {
  const i = PRODUCTS.findIndex((p) => p.id === product)
  const p = PRODUCTS[i]
  return (
    <div className="relative h-full w-full overflow-hidden bg-paper text-ink">
      <div className="absolute inset-x-24 top-12 bottom-[80px] flex flex-col">
        <Reveal className="flex items-end justify-between border-b border-line pb-5">
          <div className="flex items-end gap-5">
            <h2 dir="ltr" className="font-latin text-[72px] leading-[0.95] font-extrabold tracking-[-0.03em]">
              {p.name}
            </h2>
            <div className="mb-1.5 flex items-center gap-2">
              <Code>{p.code}</Code>
              <span className="text-[18px] font-semibold text-muted">{p.country}</span>
            </div>
          </div>
          <div className="mb-1.5 flex items-center gap-4">
            {subtitle && <span className="text-[17px] font-semibold text-ink/70">{subtitle}</span>}
            {part && (
              <span className="flex gap-1">
                {Array.from({ length: part[1] }, (_, k) => (
                  <span key={k} className={`h-1.5 w-5 rounded-full ${k < part[0] ? 'bg-accent' : 'bg-line'}`} />
                ))}
              </span>
            )}
            <span className="font-latin rounded-full bg-white px-3 py-1 text-[13px] font-bold text-muted ring-1 ring-line">
              {fa(String(i + 1).padStart(2, '0'))} / {fa(PRODUCTS.length)}
            </span>
          </div>
        </Reveal>
        <div className="mt-7 flex min-h-0 flex-1 flex-col">{children}</div>
      </div>
    </div>
  )
}

/** Header for non-product slides (overview, questions, next steps). */
export function SectionFrame({
  title,
  latin = false,
  subtitle,
  tone = 'light',
  children,
}: {
  title: ReactNode
  latin?: boolean
  subtitle?: ReactNode
  tone?: 'light' | 'dark'
  children: ReactNode
}) {
  const dark = tone === 'dark'
  return (
    <div className={`relative h-full w-full overflow-hidden ${dark ? 'bg-ink text-white' : 'bg-paper text-ink'}`}>
      <div className="absolute inset-x-24 top-12 bottom-[80px] flex flex-col">
        <Reveal className={`flex items-end justify-between border-b pb-5 ${dark ? 'border-white/10' : 'border-line'}`}>
          <h2
            dir={latin ? 'ltr' : undefined}
            className={`${latin ? 'font-latin tracking-[-0.03em]' : ''} text-[64px] leading-[1.1] font-extrabold`}
          >
            {title}
          </h2>
          {subtitle && (
            <span className={`mb-1.5 text-[17px] font-semibold ${dark ? 'text-white/55' : 'text-ink/60'}`}>{subtitle}</span>
          )}
        </Reveal>
        <div className="mt-7 flex min-h-0 flex-1 flex-col">{children}</div>
      </div>
    </div>
  )
}
