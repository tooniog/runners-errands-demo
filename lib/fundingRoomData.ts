
export type FundRow = {
  category: string;
  amount: number;
  detail: string;
};

export type SimpleCard = {
  title: string;
  body: string;
};

export type QA = {
  question: string;
  answer: string;
};

export const preferredFunds: FundRow[] = [
  {
    category: "Fleet acquisition",
    amount: 7400000,
    detail: "Purchase of 4 Spiro Ekon 450 M3 e-bikes.",
  },
  {
    category: "Fleet accessories and launch equipment",
    amount: 1200000,
    detail: "Delivery boxes, phone mounts, helmets, chargers, branding, reflective safety gear and operational accessories.",
  },
  {
    category: "Maintenance reserve and inspections",
    amount: 1000000,
    detail: "Spare parts, inspections, early maintenance, battery/charging support and bike care reserve.",
  },
  {
    category: "Rider onboarding and first-month support",
    amount: 1800000,
    detail: "Recruitment, ID checks, guarantor checks, training, probation, route tests, first-month support and supervision.",
  },
  {
    category: "Rider kits and brand presence",
    amount: 900000,
    detail: "Uniforms, branded vests, caps, ID cards, rain gear, delivery bags and professional appearance.",
  },
  {
    category: "Marketing launch campaign",
    amount: 3000000,
    detail: "Founder/creator content, Meta/TikTok testing, QR stands, tenant counter prompts, launch videos, referrals, local micro-influencers, mall activation materials and retargeting.",
  },
  {
    category: "Software/product sharpening",
    amount: 1000000,
    detail: "Funding Room, simulation engine, Bites AI integration polish, tenant portal/admin polish, bug fixes and investor polish.",
  },
  {
    category: "Legal, agreements and documentation",
    amount: 700000,
    detail: "Mall pilot agreement, tenant participation terms, rider agreements, investor docs, privacy policy, liability terms and insurance/admin documents.",
  },
  {
    category: "Operations float and contingency",
    amount: 1000000,
    detail: "Dispatch float, customer support, phone/data, refunds/credits, issue resolution and unforeseen costs.",
  },
];

export const leanFunds: FundRow[] = [
  {
    category: "Fleet acquisition",
    amount: 7400000,
    detail: "Purchase of 4 Spiro Ekon 450 M3 e-bikes.",
  },
  {
    category: "Accessories/branding",
    amount: 900000,
    detail: "Essential delivery boxes, helmets, rider accessories and basic brand presence.",
  },
  {
    category: "Maintenance reserve",
    amount: 700000,
    detail: "Lean maintenance and early inspection reserve.",
  },
  {
    category: "Rider onboarding/support",
    amount: 1300000,
    detail: "Recruitment, checks, training, probation and first-month support.",
  },
  {
    category: "Rider kits",
    amount: 600000,
    detail: "Lean uniforms, branded rider visibility and basic delivery kit.",
  },
  {
    category: "Marketing",
    amount: 2000000,
    detail: "Focused launch content, QR activation, Meta/TikTok testing and local conversion pushes.",
  },
  {
    category: "Software polish",
    amount: 700000,
    detail: "Investor polish, bug fixes and essential product improvements.",
  },
  {
    category: "Legal/documentation",
    amount: 400000,
    detail: "Pilot terms, rider agreements, privacy and basic investor documentation.",
  },
  {
    category: "Operations/contingency",
    amount: 1000000,
    detail: "Dispatch float, support, issue resolution and unforeseen costs.",
  },
];

export const bikeSpecs: SimpleCard[] = [
  { title: "Peak power", body: "12 kW" },
  { title: "Top speed", body: "85 km/h" },
  { title: "Range", body: "Up to 120 km" },
  { title: "Battery", body: "Dual lithium-ion, swappable" },
  { title: "Payload capacity", body: "200 kg" },
  { title: "Storage", body: "Front storage compartment" },
  { title: "Display", body: "5-inch TFT with navigation" },
  { title: "Fleet features", body: "Geofencing, motor lock and Bluetooth connectivity" },
];

export const whyThisBike = [
  "Lower running costs than petrol bikes",
  "Reduced maintenance exposure versus petrol fleets",
  "Battery swapping supports uptime",
  "200kg payload capacity supports commercial deliveries",
  "Suitable for Nigerian road and delivery conditions",
  "Geofencing and motor lock support fleet security",
  "Sustainability-aligned brand story for malls and investors",
  "Founder-tested and selected for pilot suitability",
];

