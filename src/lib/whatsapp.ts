import { services, site } from "./site";

/** wa.me link with the chat message pre-filled. */
export function whatsappHref(text: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function serviceMessage(title: string) {
  return `Hi First Lab! I'm interested in your ${title} service. Could you share more details and a quote?`;
}

/** The opening WhatsApp message for the page the visitor is on. */
export function whatsappMessage(pathname: string) {
  const [section, slug] = pathname.split("/").filter(Boolean);
  if (section === "services" && slug) {
    const service = services.find((s) => s.slug === slug);
    if (service) return serviceMessage(service.title);
  }
  if (section === "services") return "Hi First Lab! I'd like to know which of your services is right for my business.";
  if (section === "work") return "Hi First Lab! I saw your work on your website and I'd like to discuss a similar project.";
  return "Hi First Lab! I'd like to discuss a project for my business.";
}
