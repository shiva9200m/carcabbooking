import { Link } from "react-router-dom";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function NotFoundPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?crop=entropy&cs=tinysrgb&fit=max&fm=webp&w=1000"
            alt="Page not found"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Sorry, the page you are looking for does not exist. Return to the home page or explore our cab booking guides and packages.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-4 text-white font-semibold hover:bg-sky-700 transition"
          >
            Go Home
          </Link>
        </div>
      </section>
    </div>
  );
}