export const procurementChecklist = [
  "Confirm supplier invoice/pro forma",
  "Inspect each bike before purchase",
  "Document serial numbers",
  "Confirm warranty",
  "Confirm battery swap/charging support",
  "Confirm maintenance/spare parts availability",
  "Purchase accessories",
  "Fit delivery boxes",
  "Brand fleet",
  "Onboard riders",
];

export const riderRequirements = [
  "Valid ID",
  "Residential address",
  "Next of kin",
  "Two guarantors",
  "Prior delivery/logistics experience",
  "Smartphone capability",
  "Lagos route knowledge",
  "Communication ability",
  "Customer service attitude",
  "Physical reliability",
  "Street-smart judgement",
  "Willingness to follow Runnerbot 2 workflow",
];

export const riderScreening = [
  "ID verification",
  "Guarantor calls",
  "Address verification",
  "Prior work reference",
  "Route knowledge test",
  "Communication test",
  "Delivery scenario test",
  "Honesty/cash handling test",
  "App workflow test",
  "Safety briefing",
  "3-day probation",
];

export const riderTraining = [
  "Runners brand standards",
  "Mall pickup etiquette",
  "Tenant handoff protocol",
  "Food handling",
  "Fragile item handling",
  "Pharmacy item handling",
  "OTP/proof-of-delivery",
  "Dispute escalation",
  "E-bike care",
  "Phone/app updates",
  "When to follow Runnerbot 2",
  "When to escalate to human supervisor",
  "How to use human judgement when AI guidance is not enough",
];

export const riderScorecard = [
  "On-time rate",
  "Completion rate",
  "Acceptance rate",
  "Customer rating",
  "Tenant rating",
  "Payment accuracy",
  "Proof-of-delivery compliance",
  "Issue escalation quality",
  "Bike care",
  "Professionalism",
];

export const marketingPrinciples = [
  "Look local, feel premium, sound human, prove fast, sell plainly",
  "Separate viral creative from conversion creative",
  "Founder/creator-led proof videos",
  "Lagos-native hooks",
  "Show app, e-bikes, mall use case and delivery outcome",
  "Show price and action path clearly",
  "QR conversion inside mall",
  "Tenant counter prompts",
  "Meta/TikTok testing",
  "YouTube explainer content",
  "Retargeting after traffic exists",
  "Referral credits",
];

export const campaignConcepts = [
  "Shop the mall without the stress.",
  "One mall. Many stores. One delivery.",
  "Lunch ready before the rush.",
  "Ask Runnerbot 2.",
  "Bites AI decides. Runnerbot 2 fulfils. Runners Errands delivers.",
  "If you live in Lagos, this will save you time.",
  "I tested this mall errand so you don’t have to.",
];

export const marketingBudget = [
  "Content production",
  "Paid Meta/TikTok testing",
  "QR stands/signage",
  "Tenant counter prompts",
  "Launch-day activation",
  "Micro-influencer tests",
  "Referral credits",
  "Retargeting",
  "Contingency",
];

export const marketingMetrics = [
  "QR scans",
  "Cost per lead",
  "Cost per first order",
  "Repeat order rate",
  "Referral rate",
  "Conversion by tenant",
  "Conversion by category",
  "CAC payback",
  "Hook retention",
  "CTR",
  "CPA",
];

export const risks: SimpleCard[] = [
  {
    title: "Mall approval delay",
    body: "Deploy the same fleet and platform into Office OS and Estate OS while mall conversations continue.",
  },
  {
    title: "Low order volume",
    body: "Start with narrow tenant set, QR activation, tenant staff push, creator content and lunch preorder focus.",
  },
  {
    title: "Bike downtime",
    body: "Maintenance reserve, daily checklists, warranty confirmation, supplier support and route planning.",
  },
  {
    title: "Rider reliability",
    body: "Due diligence, guarantors, probation, scorecards and supervision.",
  },
  {
    title: "Tenant adoption",
    body: "Start with 7–10 tenants, simple approval queue and no upfront tenant fee during pilot.",
  },
  {
    title: "Payment disputes",
    body: "Payment status tracking, proof, clear terms and manual confirmation.",
  },
  {
    title: "Delivery delays",
    body: "ETA ranges, route batching and customer updates.",
  },
  {
    title: "Customer trust",
    body: "Branded riders, proof-of-delivery, clear fees and support flow.",
  },
  {
    title: "Marketing waste",
    body: "Test small, scale winners, track CAC and conversion.",
  },
  {
    title: "Procurement risk",
    body: "Inspect bikes, document serial numbers, confirm warranty and verify quote/pro forma before payment.",
  },
];

