import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, FileText } from "lucide-react";
import CTAButton from "@/components/CTAButton";

// This would normally come from a CMS or markdown files
const articles: Record<string, any> = {
  "home-compostable-vs-industrial-compostable": {
    title: "Home Compostable vs Industrial Compostable: What UK Brands Need to Know",
    description:
      "Understanding the critical difference between home and industrial compostable packaging - and why it matters for UK brands facing greenwashing risks.",
    category: "Certifications",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    content: `
# Home Compostable vs Industrial Compostable: What UK Brands Need to Know

The packaging industry is full of confusing terminology, and nowhere is this more evident than with "compostable" packaging. Understanding the difference between home compostable and industrial compostable is critical for UK brands who want to make genuine sustainability commitments.

## What is Industrial Compostable Packaging?

Industrial compostable packaging (typically certified to EN13432) requires specialized composting facilities with controlled temperatures (50-70°C), specific moisture levels, and managed microbial activity. These facilities are rare in the UK - estimates suggest less than 5% of UK waste goes through industrial composting.

**The Problem:** Most packaging labeled as "compostable" in the UK only meets EN13432 standards. This means:
- It won't break down in a typical home compost bin
- It requires facilities that barely exist in the UK
- It often ends up in landfill despite the "compostable" label
- This creates greenwashing risk for brands

## What is Home Compostable Packaging?

Home compostable packaging (certified to ABAP AS5810) breaks down in typical backyard compost conditions:
- Ambient temperatures (20-40°C)
- Natural moisture levels
- Standard home composting conditions
- No specialized facility needed

**The Solution:** ABAP AS5810 is the world's highest home compostability standard. It guarantees packaging will genuinely break down in your customer's backyard compost bin.

## Why This Matters for UK Brands

UK brands face a unique challenge: limited industrial composting infrastructure means EN13432 packaging often ends up in landfill. This creates:
1. **Greenwashing Risk** - Claims of compostability that don't hold up in practice
2. **Customer Confusion** - Customers expect compostable packaging to work at home
3. **Brand Damage** - When packaging doesn't actually compost as expected

## Making the Right Choice

For UK brands committed to genuine sustainability, home compostable (ABAP AS5810) packaging offers:
- Authentic environmental benefits
- Better customer experience
- Reduced greenwashing risk
- Aligned with customer expectations

Choose packaging that genuinely matches your brand values. Choose home compostable.
    `,
  },
  "abap-as5810-explained": {
    title: "ABAP AS5810 Explained: The Gold Standard in Compostable Packaging",
    description:
      "A deep dive into ABAP AS5810 - the world's highest home compostability standard. Learn why it matters and how it differs from other certifications.",
    category: "Certifications",
    readTime: "10 min read",
    publishDate: "2024-01-20",
    content: `
# ABAP AS5810 Explained: The Gold Standard in Compostable Packaging

ABAP AS5810 is the world's highest home compostability standard. But what does it actually mean, and why should UK brands care?

## What is ABAP AS5810?

The Australian Bioplastics Association (ABAP) AS5810 standard certifies that packaging will break down in typical home composting conditions within 180 days. This is the strictest home compostability standard globally.

## Testing Requirements

ABAP AS5810 testing simulates real backyard compost conditions:
- Ambient temperatures (20-40°C)
- Natural moisture levels
- Standard microbial activity
- Typical home composting timeline

Unlike EN13432, which uses industrial composting conditions, AS5810 tests in conditions that mirror what customers actually have at home.

## Why AS5810 Matters

1. **Genuine Home Composting** - Guarantees breakdown in backyard compost
2. **No Facility Needed** - Customers can compost at home
3. **Reduced Greenwashing** - Authentic environmental benefits
4. **Better Customer Experience** - Aligns with customer expectations

## AS5810 vs EN13432

| Feature | ABAP AS5810 | EN13432 |
|---------|-------------|---------|
| Compost Environment | Home compost | Industrial facility |
| Temperature | 20-40°C (ambient) | 50-70°C (heated) |
| Breakdown Time | 180 days | 90 days |
| UK Infrastructure | No facility needed | Limited availability |
| Customer Experience | Compost at home | Must find facility |

## The Bottom Line

ABAP AS5810 is the gold standard because it guarantees what customers expect: packaging that genuinely breaks down in their backyard compost bin. For UK brands, this means authentic sustainability commitments that match customer expectations.
    `,
  },
  "en13432-not-enough": {
    title: "The Truth About EN13432 and Why It's Not Enough for UK Brands",
    description:
      "Why EN13432 industrial compostable packaging often ends up in landfill despite 'compostable' labeling, and what UK brands need to know.",
    category: "Sustainability",
    readTime: "7 min read",
    publishDate: "2024-02-01",
    content: `
# The Truth About EN13432 and Why It's Not Enough for UK Brands

EN13432 is Europe's industrial compostability standard, but for UK brands, it's often not enough. Here's why most EN13432 packaging ends up in landfill despite "compostable" labeling.

## What is EN13432?

EN13432 is the European standard for industrial composting. It certifies that packaging will break down in specialized industrial composting facilities under controlled conditions:
- High temperatures (50-70°C)
- Controlled moisture levels
- Managed microbial activity
- Specific timeframe (90 days)

## The UK Infrastructure Problem

The critical issue for UK brands: industrial composting facilities are extremely limited in the UK. Estimates suggest:
- Less than 5% of UK waste goes through industrial composting
- Most EN13432 packaging ends up in landfill or incineration
- Even when customers try to compost it, it won't break down in home compost bins

## Why EN13432 Creates Greenwashing Risk

**Customer Expectations vs Reality:**
- Customers see "compostable" and expect it to work at home
- EN13432 packaging requires facilities that barely exist in the UK
- When packaging doesn't compost as expected, brands face greenwashing accusations

**The Disposal Reality:**
1. Customer receives EN13432 "compostable" packaging
2. Customer tries to compost at home (doesn't work)
3. Customer searches for industrial facility (can't find one)
4. Packaging ends up in landfill
5. Brand faces criticism for misleading claims

## The ABAP AS5810 Alternative

ABAP AS5810 home compostable packaging solves these problems:
- **Genuine home composting** - Works in backyard compost bins
- **No facility needed** - Customers can compost at home
- **Meets expectations** - Aligns with what customers expect from "compostable"
- **Reduced greenwashing risk** - Packaging actually composts as claimed

## Making the Right Choice for UK Brands

For UK brands committed to genuine sustainability, the choice is clear:
- **EN13432**: Industrial compostable, requires rare facilities, often ends in landfill
- **ABAP AS5810**: Home compostable, no facility needed, genuinely composts

Choose packaging that actually works for your customers. Choose ABAP AS5810.
    `,
  },
  "buyers-guide": {
    title: "Custom Compostable Mailers: Complete Buyer's Guide for UK Ecommerce",
    description:
      "Everything you need to know about sourcing custom compostable mailers - from MOQs and pricing to design and certification requirements.",
    category: "Buying Guide",
    readTime: "12 min read",
    publishDate: "2024-02-15",
    content: `
# Custom Compostable Mailers: Complete Buyer's Guide for UK Ecommerce

Everything you need to know about sourcing custom compostable mailers for your UK ecommerce brand.

## Understanding Compostability Certifications

**ABAP AS5810 (Home Compostable):**
- Breaks down in backyard compost
- No facility needed
- Best for UK brands (no infrastructure dependency)
- World's highest home compostability standard

**EN13432 (Industrial Compostable):**
- Requires specialized facilities
- Limited UK infrastructure
- Often ends up in landfill
- Creates greenwashing risk

## Minimum Order Quantities (MOQ)

**Traditional Suppliers:**
- Typically 10,000 - 50,000 units
- Too high for growing brands
- Lock-in to large orders

**Zero Pack:**
- Minimum 2,000 units
- Accessible to growing brands
- Flexible ordering

## Custom Branding Options

**Design Elements:**
- Logo printing
- Custom colors
- Brand messaging
- Imagery and graphics

**Process:**
1. Request quote with design brief
2. Review custom design mockup
3. Approve sample
4. Full production

## Pricing Considerations

Factors affecting pricing:
- Order quantity
- Custom design complexity
- Mailer dimensions
- Printing requirements
- Timeline

**Get Your Quote:** Most suppliers take weeks. Zero Pack provides quotes within 48 hours.

## Timeline Expectations

**Standard Process:**
1. Quote: 48 hours
2. Design: 1-2 weeks
3. Sample: 1-2 weeks
4. Production: 3-6 weeks
5. Shipping: 1-2 weeks

**Total:** Typically 6-10 weeks from quote to delivery

## Making the Decision

**Key Questions to Ask:**
1. What certification does it meet? (ABAP AS5810 vs EN13432)
2. What's the minimum order quantity?
3. How long for quote and delivery?
4. What's included in the price?
5. What's the custom design process?

**Red Flags:**
- Vague certification claims
- Very high MOQs (50k+)
- Slow response times
- No sample review process

Choose a supplier who understands your needs and provides genuine home compostable solutions.
    `,
  },
  "greenwashing-risk": {
    title: "Greenwashing Risk: How to Choose Genuinely Sustainable Packaging",
    description:
      "Navigate the complex world of sustainable packaging claims and learn how to identify genuinely compostable packaging that matches your brand values.",
    category: "Sustainability",
    readTime: "9 min read",
    publishDate: "2024-03-01",
    content: `
# Greenwashing Risk: How to Choose Genuinely Sustainable Packaging

Greenwashing is a real risk in the packaging industry. Here's how to identify genuinely sustainable packaging that matches your brand values.

## What is Greenwashing?

Greenwashing occurs when brands make misleading environmental claims. In packaging, common examples include:
- Calling packaging "compostable" when it requires rare facilities
- Using vague terms like "eco-friendly" without certification
- Highlighting one benefit while ignoring environmental downsides
- Making claims that don't hold up in practice

## Red Flags in Packaging Claims

**Vague Terminology:**
- "Eco-friendly" without specifics
- "Biodegradable" without timeframe or conditions
- "Sustainable" without certification
- "Green" without evidence

**Certification Confusion:**
- Claiming "compostable" without certification
- Using industrial certifications (EN13432) when home composting is implied
- Unclear certification requirements

**Infrastructure Assumptions:**
- Assuming customers have access to industrial facilities
- Not considering UK infrastructure limitations
- Ignoring disposal reality

## How to Verify Claims

**Check Certifications:**
1. Look for specific certification standards (ABAP AS5810, EN13432, etc.)
2. Verify certification is current and valid
3. Understand what the certification actually requires

**Ask Specific Questions:**
1. Where will this actually be composted?
2. What infrastructure is needed?
3. What happens if proper disposal isn't available?
4. Can customers realistically compost this?

**Consider Your Market:**
- UK has limited industrial composting
- Customers expect home composting capability
- Verify claims match UK reality

## Making Genuine Sustainability Choices

**Best Practices:**
1. Choose ABAP AS5810 for genuine home composting
2. Be transparent about disposal requirements
3. Provide clear customer instructions
4. Verify claims with third-party certifications
5. Consider actual disposal outcomes, not just labels

**The Zero Pack Approach:**
- ABAP AS5810 certified (genuine home composting)
- Clear, transparent communication
- No misleading claims
- Proven compostability in real conditions

Choose packaging partners who prioritize genuine sustainability over marketing claims.
    `,
  },
  "low-moq-compostable": {
    title: "Low MOQ Compostable Packaging: Breaking Down Barriers for Growing Brands",
    description:
      "How accessible minimum order quantities are making premium sustainable packaging available to growing brands, not just large corporations.",
    category: "Buying Guide",
    readTime: "6 min read",
    publishDate: "2024-03-15",
    content: `
# Low MOQ Compostable Packaging: Breaking Down Barriers for Growing Brands

For too long, premium sustainable packaging was only accessible to large corporations with huge order volumes. Low MOQ options are changing that.

## The Traditional Barrier

**Traditional MOQs:**
- 10,000 - 50,000 units typical minimum
- Too high for growing brands
- Forces small brands into conventional plastic
- Excludes innovative sustainability solutions

**The Problem:**
Growing brands want to align packaging with values, but high MOQs create barriers:
- Too much inventory risk
- Limited capital tied up
- Uncertainty about demand
- Can't afford to experiment

## The Low MOQ Solution

**Accessible Minimums:**
- 2,000 units minimum (Zero Pack)
- Manageable for growing brands
- Lower risk, more flexibility
- Enables sustainability commitments

**Benefits:**
1. **Lower Risk** - Smaller initial investment
2. **Flexibility** - Easier to adjust and iterate
3. **Accessibility** - Premium options for growing brands
4. **Innovation** - Ability to try new solutions

## Making It Work for Your Brand

**When Low MOQ Makes Sense:**
- Growing brand (£500k - £10m turnover)
- Want to test sustainable packaging
- Limited capital for large orders
- Need flexibility to adjust

**Considerations:**
- Unit costs may be slightly higher
- Still need to plan ahead
- Sample review process still important

## The Future of Sustainable Packaging

Low MOQ options are democratizing sustainable packaging:
- More brands can make commitments
- Innovation becomes accessible
- Market shifts toward sustainability
- Growing brands lead the way

**The Zero Pack Difference:**
From 2,000 units, we make ABAP AS5810 home compostable packaging accessible to growing brands. No need to wait until you're a corporate giant to make genuine sustainability commitments.
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = articles[params.slug];

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishDate,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <article className="pt-32 pb-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/articles"
          className="inline-flex items-center text-sage-700 hover:text-sage-800 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-semibold mb-6">
            {article.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900 mb-6">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-charcoal-600">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {new Date(article.publishDate).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              {article.readTime}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="article-content prose prose-lg max-w-none mb-12 text-charcoal-700 leading-relaxed">
          <div
            dangerouslySetInnerHTML={{
              __html: article.content
                .split("\n\n")
                .map((para: string) => {
                  // Headings
                  if (para.match(/^#\s/)) {
                    return `<h2 class="text-3xl font-display font-bold text-charcoal-900 mt-12 mb-6 first:mt-0">${para.replace(/^#\s/, "")}</h2>`;
                  }
                  if (para.match(/^##\s/)) {
                    return `<h3 class="text-2xl font-display font-bold text-charcoal-900 mt-8 mb-4">${para.replace(/^##\s/, "")}</h3>`;
                  }
                  // Lists
                  if (para.match(/^-\s/)) {
                    const items = para
                      .split("\n")
                      .filter((line) => line.trim().startsWith("-"))
                      .map(
                        (line) =>
                          `<li class="ml-6 mb-3 list-disc">${line
                            .replace(/^-\s/, "")
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-charcoal-900">$1</strong>')}</li>`
                      )
                      .join("");
                    return `<ul class="my-6 space-y-2">${items}</ul>`;
                  }
                  // Numbered lists
                  if (para.match(/^\d+\.\s/)) {
                    const items = para
                      .split("\n")
                      .filter((line) => /^\d+\.\s/.test(line.trim()))
                      .map(
                        (line) =>
                          `<li class="ml-6 mb-3 list-decimal">${line
                            .replace(/^\d+\.\s/, "")
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-charcoal-900">$1</strong>')}</li>`
                      )
                      .join("");
                    return `<ol class="my-6 space-y-2">${items}</ol>`;
                  }
                  // Regular paragraphs
                  if (para.trim()) {
                    return `<p class="mb-6 leading-relaxed">${para
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-charcoal-900">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>`;
                  }
                  return "";
                })
                .join(""),
            }}
          />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-sage-600 to-sage-800 rounded-2xl p-8 md:p-12 text-white text-center space-y-6">
          <h2 className="text-3xl font-display font-bold">
            Ready to Make the Switch?
          </h2>
          <p className="text-xl text-sage-100 max-w-2xl mx-auto">
            Get your custom quote for ABAP AS5810 certified home-compostable
            mailers within 48 hours.
          </p>
          <CTAButton
            href="/quote"
            className="bg-white text-sage-700 hover:bg-cream-50"
          >
            Get Your Custom Quote
          </CTAButton>
        </div>
      </div>
    </article>
  );
}
