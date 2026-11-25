import { Latin, Reveal, SectionFrame, fa } from './ui'

const QUESTIONS = [
  'کاربران دیجی‌پی کدام کانال بازپرداخت را واقعاً استفاده می‌کنند؟',
  'کاربران دارای چند بدهی ترجیح می‌دهند یک مبلغ کل پرداخت کنند یا بدهی‌ها را جداگانه مدیریت کنند؟',
  'آیا کاربران می‌فهمند مبلغ پرداختی دلخواه چطور بین بدهی‌ها توزیع می‌شود؟',
  'پرداخت با شبا چقدر باعث تأخیر یا مغایرت در به‌روزرسانی بدهی می‌شود؟',
]

export function ResearchQuestions() {
  return (
    <SectionFrame title="Research questions" latin subtitle="پرسش‌هایی که باید با کاربران دیجی‌پی بررسی شوند">
      <div className="grid flex-1 grid-cols-4 gap-5">
        {QUESTIONS.map((q, i) => (
          <Reveal
            key={i}
            delay={150 + i * 120}
            className="flex flex-col rounded-[28px] bg-[#ffe3ec] p-8"
            style={{ transform: `rotate(${[-1.2, 0.8, -0.6, 1.1][i]}deg)` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[56px] leading-none font-black text-[#e0437a]">؟</span>
              <span className="font-latin text-[14px] font-bold text-[#e0437a]/60">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <p className="mt-auto text-[25px] leading-[1.75] font-bold text-ink">{q}</p>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  )
}

const PATHS = [
  'کاربر چه میزان کنترل روی مبلغ، زمان و محدوده بدهی پرداختی داشته باشد؟',
  'چطور پرداخت داخل اپ، Pay by Link و انتقال بانکی به یک تجربه مالی یکپارچه تبدیل شوند؟',
  'چطور تسویه خودکار، پرداخت تجمیعی، اولویت‌بندی بدهی و بازیابی پرداخت ناموفق را بدون ایجاد برداشت تکراری یا تعارض با قراردادها مدیریت کنیم؟',
]

export function Paths() {
  // Card centers inside the 570px-tall connector column.
  const ys = [85, 285, 485]
  return (
    <SectionFrame title="سه مسیر برای ادامه" tone="dark">
      <div className="flex flex-1 items-center">
        <Reveal delay={100} className="w-[300px] shrink-0 rounded-[28px] bg-white/[0.06] p-7 ring-1 ring-white/10">
          <Latin className="text-[13px] font-semibold tracking-[0.16em] text-white/45 uppercase">Input</Latin>
          <div className="mt-3">
            <Latin className="text-[25px] leading-[1.35] font-extrabold">Literature research &amp; Benchmarks</Latin>
          </div>
          <div className="mt-4 text-[15px] text-white/55">{fa(13)} بنچمارک</div>
        </Reveal>

        <svg viewBox="0 0 180 570" className="h-[570px] w-[180px] shrink-0" fill="none">
          {ys.map((y, i) => (
            <g key={y}>
              <path
                d={`M180 285 C90 285 90 ${y} 8 ${y}`}
                stroke="#7fe7c4"
                strokeWidth="2"
                className="draw"
                style={{ ['--len' as string]: 400, ['--d' as string]: `${350 + i * 160}ms` }}
              />
              <path d={`M16 ${y - 7} L6 ${y} L16 ${y + 7}`} stroke="#7fe7c4" strokeWidth="2" strokeLinecap="round" />
            </g>
          ))}
          <circle cx="176" cy="285" r="5" fill="#7fe7c4" />
        </svg>

        <div className="flex h-[570px] flex-1 flex-col justify-between">
          {PATHS.map((p, i) => (
            <Reveal key={i} delay={600 + i * 160} className="flex h-[170px] items-center gap-7 rounded-[28px] bg-white px-8 text-ink">
              <span className="text-[64px] leading-none font-black text-accent">{fa(i + 1)}</span>
              <p className="text-[22px] leading-[1.75] font-bold">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionFrame>
  )
}
