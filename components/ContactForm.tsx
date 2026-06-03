"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, User, Briefcase, FileText, CheckCircle, Info } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/schema";
import { ScrollReveal } from "./ScrollReveal";

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      requirement: "",
      budget: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus("loading");
    
    // Simulate server request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setSubmittedData(data);
    setFormStatus("success");
    reset();
  };

  const budgetOptions = [
    { value: "", label: "Select budget range" },
    { value: "under-10k", label: "Under ₹10,000" },
    { value: "10k-50k", label: "₹10,000 - ₹50,000" },
    { value: "50k-2l", label: "₹50,000 - ₹2,00,000" },
    { value: "over-2l", label: "Over ₹2,00,000" }
  ];

  return (
    <section id="contact" className="w-full py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
              Post Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                Project Scope
              </span>
            </h2>
            <p className="text-[17px] text-zinc-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              Share details about your graphic, coding, SEO, writing, or video project to matching Gen-Z experts.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="scale-in">
          <div className="w-full rounded-[28px] glass p-6 md:p-12 shadow-xl shadow-emerald-500/5">
            
            {/* SUCCESS STATE */}
            {formStatus === "success" && submittedData && (
              <div className="flex flex-col items-center text-center gap-6 py-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center animate-bounce">
                  <CheckCircle className="w-10 h-10 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-zinc-950 dark:text-white">
                  Project Submitted!
                </h3>
                <p className="text-[16px] text-zinc-500 dark:text-slate-450 max-w-md leading-relaxed font-medium">
                  Thank you, <strong className="text-zinc-800 dark:text-white">{submittedData.name}</strong> from <strong className="text-zinc-800 dark:text-white">{submittedData.companyName}</strong>. Our Gen-Z matches are reviewing your scope. We will reach out to you at <strong className="text-zinc-800 dark:text-white">{submittedData.email}</strong> within 12 hours.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-4 px-6 py-3 rounded-xl bg-emerald-650 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white font-bold transition-all duration-200"
                >
                  Submit Another Scope
                </button>
              </div>
            )}

            {/* FORM IDLE/LOADING STATE */}
            {formStatus !== "success" && (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[14px] font-bold text-zinc-700 dark:text-slate-350 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-zinc-400" />
                      Contact Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      disabled={formStatus === "loading"}
                      {...register("name")}
                      className={`w-full p-3.5 rounded-xl border ${
                        errors.name ? "border-red-500 focus:ring-red-500" : "border-zinc-200 dark:border-slate-800 focus:ring-emerald-500"
                      } bg-white/50 dark:bg-slate-900/50 text-[15px] outline-hidden focus:ring-2 disabled:opacity-50`}
                      placeholder="e.g. Ayush Sharma"
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && (
                      <span className="text-[12px] text-red-500 font-semibold">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Company Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="companyName" className="text-[14px] font-bold text-zinc-700 dark:text-slate-350 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-zinc-400" />
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      disabled={formStatus === "loading"}
                      {...register("companyName")}
                      className={`w-full p-3.5 rounded-xl border ${
                        errors.companyName ? "border-red-500 focus:ring-red-500" : "border-zinc-200 dark:border-slate-800 focus:ring-emerald-500"
                      } bg-white/50 dark:bg-slate-900/50 text-[15px] outline-hidden focus:ring-2 disabled:opacity-50`}
                      placeholder="e.g. FitMe India"
                      aria-invalid={errors.companyName ? "true" : "false"}
                    />
                    {errors.companyName && (
                      <span className="text-[12px] text-red-500 font-semibold">{errors.companyName.message}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[14px] font-bold text-zinc-700 dark:text-slate-350 flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-zinc-400" />
                      Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      disabled={formStatus === "loading"}
                      {...register("email")}
                      className={`w-full p-3.5 rounded-xl border ${
                        errors.email ? "border-red-500 focus:ring-red-500" : "border-zinc-200 dark:border-slate-800 focus:ring-emerald-500"
                      } bg-white/50 dark:bg-slate-900/50 text-[15px] outline-hidden focus:ring-2 disabled:opacity-50`}
                      placeholder="e.g. partner@fitme.in"
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <span className="text-[12px] text-red-500 font-semibold">{errors.email.message}</span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[14px] font-bold text-zinc-700 dark:text-slate-350 flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-zinc-400" />
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      disabled={formStatus === "loading"}
                      {...register("phone")}
                      className={`w-full p-3.5 rounded-xl border ${
                        errors.phone ? "border-red-500 focus:ring-red-500" : "border-zinc-200 dark:border-slate-800 focus:ring-emerald-500"
                      } bg-white/50 dark:bg-slate-900/50 text-[15px] outline-hidden focus:ring-2 disabled:opacity-50`}
                      placeholder="10-digit mobile number"
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone && (
                      <span className="text-[12px] text-red-500 font-semibold">{errors.phone.message}</span>
                    )}
                  </div>

                </div>

                {/* Budget selection */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-[14px] font-bold text-zinc-700 dark:text-slate-350">
                    Estimated Project Budget
                  </label>
                  <select
                    id="budget"
                    disabled={formStatus === "loading"}
                    {...register("budget")}
                    className={`w-full p-3.5 rounded-xl border ${
                      errors.budget ? "border-red-500 focus:ring-red-500" : "border-zinc-200 dark:border-slate-800 focus:ring-emerald-500"
                    } bg-white dark:bg-slate-905 text-[15px] outline-hidden focus:ring-2 disabled:opacity-50`}
                    aria-invalid={errors.budget ? "true" : "false"}
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <span className="text-[12px] text-red-500 font-semibold">{errors.budget.message}</span>
                  )}
                </div>

                {/* Requirement field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="requirement" className="text-[14px] font-bold text-zinc-700 dark:text-slate-350 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-zinc-400" />
                    Project Scope Details
                  </label>
                  <textarea
                    id="requirement"
                    rows={4}
                    disabled={formStatus === "loading"}
                    {...register("requirement")}
                    className={`w-full p-3.5 rounded-xl border ${
                      errors.requirement ? "border-red-500 focus:ring-red-500" : "border-zinc-200 dark:border-slate-800 focus:ring-emerald-500"
                    } bg-white/50 dark:bg-slate-900/50 text-[15px] outline-hidden focus:ring-2 disabled:opacity-50 resize-y`}
                    placeholder="Briefly explain what you need (e.g. Design 15 social posts for product launch, build interactive calculator page, edit weekly YouTube reels...)"
                    aria-invalid={errors.requirement ? "true" : "false"}
                  />
                  {errors.requirement && (
                    <span className="text-[12px] text-red-500 font-semibold">{errors.requirement.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full py-4 rounded-xl bg-emerald-650 hover:bg-emerald-550 dark:bg-emerald-500 dark:hover:bg-emerald-450 text-white font-bold text-center shadow-lg active:scale-99 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting Scope...
                      </>
                    ) : (
                      "Post Project Scope"
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default ContactForm;
