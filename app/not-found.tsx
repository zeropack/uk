import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-cream-50 to-white flex items-center justify-center">
      <div className="container-custom max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl font-display font-bold text-sage-700">404</h1>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900">
            Page Not Found
          </h2>
          <p className="text-xl text-charcoal-700 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center btn-primary"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center justify-center btn-secondary"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Browse Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
