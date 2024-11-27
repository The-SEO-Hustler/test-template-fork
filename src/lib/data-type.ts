import TestimonialSection from "@/components/testimonials/testimonials1";

type Skill = {
  title: string; // Short descriptive title (max 4 words)
  content: string; // Brief explanation (about 9 words)
};

type RichText = string | null; // HTML or plain text
type HtmlElement = string | null; //HTML element in string format;

type Website = {
  name: string; // Brand name of the website
  logo: string | null; // Path to logo image
};

type Navbar = {
  templateNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7; // Navbar layout
};

type Footer = {
  templateNumber: 1 | 2; // Footer layout
};

type Hero = {
  templateNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8; // Hero layout
  heading: string; // Main headline
  text: RichText; // Introductory text or description
  button: string; // CTA button text
  tag: string | null; // Optional tag
  skills: Skill[] | null; // Optional skill highlights
};

type CTA = {
  templateNumber: 1 | 2 | 3; // CTA layout
  heading: string; // CTA headline
  text: RichText; // Detailed CTA message
  button: string; // CTA button text
};

type FeatureCard = {
  title: string;
  description: RichText;
  icon: HtmlElement;
};

type Features = {
  templateNumber: 1 | 2 | 3 | 4; // Features layout
  heading: string; // Features headline
  text: RichText;
  cards: FeatureCard[];
};
type TestimonialCard = {
  authorName: string;
  authorPosition: string;
  text: RichText;
  image: string;
};
type TestimonialSection = {
  templateNumber: 1 | 2; // testimonials layout
  heading: string;
  text: RichText;
  testimonials: TestimonialCard[];
};
type portifolioCard = {
  title: string;
  description: RichText;
  image: string; // path to image
};
type portifolio = {
  templateNumber: 1 | 2 | 3 | 4;
  heading: string;
  text: RichText;
  cards: portifolioCard[];
};

type cases = {
  templateNumber: 1 | 2 | 3 | 4;
  heading: string;
  text: RichText;
  cards: portifolioCard[];
};
type faqItem = {
  question: string;
  answer: RichText;
};
type faq = {
  templateNumber: 1 | 2;
  heading: string;
  text: RichText;
  items: faqItem[];
};
type contact = {
  title: string;
  heading: string;
  text: RichText;
};

type mapSection = {
  heading: string;
  text: RichText;
  map: HtmlElement;
  icon: HtmlElement;
};
type blogSection = {
  templateNumber: 1 | 2 | 3 | 4;
  heading: string;
  text: HtmlElement;
  tag: string | null;
};

export type PageDataType = {
  website: Website;
  navbar: Navbar;
  footer: Footer;
  hero: Hero;
  cta: CTA | null;
  features: Features | null;
  testimonialsSection: TestimonialSection | null;
  portifolio: portifolio | null;
  cases: cases | null;
  faq: faq | null;
  contact: contact | null;
  map: mapSection | null;
  blogSection: blogSection | null;
  homeJsonSchema: string | null;
  gtm: string | null;
};
