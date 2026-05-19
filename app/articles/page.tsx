"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Search, ArrowRight, BookOpen } from "lucide-react";
import CTAButton from "@/components/CTAButton";

/* Metadata is handled by articles/layout.tsx */

interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    slug: "home-compostable-vs-industrial-compostable",
    title: "Home Compostable vs Industrial Compostable: What UK Brands Need to Know",
    description:
      "Understanding the critical difference between home and industrial compostable packaging - and why it matters for UK brands facing greenwashing risks.",
    category: "Certifications",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "abap-as5810-explained",
    title: "ABAP AS5810 Explained: The Gold Standard in Compostable Packaging",
    description:
      "A deep dive into ABAP AS5810 - the world's highest home compostability standard. Learn why it matters and how it differs from other certifications.",
    category: "Certifications",
    readTime: "10 min read",
    featured: true,
  },
  {
    slug: "en13432-not-enough",
    title: "The Truth About EN13432 and Why It's Not Enough for UK Brands",
    description:
      "Why EN13432 industrial compostable packaging often ends up in landfill despite 'compostable' labeling, and what UK brands need to know.",
    category: "Sustainability",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "buyers-guide",
    title: "Custom Compostable Mailers: Complete Buyer's Guide for UK Ecommerce",
    description:
      "Everything you need to know about sourcing custom compostable mailers - from MOQs and pricing to design and certification requirements.",
    category: "Buying Guide",
    readTime: "12 min read",
  },
  {
    slug: "greenwashing-risk",
    title: "Greenwashing Risk: How to Choose Genuinely Sustainable Packaging",
    description:
      "Navigate the complex world of sustainable packaging claims and learn how to identify genuinely compostable packaging that matches your brand values.",
    category: "Sustainability",
    readTime: "9 min read",
  },
  {
    slug: "low-moq-compostable",
    title: "Low MOQ Compostable Packaging: Breaking Down Barriers for Growing Brands",
    description:
      "How accessible minimum order quantities are making premium sustainable packaging available to growing brands, not just large corporations.",
    category: "Buying Guide",
    readTime: "6 min read",
  },
];

const categories = [
  "All",
  "Certifications",
  "Sustainability",
  "Buying Guide",
];

export default function ArticlesPage() {
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-semibold mb-4">
              <BookOpen className="h-4 w-4 mr-2" />
              Resources & Articles
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal-900 mb-6">
              Expert Guides on Compostable Packaging
            </h1>
            <p className="text-xl text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about home compostable packaging,
              certifications, and sustainable packaging solutions for UK brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-charcoal-900 mb-8">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {articles
              .filter((article) => article.featured)
              .map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group hover:shadow-xl transition-all"
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold mb-4">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3 group-hover:text-sage-700 transition-colors">
                    <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="text-charcoal-700 mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-charcoal-200">
                    <span className="text-sm text-charcoal-600 flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </span>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="text-sage-700 hover:text-sage-800 font-semibold text-sm flex items-center group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding bg-gradient-to-b from-white to-cream-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-charcoal-900 mb-8">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="card group hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold mb-4">
                  {article.category}
                </div>
                <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3 group-hover:text-sage-700 transition-colors">
                  <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-charcoal-700 mb-4 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-charcoal-200">
                  <span className="text-sm text-charcoal-600 flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </span>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-sage-700 hover:text-sage-800 font-semibold text-sm flex items-center group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
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
              Ready to Make the Switch?
            </h2>
            <p className="text-xl text-sage-100 leading-relaxed mb-8">
              Get your custom quote for ABAP AS5810 certified home-compostable
              mailers within 48 hours.
            </p>
            <CTAButton
              href="/quote"
              variant="tertiary"
              className="bg-white text-sage-700 hover:bg-cream-50"
            >
              Get Your Custom Quote
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
