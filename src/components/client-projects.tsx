import Image from "next/image";
import { ArrowUpRight, Globe, Smartphone } from "lucide-react";
import { clients, type Client } from "@/lib/site";
import { cn } from "@/lib/utils";
import { AppleIcon, GooglePlayIcon } from "./icons";
import { Reveal } from "./ui/reveal";

const chipIcon = { Website: Globe, "iOS App": Smartphone, "Android App": Smartphone } as const;

function StoreLink({ href, label, icon: Icon }: { href: string; label: string; icon: typeof AppleIcon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold transition hover:border-brand hover:text-brand"
    >
      <Icon className="size-4" />
      {label}
    </a>
  );
}

function ProjectCard({ client, featured }: { client: Client; featured?: boolean }) {
  return (
    <article
      id={client.slug}
      className={cn(
        "group relative isolate scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900",
        featured && "lg:grid lg:grid-cols-2",
      )}
    >
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        className={cn("relative block aspect-[16/10] overflow-hidden", featured && "lg:aspect-auto lg:min-h-full")}
      >
        <Image
          src={client.image}
          alt={`${client.name} website designed by First Lab`}
          fill
          sizes={featured ? "(min-width:1024px) 50vw, 100vw" : "(min-width:1024px) 33vw, 100vw"}
          className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />
      </a>

      <div className="relative p-7 sm:p-9">
        <div className="flex h-14 items-center">
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            width={220}
            height={110}
            className={cn("h-auto max-h-10 w-auto max-w-[60%] object-contain", client.logoOnBlack && "max-h-14 mix-blend-lighten")}
          />
        </div>
        <p className="eyebrow mt-6">{client.industry}</p>
        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{client.name}</h3>
        <p className="mt-4 leading-relaxed text-white/60">{client.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {client.deliverables.map((d) => {
            const Icon = chipIcon[d];
            return (
              <li key={d} className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand">
                <Icon className="size-3.5" />
                {d}
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-brand-400"
          >
            {client.domain}
            <ArrowUpRight className="size-4" />
          </a>
          {client.appStore && <StoreLink href={client.appStore} label="App Store" icon={AppleIcon} />}
          {client.googlePlay && <StoreLink href={client.googlePlay} label="Google Play" icon={GooglePlayIcon} />}
        </div>
      </div>
    </article>
  );
}

/** Client case studies: the first project (website + both apps) is shown full width. */
export function ClientProjects() {
  const [featured, ...rest] = clients;
  return (
    <div className="space-y-6">
      <Reveal>
        <ProjectCard client={featured} featured />
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-3">
        {rest.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.08} className="h-full">
            <ProjectCard client={c} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
