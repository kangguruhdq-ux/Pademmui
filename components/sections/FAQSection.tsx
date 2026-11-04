"use client";

import Link from "next/link";
import { useState } from "react";
import { faqList } from "@/data/faq";
import { ChevronDown, HelpCircle, Calendar, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
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

        {/* FAQ Accordion List with tactile touch & hover feedback */}
        <div className="space-y-4">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <ScrollReveal
                key={faq.question}
                direction="up"
                delay={idx * 60}
              >
                <div className="rounded-2xl bg-surface-elevated border border-white/10 overflow-hidden transition-all duration-300 hover:border-accent-gold/40 hover:scale-[1.01] active:scale-[0.99] hover:shadow-luxury">
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-text-ivory">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-surface border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-accent-gold" : "text-text-muted"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-white/5 animate-fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* WhatsApp Help CTA */}
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