export const investorOptions: SimpleCard[] = [
  {
    title: "Option A: Revenue-share pilot funding",
    body: "Investor receives an agreed percentage of Runners gross profit or gross revenue until 1.3x–1.5x return is repaid, subject to legal review.",
  },
  {
    title: "Option B: Secured pilot loan",
    body: "Fixed repayment from pilot revenues, potentially secured against operating fleet assets, subject to legal review.",
  },
  {
    title: "Option C: Fleet finance partnership",
    body: "Investor funds/owns bikes and receives lease/revenue-share return with Runners buyout option, subject to legal review.",
  },
  {
    title: "Option D: Convertible note / SAFE",
    body: "Investor receives long-term equity upside, converting at a future priced round, subject to legal review.",
  },
];

export const fallbackCards: SimpleCard[] = [
  {
    title: "Office OS",
    body: "Lunch preorder, group office orders, staff errands, pharmacy/dry cleaning, corporate delivery routes and office admin dashboard.",
  },
  {
    title: "Estate OS",
    body: "Resident errands, groceries/pharmacy/food, laundry pickup, multi-store mall orders and estate gate/security coordination.",
  },
];

export const plan = [
  {
    title: "Day 0–30",
    body: "Secure funding, purchase bikes, finalise rider onboarding, polish Funding Room/Mall OS, secure mall/tenant pilot discussions, prepare marketing assets and set up QR/tenant flows.",
  },
  {
    title: "Day 31–60",
    body: "Launch controlled pilot, onboard 7–10 tenants, run lunch preorder campaign, track deliveries/issues/revenue, produce daily reports and optimise riders/routes/creative.",
  },
  {
    title: "Day 61–90",
    body: "Produce pilot case study, approach second mall, activate Office OS fallback/expansion, refine financial model and raise larger seed/scale funding.",
  },
];

export const qas: QA[] = [
  {
    question: "What if mall approval delays?",
    answer: "The fleet and platform are not single-mall dependent. The same bikes, Runnerbot 2 workflow, Bites AI layer and delivery economics can be deployed into Office OS and Estate OS while mall approval continues.",
  },
  {
    question: "Why buy bikes instead of lease?",
    answer: "Ownership gives Runners more control over availability, branding, utilisation and long-term unit economics. Leasing can still be considered if terms beat ownership economics, but the selected fleet gives the pilot a durable operating asset.",
  },
  {
    question: "What protects investor capital?",
    answer: "Capital is tied to physical fleet assets, procurement checks, rider due diligence, staged deployment, conservative base-case economics and fallback deployment options. Legal terms should define security, repayment and investor rights.",
  },
  {
    question: "How do you know customers will use it?",
    answer: "The pilot is built around existing Lagos behaviours: mall shopping, food demand, lunch rush, WhatsApp-style requests, errands, delivery convenience and time-saving. The pilot tests demand before scaling.",
  },
  {
    question: "Why will malls agree?",
    answer: "The pilot gives malls innovation, tenant engagement, customer convenience and data visibility without upfront software cost during the pilot. It is positioned as controlled, reversible and report-driven.",
  },
  {
    question: "Why not just use Glovo or Chowdeck?",
    answer: "Those platforms prove demand. Runners Mall OS is positioned as a mall operating layer: AI concierge, preorder, tenant approval, multi-store errands, mall reporting and e-bike fulfilment from one hub.",
  },
  {
    question: "What stops competitors copying this?",
    answer: "Execution speed, mall relationships, operating discipline, rider quality, tenant workflows, data, route learning, local trust and brand presence matter more than the idea alone.",
  },
  {
    question: "How do you ensure rider quality?",
    answer: "Valid ID, address verification, guarantors, route tests, scenario tests, safety briefing, 3-day probation, scorecards, supervision and proof-of-delivery compliance.",
  },
  {
    question: "What are the biggest risks?",
    answer: "Mall approval delay, weak order volume, rider reliability, bike downtime, procurement risk and marketing waste. Each has a defined mitigation plan.",
  },
  {
    question: "What does success look like in 30 days?",
    answer: "Bikes purchased, riders onboarded, mall/tenant discussions active, QR/web ordering ready, initial pilot launched or fallback route activated, daily metrics captured and an investor-ready case study forming.",
  },
];

