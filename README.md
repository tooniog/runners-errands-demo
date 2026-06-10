This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# Runnerbot 2 Cafe OS Pilot Module

Live module routes:

- `/cafe-pilot`
- `/cafe-pilot/order`
- `/cafe-pilot/admin`
- `/cafe-pilot/chat`
- `/cafe-pilot/economics`
- `/cafe-pilot/demo`

## Investor demo script

1. Open `/`
2. Explain Runners Errands as a Lagos errands platform.
3. Open `/cafe-pilot`
4. Explain the cafe pain point: scattered orders, non-member delivery, payment confirmation, fulfilment and updates.
5. Open `/cafe-pilot/order`
6. Submit a non-member delivery order.
7. Open `/cafe-pilot/admin`
8. Approve the order and assign rider.
9. Open `/cafe-pilot/demo`
10. Walk through order lifecycle.
11. Open `/cafe-pilot/economics`
12. Show revenue and margin logic.
13. Open `/investors`
14. Explain that Cafe OS is the first repeatable B2B pilot vertical.

## Cafe owner demo script

1. “Here’s how a non-member order comes in.”
2. “Your team approves price, availability and prep time.”
3. “Runnerbot 2 calculates delivery fee and suggests a rider.”
4. “The customer gets updates instead of calling repeatedly.”
5. “The delivery is completed with OTP/proof.”
6. “At the end of the day, you get a sales and fulfilment report.”
7. “We can pilot this for 14 days without disrupting your current operations.”

## Limitations in v1

- LocalStorage persistence only.
- Payments are simulated with statuses.
- Rider assignment is mock logic.
- Chatbot works in mock mode unless `OPENAI_API_KEY` exists.
- No live WhatsApp, POS, payment gateway or database integration yet.

## Next production steps

- Supabase/Postgres database
- WhatsApp order intake
- Paystack/Flutterwave payment confirmation
- POS/menu integration
- Real rider assignment
- Real SMS/WhatsApp updates
- Real admin accounts
- Club-specific permissions
- Role-based access control
- Legal/privacy documents
