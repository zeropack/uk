"use client";

import { motion } from "framer-motion";
import { Package, Quote, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";

/* Metadata is handled by showcase/layout.tsx */

interface CaseStudy {
  brand: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  testimonial: string;
  author: string;
  role: string;
  image?: string;
}

const caseStudies: CaseStudy[] = [
  {
    brand: "EcoThread Clothing",
    industry: "Fashion & Apparel",
    challenge:
      "Needed genuinely home-compostable packaging to align with brand values, but existing suppliers required 10k+ MOQ which was too high for their growth stage.",
    solution:
      "Zero Pack's 2,000 unit MOQ made it accessible. Custom branded ABAP AS5810 certified mailers with their signature earth-tone design.",
    result:
      "95% customer satisfaction on packaging. Positive feedback on home compostability. Brand story elevated through authentic sustainability.",
    testimonial:
      "Zero Pack transformed our packaging. Our customers love that they can genuinely compost at home. The ABAP AS5810 certification gives us real credibility, and the 2,000 unit MOQ meant we could finally make the switch.",
    author: "Sarah Chen",
    role: "Founder, EcoThread Clothing",
  },
  {
    brand: "Green Beauty Co",
    industry: "Beauty & Cosmetics",
    challenge:
      "Seeking premium compostable packaging that matched their luxury aesthetic, but struggled with suppliers who didn't understand their design vision.",
    solution:
      "Full custom design process with Zero Pack, creating elegant branded mailers that matched their minimalist aesthetic while maintaining ABAP AS5810 certification.",
    result:
      "Packaging aligns perfectly with brand identity. Customers appreciate the premium feel and home compostability. 40% increase in positive packaging feedback.",
    testimonial:
      "Finally, a supplier who understands growing brands. The 2,000 unit MOQ made it accessible, and the custom branding perfectly matches our aesthetic. Zero Pack's team really gets our vision.",
    author: "James Mitchell",
    role: "Co-Founder, Green Beauty Co",
  },
  {
    brand: "Natural Living",
    industry: "Lifestyle & Home",
    challenge:
      "Wanted to switch from conventional plastic mailers but needed fast turnaround and transparent pricing to meet Q4 launch timeline.",
    solution:
      "48-hour quote turnaround enabled quick decision-making. Streamlined custom design process and fast sample approval got them launch-ready on schedule.",
    result:
      "Met Q4 launch deadline. Eliminated plastic packaging. Customer response overwhelmingly positive. Zero Pack's speed and transparency were game-changers.",
    testimonial:
      "The 48-hour quote was a game-changer. Most suppliers take weeks. Zero Pack's founder-level service and genuine expertise stood out immediately. We couldn't have launched on time without them.",
    author: "Emma Williams",
    role: "Sustainability Lead, Natural Living",
  },
];

export default function ShowcasePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal-900 mb-6">
              Customer Showcase
            </h1>
            <p className="text-xl text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
              See how forward-thinking UK brands are transforming their
              packaging with genuinely home-compostable mailers that elevate
              their brand story and reduce environmental impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-2xl transition-all group"
              >
                {/* Brand Header */}
                <div className="mb-6 pb-6 border-b border-charcoal-200">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold mb-3">
                    {study.industry}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-2">
                    {study.brand}
                  </h3>
                </div>

                {/* Placeholder for product image */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-sage-200 to-terracotta-200 mb-6 group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Package className="h-24 w-24 text-white opacity-60" />
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal-900 mb-2 flex items-center">
                    <span className="text-terracotta-600 mr-2">Challenge:</span>
                  </h4>
                  <p className="text-sm text-charcoal-700 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal-900 mb-2 flex items-center">
                    <CheckCircle2 className="text-sage-700 mr-2 h-4 w-4" />
                    Solution:
                  </h4>
                  <p className="text-sm text-charcoal-700 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Result */}
                <div className="mb-6 p-4 bg-sage-50 rounded-lg border border-sage-200">
                  <h4 className="font-semibold text-sage-900 mb-2 flex items-center">
                    <TrendingUp className="text-sage-700 mr-2 h-4 w-4" />
                    Result:
                  </h4>
                  <p className="text-sm text-sage-900 leading-relaxed">
                    {study.result}
                  </p>
                </div>

                {/* Testimonial */}
                <div className="pt-6 border-t border-charcoal-200">
                  <Quote className="h-6 w-6 text-sage-300 mb-3" />
                  <p className="text-sm text-charcoal-700 italic leading-relaxed mb-4">
                    &quot;{study.testimonial}&quot;
                  </p>
                  <div>
                    <p className="font-semibold text-sm text-charcoal-900">
                      {study.author}
                    </p>
                    <p className="text-xs text-charcoal-600">{study.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-sage-600 to-sage-800 text-white">
        <div className="container-custom max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Want to Be Featured Here?
            </h2>
            <p className="text-xl text-sage-100 leading-relaxed mb-8">
              Join forward-thinking UK brands making the switch to genuinely
              home-compostable packaging. Get your custom quote within 48 hours.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-sage-700 transition-all duration-200 hover:bg-cream-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sage-800 active:scale-95"
            >
              Get Your Custom Quote
              <TrendingUp className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
