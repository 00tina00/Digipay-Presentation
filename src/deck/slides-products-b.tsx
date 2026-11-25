import {
  AlertTriangle,
  Barcode,
  CalendarPlus,
  Check,
  CircleCheck,
  Clock,
  CreditCard,
  Eye,
  FileSignature,
  Hand,
  Landmark,
  ListOrdered,
  MessageSquareWarning,
  ReceiptText,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Store,
  Wallet,
  X,
} from 'lucide-react'
import { Arrow, Blur, Card, Chip, Footnote, Latin, Node, P, Phone, ProductFrame, Reveal, Value, fa } from './ui'

/* =============================================================== Kueski */

export function KueskiChannels() {
  return (
    <ProductFrame product="kueski" subtitle="کانال‌های آنلاین، خودکار و فیزیکی" part={[1, 2]}>
      <div className="grid flex-1 grid-cols-[1.05fr_1fr] gap-10">
        <div className="flex flex-col gap-5">
          <Reveal delay={100}>
            <P className="text-ink">
              Kueski ترکیبی از کانال‌های آنلاین، برداشت خودکار و پرداخت فیزیکی را فراهم می‌کند. کاربر می‌تواند بدهی خود را
              با کارت دبیت، انتقال بانکی و در بعضی کانال‌ها به‌صورت نقدی در فروشگاه‌های <Latin className="font-bold">OXXO</Latin>{' '}
              یا شبکه <Latin className="font-bold">Paynet</Latin> بپردازد. در پرداخت فیزیکی، کاربر از اپ یک بارکد یا شناسه
              پرداخت دریافت می‌کند و آن را در محل پرداخت ارائه می‌دهد. ثبت نهایی پرداخت ممکن است تا {fa(24)} ساعت طول بکشد
            </P>
          </Reveal>
          <Card delay={220}>
            <P>در Kueski همچنین پرداخت خودکار با اجازه کاربر و از طریق حساب یا کارت ثبت‌شده وجود دارد.</P>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          {[
            {
              t: 'آنلاین',
              icon: Smartphone,
              body: (
                <div className="flex gap-2">
                  <Node className="flex-1 text-center">کارت دبیت</Node>
                  <Node className="flex-1 text-center">انتقال بانکی</Node>
                </div>
              ),
            },
            {
              t: 'خودکار',
              icon: RefreshCw,
              body: (
                <div className="flex items-center gap-2">
                  <Node className="flex items-center gap-1.5">
                    <Hand size={15} /> اجازه کاربر
                  </Node>
                  <Arrow />
                  <Node tone="accent" className="flex-1 text-center">
                    برداشت از حساب یا کارت ثبت‌شده
                  </Node>
                </div>
              ),
            },
            {
              t: 'فیزیکی و نقدی',
              icon: Store,
              body: (
                <div className="flex items-center gap-2">
                  <Node className="flex items-center gap-1.5">
                    <Barcode size={15} /> بارکد در اپ
                  </Node>
                  <Arrow />
                  <Node tone="ink" className="text-center">
                    <Latin>OXXO / Paynet</Latin>
                  </Node>
                  <Arrow />
                  <Node tone="amber" className="flex flex-1 items-center justify-center gap-1.5">
                    <Clock size={15} /> ثبت تا {fa(24)} ساعت
                  </Node>
                </div>
              ),
            },
          ].map((l, i) => {
            const Icon = l.icon
            return (
              <Card key={l.t} delay={300 + i * 130} className="p-5">
                <div className="mb-3 flex items-center gap-2 text-[15px] font-bold">
                  <Icon size={16} className="text-accent" /> {l.t}
                </div>
                {l.body}
              </Card>
            )
          })}
        </div>
      </div>
    </ProductFrame>
  )
}

