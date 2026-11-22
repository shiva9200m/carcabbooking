import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";

import {
  formatUpdated,
  getKeyFacts,
  landingPageBySlug,
  landingPagePath,
  type LandingPage,
} from "@/data/landingPages";

const PRIMARY_PHONE = "+918810990496";
const SECONDARY_PHONE = "+917084183421";

const WHATSAPP_URL = `https://wa.me/${PRIMARY_PHONE.replace(
  "+",
  ""
)}?text=${encodeURIComponent(
  "Hi Car Cab Booking,\nI want to book a cab.\nPickup Location:\nDestination:\nTravel Date:\nPickup Time:\nPassengers:\nPreferred Car:\nTrip Type: One Way / Round Trip\nPlease share availability and fare details."
)}`;

export function ServicePage({ page }: { page: LandingPage }) {
  const relatedPages = page.related
    .map((slug) => landingPageBySlug[slug])
    .filter(Boolean);

  const keyFacts = getKeyFacts(page);

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-700 to-blue-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            {page.h1}
          </motion.h1>

          <p className="mx-auto max-w-3xl text-lg text-sky-100 md:text-xl">
            {page.heroText}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-sky-700 transition hover:shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Call to Book
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER + AT A GLANCE (answer-first block) */}
      <section className="bg-white pt-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                Quick answer
              </p>

              <p className="mt-2 text-lg leading-relaxed text-gray-800">
                {page.quickAnswer}
              </p>
            </div>

            <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {keyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200"
                >
                  <dt className="text-sm font-semibold text-gray-500">
                    {fact.label}
                  </dt>

                  <dd className="mt-1 text-gray-900">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: {formatUpdated(page.updated)}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {page.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-4 text-lg leading-relaxed text-gray-700"
              >
                {paragraph}
              </p>
            ))}

            {page.sections.map((section) => (
              <div key={section.heading} className="mt-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                  {section.heading}
                </h2>

                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-3 leading-relaxed text-gray-700"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {page.hindi && (
              <p
                lang="hi"
                className="mt-10 rounded-2xl bg-sky-50 p-6 leading-relaxed text-gray-800"
              >
                {page.hindi}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT NUMBERS + EXISTING BOOKING FORM */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Book: {page.h1}
            </h2>

            <p className="mt-3 text-gray-600">
              Call or WhatsApp Car Cab Booking on{" "}
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="font-semibold text-sky-700 hover:underline"
              >
                +91 8810990496
              </a>{" "}
              or{" "}
              <a
                href={`tel:${SECONDARY_PHONE}`}
                className="font-semibold text-sky-700 hover:underline"
              >
                +91 7084183421
              </a>
              . You can also use the booking form on the Contact page.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3 font-semibold text-white transition hover:bg-sky-700"
            >
              Open Booking Form
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              {page.h1}: Frequently Asked Questions
            </h2>

            <div className="space-y-5">
              {page.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200"
                >
                  <h3 className="text-lg font-bold text-gray-900">
                    {faq.question}
                  </h3>

                  <p className="mt-2 leading-relaxed text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Related Cab Services from Gorakhpur
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedPages.map((related) => (
                <Link
                  key={related.slug}
                  to={landingPagePath(related.slug)}
                  className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50"
                >
                  {related.linkLabel}
                </Link>
              ))}

              <Link
                to="/packages"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50"
              >
                View Cars & Cab Packages
              </Link>

              <Link
                to="/destinations"
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50"
              >
                Popular Cab Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
