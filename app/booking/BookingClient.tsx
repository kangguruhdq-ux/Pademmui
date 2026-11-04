"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Scissors,
  GraduationCap,
  Calendar,
  Clock,
  User,
  Phone,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Edit3,
  ExternalLink,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  bookingTypes,
  bookingServices,
  preferredTimeSlots,
  BookingService,
} from "@/data/bookingServices";
import {
  BookingFormData,
  sanitizeInput,
  validateAndCleanPhone,
  formatIndonesianDate,
  createBookingWhatsAppUrl,
  generateBookingWhatsAppMessage,
} from "@/lib/booking";

export default function BookingClient() {
  // Current active step (1 to 5)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form states (preserved across steps)
  const [bookingType, setBookingType] = useState<"barbershop" | "academy">("barbershop");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("bs-haircut");
  const [appointmentDate, setAppointmentDate] = useState<string>("");
  const [preferredTime, setPreferredTime] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [whatsappNumber, setWhatsappNumber] = useState<string>("");
  const [additionalNotes, setAdditionalNotes] = useState<string>("");

  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // WhatsApp loading state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Minimum allowed date (Today in YYYY-MM-DD local format)
  const todayDateString = useMemo(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  // Filtered services based on selected bookingType
  const availableServices = useMemo(() => {
    return bookingServices.filter((s) => s.category === bookingType);
  }, [bookingType]);

  // Selected service object
  const selectedService = useMemo(() => {
    return (
      bookingServices.find((s) => s.id === selectedServiceId) ||
      availableServices[0] ||
      bookingServices[0]
    );
  }, [selectedServiceId, availableServices]);

  // Selected booking type title
  const selectedBookingTypeObj = useMemo(() => {
    return bookingTypes.find((t) => t.id === bookingType) || bookingTypes[0];
  }, [bookingType]);

  // Auto-select first service when booking type changes
  const handleBookingTypeChange = (type: "barbershop" | "academy") => {
    setBookingType(type);
    const firstService = bookingServices.find((s) => s.category === type);
    if (firstService) {
      setSelectedServiceId(firstService.id);
    }
  };

  // Step 3 Validation: Date & Time
  const validateSchedule = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!appointmentDate) {
      newErrors.appointmentDate = "Silakan pilih tanggal reservasi.";
    } else if (appointmentDate < todayDateString) {
      newErrors.appointmentDate = "Tanggal tidak boleh di masa lalu.";
    }

    if (!preferredTime) {
      newErrors.preferredTime = "Silakan pilih salah satu jam yang tersedia.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 4 Validation: Customer Information
  const validateCustomerInfo = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    const sanitizedName = sanitizeInput(fullName, 80);

    if (!sanitizedName || sanitizedName.length < 2) {
      newErrors.fullName = "Silakan isi nama lengkap minimal 2 karakter.";
    }

    const { isValid, cleaned } = validateAndCleanPhone(whatsappNumber);
    if (!whatsappNumber.trim()) {
      newErrors.whatsappNumber = "Silakan isi nomor WhatsApp aktif Anda.";
    } else if (!isValid) {
      newErrors.whatsappNumber =
        "Nomor WhatsApp tidak valid. Masukkan nomor HP aktif (contoh: 08123456789).";
    } else {
      // Store cleaned digits
      setWhatsappNumber(cleaned);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigate to next step
  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!selectedServiceId) {
        setSelectedServiceId(availableServices[0]?.id || "bs-haircut");
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (validateSchedule()) {
        setCurrentStep(4);
      }
    } else if (currentStep === 4) {
      if (validateCustomerInfo()) {
        setCurrentStep(5);
      }
    }
  };

  // Handle WhatsApp Submission from Review Step
  const handleContinueToWhatsApp = () => {
    setIsSubmitting(true);

    const bookingData: BookingFormData = {
      bookingType,
      bookingTypeTitle: selectedBookingTypeObj.title,
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      appointmentDate,
      appointmentDateFormatted: formatIndonesianDate(appointmentDate),
      preferredTime,
      fullName: sanitizeInput(fullName, 80),
      whatsappNumber: whatsappNumber.replace(/\D/g, ""),
      additionalNotes: sanitizeInput(additionalNotes, 300),
    };

    const waUrl = createBookingWhatsAppUrl(bookingData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }, 400);
  };

  // Steps configuration for the progress indicator
  const stepsList = [
    { number: 1, label: "Tipe" },
    { number: 2, label: "Layanan" },
    { number: 3, label: "Jadwal" },
    { number: 4, label: "Kontak" },
    { number: 5, label: "Review" },
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#080808] text-text-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-accent-gold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Page Title & Subtitle */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-xs text-accent-gold font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reservasi Online Pademmui</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-ivory">
            Book Your Experience
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Reserve your appointment and enjoy a premium grooming experience.
          </p>
        </div>

        {/* Multi-step Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative max-w-xl mx-auto">
            {/* Background connecting bar */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            {/* Active connecting bar */}
            <div
              className="absolute top-1/2 left-4 h-0.5 bg-accent-gold -translate-y-1/2 z-0 transition-all duration-500 ease-out"
              style={{
                width: `${((currentStep - 1) / (stepsList.length - 1)) * 90}%`,
              }}
            />

            {stepsList.map((step) => {
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center gap-2 relative z-10"
                >
                  <button
                    type="button"
                    onClick={() => {
                      // Only allow jumping back to completed steps
                      if (isCompleted) setCurrentStep(step.number);
                    }}
                    disabled={!isCompleted}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-accent-gold text-[#0A0A0A] ring-4 ring-accent-gold/20 shadow-gold-glow scale-110"
                        : isCompleted
                        ? "bg-[#181818] border border-accent-gold text-accent-gold cursor-pointer hover:scale-105"
                        : "bg-[#141414] border border-white/10 text-text-muted cursor-not-allowed"
                    }`}
                    aria-label={`Tahap ${step.number}: ${step.label}`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-4 h-4 text-accent-gold" /> : step.number}
                  </button>
                  <span
                    className={`text-[11px] font-medium tracking-wide hidden sm:block ${
                      isActive
                        ? "text-accent-gold font-bold"
                        : isCompleted
                        ? "text-text-ivory"
                        : "text-text-muted"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Container Card */}
        <div className="rounded-3xl bg-[#111111] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* STEP 1: SELECT BOOKING TYPE */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1.5 pb-2 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-widest text-accent-gold font-bold">
                  Langkah 1 dari 5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-text-ivory">
                  Pilih Jenis Booking
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary">
                  Silakan tentukan apakah Anda ingin melakukan reservasi layanan barbershop atau konsultasi kursus barberschool.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
                {bookingTypes.map((type) => {
                  const isSelected = bookingType === type.id;
                  const Icon = type.id === "barbershop" ? Scissors : GraduationCap;

                  return (
                    <div
                      key={type.id}
                      onClick={() => handleBookingTypeChange(type.id)}
                      className={`group p-6 rounded-2xl border cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#181818] border-2 border-accent-gold shadow-gold-glow"
                          : "bg-surface-elevated/70 border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                              isSelected
                                ? "bg-accent-gold text-[#0A0A0A]"
                                : "bg-white/5 text-accent-gold group-hover:bg-accent-gold/10"
                            }`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <span
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                              isSelected
                                ? "border-accent-gold bg-accent-gold"
                                : "border-white/20"
                            }`}
                          >
                            {isSelected && <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-text-ivory group-hover:text-accent-gold transition-colors">
                            {type.title}
                          </h3>
                          <p className="text-xs text-accent-gold font-medium mt-0.5">
                            {type.subtitle}
                          </p>
                        </div>

                        <p className="text-xs text-text-secondary leading-relaxed">
                          {type.description}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between text-xs">
                        <span className="text-text-muted font-mono">
                          {type.id === "barbershop" ? "6 Pilihan Layanan" : "6 Pilihan Program"}
                        </span>
                        <span className="text-accent-gold font-semibold flex items-center gap-1">
                          <span>Pilih</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-8 py-3.5 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-xs tracking-wide shadow-gold-glow flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Lanjut Pilih Layanan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SELECT SERVICE */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1.5 pb-2 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-widest text-accent-gold font-bold">
                  Langkah 2 dari 5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-text-ivory">
                  {bookingType === "barbershop"
                    ? "Pilih Layanan Barbershop"
                    : "Pilih Program Kursus / Konsultasi"}
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary">
                  Daftar layanan resmi terverifikasi di Pademmui Barbershop & Barberschool Yogyakarta.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {availableServices.map((service: BookingService) => {
                  const isSelected = selectedServiceId === service.id;

                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`group p-5 rounded-2xl border cursor-pointer transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#181818] border-2 border-accent-gold shadow-gold-glow"
                          : "bg-surface-elevated/70 border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          {service.badge && (
                            <span className="text-[10px] uppercase font-bold tracking-wider text-accent-gold bg-accent-gold/10 px-2.5 py-0.5 rounded-md border border-accent-gold/20">
                              {service.badge}
                            </span>
                          )}
                          <span
                            className={`w-4 h-4 rounded-full border-2 ml-auto flex items-center justify-center ${
                              isSelected ? "border-accent-gold bg-accent-gold" : "border-white/20"
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]" />}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-text-ivory group-hover:text-accent-gold transition-colors">
                          {service.name}
                        </h3>

                        <p className="text-xs text-text-secondary leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-xs">
                        {service.duration && (
                          <span className="text-text-muted flex items-center gap-1 font-mono text-[11px]">
                            <Clock className="w-3.5 h-3.5 text-accent-gold" />
                            {service.duration}
                          </span>
                        )}
                        {service.price && (
                          <span className="text-accent-gold font-bold font-mono">
                            {service.price}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-highlight border border-white/10 text-text-ivory font-semibold text-xs tracking-wide flex items-center gap-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-8 py-3.5 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-xs tracking-wide shadow-gold-glow flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Lanjut Pilih Jadwal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SELECT SCHEDULE */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1.5 pb-2 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-widest text-accent-gold font-bold">
                  Langkah 3 dari 5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-text-ivory">
                  Tentukan Tanggal & Jam Kunjungan
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary">
                  Pilih waktu kunjungan yang Anda kehendaki. Jadwal akan divalidasi dan dikonfirmasi langsung oleh admin.
                </p>
              </div>

              {/* Verified Schedule Notice */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-200">
                <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Pemberitahuan:</strong> Jadwal yang Anda pilih merupakan permintaan reservasi awal. Admin Pademmui akan memeriksa ketersediaan kursi atau kuota kelas melalui WhatsApp sebelum status kunjungan dikonfirmasi resmi.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                {/* Date Picker */}
                <div className="space-y-2">
                  <label
                    htmlFor="appointmentDate"
                    className="block text-xs uppercase tracking-wider text-text-muted font-bold"
                  >
                    Tanggal Reservasi <span className="text-accent-gold">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="appointmentDate"
                      min={todayDateString}
                      value={appointmentDate}
                      onChange={(e) => {
                        setAppointmentDate(e.target.value);
                        if (errors.appointmentDate) {
                          setErrors((prev) => ({ ...prev, appointmentDate: "" }));
                        }
                      }}
                      className="w-full px-4 py-3.5 rounded-xl bg-surface border border-white/10 text-text-ivory text-sm focus:outline-none focus:border-accent-gold transition-colors [color-scheme:dark]"
                    />
                  </div>
                  {appointmentDate && (
                    <p className="text-xs text-accent-gold font-medium">
                      {formatIndonesianDate(appointmentDate)}
                    </p>
                  )}
                  {errors.appointmentDate && (
                    <p className="text-xs text-red-400 font-medium">{errors.appointmentDate}</p>
                  )}
                </div>

                {/* Time Slots */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-text-muted font-bold">
                    Pilihan Waktu (WIB) <span className="text-accent-gold">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {preferredTimeSlots.map((slot) => {
                      const isSelected = preferredTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setPreferredTime(slot);
                            if (errors.preferredTime) {
                              setErrors((prev) => ({ ...prev, preferredTime: "" }));
                            }
                          }}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wide border transition-all ${
                            isSelected
                              ? "bg-accent-gold text-[#0A0A0A] border-accent-gold shadow-gold-glow scale-105"
                              : "bg-surface text-text-secondary border-white/10 hover:border-white/25 hover:text-text-ivory"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                  {errors.preferredTime && (
                    <p className="text-xs text-red-400 font-medium">{errors.preferredTime}</p>
                  )}
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-highlight border border-white/10 text-text-ivory font-semibold text-xs tracking-wide flex items-center gap-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-8 py-3.5 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-xs tracking-wide shadow-gold-glow flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Lanjut Isi Data</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CUSTOMER INFORMATION */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1.5 pb-2 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-widest text-accent-gold font-bold">
                  Langkah 4 dari 5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-text-ivory">
                  Informasi Pelanggan
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary">
                  Data ini digunakan oleh admin Pademmui untuk mengonfirmasi reservasi via WhatsApp.
                </p>
              </div>

              <div className="space-y-5 pt-2 max-w-xl">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-wider text-text-muted font-bold"
                  >
                    Nama Lengkap <span className="text-accent-gold">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      maxLength={80}
                      placeholder="Masukkan nama lengkap Anda"
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) {
                          setErrors((prev) => ({ ...prev, fullName: "" }));
                        }
                      }}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-surface border border-white/10 text-text-ivory text-sm focus:outline-none focus:border-accent-gold transition-colors"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-400 font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="whatsappNumber"
                    className="block text-xs uppercase tracking-wider text-text-muted font-bold"
                  >
                    Nomor WhatsApp <span className="text-accent-gold">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      value={whatsappNumber}
                      maxLength={16}
                      placeholder="Contoh: 082134060584"
                      onChange={(e) => {
                        setWhatsappNumber(e.target.value);
                        if (errors.whatsappNumber) {
                          setErrors((prev) => ({ ...prev, whatsappNumber: "" }));
                        }
                      }}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-surface border border-white/10 text-text-ivory text-sm focus:outline-none focus:border-accent-gold transition-colors"
                    />
                  </div>
                  <p className="text-[11px] text-text-muted">
                    Pastikan nomor WhatsApp aktif untuk menerima konfirmasi reservasi dari admin.
                  </p>
                  {errors.whatsappNumber && (
                    <p className="text-xs text-red-400 font-medium">{errors.whatsappNumber}</p>
                  )}
                </div>

                {/* Additional Notes (Optional) */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="additionalNotes"
                      className="block text-xs uppercase tracking-wider text-text-muted font-bold"
                    >
                      Catatan Tambahan (Opsional)
                    </label>
                    <span className="text-[10px] text-text-muted">
                      {additionalNotes.length}/300
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      id="additionalNotes"
                      rows={3}
                      maxLength={300}
                      value={additionalNotes}
                      placeholder="Contoh: Ingin potong gaya comma hair, atau butuh info fasilitas mess luar kota."
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-ivory text-sm focus:outline-none focus:border-accent-gold transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-highlight border border-white/10 text-text-ivory font-semibold text-xs tracking-wide flex items-center gap-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-8 py-3.5 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-xs tracking-wide shadow-gold-glow flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Lihat Ringkasan Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: BOOKING REVIEW & WHATSAPP CONFIRMATION */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-1.5 pb-2 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-widest text-accent-gold font-bold">
                  Langkah 5 dari 5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-text-ivory">
                  Ringkasan Booking Anda
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary">
                  Periksa kembali seluruh detail reservasi sebelum melanjutkan pengiriman pesan ke WhatsApp resmi Pademmui.
                </p>
              </div>

              {/* Review Summary Card */}
              <div className="rounded-2xl bg-[#161616] border border-white/10 p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-5 border-b border-white/10">
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-text-muted font-bold block">
                      Jenis Booking
                    </span>
                    <p className="text-sm font-bold text-text-ivory">
                      {selectedBookingTypeObj.title}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-text-muted font-bold block">
                      Layanan / Program
                    </span>
                    <p className="text-sm font-bold text-accent-gold">
                      {selectedService.name}
                    </p>
                    {selectedService.price && (
                      <p className="text-xs text-text-secondary">
                        Investasi / Tarif: {selectedService.price}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-5 border-b border-white/10">
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-text-muted font-bold block">
                      Tanggal Kunjungan
                    </span>
                    <p className="text-sm font-semibold text-text-ivory flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-accent-gold" />
                      <span>{formatIndonesianDate(appointmentDate)}</span>
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-text-muted font-bold block">
                      Waktu Kunjungan
                    </span>
                    <p className="text-sm font-semibold text-text-ivory flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-accent-gold" />
                      <span>{preferredTime}</span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-text-muted font-bold block">
                      Nama Pelanggan
                    </span>
                    <p className="text-sm font-semibold text-text-ivory">
                      {fullName}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-text-muted font-bold block">
                      Nomor WhatsApp
                    </span>
                    <p className="text-sm font-semibold text-text-ivory font-mono">
                      {whatsappNumber}
                    </p>
                  </div>
                </div>

                {additionalNotes.trim() && (
                  <div className="pt-4 border-t border-white/10 space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-text-muted font-bold block">
                      Catatan Tambahan
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed bg-[#111111] p-3 rounded-xl border border-white/5">
                      {additionalNotes.trim()}
                    </p>
                  </div>
                )}
              </div>

              {/* Message Format Preview (Anti-Slop Clean Text Check) */}
              <div className="p-4 rounded-xl bg-surface border border-white/5 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted block">
                  Pratinjau Pesan yang Akan Dikirim ke WhatsApp Admin:
                </span>
                <pre className="text-[11px] text-text-secondary whitespace-pre-wrap font-sans bg-black/40 p-3.5 rounded-lg border border-white/5 leading-relaxed">
                  {generateBookingWhatsAppMessage({
                    bookingType,
                    bookingTypeTitle: selectedBookingTypeObj.title,
                    serviceId: selectedService.id,
                    serviceName: selectedService.name,
                    appointmentDate,
                    appointmentDateFormatted: formatIndonesianDate(appointmentDate),
                    preferredTime,
                    fullName: sanitizeInput(fullName, 80),
                    whatsappNumber: whatsappNumber.replace(/\D/g, ""),
                    additionalNotes: sanitizeInput(additionalNotes, 300),
                  })}
                </pre>
              </div>

              {/* Success Notification after opening WhatsApp */}
              {isSuccess && (
                <div className="p-4 rounded-xl bg-green-950/40 border border-green-500/30 text-green-300 text-xs flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>
                    Tab WhatsApp berhasil dibuka. Silakan tekan tombol Kirim pada aplikasi WhatsApp Anda untuk menyelesaikan reservasi.
                  </span>
                </div>
              )}

              {/* Action Buttons: Edit Booking & Continue to WhatsApp */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-highlight border border-white/10 text-text-ivory font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors active:scale-95"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Edit Booking</span>
                </button>

                <button
                  type="button"
                  onClick={handleContinueToWhatsApp}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-[#0A0A0A] font-bold text-xs tracking-wide shadow-gold-glow flex items-center justify-center gap-2.5 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#0A0A0A]" />
                  <span>{isSubmitting ? "Membuka WhatsApp..." : "Continue to WhatsApp"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Studio Location & Contact Footer Info */}
        <div className="mt-12 text-center text-xs text-text-muted space-y-1">
          <p className="font-semibold text-text-secondary">Pademmui Barbershop & Barberschool Yogyakarta</p>
          <p>Jalan Wonocatur No.15, Banguntapan, Bantul, D.I. Yogyakarta 55198</p>
        </div>
      </div>
    </div>
  );
}