export function KueskiPriority() {
  return (
    <ProductFrame product="kueski" subtitle="ترتیب اعمال وجه به بدهی‌ها" part={[2, 2]}>
      <div className="grid flex-1 grid-cols-[1fr_1fr] gap-10">
        <div className="flex flex-col justify-center gap-6">
          <Reveal delay={100}>
            <P className="text-[22px] text-ink">
              <b>نکته جالب:</b> شرایط رسمی Kueski برای برخی پرداخت‌های اضافه و قراردادهایی با شناسه پرداخت مشترک، ترتیب
              مشخصی برای اعمال وجه به بدهی‌ها تعریف می‌کند؛ مثلاً ابتدا بدهی‌های معوق و سپس تعهدات نزدیک‌تر به سررسید
            </P>
          </Reveal>
          <Reveal delay={250} className="rounded-[26px] bg-ink p-7 text-white">
            <P className="text-[22px] font-semibold text-white">
              این یکی از نزدیک‌ترین الگوها به مسئله{' '}
              <Latin className="font-extrabold text-[#7fe7c4]">Priority-based Debt Settlement</Latin> دیجی‌پی است.
            </P>
          </Reveal>
        </div>

        <Card delay={200} className="flex flex-col justify-center p-8">
          <div className="flex items-center gap-2 text-[14px] font-semibold text-muted">
            <FileSignature size={16} /> شرایط رسمی Kueski
          </div>
          <Node tone="accent" className="mt-5 text-center text-[17px]">
            پرداخت اضافه / شناسه پرداخت مشترک
          </Node>
          <div className="relative mr-6 border-r-2 border-dashed border-accent/30 pt-4 pr-8">
            {[
              { t: 'بدهی‌های معوق', fill: 100 },
              { t: 'تعهدات نزدیک‌تر به سررسید', fill: 60 },
            ].map((s, i) => (
              <Reveal key={s.t} delay={450 + i * 200} className="relative mb-4 last:mb-0">
                <span className="absolute top-1/2 -right-[47px] grid size-7 -translate-y-1/2 place-items-center rounded-full bg-white text-[13px] font-bold text-accent ring-2 ring-accent">
                  {fa(i + 1)}
                </span>
                <div className="rounded-2xl bg-paper p-5">
                  <div className="text-[19px] font-bold">{s.t}</div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-line">
                    <div
                      className="grow-x h-full rounded-full bg-accent"
                      style={{ width: `${s.fill}%`, ['--d' as string]: `${650 + i * 250}ms` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 text-[14px] text-muted">
            <ListOrdered size={15} /> وجه پرداختی به‌ترتیب اولویت اعمال می‌شود
          </div>
        </Card>
      </div>
    </ProductFrame>
  )
}

/* =========================================================== Monzo Flex */

export function Monzo() {
  return (
    <ProductFrame product="monzo" subtitle="پرداخت زودتر و تغییر برنامه بازپرداخت">
      <div className="grid flex-1 grid-cols-[1.05fr_1fr] gap-10">
        <div className="flex flex-col gap-5">
          <Reveal delay={100}>
            <P className="text-[21px] text-ink">
              در Monzo Flex، کاربر می‌تواند از داخل اپ پرداخت ماهانه را زودتر انجام دهد یا مبلغ بیشتری بابت یک خرید
              بپردازد. همچنین می‌تواند برنامه بازپرداخت بعضی خریدها را تغییر دهد. مثلاً افزایش تعداد پرداخت‌های ماهانه
              می‌تواند مبلغ هر پرداخت را کمتر کند، ولی در برخی شرایط هزینه بهره را افزایش می‌دهد.
            </P>
          </Reveal>
          <Value delay={300} className="mt-auto">
            قبل از هر تغییری در برنامه بازپرداخت، کاربر باید اثر آن را روی مبلغ اقساط، سررسید و هزینه نهایی ببیند. این مدل
            برای مطالعه مدیریت وام بانکی و <Latin>C-Credit</Latin> مناسب است، اما قابلیت تغییر برنامه مستقیماً قابل انتقال به
            قراردادهای فعلی دیجی‌پی نیست.
          </Value>
        </div>

        <div className="flex flex-col gap-5">
          <Card delay={200} className="flex-1">
            <div className="text-[14px] font-semibold text-muted">افزایش تعداد پرداخت‌های ماهانه</div>
            <div className="mt-5 flex h-[230px] items-end gap-8 px-2">
              <div className="flex h-full flex-1 flex-col">
                <div className="flex flex-1 items-end gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="reveal h-full flex-1 rounded-lg bg-accent" style={{ ['--d' as string]: `${400 + i * 70}ms` }} />
                  ))}
                </div>
                <div className="mt-3 text-center text-[15px] font-bold">برنامه فعلی</div>
              </div>
              <Arrow className="self-center" />
              <div className="flex h-full flex-[1.6] flex-col">
                <div className="flex flex-1 items-end gap-1.5">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="reveal flex-1 rounded-lg bg-accent/55" style={{ height: '55%', ['--d' as string]: `${700 + i * 60}ms` }} />
                  ))}
                </div>
                <div className="mt-3 text-center text-[15px] font-bold">پرداخت‌های بیشتر</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Node tone="mint" className="text-center">مبلغ هر پرداخت کمتر</Node>
              <Node tone="amber" className="text-center">در برخی شرایط، بهره بیشتر</Node>
            </div>
          </Card>
          <Reveal delay={500} className="grid grid-cols-3 gap-3">
            {['مبلغ اقساط', 'سررسید', 'هزینه نهایی'].map((t) => (
              <div key={t} className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3.5 text-[16px] font-bold ring-1 ring-line">
                <Eye size={16} className="text-accent" /> {t}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </ProductFrame>
  )
}

/* ================================================================ Tabby */

function TabbyPurchases() {
  return (
    <Phone className="h-[520px] w-[260px]">
      <div className="px-4 pt-3 text-center text-[12px] font-bold">Pay later purchases</div>
      <div className="mx-3 mt-3 rounded-2xl bg-paper p-3">
        <div className="text-[9.5px] text-muted">Due in 30 days</div>
        <div className="mt-1 flex items-center gap-1 text-[20px] font-extrabold">
          AED 2<Blur w={44} />
        </div>
        <div className="mt-2 grid grid-cols-2 text-[9.5px]">
          <div>
            <div className="text-muted">Due in 7 days</div>
            <div className="font-bold">AED 0.00</div>
          </div>
          <div>
            <div className="text-muted">Total to pay</div>
            <div className="font-bold">
              AED 1,<Blur w={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-3 mt-2 grid grid-cols-2 gap-2 text-center text-[9.5px] font-semibold">
        <div className="rounded-xl bg-paper py-2.5">View history</div>
        <div className="rounded-xl bg-paper py-2.5">Make payment</div>
      </div>
      <div className="mx-3 mt-4 text-[12px] font-bold">5 November</div>
      <div className="mx-3 mt-2 flex items-center gap-2">
        <span className="size-8 rounded-full bg-[#ecd98a]" />
        <div className="flex-1">
          <div className="text-[11px] font-bold">USBS Normal Paylinks</div>
          <div className="text-[9.5px] text-muted">Payment 2 of 6</div>
        </div>
        <span className="text-[10px] font-bold">
          AED 2<Blur w={18} />
        </span>
      </div>
      <div className="mx-3 mt-3 grid grid-cols-2 gap-2 text-center text-[10.5px] font-bold">
        <div className="rounded-xl bg-[#e9edf5] py-2 ring-2 ring-accent">Extend</div>
        <div className="rounded-xl bg-[#e9edf5] py-2">Pay</div>
      </div>
    </Phone>
  )
}

function TabbySchedule() {
  return (
    <Phone className="h-[520px] w-[260px]">
      <div className="px-4 pt-3">
        <div className="text-[18px] leading-tight font-extrabold">USBS Normal Paylinks</div>
        <div className="mt-2 flex gap-3 border-b border-line text-[9px] font-bold">
          <span className="border-b-2 border-ink pb-1.5">PAYMENTS</span>
          <span className="pb-1.5 text-muted">DETAILS</span>
        </div>
        <div className="mt-3 text-[14px] font-extrabold">Pay in 6 schedule</div>
      </div>
      <div className="mt-2 space-y-2 px-3">
        {[
          { m: 'OCT', s: 'Paid', paid: true },
          { m: 'NOV', s: 'Payment 2 of 6', checked: true },
          { m: 'DEC', s: 'Payment 3 of 6' },
          { m: 'JAN', s: 'Payment 4 of 6' },
        ].map((r) => (
          <div key={r.m} className="rounded-xl border border-line p-2.5">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-md bg-paper text-[7.5px] font-bold text-muted">{r.m}</span>
              <div className="flex-1">
                <div className="text-[10px] font-bold">
                  AED 2<Blur w={20} />
                </div>
                <div className="text-[9px] text-muted">{r.s}</div>
              </div>
              {r.paid && <span className="rounded-full bg-mint-soft px-1.5 py-0.5 text-[8px] font-bold text-[#08835b]">PAID</span>}
              {r.checked && (
                <span className="grid size-4 place-items-center rounded bg-ink text-white">
                  <Check size={10} strokeWidth={3} />
                </span>
              )}
              {!r.paid && !r.checked && <span className="size-4 rounded border border-line bg-paper" />}
            </div>
            {r.checked && (
              <div className="mt-2 flex items-center justify-center gap-1 rounded-lg bg-[#e9edf5] py-1.5 text-[9.5px] font-bold ring-2 ring-accent">
                <CalendarPlus size={11} /> Extend due date
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-auto p-3">
        <div className="rounded-xl bg-ink py-2.5 text-center text-[11px] font-bold text-white">
          Pay AED 2<Blur w={20} />
        </div>
      </div>
    </Phone>
  )
}

export function Tabby() {
  return (
    <ProductFrame product="tabby" subtitle="پرداخت خودکار، اقدام دستی و تمدید سررسید">
      <div className="grid flex-1 grid-cols-[1fr_560px] gap-12">
        <div className="flex flex-col gap-5">
          <Reveal delay={100}>
            <P className="text-ink">
              Tabby برنامه پرداخت را بعد از خرید در اپ نمایش می‌دهد و کاربر می‌تواند از تب{' '}
              <Latin className="font-bold">Money</Latin> خریدهای موردنظرش را برای پرداخت انتخاب کند. برای بعضی محصولات، اگر{' '}
              <Latin className="font-bold">Visa</Latin> یا <Latin className="font-bold">Mastercard</Latin> متصل باشد، مبلغ در
              سررسید به‌صورت خودکار برداشت می‌شود. پرداخت زودتر هم امکان‌پذیر است.
            </P>
          </Reveal>
          <Reveal delay={200} className="flex items-center gap-4 rounded-[22px] bg-white px-5 py-4 ring-1 ring-line">
            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-amber-soft text-[#a86a00]">
              <CalendarPlus size={19} />
            </div>
            <P className="text-ink">
              همچنین برای برخی طرح‌های <Latin className="font-bold">Pay Later</Latin>، امکان تمدید سررسید با هزینه مشخص
              ارائه می‌کند.
            </P>
          </Reveal>
          <Value delay={320} className="mt-auto">
            ترکیب پرداخت خودکار، امکان اقدام دستی و مدیریت سررسید در یک تجربه واحد. البته قابلیت تمدید به سیاست اعتباری و
            هزینه تأمین مالی وابسته است.
          </Value>
        </div>
        <Reveal delay={250} className="flex items-start justify-center gap-6">
          <TabbyPurchases />
          <TabbySchedule />
        </Reveal>
      </div>
    </ProductFrame>
  )
}

/* =============================================================== Tamara */

export function Tamara() {
  const timeline = [
    { t: 'سررسید', d: 'برداشت از کارت ذخیره‌شده', tone: 'neutral' },
    { t: 'شکست', d: 'کافی‌نبودن موجودی', tone: 'coral' },
    { t: '+ ۲ روز', d: 'تلاش خودکار', tone: 'retry' },
    { t: '+ ۲ روز', d: 'تلاش خودکار', tone: 'retry' },
    { t: 'پرداخت بدهی', d: 'تا تسویه', tone: 'mint' },
  ] as const
  const toneCls = {
    neutral: 'bg-ink text-white',
    coral: 'bg-coral text-white',
    retry: 'bg-white text-accent ring-2 ring-accent',
    mint: 'bg-mint text-white',
  }
  const toneIcon = { neutral: CreditCard, coral: X, retry: RefreshCw, mint: Check }
  return (
    <ProductFrame product="tamara" subtitle="برداشت خودکار و تلاش مجدد">
      <Card delay={100} className="px-10 py-7">
        <div className="relative">
          <div className="absolute inset-x-[10%] top-[24px] h-[2px] bg-line">
            <div className="grow-x h-full bg-ink/40" style={{ ['--d' as string]: '300ms' }} />
          </div>
          <div className="relative grid grid-cols-5">
            {timeline.map((s, i) => {
              const Icon = toneIcon[s.tone]
              return (
                <Reveal key={i} delay={300 + i * 140} className="flex flex-col items-center text-center">
                  <div className={`grid size-12 place-items-center rounded-full ${toneCls[s.tone]}`}>
                    <Icon size={19} strokeWidth={2.4} />
                  </div>
                  <div className="mt-3 text-[18px] font-bold">{s.t}</div>
                  <div className="text-[14px] text-muted">{s.d}</div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Card>

      <div className="mt-6 grid flex-1 grid-cols-[1.1fr_1fr] gap-8">
        <Reveal delay={600} className="flex flex-col justify-center">
          <P className="text-[21px] text-ink">
            Tamara در شرایط رسمی عربستان، داشتن یک <b>کارت معتبر ثبت‌شده</b> برای بازپرداخت را ضروری می‌داند. مبلغ اقساط در
            سررسید از کارت ذخیره‌شده برداشت می‌شود. اگر پرداخت به دلیل کافی‌نبودن موجودی شکست بخورد، طبق شرایط منتشرشده،
            تلاش خودکار برای برداشت <b>هر دو روز</b> تکرار می‌شود تا بدهی پرداخت شود.
          </P>
        </Reveal>
        <div className="flex flex-col gap-4">
          <Reveal delay={750} className="flex items-center gap-3 rounded-[22px] bg-amber-soft px-5 py-4">
            <Node tone="white" className="flex items-center gap-1.5 text-[14px]">
              <RefreshCw size={14} /> تلاش در جریان
            </Node>
            <span className="text-[18px] font-bold text-[#8a5700]">+</span>
            <Node tone="white" className="flex items-center gap-1.5 text-[14px]">
              <Hand size={14} /> پرداخت دستی هم‌زمان
            </Node>
            <Arrow />
            <span className="flex items-center gap-1.5 text-[14px] font-bold text-[#8a5700]">
              <AlertTriangle size={16} /> برداشت تکراری
            </span>
          </Reveal>
          <Value delay={850} className="flex-1">
            <Latin className="font-bold">Repayment Recovery</Latin> فقط نمایش پیام «پرداخت ناموفق» نیست. می‌توان مکانیزم
            تلاش مجدد داشت، اما باید وضعیت بدهی و تلاش‌های در جریان کاملاً مشخص باشد تا پرداخت دستی هم‌زمان باعث برداشت
            تکراری نشود.
          </Value>
        </div>
      </div>
    </ProductFrame>
  )
}

/* ====================================================== Bajaj · Paytm */

export function Bajaj() {
  return (
    <ProductFrame product="india" subtitle={<Latin>Bajaj Finance</Latin>} part={[1, 2]}>
      <div className="grid min-h-0 flex-1 grid-cols-[1.05fr_1fr] gap-10">
        <div className="flex flex-col gap-5">
          <Reveal delay={100}>
            <P className="text-[21px] text-ink">
              در Bajaj Finance کاربر می‌تواند از پورتال یا اپ، قرارداد وام را انتخاب کند و با{' '}
              <Latin className="font-bold">UPI</Latin>، <Latin className="font-bold">Net Banking</Latin> یا کارت دبیت پرداخت
              انجام دهد.
            </P>
          </Reveal>
          <Card delay={220}>
            <div className="mb-2 flex items-center gap-2">
              <Latin className="text-[18px] font-extrabold text-accent">Part-prepayment</Latin>
            </div>
            <P>
              در برخی وام‌ها، Part-prepayment هم وجود دارد؛ یعنی کاربر مبلغ بیشتری بابت اصل وام پرداخت می‌کند که می‌تواند روی
              سود یا مدت بازپرداخت اثر بگذارد. این مفهوم با نصفه‌پرداخت‌کردن یک قسط متفاوت است
            </P>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card delay={300}>
            <div className="text-[14px] font-semibold text-muted">پرداخت قسط</div>
            <div className="mt-4 flex items-center gap-3">
              <Node tone="ink" className="text-center">
                پورتال یا اپ
                <div className="text-[13px] font-normal text-white/60">انتخاب قرارداد وام</div>
              </Node>
              <Arrow />
              <div className="flex flex-1 flex-col gap-2">
                {['UPI', 'Net Banking', 'کارت دبیت'].map((m) => (
                  <Node key={m} className="text-center">
                    {m}
                  </Node>
                ))}
              </div>
            </div>
          </Card>
          <Card delay={420} className="flex-1">
            <div className="text-[14px] font-semibold text-muted">دو مفهوم متفاوت</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-accent-soft p-4">
                <Latin className="text-[15px] font-bold text-accent">Part-prepayment</Latin>
                <div className="mt-3 flex h-3 gap-1">
                  <div className="w-[30%] rounded-full bg-accent" />
                  <div className="flex-1 rounded-full bg-accent/20" />
                </div>
                <div className="mt-2 text-[13px] text-ink/70">پرداخت اضافه بابت اصل وام</div>
              </div>
              <div className="rounded-2xl bg-paper p-4">
                <div className="text-[15px] font-bold">نصفه‌پرداخت یک قسط</div>
                <div className="mt-3 flex h-3 gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex-1 overflow-hidden rounded-full bg-ink/10">
                      {i === 0 && <div className="h-full w-1/2 bg-ink/50" />}
                    </div>
                  ))}
                </div>
                <div className="mt-2 text-[13px] text-ink/70">بخشی از مبلغ یک قسط</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footnote>
        <Latin>UPI</Latin> و <Latin>Net Banking</Latin> دو روش پرداخت بانکی رایج در هند هستند. هر دو امکان پرداخت مستقیم از
        حساب بانکی را فراهم می‌کنند، اما تجربه کاربری و زیرساخت متفاوتی دارند.
      </Footnote>
    </ProductFrame>
  )
}

export function Paytm() {
  return (
    <ProductFrame product="india" subtitle={<Latin>Paytm Personal Loan</Latin>} part={[2, 2]}>
      <div className="grid flex-1 grid-cols-[1fr_1.05fr] gap-10">
        <div className="flex flex-col gap-6">
          <Reveal delay={100}>
            <P className="text-[23px] text-ink">
              در اینجا <Latin className="font-bold">Paytm Personal Loan</Latin> نمونه خوبی برای <b>Recovery</b> است: اگر
              برداشت خودکار <Latin className="font-bold">eNACH</Latin> موفق نباشد، کاربر می‌تواند از قسمت مربوط به وام در اپ
              پرداخت دستی انجام دهد.
            </P>
          </Reveal>
          <Value delay={300} className="mt-auto">
            یک بدهی می‌تواند روش پرداخت اصلی خودکار و روش جایگزین دستی داشته باشد. انتخاب روش جایگزین نباید به ایجاد قرارداد
            بدهی جدید یا تسویه دوباره منجر شود.
          </Value>
        </div>

        <Card delay={200} className="flex flex-col justify-center p-8">
          <div className="flex items-center justify-between rounded-2xl border-2 border-dashed border-line p-5">
            <div className="text-[14px] font-semibold text-muted">یک بدهی</div>
            <div className="text-[20px] font-extrabold">قرارداد وام</div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <div className="mb-2 text-[13px] font-semibold text-muted">روش اصلی</div>
              <Node tone="ink" className="flex items-center justify-center gap-2 py-4 text-[16px]">
                <RefreshCw size={16} /> برداشت خودکار <Latin>eNACH</Latin>
              </Node>
            </div>
            <div>
              <div className="mb-2 text-[13px] font-semibold text-muted">روش جایگزین</div>
              <Node tone="accent" className="flex items-center justify-center gap-2 py-4 text-[16px]">
                <Smartphone size={16} /> پرداخت دستی در اپ
              </Node>
            </div>
          </div>
          <Reveal delay={500} className="mt-6 flex items-center gap-3">
            <Node tone="coral" className="flex items-center gap-1.5">
              <X size={14} strokeWidth={3} /> eNACH موفق نیست
            </Node>
            <Arrow />
            <Node tone="mint" className="flex flex-1 items-center gap-1.5">
              <CircleCheck size={15} /> پرداخت دستی روی همان بدهی
            </Node>
          </Reveal>
          <div className="mt-5 grid grid-cols-2 gap-3 text-[14px] font-semibold text-[#d63a2f]">
            <span className="flex items-center gap-1.5 rounded-xl bg-coral-soft/60 px-3 py-2">
              <X size={14} /> قرارداد بدهی جدید
            </span>
            <span className="flex items-center gap-1.5 rounded-xl bg-coral-soft/60 px-3 py-2">
              <X size={14} /> تسویه دوباره
            </span>
          </div>
        </Card>
      </div>
    </ProductFrame>
  )
}

/* =============================================================== Nubank */

export function Nubank() {
  const concepts = [
    { en: 'Partial Payment', fa: 'پرداخت بخشی از مبلغ', bar: 45, tone: 'bg-accent' },
    { en: 'Minimum Payment', fa: 'حداقل پرداخت قراردادی', bar: 15, tone: 'bg-amber' },
    { en: 'Restructuring', fa: 'توافق جدید برای بازپرداخت مانده', split: true, tone: 'bg-[#7fe7c4]' },
  ]
  return (
    <ProductFrame product="nubank" subtitle="صورت‌حساب کارت اعتباری">
      <div className="grid flex-1 grid-cols-[1fr_1fr] gap-10">
        <div className="flex flex-col gap-4">
          <Reveal delay={100}>
            <P className="text-ink">
              Nubank برای پرداخت صورت‌حساب کارت اعتباری از روش‌هایی مانند <Latin className="font-bold">Pix</Latin>،{' '}
              <Latin className="font-bold">Boleto</Latin> و موجودی حساب استفاده می‌کند. امکان فعال‌کردن برداشت خودکار هم وجود
              دارد.
            </P>
          </Reveal>
          <Reveal delay={180} className="flex flex-wrap gap-2">
            {['Pix', 'Boleto', 'موجودی حساب', 'برداشت خودکار'].map((m) => (
              <Chip key={m}>{m}</Chip>
            ))}
          </Reveal>
          <Card delay={260}>
            <P>
              یکی از تفاوت‌های مهم این بازار مفهوم <Latin className="font-bold">Minimum Payment</Latin> است. کاربر می‌تواند
              حداقل مبلغ تعیین‌شده صورت‌حساب را بپردازد؛ اما مانده پرداخت‌نشده ممکن است وارد اعتبار گردشی همراه با بهره شود.
            </P>
          </Card>
          <Reveal delay={340}>
            <P>همچنین امکان تقسیط مجدد صورت‌حساب با شرایط جدید وجود دارد.</P>
          </Reveal>
        </div>

        <Reveal delay={250} className="flex flex-col rounded-[28px] bg-ink p-8 text-white">
          <div className="text-[14px] font-semibold text-[#7fe7c4]">ارزش برای دیجی‌پی</div>
          <div className="mt-2 text-[24px] font-bold">باید سه مفهوم را مستقل نگه داریم:</div>
          <div className="mt-6 space-y-3">
            {concepts.map((c, i) => (
              <Reveal key={c.en} delay={450 + i * 130} className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
                <div className="flex items-baseline justify-between gap-4">
                  <Latin className="text-[20px] font-extrabold">{c.en}</Latin>
                  <span className="text-[16px] text-white/70">{c.fa}</span>
                </div>
                <div className="mt-3 flex h-2.5 gap-1">
                  {c.split ? (
                    [0, 1, 2, 3, 4].map((k) => <div key={k} className={`flex-1 rounded-full ${c.tone}`} />)
                  ) : (
                    <div className="flex flex-1 overflow-hidden rounded-full bg-white/10">
                      <div className={`grow-x h-full ${c.tone}`} style={{ width: `${c.bar}%`, ['--d' as string]: `${700 + i * 150}ms` }} />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-auto pt-5 text-[18px] leading-[1.9] text-white/80">
            این سه می‌توانند اثرهای کاملاً متفاوتی روی <b className="text-white">معوقی</b>، <b className="text-white">بهره</b> و{' '}
            <b className="text-white">وضعیت قرارداد</b> داشته باشند.
          </p>
        </Reveal>
      </div>
    </ProductFrame>
  )
}

/* ============================================================== Kredivo */

export function KredivoChannels() {
  return (
    <ProductFrame product="kredivo" subtitle="کانال‌های بازپرداخت و Virtual Account" part={[1, 2]}>
      <div className="grid flex-1 grid-cols-[1.05fr_1fr] gap-10">
        <div className="flex flex-col gap-5">
          <Reveal delay={100}>
            <P className="text-ink">
              Kredivo بازپرداخت را از کانال‌های مختلف پشتیبانی می‌کند: <Latin className="font-bold">Virtual Account</Latin>{' '}
              بانکی، فروشگاه‌های <Latin className="font-bold">Indomaret</Latin> و <Latin className="font-bold">Alfamart</Latin>،
              و بعضی پلتفرم‌های تجارت الکترونیک مانند <Latin className="font-bold">Tokopedia</Latin>. کاربر ابتدا در اپ تراکنش
              موردنظر را انتخاب می‌کند، سپس از روش پرداخت انتخاب‌شده استفاده می‌کند. در پرداخت Virtual Account، شناسه حساب
              برای ارتباط پرداخت و بدهی استفاده می‌شود.
            </P>
          </Reveal>
          <Value delay={300} className="mt-auto">
            برای سناریوهای پرداخت خارج از اپ، داشتن شناسه پرداخت قابل تطبیق می‌تواند از اتکای کامل به رسید دستی و بررسی اپراتور
            جلوگیری کند. امکان بازپرداخت اقساط در فروشگاه‌های زنجیره‌ای نکته قابل توجه است.
          </Value>
        </div>

        <Card delay={200} className="flex flex-col justify-center p-8">
          <Node tone="ink" className="flex items-center justify-center gap-2 py-4 text-[17px]">
            <Smartphone size={18} /> انتخاب تراکنش در اپ
          </Node>
          <div className="mx-auto h-6 w-px bg-ink/20" />
          <div className="grid grid-cols-3 gap-3">
            {[
              { t: 'Virtual Account', d: 'بانکی', icon: Landmark },
              { t: 'Indomaret · Alfamart', d: 'فروشگاه‌ها', icon: Store },
              { t: 'Tokopedia', d: 'تجارت الکترونیک', icon: ShoppingBag },
            ].map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.t} delay={400 + i * 120} className="rounded-2xl bg-paper p-4 text-center">
                  <Icon size={20} className="mx-auto text-accent" />
                  <Latin className="mt-2 block text-[14px] font-bold">{c.t}</Latin>
                  <div className="text-[13px] text-muted">{c.d}</div>
                </Reveal>
              )
            })}
          </div>
          <div className="mx-auto h-6 w-px bg-ink/20" />
          <Reveal delay={800} className="flex items-center gap-3 rounded-2xl bg-accent-soft p-4">
            <span className="font-latin rounded-lg bg-white px-3 py-2 text-[14px] font-bold tracking-wider text-accent">
              VA 8808 •••• 2140
            </span>
            <span className="text-[15px] font-semibold text-accent">شناسه حساب = ارتباط پرداخت و بدهی</span>
          </Reveal>
        </Card>
      </div>
    </ProductFrame>
  )
}

export function KredivoStore() {
  const steps = [
    { t: 'کاربر در اپلیکیشن Kredivo مبلغ بدهی و شناسه پرداخت را مشاهده می‌کند.', icon: Smartphone },
    { t: 'به یکی از شعب Indomaret مراجعه می‌کند.', icon: Store },
    { t: 'به صندوقدار می‌گوید که می‌خواهد بدهی Kredivo را پرداخت کند.', icon: MessageSquareWarning },
    { t: 'شناسه حساب مجازی (Virtual Account) یا بارکد پرداخت را ارائه می‌دهد.', icon: Barcode },
    { t: 'مبلغ را در صندوق پرداخت می‌کند و رسید می‌گیرد.', icon: ReceiptText },
    { t: 'پرداخت از طریق سیستم فروشگاه به Kredivo گزارش می‌شود تا وضعیت بدهی به‌روزرسانی شود.', icon: CircleCheck },
  ]
  return (
    <ProductFrame product="kredivo" subtitle="فرایند بازپرداخت در فروشگاه چطور است؟" part={[2, 2]}>
      <div className="grid grid-cols-3 gap-4">
        {steps.map((s, i) => {
          const Icon = s.icon
          const last = i === steps.length - 1
          return (
            <Reveal
              key={i}
              delay={100 + i * 100}
              className={`flex gap-4 rounded-[22px] p-5 ${last ? 'bg-mint text-white' : 'bg-white ring-1 ring-line'}`}
            >
              <div className="flex flex-col items-center gap-2">
                <span className={`grid size-10 place-items-center rounded-xl ${last ? 'bg-white/20' : 'bg-accent-soft text-accent'}`}>
                  <Icon size={18} />
                </span>
                <span className={`text-[14px] font-bold ${last ? 'text-white/70' : 'text-ink/30'}`}>{fa(i + 1)}</span>
              </div>
              <p className={`text-[18px] leading-[1.9] ${last ? 'text-white' : 'text-ink/85'}`}>{s.t}</p>
            </Reveal>
          )
        })}
      </div>
      <Reveal delay={800} className="mt-auto flex gap-8 rounded-[28px] bg-ink p-8 text-white">
        <div className="w-[300px] shrink-0">
          <div className="text-[14px] font-semibold text-[#7fe7c4]">نام این مدل</div>
          <Latin className="mt-2 block text-[26px] leading-[1.3] font-extrabold">Cash-Based Repayment Through Retail Agents</Latin>
        </div>
        <p className="text-[19px] leading-[2] text-white/85">
          این مدل را Cash-Based Repayment Through Retail Agents می‌نامند. یعنی فروشگاه علاوه بر فروش کالا، نقش یک نقطه فیزیکی
          دریافت پرداخت را ایفا می‌کند. این روش برای کاربرانی مفید است که به پرداخت دیجیتال دسترسی مناسبی ندارند یا ترجیح
          می‌دهند حضوری پرداخت کنند.
        </p>
      </Reveal>
    </ProductFrame>
  )
}

/* =============================================================== Fuliza */

export function FulizaMechanism() {
  const nodes = [
    { t: 'ورود وجه', d: 'پولی وارد حساب M-Pesa می‌شود', icon: Wallet },
    { t: 'موجودی ورودی', d: 'به‌صورت خودکار استفاده می‌شود', icon: RefreshCw },
    { t: 'کاهش بدهی Fuliza', d: 'بدون عملیات «پرداخت قسط»', icon: CircleCheck },
  ]
  return (
    <ProductFrame product="fuliza" subtitle="بازپرداخت از وجوه ورودی" part={[1, 2]}>
      <Reveal delay={100} className="rounded-[28px] bg-ink px-12 py-8 text-white">
        <div className="flex items-center">
          {nodes.map((n, i) => {
            const Icon = n.icon
            return (
              <div key={n.t} className="contents">
                {i > 0 && (
                  <div className="relative mx-4 h-[2px] flex-1 overflow-hidden bg-white/10">
                    <div className="grow-x absolute inset-0 bg-[#7fe7c4]" style={{ ['--d' as string]: `${400 + i * 300}ms` }} />
                  </div>
                )}
                <Reveal delay={250 + i * 300} className="flex w-[280px] flex-col items-center text-center">
                  <div className={`grid size-16 place-items-center rounded-[22px] ${i === 2 ? 'bg-[#7fe7c4] text-ink' : 'bg-white/10'}`}>
                    <Icon size={26} />
                  </div>
                  <div className="mt-3 text-[21px] font-bold">{n.t}</div>
                  <div className="mt-1 text-[15px] text-white/55">{n.d}</div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </Reveal>

      <div className="mt-6 grid grid-cols-3 gap-5">
        <Card delay={900}>
          <P className="text-ink">
            Fuliza یک محصول اقساطی کلاسیک نیست؛ یک اعتبار اضافه‌برداشت روی M-Pesa است. بااین‌حال، مکانیزم بازپرداختش برای
            تحقیق <Latin className="font-bold">Debt Recovery</Latin> بسیار مفید است.
          </P>
        </Card>
        <Card delay={1000}>
          <P className="text-ink">
            وقتی پولی وارد حساب M-Pesa کاربر می‌شود، موجودی ورودی به‌صورت خودکار برای کاهش بدهی Fuliza استفاده می‌شود.
          </P>
        </Card>
        <Reveal delay={1100} className="rounded-[26px] bg-accent p-6 text-white">
          <p className="text-[19.5px] leading-[2] font-semibold">
            بنابراین کاربر لزوماً عملیات «پرداخت قسط» انجام نمی‌دهد؛ ورود وجه خودش می‌تواند محرک تسویه باشد.
          </p>
        </Reveal>
      </div>

      <Footnote delay={1200}>
        اعتبار اضافه‌برداشت (<Latin>Overdraft Credit</Latin>) یعنی بانک به کاربر اجازه می‌دهد بیشتر از موجودی حساب بانکی‌اش
        خرج کند و بعداً مبلغ اضافه‌برداشت را پس بدهد.
      </Footnote>
    </ProductFrame>
  )
}

export function FulizaValue() {
  return (
    <ProductFrame product="fuliza" subtitle="ارزش برای دیجی‌پی" part={[2, 2]}>
      <div className="grid flex-1 grid-cols-[1.25fr_1fr] gap-10">
        <Reveal delay={100} className="flex flex-col rounded-[30px] bg-ink p-10 text-white">
          <div className="text-[15px] font-semibold text-[#7fe7c4]">ارزش برای دیجی‌پی</div>
          <p className="mt-4 text-[22px] leading-[2] text-white/90">
            این مدل بسیار نزدیک به ایده <Latin className="font-extrabold text-[#7fe7c4]">Event-triggered Automatic Settlement</Latin>{' '}
            در <Latin className="font-bold">Debt Recovery 360</Latin> است. این الگو برای بررسی قابلیت تسویه خودکار از موجودی
            کیف پول دیجی‌پی جالب است؛ اما یک تفاوت مهم وجود دارد: اگر به‌محض ورود پول، برداشت خودکار اتفاق بیفتد، کاربر ممکن
            است انتظار داشته باشد ابتدا از آن پول برای نیاز دیگری استفاده کند. بنابراین شفافیت، مجوز برداشت و سازوکار اعتراض
            اهمیت زیادی دارند.
          </p>
        </Reveal>

        <div className="flex flex-col gap-4">
          <Card delay={250} className="bg-amber-soft ring-0">
            <div className="flex items-center gap-2 text-[15px] font-bold text-[#8a5700]">
              <AlertTriangle size={17} /> یک تفاوت مهم
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Node tone="white" className="text-center text-[14px]">ورود پول</Node>
              <Arrow />
              <Node tone="white" className="text-center text-[14px]">برداشت خودکار فوری</Node>
              <Arrow />
              <Node tone="white" className="flex-1 text-center text-[14px]">کاربر پول را برای کار دیگری نیاز داشته</Node>
            </div>
          </Card>
          {[
            { t: 'شفافیت', icon: Eye },
            { t: 'مجوز برداشت', icon: ShieldCheck },
            { t: 'سازوکار اعتراض', icon: MessageSquareWarning },
          ].map((r, i) => {
            const Icon = r.icon
            return (
              <Reveal key={r.t} delay={400 + i * 120} className="flex flex-1 items-center gap-5 rounded-[24px] bg-white px-6 ring-1 ring-line">
                <div className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent">
                  <Icon size={22} />
                </div>
                <span className="text-[22px] font-bold">{r.t}</span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </ProductFrame>
  )
}
