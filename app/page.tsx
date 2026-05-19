"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TrustBadges from "@/components/TrustBadges";
import CTAButton from "@/components/CTAButton";
import {
  Leaf,
  Package,
  Palette,
  CheckCircle2,
  Quote,
  TrendingUp,
} from "lucide-react";

/* Metadata is handled by the root layout.tsx */

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-semibold">
                <Leaf className="h-4 w-4 mr-2" />
                ABAP AS5810 Certified
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal-900 leading-tight">
                Home Compostable Mailers That Actually Break Down In Your
                Customer&apos;s Backyard
              </h1>
              <p className="text-xl text-charcoal-700 leading-relaxed max-w-2xl">
                The world&apos;s highest compostability standard meets custom
                branding. Unlike EN13432 industrial compostable packaging, our
                ABAP AS5810 certified mailers genuinely break down in backyard
                compost - no facility needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/quote" variant="primary">
                  Get Custom Quote in 48 Hours
                </CTAButton>
                <CTAButton href="/about" variant="secondary">
                  Learn More
                </CTAButton>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sage-400 to-terracotta-500 opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Package className="h-48 w-48 text-white opacity-80" />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <TrustBadges />
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal-900 mb-6">
                Most &quot;Compostable&quot; Packaging Isn&apos;t Actually Home
                Compostable
              </h2>
              <p className="text-xl text-charcoal-700 leading-relaxed">
                UK brands face a critical problem: most packaging labeled as
                &quot;compostable&quot; only meets EN13432 industrial standards.
                This means it won&apos;t break down in your customer&apos;s
                backyard compost bin - and with limited UK industrial composting
                infrastructure, it often ends up in landfill anyway. This is
                greenwashing risk.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card border-2 border-charcoal-200"
            >
              <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-4">
                The Problem
              </h3>
              <ul className="space-y-3 text-charcoal-700">
                <li className="flex items-start">
                  <span className="text-terracotta-600 mr-2">✗</span>
                  <span>EN13432 requires industrial composting facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta-600 mr-2">✗</span>
                  <span>Limited UK industrial composting infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta-600 mr-2">✗</span>
                  <span>Packaging ends up in landfill despite &quot;compostable&quot; label</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta-600 mr-2">✗</span>
                  <span>High MOQ requirements (10k-50k units) exclude growing brands</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card border-2 border-sage-300 bg-sage-50"
            >
              <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-4">
                The Zero Pack Solution
              </h3>
              <ul className="space-y-3 text-charcoal-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-sage-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>ABAP AS5810 breaks down in backyard compost</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-sage-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No industrial facility needed - genuine home composting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-sage-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Low MOQ from 2,000 units - accessible to growing brands</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-sage-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full custom branding - your design, elevated</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Join 50+ UK Brands Reducing Their Environmental Impact
            </h2>
            <p className="text-xl text-charcoal-600">
              Trusted by forward-thinking ecommerce brands across fashion,
              lifestyle, beauty, and eco-conscious sectors
            </p>
          </motion.div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                quote:
                  "Zero Pack transformed our packaging. Our customers love that they can genuinely compost at home. The ABAP AS5810 certification gives us real credibility.",
                author: "Sarah Chen",
                role: "Founder, EcoThread Clothing",
                rating: 5,
              },
              {
                quote:
                  "Finally, a supplier who understands growing brands. The 2,000 unit MOQ made it accessible, and the custom branding perfectly matches our aesthetic.",
                author: "James Mitchell",
                role: "Co-Founder, Green Beauty Co",
                rating: 5,
              },
              {
                quote:
                  "The 48-hour quote was a game-changer. Most suppliers take weeks. Zero Pack's founder-level service and genuine expertise stood out immediately.",
                author: "Emma Williams",
                role: "Sustainability Lead, Natural Living",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-cream-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <Quote className="h-8 w-8 text-sage-300 mb-4" />
                <p className="text-charcoal-700 mb-6 italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-semibold text-charcoal-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-charcoal-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition - Three Columns */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Why Zero Pack Stands Apart
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Leaf,
                title: "Genuinely Home Compostable",
                description:
                  "ABAP AS5810 is the world's highest home compostability standard. Unlike EN13432 industrial compostable packaging, our mailers break down in your customer's backyard compost bin - no facility needed.",
                bgColor: "bg-sage-100",
                textColor: "text-sage-700",
              },
              {
                icon: Package,
                title: "Low Minimums",
                description:
                  "From just 2,000 units, we make premium custom compostable packaging accessible to growing brands. No need to commit to 10k-50k units like competitors require.",
                bgColor: "bg-terracotta-100",
                textColor: "text-terracotta-700",
              },
              {
                icon: Palette,
                title: "Your Brand, Elevated",
                description:
                  "Full custom design and branding. Your logo, your colors, your messaging. Premium packaging that tells your sustainability story beautifully.",
                bgColor: "bg-cream-200",
                textColor: "text-cream-900",
              },
            ].map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group hover:border-sage-300 transition-colors"
              >
                <div
                  className={`inline-flex p-4 rounded-full ${prop.bgColor} ${prop.textColor} mb-6 group-hover:scale-110 transition-transform`}
                >
                  <prop.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-4">
                  {prop.title}
                </h3>
                <p className="text-charcoal-700 leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-gradient-to-b from-white to-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Simple, Transparent Process
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              From quote to delivery, we keep it straightforward and fast
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Request Quote",
                description:
                  "Submit your requirements and receive a detailed custom quote within 48 hours.",
              },
              {
                step: "2",
                title: "Review Custom Design",
                description:
                  "We create your custom branded design and share for your approval.",
              },
              {
                step: "3",
                title: "Approve Sample",
                description:
                  "Receive a physical sample to approve before full production begins.",
              },
              {
                step: "4",
                title: "Receive Your Order",
                description:
                  "Your custom branded compostable mailers arrive, ready to elevate your brand.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-sage-300 transform -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-sage-700 text-white text-3xl font-display font-bold mb-6 mx-auto shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-sage-600 to-sage-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Ready to Transform Your Packaging?
            </h2>
            <p className="text-xl text-sage-100 leading-relaxed">
              Join forward-thinking UK brands making the switch to genuinely
              home compostable packaging. Get your custom quote within 48 hours
              - no obligation, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-sage-700 transition-all duration-200 hover:bg-cream-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sage-800 active:scale-95"
              >
                Get Your Custom Quote
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/showcase"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sage-800 active:scale-95"
              >
                See Customer Showcase
              </Link>
            </div>
            <div className="pt-8 border-t border-sage-500">
              <p className="text-sage-200 text-sm">
                <CheckCircle2 className="inline h-4 w-4 mr-2" />
                Free bonus: Complimentary Packaging Sustainability Assessment
                with every quote
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
