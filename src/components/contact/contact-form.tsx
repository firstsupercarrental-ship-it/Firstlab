"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";
import { services, site } from "@/lib/site";
import { WhatsAppIcon } from "../icons";

const field =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-white/30 outline-none transition focus:border-brand focus:bg-white/[0.05] focus:ring-4 focus:ring-brand/15";

/**
 * The site is a static export with no server, so the form hands the enquiry
 * to WhatsApp (default) or the visitor's email app, pre-filled.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function buildMessage(form: HTMLFormElement) {
    const d = new FormData(form);
    return [
      `Hi First Lab, I'd like to discuss a project.`,
      ``,
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Email: ${d.get("email")}`,
      d.get("service") ? `Service: ${d.get("service")}` : null,
      ``,
      `${d.get("message")}`,
    ]
      .filter((l) => l !== null)
      .join("\n");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const text = buildMessage(form);
    const via = (e.nativeEvent as SubmitEvent).submitter?.getAttribute("value");
    const url =
      via === "email"
        ? `mailto:${site.email}?subject=${encodeURIComponent("New project enquiry")}&body=${encodeURIComponent(text)}`
        : `${site.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, via === "email" ? "_self" : "_blank", "noopener");
    setSent(true);
    form.reset();
  }

  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-6 sm:p-10">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(226,113,30,0.16),transparent_45%)]" />
      <h2 className="relative text-3xl font-bold">Let&apos;s Talk</h2>
      <p className="relative mt-2 text-white/60">Fields marked * are required.</p>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="relative mt-10 flex flex-col items-center py-12 text-center"
          >
            <CheckCircle2 className="size-14 text-brand" />
            <h3 className="mt-6 text-2xl font-bold">Thanks — your message is ready!</h3>
            <p className="mt-2 max-w-sm text-white/60">Just press send in WhatsApp or your email app and our team will get back to you shortly.</p>
            <button onClick={() => setSent(false)} className="mt-8 text-sm text-brand underline-offset-4 hover:underline">
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" exit={{ opacity: 0 }} onSubmit={handleSubmit} className="relative mt-8 grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-1">
              <span className="sr-only">Name</span>
              <input name="name" required placeholder="Name *" autoComplete="name" className={field} />
            </label>
            <label>
              <span className="sr-only">Phone number</span>
              <input name="phone" required type="tel" placeholder="Phone Number *" autoComplete="tel" className={field} />
            </label>
            <label className="sm:col-span-2">
              <span className="sr-only">Email</span>
              <input name="email" required type="email" placeholder="Email *" autoComplete="email" className={field} />
            </label>
            <label className="sm:col-span-2">
              <span className="sr-only">Service</span>
              <select name="service" defaultValue="" className={`${field} appearance-none`}>
                <option value="">Service you&apos;re interested in</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title} className="bg-ink-900">
                    {s.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="sm:col-span-2">
              <span className="sr-only">Message</span>
              <textarea name="message" required rows={5} placeholder="Message *" className={`${field} resize-none`} />
            </label>
            <div className="flex flex-wrap gap-3 sm:col-span-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                value="whatsapp"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-black shadow-[0_0_40px_-8px_rgba(226,113,30,0.8)] transition hover:bg-brand-400"
              >
                <WhatsAppIcon className="size-5" /> Send via WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                value="email"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:border-brand"
              >
                <Send className="size-4" /> Send via Email
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
