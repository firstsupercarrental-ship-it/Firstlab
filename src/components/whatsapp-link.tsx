"use client";

import { usePathname } from "next/navigation";
import { whatsappHref, whatsappMessage } from "@/lib/whatsapp";
import { Button } from "./ui/button";

/** WhatsApp link whose pre-filled message matches the current page (e.g. the service being viewed). */
export function useWhatsAppHref() {
  return whatsappHref(whatsappMessage(usePathname() ?? "/"));
}

export function WhatsAppLink(props: Omit<React.ComponentProps<"a">, "href" | "target" | "rel">) {
  return <a {...props} href={useWhatsAppHref()} target="_blank" rel="noopener noreferrer" />;
}

export function WhatsAppButton({ children, variant = "ghost" }: { children: React.ReactNode; variant?: "primary" | "ghost" }) {
  return (
    <Button href={useWhatsAppHref()} variant={variant} external>
      {children}
    </Button>
  );
}