export const deckSlides = [
  {
    no: "01",
    title: "Cover",
    copy: "Runners Errands / Runners Mall OS — AI concierge, preorder, multi-store errands and e-bike delivery for Lagos malls.",
  },
  {
    no: "02",
    title: "Problem",
    copy: "Malls create demand, but customers still waste time browsing, waiting, carrying bags, checking availability and coordinating multiple stores manually.",
  },
  {
    no: "03",
    title: "Insight",
    copy: "One mall is not one merchant. One mall is many tenants, many categories, staff traffic, lunch traffic, family traffic and weekend demand in one physical hub.",
  },
  {
    no: "04",
    title: "Solution",
    copy: "Runners Mall OS turns a physical mall into a digital commerce, preorder, AI concierge and e-bike delivery hub.",
  },
  {
    no: "05",
    title: "Why now",
    copy: "Lagos customers already understand delivery, QR links, mobile ordering and errand convenience. Malls need modern digital engagement without owning logistics.",
  },
  {
    no: "06",
    title: "Pilot model",
    copy: "Proposed 14–30 day pilot: 4 bikes funded, 7–10 tenants targeted, one handoff point, QR/web ordering, tenant approval queue and daily reporting.",
  },
  {
    no: "07",
    title: "Business model",
    copy: "Runners earns from customer-paid delivery fees, multi-store concierge fees, priority fees, large/special handling fees and later premium tenant/mall upgrades.",
  },
  {
    no: "08",
    title: "Unit economics",
    copy: "Base case: ₦2,500 delivery fee, ₦1,200 delivery cost, ₦1,300 delivery gross profit before weighted concierge/priority/special fees.",
  },
  {
    no: "09",
    title: "Financial scenarios",
    copy: "Conservative: 25 orders/day. Base: 50 orders/day. Upside: 100 orders/day. The fleet is deployed first into the highest-density wedge.",
  },
  {
    no: "10",
    title: "Use of funds",
    copy: "Preferred ask ₦18m: fleet acquisition, accessories, maintenance reserve, rider onboarding, marketing, software polish, legal/admin and operations float.",
  },
  {
    no: "11",
    title: "Risk mitigation",
    copy: "Mall approval delay triggers Office OS/Estate OS fallback. Procurement, rider, tenant, payment, marketing and customer trust risks all have controls.",
  },
  {
    no: "12",
    title: "The ask",
    copy: "Runners is seeking ₦18m preferred or ₦15m lean to acquire a tested 4-bike fleet and execute the first commercial pilot.",
  },
];

export const copySections = [
  {
    title: "Investor one-pager",
    body: "Runners Errands is seeking ₦18m preferred / ₦15m lean to acquire a tested 4-bike electric fleet and launch Runners Mall OS: an AI concierge, lunch preorder, multi-store errand and e-bike delivery operating layer for Lagos malls. The first proposed pilot is subject to mall approval and is designed around a dense hub model: one mall, many stores, one delivery. If mall approval delays, the same fleet and platform can deploy into Office OS and Estate OS.",
  },
  {
    title: "5-minute pitch script",
    body: "Runners Errands has found its entry wedge: malls. A mall is not one merchant — it is many restaurants, stores, grocery, pharmacy, beauty, fashion, gifts, electronics, cinema traffic, staff traffic and lunch demand in one hub. Runners Mall OS lets customers ask Runnerbot 2 for help, use Bites AI to decide what to eat, preorder lunch, combine requests across multiple stores and receive e-bike delivery. We are seeking ₦18m preferred to buy 4 tested Spiro Ekon 450 M3 e-bikes, onboard riders, launch the pilot, activate marketing and produce proof for scaling.",
  },
  {
    title: "Use-of-funds summary",
    body: "Preferred ₦18m funds fleet acquisition, accessories, maintenance reserve, rider onboarding, rider kits, marketing, software polish, legal documentation and operations float. Lean ₦15m is viable but provides less marketing and operating resilience.",
  },
  {
    title: "Rider SOP summary",
    body: "Every rider must pass ID verification, address/guarantor checks, route knowledge testing, delivery scenario testing, app workflow testing, safety briefing and a 3-day probation. Performance is tracked by on-time rate, completion rate, customer rating, tenant rating, payment accuracy, proof compliance and professionalism.",
  },
  {
    title: "Marketing plan summary",
    body: "Launch marketing should look local, feel premium, sound human, prove fast and sell plainly. Use founder-led proof videos, Lagos-native hooks, mall QR conversion, tenant counter prompts, Meta/TikTok testing, micro-influencer tests, YouTube explainer content, retargeting and referral credits.",
  },
  {
    title: "Risk plan summary",
    body: "Main risks include mall approval delay, low volume, bike downtime, rider reliability, tenant adoption, payment disputes, delivery delays, customer trust, marketing waste and procurement risk. Each has a mitigation path, including Office OS and Estate OS fallback deployment.",
  },
  {
    title: "Investor terms overview",
    body: "Potential structures include revenue-share pilot funding, secured pilot loan, fleet finance partnership or convertible note/SAFE. All options are subject to legal review and proper documentation.",
  },
];
