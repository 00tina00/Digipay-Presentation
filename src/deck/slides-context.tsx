import { Banknote, Landmark, Wallet } from 'lucide-react'
import cover from '../assets/cover.jpg'
import { Code, Latin, PRODUCTS, Reveal, SectionFrame, fa } from './ui'

export function Cover() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-ink text-white">
      {/* Mirrored so the stairs climb toward the left (forward in RTL) and leave the top-right open. */}
      <img src={cover} alt="" className="absolute inset-0 h-full w-full -scale-x-100 object-cover" />
      <div className="absolute inset-0 bg-linear-to-b from-ink/50 via-transparent to-ink/40" />

      <div className="absolute top-[150px] right-24 max-w-[940px]">
        <Reveal delay={150}>
          <Latin className="text-[14px] font-semibold tracking-[0.22em] text-[#7fe7c4] uppercase">
            Installment research · Literature research &amp; Benchmarks
          </Latin>
        </Reveal>
        <Reveal delay={280}>
          <h1 className="mt-6 text-[80px] leading-[1.25] font-black">روش‌های پرداخت‌ بدهی در دنیا</h1>
        </Reveal>
        <Reveal delay={420}>
          <p className="mt-5 max-w-[640px] text-[24px] leading-[1.8] text-white/70">
            بنچمارک روش‌های بازپرداخت بدهی و اقساط در {fa(13)} محصول و سرویس مالی، و ارزش هر الگو برای دیجی‌پی.
          </p>
        </Reveal>
      </div>

      <Reveal className="absolute bottom-20 left-24 flex items-center gap-3" delay={600}>
        <div className="grid size-10 place-items-center rounded-xl bg-white text-ink">
          <span className="font-latin text-[18px] font-extrabold">d</span>
        </div>
        <div dir="ltr" className="font-latin leading-tight">
          <div className="text-[17px] font-bold">Digipay</div>
          <div className="text-[12px] font-semibold tracking-[0.18em] text-white/50 uppercase">Product research</div>
        </div>
      </Reveal>
    </div>
  )
}

