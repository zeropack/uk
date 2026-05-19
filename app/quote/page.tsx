"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Mail,
  Building2,
  Package,
  Calendar,
  FileText,
  Shield,
} from "lucide-react";

interface FormData {
  // Step 1: Company & Contact
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website?: string;

  // Step 2: Order Requirements
  quantity: string;
  dimensions?: string;
  designNeeds: string;
  brandColors?: string;

  // Step 3: Timeline & Additional Info
  timeline: string;
  additionalInfo?: string;
}

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Here you would send data to your backend/API
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom max-w-2xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex p-6 rounded-full bg-sage-100 text-sage-700 mb-6"
          >
            <CheckCircle2 className="h-16 w-16" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900">
            Thank You for Your Request!
          </h1>
          <p className="text-xl text-charcoal-700 leading-relaxed">
            We&apos;ve received your quote request and will send you a detailed
            custom quote within 48 hours. Our team will review your requirements
            and reach out via email with pricing, design options, and next steps.
          </p>
          <div className="card text-left space-y-4">
            <h2 className="text-2xl font-display font-bold text-charcoal-900">
              What Happens Next?
            </h2>
            <ul className="space-y-3 text-charcoal-700">
              <li className="flex items-start">
                <CheckCircle2 className="text-sage-700 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  You&apos;ll receive an email confirmation within 1 hour
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-sage-700 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  Our team will review your requirements and create a custom
                  quote
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-sage-700 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  You&apos;ll receive your detailed quote within 48 hours via
                  email
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-sage-700 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Bonus:</strong> Complimentary Packaging Sustainability
                  Assessment included
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900">
            Get Your Custom Quote in 48 Hours
          </h1>
          <p className="text-xl text-charcoal-700 max-w-2xl mx-auto">
            Tell us about your needs, and we&apos;ll send you a detailed quote
            for ABAP AS5810 certified home-compostable mailers within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center px-4 py-2 bg-sage-100 rounded-full text-sage-700 text-sm font-semibold">
              <Shield className="h-4 w-4 mr-2" />
              No obligation, no pressure
            </div>
            <div className="flex items-center px-4 py-2 bg-sage-100 rounded-full text-sage-700 text-sm font-semibold">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Fast 48-hour quote
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`flex-1 flex items-center ${
                  step < 3 ? "mr-2" : ""
                }`}
              >
                <div
                  className={`flex-1 h-2 rounded-full ${
                    step <= currentStep ? "bg-sage-700" : "bg-charcoal-200"
                  }`}
                />
                {step < 3 && (
                  <div
                    className={`w-2 h-2 rounded-full ml-2 ${
                      step < currentStep ? "bg-sage-700" : "bg-charcoal-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-charcoal-600">
            <span className={currentStep === 1 ? "font-semibold text-sage-700" : ""}>
              Company & Contact
            </span>
            <span className={currentStep === 2 ? "font-semibold text-sage-700" : ""}>
              Order Requirements
            </span>
            <span className={currentStep === 3 ? "font-semibold text-sage-700" : ""}>
              Timeline & Info
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            {/* Step 1: Company & Contact */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="card space-y-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Building2 className="h-6 w-6 text-sage-700" />
                  <h2 className="text-2xl font-display font-bold text-charcoal-900">
                    Company & Contact Details
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-semibold text-charcoal-900 mb-2"
                    >
                      Company Name *
                    </label>
                    <input
                      {...register("companyName", { required: true })}
                      type="text"
                      id="companyName"
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:ring-2 focus:ring-sage-700 focus:border-transparent transition-all"
                      placeholder="Your Company Name"
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-sm text-terracotta-600">
                        Company name is required
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-semibold text-charcoal-900 mb-2"
                    >
                      Website (optional)
                    </label>
                    <input
                      {...register("website")}
                      type="url"
                      id="website"
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:ring-2 focus:ring-sage-700 focus:border-transparent transition-all"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-charcoal-900 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      {...register("firstName", { required: true })}
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:ring-2 focus:ring-sage-700 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-terracotta-600">
                        First name is required
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-charcoal-900 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      {...register("lastName", { required: true })}
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:ring-2 focus:ring-sage-700 focus:border-transparent transition-all"
                      placeholder="Smith"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-terracotta-600">
                        Last name is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-charcoal-900 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:ring-2 focus:ring-sage-700 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-terracotta-600">
                        Valid email is required
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-charcoal-900 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      {...register("phone", { required: true })}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:ring-2 focus:ring-sage-700 focus:border-transparent transition-all"
                      placeholder="+44 20 1234 5678"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-terracotta-600">
                        Phone number is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Order Requirements */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="card space-y-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Package className="h-6 w-6 text-sage-700" />
                  <h2 className="text-2xl font-display font-bold text-charcoal-900">
                    Order Requirements
                  </h2>
                </div>

                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-semibold text-charcoal-900 mb-2"
                  >
                    Estimated Quantity *
                  </label>
                  <select
                    {...register("quantity", { required: true })}
                    id="quantity"
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:ring-2 focus:ring-sage-700 focus:border-transparent transition-all"
                  >
                    <option value="">Select quantity range</option>
                    <option value="2000-5000">2,000 - 5,000 units</option>
                    <option value="5000-10000">5,000 - 10,000 units</option>
                    <option value="10000-25000">10,000 - 25,000 units</option>
                    <option value="25000+">25,000+ units</option>
                  </select>
                  {errors.quantity && (
                    <p className="mt-1 text-sm text-terracotta-600">
                      Please select a quantity range
                    </p>
                  )}
                  <p className="mt-2 text-sm text-charcoal-600">
                    Minimum order: 2,000 units
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="dimensions"
                    className="block text-sm font-semibold text-charcoal-900 mb-2"
                  >
                    Mailer Dimensions (optional)
                  </label>
                  <input
                    {...register("dimensions")}
                    type="text"
                    id="dimensions"
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:ring-2 focus:ring-sage-700 focus:border-transparent transition-all"
                    placeholder="e.g., 300mm x 400mm or standard A5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="designNeeds"
                    className="block text-sm font-semibold text-charcoal-900 mb-2"
                  >
                    Design Requirements *
                  </label>
                  <textarea
                    {...register("designNeeds", { required: true })}
                    id="designNeeds"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:ring-2 focus:ring-sage-700 focus:border-transparent transition-all"
                    placeholder="Tell us about your branding needs - logo, colors, text, imagery, etc."
                  />
                  {errors.designNeeds && (
                    <p className="mt-1 text-sm text-terracotta-600">
                      Please describe your design needs
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="brandColors"
                    className="block text-sm font-semibold text-charcoal-900 mb-2"
                  >
                    Brand Colors (optional)
                  </label>
                  <input
                    {...register("brandColors")}
                    type="text"
                    id="brandColors"
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:ring-2 focus:ring-sage-700 focus:border-transparent transition-all"
                    placeholder="e.g., #1A2018, #778B68"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Timeline & Additional Info */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="card space-y-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="h-6 w-6 text-sage-700" />
                  <h2 className="text-2xl font-display font-bold text-charcoal-900">
                    Timeline & Additional Information
                  </h2>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-semibold text-charcoal-900 mb-2"
                  >
                    Desired Timeline *
                  </label>
                  <select
                    {...register("timeline", { required: true })}
                    id="timeline"
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:ring-2 focus:ring-sage-700 focus:border-transparent transition-all"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2months">1-2 months</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                  {errors.timeline && (
                    <p className="mt-1 text-sm text-terracotta-600">
                      Please select a timeline
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="additionalInfo"
                    className="block text-sm font-semibold text-charcoal-900 mb-2"
                  >
                    Additional Information (optional)
                  </label>
                  <textarea
                    {...register("additionalInfo")}
                    id="additionalInfo"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:ring-2 focus:ring-sage-700 focus:border-transparent transition-all"
                    placeholder="Any other details about your project, questions, or special requirements..."
                  />
                </div>

                <div className="bg-sage-50 border border-sage-200 rounded-lg p-6">
                  <h3 className="font-semibold text-charcoal-900 mb-2 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-sage-700" />
                    What Happens Next?
                  </h3>
                  <ul className="space-y-2 text-sm text-charcoal-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-sage-700 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        You&apos;ll receive an email confirmation within 1 hour
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-sage-700 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Our team reviews your requirements and creates a custom
                        quote
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-sage-700 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        You receive your detailed quote within 48 hours
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-sage-700 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Bonus:</strong> Complimentary Packaging
                        Sustainability Assessment included
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Previous
                  </button>
                  <button type="submit" className="btn-primary">
                    Submit Quote Request
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
