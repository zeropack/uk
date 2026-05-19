import Link from "next/link";
import { Package, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-cream-50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-sage-400" />
              <span className="text-2xl font-display font-bold">Zero Pack</span>
            </Link>
            <p className="text-cream-200 text-sm leading-relaxed">
              Premium custom branded home-compostable mailers certified to ABAP
              AS5810. Made accessible to growing UK brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-cream-200 hover:text-sage-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-cream-200 hover:text-sage-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  className="text-cream-200 hover:text-sage-400 transition-colors text-sm"
                >
                  Customer Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-cream-200 hover:text-sage-400 transition-colors text-sm"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-cream-200 hover:text-sage-400 transition-colors text-sm"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/articles/home-compostable-vs-industrial-compostable"
                  className="text-cream-200 hover:text-sage-400 transition-colors text-sm"
                >
                  Home vs Industrial Compostable
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/abap-as5810-explained"
                  className="text-cream-200 hover:text-sage-400 transition-colors text-sm"
                >
                  ABAP AS5810 Explained
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/en13432-not-enough"
                  className="text-cream-200 hover:text-sage-400 transition-colors text-sm"
                >
                  Why EN13432 Isn&apos;t Enough
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/buyers-guide"
                  className="text-cream-200 hover:text-sage-400 transition-colors text-sm"
                >
                  Buyer&apos;s Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Certifications */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">
              Contact & Certifications
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-sage-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@zeropackuk.com"
                  className="text-cream-200 hover:text-sage-400 transition-colors text-sm"
                >
                  hello@zeropackuk.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-sage-400 mt-0.5 flex-shrink-0" />
                <span className="text-cream-200 text-sm">
                  UK Market Focus
                  <br />
                  Australian Expertise
                </span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-charcoal-700">
              <p className="text-cream-200 text-xs mb-2">Certifications:</p>
              <div className="flex items-center space-x-2">
                <span className="inline-block px-3 py-1 bg-sage-800 text-cream-50 text-xs font-semibold rounded">
                  ABAP AS5810
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-cream-300 text-sm">
            © {currentYear} Zero Pack. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-cream-300 hover:text-sage-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-cream-300 hover:text-sage-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
