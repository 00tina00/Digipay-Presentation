import {
  AlertCircle,
  CalendarClock,
  Check,
  CreditCard,
  Hash,
  Headphones,
  Landmark,
  Link2,
  ListOrdered,
  Mail,
  ReceiptText,
  RefreshCw,
  User,
  Wallet,
  X,
  Zap,
} from 'lucide-react'
import { Arrow, Card, Chip, Footnote, Latin, Node, P, Phone, ProductFrame, Reveal, Value, fa } from './ui'

/* ================================================================ EBANX */

const EBANX_TABLE: [string, string][] = [
  ['برزیل', 'EBANX نرخ‌های اقساط و سود رو طبق قرارداد مرچنت مدیریت می‌کنه'],
  ['مکزیک', 'مشابه برزیل'],
  ['کلمبیا', 'بانک صادرکننده کارت یا Acquirer'],
  ['شیلی', 'بانک یا Acquirer'],
  ['پرو', 'بانک یا Acquirer'],
  ['آرژانتین', 'بانک یا Acquirer'],
  ['اروگوئه', 'بانک یا Acquirer'],
]

export function EbanxCard() {
  return (
    <ProductFrame product="ebanx" subtitle={<Latin>EBANX — Installments</Latin>} part={[1, 2]}>
      <div className="grid flex-1 grid-cols-[1.05fr_1fr] gap-10">
        <div className="flex flex-col">
          <Reveal delay={100}>
            <P className="text-[22px] text-ink">
              مدل پرداخت اقساط در آمریکای لاتین در سیستم اقساط کارت اعتباری خودش، کاربر هنگام{' '}
              <b>Checkout</b> تعداد اقساط رو انتخاب می‌کنه، اما مدیریت برداشت‌های ماهانه بر عهده{' '}
              <b>بانک صادرکننده کارت</b> است.
            </P>
          </Reveal>

          <Reveal delay={220} className="mt-7 flex items-stretch gap-3">
            <Node tone="white" className="flex-1">
              <div className="text-[13px] text-muted">فروشگاه</div>
              <Latin className="text-[18px] font-bold">Checkout</Latin>
              <div className="mt-1 text-[14px] text-muted">انتخاب تعداد اقساط</div>
            </Node>
            <Arrow />
            <Node tone="accent" className="flex-1">
              <div className="text-[13px] text-white/70">بانک صادرکننده کارت</div>
              <div className="text-[18px] font-bold">برداشت ماهانه</div>
              <div className="mt-1 text-[14px] text-white/70">از حساب کارت اعتباری</div>
            </Node>
            <Arrow />
            <Node tone="mint" className="flex-1">
              <div className="text-[13px] opacity-70">کاربر</div>
              <div className="text-[18px] font-bold">بدون بازگشت به فروشگاه</div>
              <div className="mt-1 text-[14px] opacity-70">برای هر قسط</div>
            </Node>
          </Reveal>

          <Card delay={340} className="mt-auto">
            <P>
              در این مدل، کاربر لازم نیست برای هر قسط مجدداً به وب‌سایت فروشگاه برگرده. بانک، اقساط ماهانه رو از طریق
              حساب کارت اعتباری مدیریت می‌کنه. البته این درباره <Latin className="font-bold">Card Installments</Latin>{' '}
              است.
            </P>
          </Card>
        </div>

        <Reveal delay={200} className="self-start overflow-hidden rounded-[26px] bg-white ring-1 ring-line">
          <table className="w-full border-collapse text-right">
            <thead>
              <tr className="bg-ink text-white">
                <th className="w-[150px] px-6 py-4 text-[15px] font-semibold">کشور</th>
                <th className="px-5 py-4 text-[15px] font-semibold">مدیریت اقساط و سود</th>
              </tr>
            </thead>
            <tbody>
              {EBANX_TABLE.map(([c, v], i) => (
                <tr key={c} className="border-b border-line last:border-0">
                  <td className="px-6 py-[15px] text-[16px] font-bold">{c}</td>
                  <td className={`px-5 text-[16px] leading-[1.7] ${i < 2 ? 'font-semibold text-accent' : 'text-ink/75'}`}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </ProductFrame>
  )
}

export function EbanxPix() {
  const steps = [
    'کاربر هنگام خرید برنامه چهارقسطی رو انتخاب می‌کنه.',
    'قسط اول رو با Pix پرداخت می‌کنه.',
    'سه قسط باقی‌مانده هر دو هفته یک بار به‌صورت خودکار دریافت می‌شن.',
    'وضعیت پرداخت به‌صورت سیستمی ثبت و به‌روزرسانی می‌شه.',
  ]
  const schedule = [
    { t: 'هنگام خرید', d: 'Pix', first: true },
    { t: '+ ۲ هفته', d: 'خودکار' },
    { t: '+ ۴ هفته', d: 'خودکار' },
    { t: '+ ۶ هفته', d: 'خودکار' },
  ]
  return (
    <ProductFrame product="ebanx" subtitle={<Latin>Pix 4x Pagaleve</Latin>} part={[2, 2]}>
      <Reveal delay={100}>
        <P className="text-[24px] font-semibold text-ink">
          در مستندات رسمی EBANX یک مدل به اسم <Latin className="font-extrabold text-accent">Pix 4x Pagaleve</Latin>{' '}
          معرفی شده:
        </P>
      </Reveal>

      <Reveal delay={200} className="mt-6 rounded-[28px] bg-ink px-12 py-8 text-white">
        <div className="relative">
          <div className="absolute inset-x-[12.5%] top-[30px] h-[2px] bg-white/15">
            <div className="grow-x h-full bg-[#7fe7c4]" style={{ ['--d' as string]: '500ms' }} />
          </div>
          <div className="relative grid grid-cols-4">
            {schedule.map((s, i) => (
              <Reveal key={i} delay={400 + i * 150} className="flex flex-col items-center text-center">
                <div
                  className={`grid size-[60px] place-items-center rounded-full text-[22px] font-black ${s.first ? 'bg-[#7fe7c4] text-ink' : 'bg-ink-2 ring-2 ring-white/20'}`}
                >
                  {fa(i + 1)}
                </div>
                <div className="mt-3 text-[18px] font-bold">{s.t}</div>
                <div className="mt-0.5 flex items-center gap-1.5 text-[14px] text-white/55">
                  {s.first ? <Zap size={13} /> : <RefreshCw size={13} />}
                  <span>{s.d}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid flex-1 grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <Card key={i} delay={900 + i * 100} className="flex flex-col">
            <span className="font-latin grid size-9 place-items-center rounded-xl bg-accent-soft text-[14px] font-bold text-accent">
              {fa(i + 1)}
            </span>
            <P className="mt-auto text-[19px] text-ink">{s}</P>
          </Card>
        ))}
      </div>
    </ProductFrame>
  )
}

/* ============================================================= Afterpay */

function AfterpayOrders() {
  return (
    <Phone className="h-[560px] w-[270px]">
      <div className="px-5 pt-3 text-center text-[13px] font-semibold">Your orders</div>
      <div className="mt-5 text-center text-[32px] font-extrabold">$38.28</div>
      <div className="text-center text-[11px] text-muted">Total you owe</div>
      <div className="mt-4 grid grid-cols-3 gap-1 px-4 text-center">
        {[
          ['$12.76', 'Due in 15 days'],
          ['$25.52', 'Due in 30 days'],
          ['$38.28', 'Due in 60 days'],
        ].map(([a, d]) => (
          <div key={d}>
            <div className="text-[13px] font-bold">{a}</div>
            <div className="text-[9.5px] text-muted">{d}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-1.5 px-4">
        <span className="rounded-full bg-ink/10 px-2.5 py-1 text-[10px] font-semibold">Upcoming payments</span>
        <span className="rounded-full bg-paper px-2.5 py-1 text-[10px] font-semibold text-muted">Active orders</span>
      </div>
      <div className="mt-3 flex-1 space-y-3 px-4">
        {['2 of 4 • Sun, Mar 22', '3 of 4 • Sun, Apr 5', '4 of 4 • Sun, Apr 19'].map((d) => (
          <div key={d} className="flex items-center gap-2.5">
            <span className="grid size-7 place-items-center rounded-full bg-ink text-[11px] font-bold text-white">a</span>
            <div className="flex-1">
              <div className="text-[12px] font-bold">Amazon</div>
              <div className="text-[10px] text-muted">{d}</div>
            </div>
            <div className="text-[9.5px] text-muted">Pending Amount</div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="rounded-full bg-[#5ad16a] py-2.5 text-center text-[12px] font-bold text-white">Make a payment</div>
      </div>
    </Phone>
  )
}

function AfterpaySchedule() {
  const rows = [
    { d: 'Sun, Mar 8', s: '1 of 4 • Paid', a: '$12.50', done: true },
    { d: 'Sun, Mar 22', s: '2 of 4 • Paid', a: '$12.76', done: true },
    { d: 'Next payment: Sun, Apr 5', s: '3 of 4', a: '$4.36' },
    { d: 'Sun, Apr 19', s: 'Final payment • Cancelled', a: '$0.00', muted: true },
  ]
  return (
    <Phone className="h-[560px] w-[270px]">
      <div className="px-5 pt-4">
        <div className="text-[16px] font-extrabold">Payment schedule</div>
        <div className="text-[10.5px] text-muted">Includes $0.45 finance fee</div>
      </div>
      <div className="mt-4 px-5">
        {rows.map((r, i) => (
          <div key={i} className="relative flex gap-3 pb-4">
            {i < rows.length - 1 && <span className="absolute top-3 left-[4px] h-full w-px bg-ink/30" />}
            <span className={`relative mt-1 size-[9px] shrink-0 rounded-full ${r.done ? 'bg-ink' : 'border border-ink bg-white'} ${r.muted ? 'opacity-30' : ''}`} />
            <div className={`flex-1 ${r.muted ? 'opacity-50' : ''}`}>
              <div className="flex justify-between text-[11.5px] font-bold">
                <span>{r.d}</span>
                <span>{r.a}</span>
              </div>
              <div className="text-[10px] text-muted">{r.s}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-5 border-t border-line pt-4">
        <div className="text-[14px] font-extrabold">Manage payments</div>
        <div className="mt-3 flex items-center gap-2.5">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#1a1f71] text-[7px] font-bold text-white">VISA</span>
          <div className="flex-1 text-[11px] font-semibold">Payment method</div>
        </div>
        <div className="mt-3 flex items-center gap-2.5">
          <RefreshCw size={14} />
          <div className="flex-1">
            <div className="text-[11px] font-semibold">Turn on Autopay</div>
            <div className="text-[9px] leading-tight text-muted">We'll automatically debit your payments on each due date.</div>
          </div>
          <span className="text-[10px] font-semibold">On</span>
        </div>
      </div>
      <div className="mt-auto p-4">
        <div className="rounded-full bg-[#5ad16a] py-2.5 text-center text-[12px] font-bold text-white">Make a payment</div>
      </div>
    </Phone>
  )
}

export function AfterpayControl() {
  const items = [
    { t: 'یک قسط مشخص را پرداخت کند.', icon: Check },
    { t: <>بخشی از یک قسط را با <Latin className="font-bold">Custom amount</Latin> بپردازد.</>, icon: Hash },
    {
      t: (
        <>
          با <Latin className="font-bold">Pay all</Latin> تمام بدهی، اقساط سررسیدشونده طی {fa(15)} روز آینده، یا یک
          مبلغ دلخواه را پرداخت کند.
        </>
      ),
      icon: Wallet,
    },
    { t: 'پرداخت‌های زودهنگام انجام دهد.', icon: CalendarClock },
  ]
  return (
    <ProductFrame product="afterpay" subtitle={<Latin>My Afterpay</Latin>} part={[1, 2]}>
      <div className="grid flex-1 grid-cols-[1fr_590px] gap-12">
        <div className="flex flex-col">
          <Reveal delay={100}>
            <P className="text-[24px] font-bold text-ink">
              کاربر می‌تواند از قسمت <Latin>My Afterpay</Latin>:
            </P>
          </Reveal>
          <div className="mt-5 space-y-3">
            {items.map((it, i) => {
              const Icon = it.icon
              return (
                <Reveal key={i} delay={200 + i * 100} className="flex items-center gap-4 rounded-[22px] bg-white px-5 py-4 ring-1 ring-line">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={19} />
                  </div>
                  <P className="text-ink">{it.t}</P>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={700} className="mt-auto">
            <div className="mb-3 text-[14px] font-semibold text-muted">قابلیت‌ها</div>
            <div className="flex flex-wrap gap-2">
              {['Partial Payment', 'Custom Amount', 'Multi-debt Payment', 'Automatic Retry'].map((c) => (
                <Chip key={c} tone="accent" className="px-4 py-1.5 text-[15px]">
                  <Latin>{c}</Latin>
                </Chip>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={250} className="flex items-start justify-center gap-6">
          <AfterpayOrders />
          <AfterpaySchedule />
        </Reveal>
      </div>
    </ProductFrame>
  )
}

export function AfterpayAllocation() {
  const order = ['اقساط امروز', 'بعضی اقساط معوق', 'اقساط آینده']
  return (
    <ProductFrame product="afterpay" subtitle="توزیع مبلغ و برداشت تجمیعی" part={[2, 2]}>
      <div className="grid flex-1 grid-cols-[1.1fr_1fr] gap-10">
        <div className="flex flex-col gap-5">
          <Reveal delay={100}>
            <P className="text-ink">
              <b>نکته مهم‌تر:</b> وقتی کاربر مبلغ دلخواهی برای چند سفارش پرداخت می‌کند، خود Afterpay مبلغ را طبق ترتیب
              مشخص توزیع می‌کند؛ ابتدا اقساط امروز، سپس بعضی اقساط معوق و بعد اقساط آینده. نتیجه هم به‌صورت تفکیکی در
              رسید نمایش داده می‌شود.
            </P>
          </Reveal>
          <Reveal delay={200}>
            <P>
              برای بعضی کاربران، اقساط چند سفارش که یک روز سررسید می‌شوند در یک برداشت خودکار تجمیع می‌شوند. اگر برداشت
              تجمیعی شکست بخورد، سیستم اقساط را جداگانه دوباره امتحان می‌کند.
            </P>
          </Reveal>
          <Value delay={350} className="mt-auto">
            این نمونه تقریباً یک <Latin>Benchmark</Latin> مستقیم برای ایده{' '}
            <Latin className="font-bold">Debt Recovery 360</Latin> است. نشان می‌دهد می‌توان به کاربر اجازه داد مبلغ
            پرداخت را انتخاب کند، بدون اینکه لزوماً انتخاب ترتیب توزیع میان بدهی‌ها را به او واگذار کنیم.
          </Value>
        </div>

        <div className="flex flex-col gap-5">
          <Card delay={250}>
            <div className="flex items-center gap-2 text-[14px] font-semibold text-muted">
              <ListOrdered size={16} /> ترتیب توزیع مبلغ دلخواه
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Node tone="accent" className="shrink-0 text-center">
                مبلغ دلخواه
                <br />
                <span className="text-[13px] font-normal text-white/70">برای چند سفارش</span>
              </Node>
              {order.map((o, i) => (
                <div key={o} className="contents">
                  <Arrow />
                  <Reveal delay={450 + i * 150} className="flex-1">
                    <Node tone="paper" className="text-center">
                      <span className="text-[13px] text-accent">{fa(i + 1)}</span>
                      <div>{o}</div>
                    </Node>
                  </Reveal>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-end gap-2 text-[14px] text-muted">
              <ReceiptText size={15} /> رسید تفکیکی
            </div>
          </Card>

          <Card delay={400} className="flex-1">
            <div className="flex items-center gap-2 text-[14px] font-semibold text-muted">
              <RefreshCw size={16} /> برداشت تجمیعی و تلاش مجدد
            </div>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex flex-col gap-1.5">
                {[1, 2, 3].map((i) => (
                  <Node key={i} className="px-3 py-1.5 text-[13px]">
                    سفارش {fa(i)}
                  </Node>
                ))}
              </div>
              <Arrow />
              <Node tone="ink" className="text-center text-[14px]">
                یک برداشت
                <br />
                خودکار
              </Node>
              <Arrow />
              <Node tone="coral" className="flex items-center gap-1.5 text-[14px]">
                <X size={14} strokeWidth={3} /> شکست
              </Node>
              <Arrow />
              <div className="flex flex-col gap-1.5">
                {[1, 2, 3].map((i) => (
                  <Node key={i} tone="mint" className="flex items-center gap-1.5 px-3 py-1.5 text-[13px]">
                    <RefreshCw size={12} /> قسط {fa(i)}
                  </Node>
                ))}
              </div>
            </div>
            <div className="mt-4 text-[14px] text-muted">اقساطی که یک روز سررسید می‌شوند · تلاش مجدد جداگانه</div>
          </Card>
        </div>
      </div>
    </ProductFrame>
  )
}

/* =============================================================== Affirm */

function AffirmManage() {
  return (
    <Phone className="h-[540px] w-[280px]">
      <div className="px-5 pt-3 text-[22px] font-extrabold">Manage</div>
      <div className="mt-3 grid grid-cols-2 border-b border-line text-center text-[10px] font-bold tracking-wider">
        <span className="border-b-2 border-[#4a4af4] pb-2 text-[#4a4af4]">ACTIVE</span>
        <span className="pb-2 text-muted">PAST PAYMENTS</span>
      </div>
      <div className="mt-3 flex gap-1.5 px-4 text-[10px] font-semibold">
        <span className="rounded-md border border-[#4a4af4] bg-[#eef] px-2 py-1 text-[#4a4af4]">All</span>
        <span className="rounded-md border border-line px-2 py-1">Due this week</span>
        <span className="rounded-md border border-line px-2 py-1">Due this month</span>
      </div>
      <div className="mt-5 text-center text-[26px] font-extrabold">$971.21</div>
      <div className="text-center text-[11px] text-muted">Total balance</div>
      <div className="mt-5 space-y-4 px-5">
        {[
          { m: 'BestBuy', d: 'LG - 65" Class C2 Series OLED evo 4K…', a: '$40.00 due · Aug 15', p: 18 },
          { m: 'Apple', d: '13-inch MacBook Air with M2 chip', a: '$104.13 due · Aug 3', p: 30 },
        ].map((x) => (
          <div key={x.m} className="border-b border-line pb-4">
            <div className="text-[13px] font-bold">{x.m}</div>
            <div className="truncate text-[10px] text-muted">{x.d}</div>
            <div className="mt-1 text-[11px] font-semibold">{x.a}</div>
            <div className="mt-2 h-1.5 rounded-full bg-[#e6e6fb]">
              <div className="h-full rounded-full bg-[#4a4af4]" style={{ width: `${x.p}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto grid grid-cols-5 border-t border-line py-2.5 text-center text-[9px] text-muted">
        {['Home', 'Shop', 'Card', 'Manage', 'Save'].map((t) => (
          <span key={t} className={t === 'Manage' ? 'font-bold text-[#4a4af4]' : ''}>
            {t}
          </span>
        ))}
      </div>
    </Phone>
  )
}

export function AffirmPlans() {
  return (
    <ProductFrame product="affirm" subtitle="پرداخت چند برنامه اعتباری" part={[1, 2]}>
      <div className="grid min-h-0 flex-1 grid-cols-[1fr_300px] gap-12">
        <div className="flex flex-col gap-5">
          <Reveal delay={100}>
            <P className="text-ink">
              Affirm مدل متفاوتی دارد. روش‌های بازپرداخت مستندش شامل <Latin className="font-bold">Debit Card</Latin>،
              حساب بانکی از طریق <Latin className="font-bold">ACH</Latin> و در موارد واجد شرایط حساب{' '}
              <Latin className="font-bold">Affirm Money</Latin> است. پرداخت یک‌باره و{' '}
              <Latin className="font-bold">AutoPay</Latin> پشتیبانی می‌شوند.
            </P>
          </Reveal>
          <Reveal delay={200}>
            <P>
              اما یک تفاوت اساسی با Afterpay وجود دارد: اگر کاربر چند برنامه اعتباری فعال داشته باشد، Affirm می‌گوید باید
              پرداخت هر برنامه را جداگانه ثبت کند. یعنی داشبورد می‌تواند همه تعهدات را نشان دهد، ولی عملیات پرداخت
              لزوماً تجمیعی نیست.
            </P>
          </Reveal>
          <Reveal delay={320} className="rounded-[26px] border-2 border-accent/25 bg-accent-soft/60 p-6">
            <P className="text-[21px] font-semibold text-ink">
              این تفاوت برای تصمیم دیجی‌پی مهم است:{' '}
              <Latin className="font-extrabold text-accent">Unified Debt View</Latin> الزاماً به معنی{' '}
              <Latin className="font-extrabold text-accent">Unified Debt Payment</Latin> نیست.
            </P>
          </Reveal>
        </div>
        <Reveal delay={250} className="flex justify-center">
          <AffirmManage />
        </Reveal>
      </div>
      <Footnote>
        <Latin>ACH</Latin> مخفف <Latin>Automated Clearing House</Latin> است؛ یک شبکه بانکی در آمریکا برای انتقال
        الکترونیکی پول بین حساب‌های بانکی. شبیه انتقال حساب‌به‌حساب بانکی است، نه پرداخت با کارت اعتباری یا دبیت‌کارت.
      </Footnote>
    </ProductFrame>
  )
}

export function AffirmCheckout() {
  const steps = [
    {
      tab: 'Verify',
      caption:
        "Checking eligibility to pay with Affirm will not impact the customer's credit If the customer is approved and decides to buy with Affirm, their loan and payments may affect their credit score",
      screen: (
        <>
          <div className="text-[13px] font-extrabold">Welcome to Affirm</div>
          <div className="mt-1 text-[9px] leading-snug text-muted">Use your legal name so we can verify your identity and show you custom payment plans.</div>
          {['First name on ID', 'Last name on ID', 'Birth date (mm/dd/yyyy)', 'Email'].map((f) => (
            <div key={f} className="mt-2 rounded-md border border-line px-2 py-1.5 text-[9px] text-muted">
              {f}
            </div>
          ))}
          <div className="mt-auto rounded-full bg-[#0f0f3d] py-1.5 text-center text-[9.5px] font-bold text-white">Continue to plans</div>
        </>
      ),
    },
    {
      tab: 'Pick a plan',
      caption:
        'The customer will be redirected to the Affirm checkout flow in order to finalize their purchase. They can choose from various payment plans to find the most suitable one.',
      screen: (
        <>
          <div className="text-[13px] font-extrabold">Choose a payment plan</div>
          {[
            ['$120.94 every 2 weeks for 6 weeks', '$0 interest', true],
            ['$84.39 every month for 6 months', '$21.38 interest', false],
            ['$43.66 every month for 12 months', '$40.20 interest', false],
          ].map(([a, b, on]) => (
            <div key={String(a)} className={`mt-2 flex gap-1.5 rounded-lg border px-2 py-2 ${on ? 'border-[#4a4af4]' : 'border-line'}`}>
              <span className={`mt-0.5 size-2.5 shrink-0 rounded-full border ${on ? 'border-[3px] border-[#4a4af4]' : 'border-ink/30'}`} />
              <div>
                <div className="text-[9.5px] font-bold">{a}</div>
                <div className="text-[8.5px] text-muted">{b}</div>
              </div>
            </div>
          ))}
          <div className="mt-auto flex justify-between text-[9.5px] font-semibold">
            <span>Total of payments</span>
            <span>$483.75</span>
          </div>
        </>
      ),
    },
    {
      tab: 'Review details',
      caption:
        'The customer reviews the lending disclosures to ensure transparency. Once they are satisfied, they can finalize the purchase.',
      screen: (
        <>
          <div className="text-[13px] font-extrabold">Review and confirm</div>
          <div className="mt-2 text-[9.5px] font-bold">$120.94 every 2 weeks for 6 weeks</div>
          <div className="mt-2 flex justify-between">
            {['Today', 'Aug 8', 'Aug 22', 'Sep 7'].map((d, i) => (
              <div key={d} className="flex flex-col items-center gap-1">
                <span className={`size-5 rounded-full border-[2.5px] ${i === 0 ? 'border-[#4a4af4]' : 'border-[#0f0f3d]/70'}`} />
                <span className="text-[8px] text-muted">{d}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-1 border-t border-line pt-2 text-[9px]">
            {[
              ['Due today', '$120.94'],
              ['Purchase amount', '$483.75'],
              ['Interest (0.00% APR)', '$0.00'],
              ['Total of payments', '$483.75'],
            ].map(([a, b], i) => (
              <div key={a} className={`flex justify-between ${i === 0 ? 'font-bold' : 'text-muted'}`}>
                <span>{a}</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      tab: 'Confirm',
      caption:
        'After confirming their loan, the customer will be redirected to the checkout page for confirmation details. Affirm will communicate the loan terms, and the customer will make payments by downloading the Affirm app or by logging in online at affirm.com',
      screen: (
        <>
          <div className="text-[13px] font-extrabold">Review and confirm</div>
          <div className="mt-3 text-[9px] font-semibold text-muted">PAYMENT METHOD · DEBIT</div>
          <div className="mt-1 flex items-center gap-2 rounded-lg border border-line px-2 py-2 text-[10px] font-bold">
            <CreditCard size={13} /> Mastercard 3456
          </div>
          <div className="mt-3 text-[8.5px] leading-snug text-muted">
            By continuing, you have reviewed and agree to the AutoPay Authorization, the Payment Agreement…
          </div>
          <div className="mt-auto rounded-full bg-[#4a4af4] py-1.5 text-center text-[9.5px] font-bold text-white">Confirm</div>
        </>
      ),
    },
  ]
  return (
    <ProductFrame product="affirm" subtitle="مسیر خرید و ثبت برنامه پرداخت" part={[2, 2]}>
      <div dir="ltr" className="grid flex-1 grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <Reveal key={s.tab} delay={120 + i * 120} className="flex flex-col">
            <div className="flex h-[300px] flex-col rounded-[24px] bg-white p-5 ring-1 ring-line">
              <div className="mb-3 flex items-center justify-between border-b border-line pb-2">
                <span className="font-latin text-[15px] font-extrabold text-[#4a4af4]">affirm</span>
                <span className="font-latin text-[10px] font-bold text-muted">{s.tab}</span>
              </div>
              <div className="font-latin flex flex-1 flex-col">{s.screen}</div>
            </div>
            <div className="font-latin mt-4 flex items-center gap-2 text-[13px] font-bold text-accent">
              <span className="grid size-6 place-items-center rounded-full bg-accent-soft">{i + 1}</span>
              {s.tab}
            </div>
            <p className="font-latin mt-2 text-[15px] leading-[1.65] text-ink/75">{s.caption}</p>
          </Reveal>
        ))}
      </div>
    </ProductFrame>
  )
}

/* ================================================================= Alma */

export function Alma() {
  return (
    <ProductFrame product="alma" subtitle="برداشت برنامه‌ریزی‌شده و پرداخت زودتر">
      <div className="grid flex-1 grid-cols-[1fr_1.05fr] gap-12">
        <Reveal delay={100} className="flex flex-col justify-center">
          <P className="text-[23px] text-ink">
            در Alma، برداشت‌های برنامه‌ریزی‌شده از <b>کارت ثبت‌شده</b> انجام می‌شود. کاربر همچنین می‌تواند از{' '}
            <b>پرتال مشتری</b> یا <b>لینک صفحه پرداخت امن</b> موجود در ایمیل‌ها، اقساط آینده را زودتر پرداخت کند.
          </P>
          <P className="mt-6 text-[21px]">
            اما برخلاف Alma، Afterpay صریحاً می‌گوید پرداخت فقط بخشی از یک قسط ماهانه مجاز نیست. مبلغ هر قسط را هم
            نمی‌توان به دلخواه تقسیم کرد
          </P>
        </Reveal>

        <div className="flex flex-col justify-center gap-4">
          <Card delay={250}>
            <div className="flex items-center gap-2 text-[14px] font-semibold text-muted">
              <RefreshCw size={15} /> پرداخت خودکار
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Node tone="ink" className="flex items-center gap-2">
                <CreditCard size={16} /> کارت ثبت‌شده
              </Node>
              <Arrow />
              <div className="flex flex-1 items-center justify-between rounded-2xl bg-paper px-5 py-3">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="flex flex-col items-center gap-1">
                    <span className="size-3 rounded-full bg-accent" />
                    <span className="text-[12px] text-muted">قسط {fa(i)}</span>
                  </span>
                ))}
              </div>
            </div>
          </Card>
          <Card delay={380}>
            <div className="flex items-center gap-2 text-[14px] font-semibold text-muted">
              <CalendarClock size={15} /> پرداخت زودتر اقساط آینده
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex flex-col gap-2">
                <Node className="flex items-center gap-2">
                  <User size={15} /> پرتال مشتری
                </Node>
                <Node className="flex items-center gap-2">
                  <Mail size={15} /> لینک صفحه پرداخت امن در ایمیل
                </Node>
              </div>
              <Arrow />
              <Node tone="accent" className="flex-1 text-center">
                پرداخت زودتر
              </Node>
            </div>
          </Card>
        </div>
      </div>
    </ProductFrame>
  )
}

/* =============================================================== seQura */

export function SequraRecovery() {
  const items = [
    { t: 'در طرح‌های اقساطی، برداشت از کارت ثبت‌شده می‌تواند خودکار انجام شود.', icon: RefreshCw },
    { t: 'برای برخی محصولات، پرداخت دستی با کارت یا انتقال بانکی وجود دارد.', icon: CreditCard },
    {
      t: <>در انتقال بانکی باید <Latin className="font-bold">Reference</Latin> سفارش ثبت شود تا پرداخت به خرید مربوطه تطبیق داده شود.</>,
      icon: Hash,
    },
    { t: 'بعد از ناموفق بودن برداشت از کارت، کاربر می‌تواند کارت را اصلاح کند و درخواست تلاش مجدد بدهد.', icon: AlertCircle, hl: true },
    { t: 'امکان پرداخت زودتر کل مانده وجود دارد و برخی پرداخت‌های زودهنگام جزئی با هماهنگی پشتیبانی انجام می‌شوند.', icon: CalendarClock },
    { t: <>پرداخت با <Latin className="font-bold">Bizum</Latin> نیز از مسیر تماس با پشتیبانی برای برخی مشکلات پرداخت ذکر شده است.</>, icon: Headphones },
  ]
  return (
    <ProductFrame product="sequra" subtitle="پرداخت جایگزین پس از برداشت ناموفق" part={[1, 2]}>
      <Reveal delay={100}>
        <P className="text-[24px] font-bold text-ink">
          seQura از نظر پرداخت جایگزین پس از ناموفق بودن برداشت بسیار جالب است.
        </P>
      </Reveal>
      <div className="mt-5 grid grid-cols-2 gap-3.5">
        {items.map((it, i) => {
          const Icon = it.icon
          return (
            <Reveal
              key={i}
              delay={200 + i * 80}
              className={`flex items-center gap-4 rounded-[22px] px-5 py-4 ${it.hl ? 'bg-ink text-white' : 'bg-white ring-1 ring-line'}`}
            >
              <div className={`grid size-11 shrink-0 place-items-center rounded-xl ${it.hl ? 'bg-[#7fe7c4] text-ink' : 'bg-accent-soft text-accent'}`}>
                <Icon size={19} />
              </div>
              <p className={`text-[18.5px] leading-[1.9] ${it.hl ? 'text-white' : 'text-ink/85'}`}>{it.t}</p>
            </Reveal>
          )
        })}
      </div>
      <Footnote delay={800}>
        <Latin>Bizum</Latin> (بیزوم) یک سرویس پرداخت موبایلی در اسپانیاست که امکان انتقال فوری پول بین حساب‌های بانکی را با
        استفاده از شماره موبایل فراهم می‌کند. از نظر تجربه کاربری، تا حدی شبیه کارت‌به‌کارت در ایران است؛ با این تفاوت که
        معمولاً از داخل اپلیکیشن بانک انجام می‌شود و به‌جای شماره کارت، شماره موبایل استفاده می‌کند
      </Footnote>
    </ProductFrame>
  )
}

export function SequraReconciliation() {
  return (
    <ProductFrame product="sequra" subtitle="پرداخت زودتر و تطبیق انتقال بانکی" part={[2, 2]}>
      <div className="grid flex-1 grid-cols-[1fr_1.05fr] gap-10">
        <div className="flex flex-col gap-6">
          <Reveal delay={100}>
            <P className="text-[22px] text-ink">
              در برخی طرح‌های seQura، کاربران می‌تونن مانده بدهی رو زودتر از موعد پرداخت کنن. با دو روش پرداخت:
            </P>
          </Reveal>
          <Reveal delay={200} className="grid grid-cols-2 gap-4">
            <div className="rounded-[22px] bg-white p-5 ring-1 ring-line">
              <CreditCard size={22} className="text-accent" />
              <div className="mt-3 text-[19px] font-bold">کارت اعتباری یا دبیت</div>
            </div>
            <div className="rounded-[22px] bg-white p-5 ring-1 ring-line">
              <Landmark size={22} className="text-accent" />
              <div className="mt-3 text-[19px] font-bold">انتقال بانکی</div>
              <Latin className="text-[14px] text-muted">Bank Transfer</Latin>
            </div>
          </Reveal>
          <Value delay={350} className="mt-auto">
            این نمونه مستقیماً به سناریوی پرداخت بدهی با <b>شماره شبا</b> مربوط می‌شود. سیستم باید{' '}
            <Latin className="font-bold">Reference</Latin> پرداخت و وضعیت <Latin className="font-bold">Reconciliation</Latin>{' '}
            داشته باشد؛ دیجی‌پی باید بتواند تشخیص دهد پولی که به حساب شرکت واریز شده، مربوط به کدام کاربر و کدام بدهی است.
          </Value>
        </div>

        <Card delay={300} className="flex flex-col">
          <div className="text-[14px] font-semibold text-muted">
            انتقال بانکی + <Latin>Reference</Latin> → تطبیق با خرید
          </div>
          <div className="flex flex-1 flex-col justify-center gap-4">
            <div className="flex items-center gap-3">
              <Node tone="paper" className="flex flex-1 items-center gap-2">
                <Landmark size={16} /> واریز با انتقال بانکی
              </Node>
              <span className="text-[22px] font-bold text-ink/25">+</span>
              <Node tone="accent" className="flex flex-1 items-center gap-2">
                <Hash size={16} /> <Latin>Reference</Latin> سفارش
              </Node>
            </div>
            <div className="mx-auto h-8 w-px bg-ink/20" />
            <Reveal delay={600} className="mx-auto">
              <Node tone="ink" className="px-8 text-center text-[17px]">
                <Latin>Reconciliation</Latin>
                <div className="text-[13px] font-normal text-white/60">تطبیق پرداخت</div>
              </Node>
            </Reveal>
            <div className="mx-auto h-8 w-px bg-ink/20" />
            <Reveal delay={800} className="grid grid-cols-2 gap-3">
              <Node tone="mint" className="flex items-center justify-center gap-2">
                <User size={16} /> کدام کاربر
              </Node>
              <Node tone="mint" className="flex items-center justify-center gap-2">
                <ReceiptText size={16} /> کدام بدهی
              </Node>
            </Reveal>
          </div>
          <div className="mt-2 flex items-center gap-2 rounded-xl bg-amber-soft px-4 py-2.5 text-[14px] font-semibold text-[#8a5700]">
            <Link2 size={15} /> در دیجی‌پی: پرداخت بدهی با شماره شبا
          </div>
        </Card>
      </div>
    </ProductFrame>
  )
}

