"use client";

import Link from "next/link";
import { useState } from "react";
import { faqList } from "@/data/faq";
import { ChevronDown, HelpCircle, Calendar, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function FAQSection() {
  // Initially null so NO FAQ item is open automatically until user clicks
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-24 bg-[#080808] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-xs text-accent-gold font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Tanya Jawab</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-ivory">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Semua hal yang perlu Anda ketahui mengenai persyaratan, fasilitas mess, model praktek, dan program penyaluran kerja.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion List with Smooth CSS Grid Animation & Tactile Hover */}
        <div className="space-y-4">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <ScrollReveal
                key={faq.question}
                direction="up"
                delay={idx * 60}
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#141414] border-accent-gold/50 shadow-gold-glow"
                      : "bg-surface-elevated border-white/10 hover:border-accent-gold/30 hover:scale-[1.01]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors duration-200 ${
                        isOpen ? "text-accent-gold" : "text-text-ivory"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-accent-gold text-[#0A0A0A] rotate-180 shadow-md"
                          : "bg-surface border border-white/10 text-text-muted hover:text-text-ivory"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Smooth Accordion Body using CSS Grid Rows Animation */}
                  <div
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-white/5">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Booking Consultation CTA */}
        <ScrollReveal direction="up" delay={200} className="mt-12">
          <div className="text-center p-6 rounded-2xl bg-[#121212] border border-white/5 space-y-3 transition-all duration-300 hover:border-accent-gold/30 hover:scale-[1.01]">
            <p className="text-xs sm:text-sm text-text-secondary">
              Punya pertanyaan lain yang belum terjawab di sini?
            </p>
            <Link
              href="/booking?type=academy&service=ac-general"
              className="inline-flex items-center gap-2 text-xs font-bold text-accent-gold hover:text-accent-gold-light hover:underline"
            >
              <Calendar className="w-4 h-4" />
              <span>Konsultasi Pertanyaan & Cek Jadwal via Form Booking</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
