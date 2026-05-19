"use client";

import { motion } from "framer-motion";
import {
  Target,
  Award,
  Users,
  Heart,
  CheckCircle2,
  Leaf,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

/* Metadata is handled by about/layout.tsx */

export default function AboutPage() {
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
              Making World-Leading Home Compostable Packaging Accessible
            </h1>
            <p className="text-xl text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
              We&apos;re packaging nerds who care about your brand story and the
              planet. Our mission is simple: combat greenwashing and make
              genuinely home compostable packaging accessible to growing UK
              brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-700 text-sm font-semibold mb-4">
                <AlertCircle className="h-4 w-4 mr-2" />
                The Problem
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900">
                UK Packaging Industry Stuck with Greenwashing
              </h2>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                The UK packaging market is riddled with misleading claims. Most
                packaging labeled as &quot;compostable&quot; only meets EN13432
                industrial standards - meaning it requires specialized facilities
                that barely exist in the UK. This creates a greenwashing risk
                for brands and confusion for customers.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Meanwhile, growing brands face high minimum order quantities
                (10k-50k units) that exclude them from accessing premium
                sustainable packaging solutions. This locks them into
                conventional plastic or low-quality alternatives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-terracotta-400 to-terracotta-600"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <AlertCircle className="h-32 w-32 text-white opacity-80" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-gradient-to-b from-sage-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-sage-400 to-sage-600"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Target className="h-32 w-32 text-white opacity-80" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-semibold mb-4">
                <Target className="h-4 w-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900">
                Make World-Leading Home Compostable Packaging Accessible
              </h2>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                We believe every growing brand deserves access to packaging that
                genuinely aligns with their sustainability values. By offering
                ABAP AS5810 certified home-compostable mailers at accessible
                minimums (from 2,000 units), we&apos;re breaking down barriers
                and enabling brands to make authentic environmental commitments.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Our commitment goes beyond product - we provide founder-level
                service, expert guidance, and genuine relationships. No
                automation, no pressure, just real people who understand your
                brand story.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Standard */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8 mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-semibold">
              <Award className="h-4 w-4 mr-2" />
              Our Standard
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900">
              Why ABAP AS5810 Matters
            </h2>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              ABAP AS5810 is the world&apos;s highest home compostability
              standard. It&apos;s not just a certification - it&apos;s a
              guarantee that packaging will genuinely break down in backyard
              compost conditions.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto rounded-xl border border-charcoal-200 shadow-lg">
              <table className="w-full">
                <thead className="bg-sage-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal-900">
                      Criteria
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-sage-700 bg-sage-200">
                      ABAP AS5810
                      <br />
                      <span className="text-xs font-normal">(Our Standard)</span>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-charcoal-700">
                      EN13432
                      <br />
                      <span className="text-xs font-normal">(Industrial)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal-200">
                  {[
                    {
                      criteria: "Compost Environment",
                      as5810: "Home compost (backyard)",
                      en13432: "Industrial facility required",
                    },
                    {
                      criteria: "Temperature Range",
                      as5810: "20-40°C (ambient)",
                      en13432: "50-70°C (heated)",
                    },
                    {
                      criteria: "Breakdown Time",
                      as5810: "180 days (home conditions)",
                      en13432: "90 days (industrial)",
                    },
                    {
                      criteria: "UK Infrastructure",
                      as5810: "No facility needed",
                      en13432: "Limited availability",
                    },
                    {
                      criteria: "Customer Experience",
                      as5810: "Compost at home",
                      en13432: "Must find facility or landfill",
                    },
                    {
                      criteria: "Greenwashing Risk",
                      as5810: "None - genuine home compost",
                      en13432: "High - often ends in landfill",
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-sage-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-charcoal-900">
                        {row.criteria}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-sage-700 font-medium bg-sage-50">
                        {row.as5810}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-charcoal-700">
                        {row.en13432}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="card bg-sage-50 border-sage-300">
              <p className="text-charcoal-900 leading-relaxed">
                <strong className="text-sage-700">The Technical Difference:</strong>{" "}
                ABAP AS5810 testing simulates real backyard compost conditions
                - ambient temperatures, natural moisture levels, and microbial
                activity. EN13432 testing uses industrial composting conditions
                (high heat, controlled environment) that don&apos;t exist in
                typical UK home compost setups. This means EN13432 packaging
                often requires specialized facilities that barely exist in the UK,
                leading to landfill disposal despite &quot;compostable&quot;
                labeling.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-700 text-sm font-semibold mb-4">
                <Leaf className="h-4 w-4 mr-2" />
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900">
                Australia-Based Expertise + Quality Manufacturing
              </h2>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Our team brings deep expertise from Australia&apos;s leading
                compostable packaging market, combined with quality
                manufacturing partnerships. We understand the technical
                requirements, certification processes, and design possibilities
                that make truly sustainable packaging work.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Every order is made-to-order, ensuring your custom branding is
                executed to perfection. We work closely with you throughout the
                process - from initial quote through design approval, sample
                review, and final delivery.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-terracotta-400 to-cream-400"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Leaf className="h-32 w-32 text-white opacity-80" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8 mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-semibold">
              <Heart className="h-4 w-4 mr-2" />
              Our Commitment
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900">
              Founder-Level Service, No Automation, Real Relationships
            </h2>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              We&apos;re not a faceless corporation. When you work with Zero
              Pack, you work with real people who care about your brand story
              and your success. We provide the kind of service that founders
              themselves would deliver - personalized, expert, and genuinely
              invested in your journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Personal Service",
                description:
                  "Direct access to our team. No automated responses, no endless phone trees - just real conversations.",
              },
              {
                icon: Target,
                title: "Expert Guidance",
                description:
                  "We help you navigate certifications, design options, and sustainability claims with confidence.",
              },
              {
                icon: Heart,
                title: "Genuine Relationships",
                description:
                  "We&apos;re in this for the long term. Your success is our success, and we act like it.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-sage-100 text-sage-700 mb-6">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story Placeholder */}
      <section className="section-padding bg-gradient-to-b from-sage-50 to-white">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card bg-white text-center space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-charcoal-900">
              We&apos;re Packaging Nerds Who Care About Your Brand Story
            </h2>
            <p className="text-lg text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
              Zero Pack was founded by packaging professionals who saw a gap:
              growing brands needed access to genuinely sustainable packaging
              that matched their values, but the market was filled with
              greenwashing and high barriers to entry.
            </p>
            <p className="text-lg text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
              With expertise from Australia&apos;s leading compostable packaging
              market and a commitment to founder-level service, we set out to
              change that. Today, we&apos;re proud to serve 50+ UK brands making
              authentic sustainability commitments.
            </p>
            {/* Placeholder for founder photo */}
            <div className="relative aspect-square max-w-xs mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-sage-300 to-terracotta-400">
              <Users className="h-32 w-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-80" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