export function Agenda() {
  return (
    <SectionFrame title="فهرست" subtitle={<Latin>Literature research &amp; Benchmarks</Latin>}>
      <div className="grid flex-1 grid-cols-[1fr_2.2fr] gap-10">
        <div className="flex flex-col gap-4">
          {[
            { n: '۰۱', t: 'Overview', d: 'نمای کلی روش‌ها و مدل‌های پرداخت' },
            { n: '۰۲', t: 'Benchmarks', d: `${fa(13)} محصول، به تفکیک کشور` },
            { n: '۰۳', t: 'Research questions', d: 'پرسش‌های باز پژوهش' },
            { n: '۰۴', t: 'سه مسیر برای ادامه', d: 'جمع‌بندی و گام بعد', fa: true },
          ].map((s, i) => (
            <Reveal
              key={s.n}
              delay={100 + i * 80}
              className={`rounded-[24px] p-6 ${i === 1 ? 'bg-ink text-white' : 'bg-white ring-1 ring-line'}`}
            >
              <div className={`font-latin text-[13px] font-bold ${i === 1 ? 'text-[#7fe7c4]' : 'text-accent'}`}>{s.n}</div>
              <div className="mt-1 text-[24px] font-extrabold">{s.fa ? s.t : <Latin>{s.t}</Latin>}</div>
              <div className={`mt-0.5 text-[15px] ${i === 1 ? 'text-white/55' : 'text-muted'}`}>{s.d}</div>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-3 content-start gap-3">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.id}
              delay={200 + i * 45}
              className="flex items-center justify-between rounded-[20px] bg-white px-5 py-[18px] ring-1 ring-line"
            >
              <div className="flex items-center gap-3">
                <span className="font-latin w-6 text-[13px] font-bold text-ink/30">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <Latin className="block text-[18px] font-bold">{p.name}</Latin>
                  <span className="text-[14px] text-muted">{p.country}</span>
                </div>
              </div>
              <Code>{p.code}</Code>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionFrame>
  )
}

const TABLE: [string, string, string, string, string][] = [
  ['آمریکا', 'US', 'Affirm', 'Debit Card، انتقال بانکی ACH، موجودی Affirm Money در شرایط مربوط', 'دستی و AutoPay'],
  ['فرانسه', 'FR', 'Alma', 'برداشت از کارت ثبت‌شده، صفحه پرداخت امن', 'خودکار با امکان پرداخت زودتر'],
  ['بریتانیا', 'GB', 'Monzo Flex', 'حساب Monzo و مدیریت بازپرداخت در اپ', 'پرداخت دوره‌ای و پرداخت زودتر'],
  ['عربستان', 'SA', 'Tamara', 'کارت بانکی ثبت‌شده، از جمله Mada', 'برداشت خودکار و تلاش مجدد'],
  ['مکزیک', 'MX', 'Kueski', 'Debit Card، انتقال بانکی، پرداخت نقدی در OXXO / Paynet', 'دستی و پرداخت خودکار'],
  ['برزیل', 'BR', 'Nubank', 'Pix، Boleto، موجودی حساب و Debit Automático برای صورت‌حساب کارت', 'دستی و خودکار'],
  ['هند', 'IN', 'Bajaj Finance', 'UPI، Net Banking، Debit Card، Auto-debit Mandate برای حساب‌های واجد شرایط', 'دستی و خودکار'],
  ['هند', 'IN', 'Paytm Personal Loan', 'eNACH، UPI، Net Banking، Debit Card', 'برداشت خودکار و پرداخت دستی جایگزین'],
  ['کنیا', 'KE', 'Fuliza / M-Pesa', 'موجودی M-Pesa', 'برداشت خودکار از وجوه ورودی'],
]

export function OverviewTable() {
  return (
    <SectionFrame title="Overview" latin subtitle="روش‌های بازپرداخت مستند و مدل پرداخت در هر کشور">
      <Reveal delay={120} className="overflow-hidden rounded-[26px] bg-white ring-1 ring-line">
        <table className="w-full table-fixed border-collapse text-right">
          <thead>
            <tr className="bg-ink text-white">
              <th className="w-[190px] px-6 py-4 text-[15px] font-semibold">کشور</th>
              <th className="w-[240px] px-4 py-4 text-[15px] font-semibold">محصول نمونه</th>
              <th className="px-4 py-4 text-[15px] font-semibold">روش‌های بازپرداخت مستند</th>
              <th className="w-[330px] px-6 py-4 text-[15px] font-semibold">مدل پرداخت</th>
            </tr>
          </thead>
          <tbody>
            {TABLE.map(([country, code, product, methods, model], i) => (
              <tr key={product} className="reveal border-b border-line last:border-0" style={{ ['--d' as string]: `${200 + i * 50}ms` }}>
                <td className="px-6 py-[13px]">
                  <div className="flex items-center gap-2.5">
                    <Code>{code}</Code>
                    <span className="text-[16px] font-semibold">{country}</span>
                  </div>
                </td>
                <td className="px-4">
                  <Latin className="text-[17px] font-bold">{product}</Latin>
                </td>
                <td className="px-4 text-[16px] leading-[1.7] text-ink/80">{methods}</td>
                <td className="px-6">
                  <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-[14.5px] font-semibold text-accent">
                    {model}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </SectionFrame>
  )
}

export function OverviewNote() {
  const notes = [
    {
      code: 'MX',
      country: 'مکزیک',
      icon: Banknote,
      label: 'پرداخت فیزیکی + دیجیتال',
      text: 'در مکزیک، امکان پرداخت فیزیکی و نقدی کنار پرداخت دیجیتال وجود دارد؛ یعنی بدهی لزوماً فقط داخل اپ وصول نمی‌شود.',
    },
    {
      code: 'IN',
      country: 'هند',
      icon: Landmark,
      label: 'UPI + eNACH',
      text: 'در هند، زیرساخت‌هایی مثل UPI و eNACH اجازه می‌دهند پرداخت دستی و برداشت دوره‌ای از حساب بانکی در کنار هم قرار بگیرند.',
    },
    {
      code: 'KE',
      country: 'کنیا',
      icon: Wallet,
      label: 'وصول از موجودی ورودی',
      text: 'در کنیا، مدل Fuliza به وصول از موجودی ورودی کیف پول وابسته است؛ بنابراین پرداخت لزوماً منتظر اقدام مستقل کاربر در سررسید نمی‌ماند.',
    },
  ]
  return (
    <SectionFrame title="Overview" latin subtitle="سه الگوی متفاوت در بازارهای نوظهور">
      <div className="grid flex-1 grid-cols-3 gap-6">
        {notes.map((n, i) => {
          const Icon = n.icon
          return (
            <Reveal
              key={n.code}
              delay={150 + i * 130}
              className={`flex flex-col rounded-[28px] p-8 ${i === 2 ? 'bg-ink text-white' : 'bg-white ring-1 ring-line'}`}
            >
              <div className="flex items-center justify-between">
                <div className={`grid size-14 place-items-center rounded-2xl ${i === 2 ? 'bg-[#7fe7c4] text-ink' : 'bg-accent-soft text-accent'}`}>
                  <Icon size={26} />
                </div>
                <Code dark={i === 2}>{n.code}</Code>
              </div>
              <div className="mt-auto">
                <div className="text-[46px] leading-none font-black">{n.country}</div>
                <div className={`mt-3 text-[16px] font-semibold ${i === 2 ? 'text-[#7fe7c4]' : 'text-accent'}`}>{n.label}</div>
                <p className={`mt-5 text-[20px] leading-[2] ${i === 2 ? 'text-white/80' : 'text-ink/80'}`}>{n.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </SectionFrame>
  )
}
