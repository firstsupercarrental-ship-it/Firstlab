export const site = {
  name: "First Lab",
  legalName: "First Lab Media",
  url: "https://firstlab.ae",
  tagline: "Digital Marketing Agency in Dubai",
  description:
    "Grow your business with First Lab, a Dubai digital marketing agency for SEO, branding, web & app development, social media and online advertising.",
  phone: "056 136 8008",
  phoneHref: "tel:+971561368008",
  whatsapp: "https://wa.me/971561368008",
  email: "info@firstlab.ae",
  address: "Azizi Riviera 46, Shop 26, Dubai, UAE",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Azizi+Riviera+46+Dubai",
  mapsEmbed: "https://www.google.com/maps?q=Azizi%20Riviera%2046%20Dubai&output=embed",
  instagram: "https://www.instagram.com/firstlabmedia/",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Work" },
  { href: "/contact/", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  deliverables: string[];
  outcomes: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "branding-identity",
    title: "Branding Identity",
    short: "Logos, visual systems and brand voice that make you instantly recognisable.",
    image: "/media/branding.webp",
    intro:
      "Your brand is the first thing customers feel before they read a word. We craft identities that look premium, speak clearly and stay consistent across every touchpoint, from shopfront to Instagram grid.",
    deliverables: [
      "Brand strategy & positioning",
      "Logo design & logo variations",
      "Colour palette & typography system",
      "Brand guidelines book",
      "Stationery & business cards",
      "Packaging & signage design",
    ],
    outcomes: [
      { title: "Recognition", text: "A distinctive look customers remember and trust." },
      { title: "Consistency", text: "One clear system your whole team can use." },
      { title: "Premium perception", text: "Visuals that justify the price you charge." },
    ],
  },
  {
    slug: "web-app-development",
    title: "Web & App Development",
    short: "Fast, beautiful websites and mobile apps built to convert visitors into clients.",
    image: "/media/web-app.webp",
    intro:
      "We design and build websites and apps that load fast, rank well and turn visitors into enquiries. Every build is mobile-first, SEO-ready and easy for your team to manage.",
    deliverables: [
      "Corporate & business websites",
      "E-commerce stores",
      "Landing pages for campaigns",
      "iOS & Android mobile apps",
      "UI/UX design & prototyping",
      "Hosting, maintenance & support",
    ],
    outcomes: [
      { title: "Speed", text: "Optimised performance that keeps visitors on the page." },
      { title: "Conversion", text: "Clear journeys that lead to calls, forms and sales." },
      { title: "Scalability", text: "Clean code that grows with your business." },
    ],
  },
  {
    slug: "seo",
    title: "SEO Search Engine Optimization",
    short: "Rank higher on Google in Dubai and the UAE and win high-intent organic traffic.",
    image: "/media/seo.webp",
    intro:
      "When customers in Dubai search for what you offer, you should be the first name they see. Our SEO combines technical fixes, local search and content to grow traffic that actually converts.",
    deliverables: [
      "Technical SEO audit & fixes",
      "Keyword research for the UAE market",
      "On-page optimisation",
      "Google Business Profile & local SEO",
      "Link building & digital PR",
      "Monthly ranking & traffic reports",
    ],
    outcomes: [
      { title: "Visibility", text: "Appear for the searches your customers make." },
      { title: "Qualified traffic", text: "Visitors who are ready to buy, not just browse." },
      { title: "Compounding growth", text: "Results that build month after month." },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Content, community and campaigns across Instagram, TikTok, Snapchat and more.",
    image: "/media/social-media.webp",
    intro:
      "We plan, create and manage social content that stops the scroll. From monthly calendars to reels and influencer collaborations, we build communities that turn followers into customers.",
    deliverables: [
      "Social media strategy & calendar",
      "Reels, stories & post design",
      "Account management & community care",
      "Influencer marketing in the UAE",
      "Instagram, TikTok, Snapchat, LinkedIn",
      "Performance analytics & insights",
    ],
    outcomes: [
      { title: "Engagement", text: "Content people like, share and save." },
      { title: "Community", text: "A loyal audience that grows with your brand." },
      { title: "Leads", text: "Social activity that turns into real enquiries." },
    ],
  },
  {
    slug: "online-media-advertising",
    title: "Online Media Advertising",
    short: "Google, Meta, TikTok and Snapchat ads engineered for measurable ROI.",
    image: "/media/advertising.webp",
    intro:
      "Paid media puts you in front of the right audience at the right moment. We build, test and optimise campaigns across search and social so every dirham is tracked and working.",
    deliverables: [
      "Google Search, Display & YouTube Ads",
      "Meta (Facebook & Instagram) Ads",
      "TikTok & Snapchat Ads",
      "Retargeting & lookalike audiences",
      "Conversion tracking & pixel setup",
      "A/B testing & weekly optimisation",
    ],
    outcomes: [
      { title: "Fast results", text: "Reach buyers from day one of the campaign." },
      { title: "Lower cost per lead", text: "Continuous testing to cut wasted spend." },
      { title: "Transparency", text: "Clear reporting on spend, leads and revenue." },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    short: "Scroll-stopping visuals for social, print, outdoor and everything in between.",
    image: "/media/graphic-design.webp",
    intro:
      "Great design makes people stop, look and act. Our designers create visuals for digital and print that are on-brand, on-message and built to perform.",
    deliverables: [
      "Social media creatives",
      "Ad banners & display creatives",
      "Brochures, flyers & menus",
      "Company profiles & presentations",
      "Billboards & outdoor media",
      "Event & exhibition graphics",
    ],
    outcomes: [
      { title: "Attention", text: "Visuals that stand out in a crowded feed." },
      { title: "Clarity", text: "Your message understood at a glance." },
      { title: "Brand fit", text: "Every piece looks unmistakably you." },
    ],
  },
  {
    slug: "content-writing",
    title: "Content Writing",
    short: "SEO-friendly copy, blogs and scripts in English and Arabic that sell.",
    image: "/media/content-writing.webp",
    intro:
      "Words sell. We write website copy, blogs, ad copy and video scripts that rank on Google, speak to your audience and move them to act.",
    deliverables: [
      "Website copywriting",
      "SEO blog articles",
      "Ad copy & campaign messaging",
      "Social media captions",
      "Video & reel scripts",
      "English & Arabic content",
    ],
    outcomes: [
      { title: "Authority", text: "Content that positions you as the expert." },
      { title: "Rankings", text: "Articles optimised to bring organic traffic." },
      { title: "Persuasion", text: "Copy that turns readers into customers." },
    ],
  },
  {
    slug: "3d-video-production",
    title: "3D Video Production",
    short: "Cinematic 3D, CGI and commercial video that makes your brand impossible to ignore.",
    image: "/media/3d-video.webp",
    intro:
      "From CGI billboards to cinematic brand films, we produce video that grabs attention in the first second. Concept, shoot, 3D animation and edit, all handled by one team.",
    deliverables: [
      "3D / CGI commercials",
      "Brand films & corporate videos",
      "Reels & short-form social video",
      "Product animation",
      "Motion graphics",
      "Drone & on-location shoots in Dubai",
    ],
    outcomes: [
      { title: "Impact", text: "Visuals people remember and share." },
      { title: "Reach", text: "Video formats built for every platform." },
      { title: "Differentiation", text: "Stand apart from competitors' stock content." },
    ],
  },
];

export const process = [
  { step: "01", title: "Discover", text: "We learn your business, audience, competitors and goals in Dubai and the wider UAE." },
  { step: "02", title: "Strategise", text: "A clear plan with channels, content, budget and the KPIs we will be measured on." },
  { step: "03", title: "Create", text: "Our designers, writers, developers and video team bring the plan to life." },
  { step: "04", title: "Launch & Grow", text: "We launch, measure, and optimise every week to keep results climbing." },
];

export const faqs = [
  {
    q: "What does a digital marketing agency in Dubai do?",
    a: "A digital marketing agency helps businesses get found and chosen online. At First Lab that means branding, website and app development, SEO, social media marketing, paid advertising on Google, Meta, TikTok and Snapchat, graphic design, content writing and 3D video production.",
  },
  {
    q: "Where is First Lab located?",
    a: "Our studio is at Azizi Riviera 46, Shop 26, Dubai, UAE. We work with clients across Dubai and the wider UAE, in person or online.",
  },
  {
    q: "How much does digital marketing cost in Dubai?",
    a: "It depends on your goals, the services you need and your advertising budget. Tell us what you want to achieve and we will send a clear proposal and quote with no obligation.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Most businesses start to see ranking and traffic improvements within three to six months. SEO compounds over time, so results keep building the longer it runs.",
  },
  {
    q: "Can you manage our social media and paid ads together?",
    a: "Yes. Running content and paid campaigns from one team keeps your message consistent and lets us use what works organically to improve ad performance.",
  },
  {
    q: "How do we get started?",
    a: "Send us a message on WhatsApp, call 056 136 8008 or fill in the contact form. We will book a short call to understand your business and then share a plan.",
  },
];

export type Client = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  logo: string;
  /** Logos drawn on a black (not transparent) background blend into the dark UI. */
  logoOnBlack?: boolean;
  image: string;
  industry: string;
  summary: string;
  deliverables: ("Website" | "iOS App" | "Android App")[];
  appStore?: string;
  googlePlay?: string;
};

export const clients: Client[] = [
  {
    slug: "first-super-car-rental",
    name: "First Super Car Rental",
    url: "https://firstsupercarrental.com/",
    domain: "firstsupercarrental.com",
    logo: "/clients/first-super-car-rental.webp",
    image: "/clients/projects/first-super-car-rental.webp",
    industry: "Luxury car rental · Dubai",
    summary:
      "A full digital product for one of Dubai's luxury and supercar rental brands: a fast, SEO-ready booking website plus native iOS and Android apps.",
    deliverables: ["Website", "iOS App", "Android App"],
    appStore: "https://apps.apple.com/app/first-super-car-rental/id6791599812",
    googlePlay: "https://play.google.com/store/apps/details?id=com.firstsupercarrental.app",
  },
  {
    slug: "la-touche-royale",
    name: "La Touche Royale",
    url: "https://www.latoucheroyale.ae/",
    domain: "latoucheroyale.ae",
    logo: "/clients/la-touche-royale.webp",
    image: "/clients/projects/la-touche-royale.webp",
    industry: "Interior design & fit-out · Dubai",
    summary: "An elegant portfolio website for a bespoke interior design and turnkey fit-out studio, built around full-screen project stories.",
    deliverables: ["Website"],
  },
  {
    slug: "drivo",
    name: "Drivo",
    url: "https://drivo.autos/",
    domain: "drivo.autos",
    logo: "/clients/drivo.webp",
    image: "/clients/projects/drivo.webp",
    industry: "Car finance · UAE",
    summary: "A conversion-focused website for a car sale-and-leaseback service, with an instant quote form that turns visitors into leads.",
    deliverables: ["Website"],
  },
  {
    slug: "m9-autos",
    name: "M9 Autos",
    url: "https://m9autos.com/",
    domain: "m9autos.com",
    logo: "/clients/m9-autos.webp",
    logoOnBlack: true,
    image: "/clients/projects/m9-autos.webp",
    industry: "Supercar rental · Dubai",
    summary: "A premium website for a Dubai supercar and exotic car rental company, showcasing its fleet with fast WhatsApp booking.",
    deliverables: ["Website"],
  },
];
