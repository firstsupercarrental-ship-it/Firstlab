import { site } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex animate-[pop-in_0.5s_cubic-bezier(0.34,1.56,0.64,1)_1.2s_backwards] transition-transform hover:scale-105 active:scale-95 items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] ring-4 ring-[#25D366]/20 sm:px-5"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden text-sm font-semibold sm:inline">Let&apos;s talk</span>
    </a>
  );
}
