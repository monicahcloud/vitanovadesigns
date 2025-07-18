// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";

import ReactMarkdown from "react-markdown";
import Image from "next/image";

const posts = [
  {
    slug: "brand-authority-through-content",
    title: "7 Ways to Build Brand Authority Through Content",
    date: "July 15, 2025",
    image: "/blog/brand-authority.png",
    content: `Establishing brand authority isn’t about chasing the algorithm or chasing trends — it’s about consistently creating value that educates, inspires, or solves a problem. When your audience sees your content as the go-to source in your space, trust follows — and trust leads to conversions.

Here’s how to build authority the right way:

### 1. Publish Long-Form Content That Solves Real Problems

Quick tips are everywhere. But when you create thoughtful, detailed content — whether it's a 2,000-word blog post, a how-to guide, or a strategic case study — you signal depth and expertise.

Long-form content positions you as a teacher, not just a promoter.

### 2. Use Lead Magnets That Exchange Value

Offer checklists, templates, or tools in exchange for email signups. But make sure they solve a real problem. A downloadable calendar isn’t just a PDF — it’s a small but powerful win for your audience. That kind of trust compounds.

### 3. Collaborate With Other Trusted Voices

Appearing as a guest on a podcast, co-writing a post, or running a joint webinar instantly transfers authority. The audience sees your name next to someone they already trust — and credibility goes up.

### 4. Use Data to Back Up Your Claims

General advice sounds generic. But when you support ideas with research, surveys, or case results, your content moves from “nice idea” to “I believe them.”

### 5. Be Clear, Not Clever

The best teachers simplify, not complicate. Write how you speak. Make your content easy to understand and easy to act on. Authority grows when people can follow your thinking.

### 6. Brand Your Voice and Design

Authority isn’t just about what you say — it’s also how it looks and feels. A consistent voice, color system, and design language across your blog, emails, and social posts creates instant recognition and a premium feel.

### 7. Repurpose Everything

One blog post can become a Twitter thread, a short-form video, three emails, and a webinar topic. Authority grows through consistency and frequency — not just brilliance.

---

Authority is built over time, not overnight. But by consistently publishing content with depth, clarity, and relevance — and showing up across multiple touchpoints — you become the trusted voice your market turns to.
`,
  },
  {
    slug: "marketing-funnel-optimization",
    title: "Optimizing Marketing Funnels for Real Results",
    date: "July 10, 2025",
    image: "/blog/marketing-funnel.png",
    content: `Most businesses have a funnel — but few have one that actually works.

Why? Because too often, funnels are built with vanity metrics, generic email sequences, or recycled lead magnets. A funnel that converts starts with understanding your customer’s true journey — and removing friction at every stage.

Here’s how to build a marketing funnel that performs in the real world:

---

### 1. Understand the Modern Buyer’s Journey

Forget perfect funnels. People don’t move in straight lines. They bounce between platforms, revisit reviews, ghost emails, and return weeks later. Your funnel must account for this non-linear behavior by meeting your audience wherever they are — consistently.

---

### 2. Awareness: Start With Problem-Focused Content

Your audience doesn't want your product — they want a solution.

Create short-form video, blog posts, carousels, or paid ads that focus on **pain points** and **outcomes**, not just features. Use messaging that empathizes with what they're struggling with. This earns attention.

---

### 3. Consideration: Deliver Value Before the Ask

Now that they’ve found you, prove you're worth their time.

Use automated nurture sequences, retargeting ads, lead magnets, or webinars to build trust. This is where testimonials, case studies, and how-to content shine.

---

### 4. Decision: Make It Easy to Say Yes

Here’s where most funnels fall apart. Don’t just say “book a call” — show what they’ll get. Add urgency. Offer clarity.

Examples:
- “Get your free strategy audit (worth $500)”
- “Only 3 spots left for this month’s cohort”
- “See how Company X grew 3x using our framework”

Remove uncertainty, add incentive.

---

### 5. Fix the Leakiest Stage First

Don’t obsess over your entire funnel. Fix the weakest link first.

If you have traffic but no leads, your awareness isn’t converting. If you have leads but no sales, your nurture is weak. Use analytics to identify drop-off points — then improve just one layer at a time.

---

💡 **Pro Tip:** Build backwards. Start by crafting a killer offer and decision-stage landing page. Then work your way up the funnel to drive traffic that fits.

Real funnel success isn’t about complexity — it’s about clarity, relevance, and empathy at every stage.
`,
  },
  {
    slug: "understanding-kpis",
    title: "Understanding KPIs: What to Track and Why",
    date: "June 30, 2025",
    image: "/blog/kpi.png",
    content: `

Not all numbers matter.

In a world overflowing with dashboards, charts, and vanity metrics, it’s easy to get distracted by data that *looks* good but doesn’t *mean* anything. That’s why understanding KPIs—key performance indicators—is critical.

The right KPIs help you:
- Stay focused on business objectives
- Identify what’s working (and what’s not)
- Make confident, data-backed decisions

Let’s break it down.

---

### What is a KPI, really?

A KPI is **a measurable value that reflects the effectiveness of a specific strategy**. It’s not just any metric. Website traffic? That’s a metric. Conversion rate? That’s a KPI.

The difference? **KPIs tie directly to goals.**

---

### Vanity Metrics vs. Value Metrics

Here are a few common traps:
- 👎 **Impressions** ≠ revenue
- 👎 **Likes** ≠ brand loyalty
- 👎 **Followers** ≠ sales

Instead, focus on:
- ✅ **Customer Lifetime Value (CLTV)**
- ✅ **Lead-to-Close Ratio**
- ✅ **Customer Acquisition Cost (CAC)**
- ✅ **Email Click-Through Rate**
- ✅ **Marketing ROI**

If it doesn’t guide strategy or decision-making, it’s not a KPI—it’s just noise.

---

### Choose KPIs That Align With Your Stage

Are you launching a new product? Focus on early traction and user feedback. Scaling? Shift toward retention and lifetime value. Don’t just pick KPIs because someone on LinkedIn said they matter—tie them to *your* business model.

---

### Monitor. Adjust. Improve.

Tracking KPIs is a process, not a checkbox. Set review cycles. Dig deeper into outliers. And most importantly, **act on the data**.

If a campaign’s not converting, test a new angle. If CAC is too high, optimize your funnel.

---

The right KPIs keep you sharp, focused, and ready to scale. Don’t let the dashboard overwhelm you—let it empower you.`,
  },

  {
    slug: "email-marketing-clicks",
    title: "How to Write Emails That Actually Get Clicked",
    date: "June 20, 2025",
    image: "/blog/email-clicks.png",
    content: `

Email marketing is still one of the most profitable digital strategies—but only when it’s done right.

The average person receives over 100 emails per day. If you want to stand out, you have to earn every open and every click. Here's how.

---

### 1. The Subject Line = The First Battle

Your subject line determines whether your email gets opened—or ignored.

**Good examples:**
- “Quick fix for your slow sales month”
- “What our top clients are doing differently”
- “You missed this in your last campaign…”

**Tips:**
- Ask a question
- Use curiosity or urgency
- Keep it under 60 characters

---

### 2. Write Like You Talk

You’re not writing an essay—you’re starting a conversation.

Avoid corporate jargon. Be clear. Be direct. Use contractions. Break long paragraphs into short, skimmable chunks.

---

### 3. One Idea Per Email

The best emails do **one thing really well**. Don’t cram in 5 topics, 3 CTAs, and a bio.

Pick one:
- Drive traffic to a blog post
- Invite them to a webinar
- Share a tip or resource

Then write your email around that one goal.

---

### 4. Make Your CTA Impossible to Miss

Your call to action should:
- Be bold
- Stand alone visually
- Use action language (e.g. “Download the guide,” not “Click here”)

Don’t bury your CTA. Highlight it.

---

### 5. Timing Matters

Every audience is different. A/B test:
- Weekdays vs. weekends
- Morning vs. afternoon
- Day of the month

Over time, you’ll find your sweet spot.

---

### Final Tip: Write with empathy.

If your email helps them win—solve a problem, gain clarity, save time—they’ll click. And when people click often enough, they trust you. And when they trust you? They buy.

That's email marketing done right.`,
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.content.slice(0, 150),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 ">
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={1300}
          height={800}
          className="w-full rounded-xl mb-8 object-cover h-130"
        />
      )}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text mb-2">
        {post.title}
      </h1>
      <p className="text-sm text-gray-500 mb-10">{post.date}</p>

      <article className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-purple-700 prose-p:leading-relaxed prose-p:text-gray-800 prose-a:text-cyan-600 prose-a:font-medium hover:prose-a:underline prose-strong:text-purple-800 prose-blockquote:border-l-4 prose-blockquote:border-purple-300 prose-blockquote:pl-4 prose-blockquote:text-gray-600 prose-li:marker:text-purple-600 prose-img:rounded-xl">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </main>
  );
}
