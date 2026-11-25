import type { ComponentType } from 'react'
import { Agenda, Cover, OverviewNote, OverviewTable } from './slides-context'
import {
  AffirmCheckout,
  AffirmPlans,
  AfterpayAllocation,
  AfterpayControl,
  Alma,
  EbanxCard,
  EbanxPix,
  SequraReconciliation,
  SequraRecovery,
} from './slides-products-a'
import {
  Bajaj,
  FulizaMechanism,
  FulizaValue,
  KredivoChannels,
  KredivoStore,
  KueskiChannels,
  KueskiPriority,
  Monzo,
  Nubank,
  Paytm,
  Tabby,
  Tamara,
} from './slides-products-b'
import { Paths, ResearchQuestions } from './slides-closing'

export type SlideDef = { id: string; label: string; Component: ComponentType; dark?: boolean }

export const SLIDES: SlideDef[] = [
  { id: 'cover', label: 'روش‌های پرداخت‌ بدهی در دنیا', Component: Cover, dark: true },
  { id: 'agenda', label: 'فهرست', Component: Agenda },
  { id: 'overview', label: 'Overview — جدول روش‌ها', Component: OverviewTable },
  { id: 'overview-markets', label: 'Overview — مکزیک، هند، کنیا', Component: OverviewNote },
  { id: 'ebanx', label: 'EBANX — Card Installments', Component: EbanxCard },
  { id: 'ebanx-pix', label: 'EBANX — Pix 4x Pagaleve', Component: EbanxPix },
  { id: 'afterpay', label: 'Afterpay — My Afterpay', Component: AfterpayControl },
  { id: 'afterpay-allocation', label: 'Afterpay — توزیع و برداشت تجمیعی', Component: AfterpayAllocation },
  { id: 'affirm', label: 'Affirm — چند برنامه اعتباری', Component: AffirmPlans },
  { id: 'affirm-checkout', label: 'Affirm — مسیر خرید', Component: AffirmCheckout },
  { id: 'alma', label: 'Alma', Component: Alma },
  { id: 'sequra', label: 'seQura — پرداخت جایگزین', Component: SequraRecovery },
  { id: 'sequra-reconciliation', label: 'seQura — تطبیق انتقال بانکی', Component: SequraReconciliation },
  { id: 'kueski', label: 'Kueski — کانال‌ها', Component: KueskiChannels },
  { id: 'kueski-priority', label: 'Kueski — ترتیب اعمال وجه', Component: KueskiPriority },
  { id: 'monzo', label: 'Monzo Flex', Component: Monzo },
  { id: 'tabby', label: 'Tabby', Component: Tabby },
  { id: 'tamara', label: 'Tamara', Component: Tamara },
  { id: 'bajaj', label: 'Bajaj Finance', Component: Bajaj },
  { id: 'paytm', label: 'Paytm Personal Loan', Component: Paytm },
  { id: 'nubank', label: 'Nubank', Component: Nubank },
  { id: 'kredivo', label: 'Kredivo — کانال‌ها', Component: KredivoChannels },
  { id: 'kredivo-store', label: 'Kredivo — پرداخت در فروشگاه', Component: KredivoStore },
  { id: 'fuliza', label: 'Fuliza — مکانیزم', Component: FulizaMechanism },
  { id: 'fuliza-value', label: 'Fuliza — ارزش برای دیجی‌پی', Component: FulizaValue },
  { id: 'questions', label: 'Research questions', Component: ResearchQuestions },
  { id: 'paths', label: 'سه مسیر برای ادامه', Component: Paths, dark: true },
]
