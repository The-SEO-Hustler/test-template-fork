import { PageDataType } from "./data-type";

export const pageData: PageDataType = {
  homeJsonSchema: null,
  // {
  //   "@context": "https://schema.org",
  //   "@type": "LocalBusiness",
  //   name: "My Business Name",
  //   image: "https://example.com/logo.png",
  //   telephone: "555-123-4567",
  //   address: {
  //     "@type": "PostalAddress",
  //     streetAddress: "123 Main Street",
  //     addressLocality: "San Diego",
  //     addressRegion: "CA",
  //     postalCode: "92101",
  //     addressCountry: "US",
  //   },
  // }
  gtm: null, //`G-XYZ` Measurement Id,
  website: {
    name: "San Diego SEO",
    logo: null, //path image logo (public folder)
  },
  navbar: {
    templateNumber: 3,
  },
  footer: {
    templateNumber: 1,
  },
  hero: {
    templateNumber: 8,
    heading: "Dominate San Diego Search Results changed",
    text: `<p>imagine your website appearing at the top of Google when potential customers search for products or services you offer.<br></br> With our strategic SEO approach, we'll help you outrank your competitors and capture valuable leads in the San Diego market.</p>`,
    button: `Talk to us`,
    tag: "Improve SEO",
    skills: [
      {
        title: "smart skills",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      },
      {
        title: "smart skills",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      },
      {
        title: "smart skills",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      },
    ],
  },
  cta: {
    templateNumber: 1,
    heading: "San Diego SEO: Drive Organic Traffic to Your Business",
    text: `<p>Are you a San Diego business owner struggling to get found online?</p><p>In today's digital world, ranking high in search results is essential for attracting customers and growing your business.</p><p>Our expert San Diego SEO services can help you climb the rankings, drive more organic traffic to your website, and achieve your business goals</p>`,
    button: "contact us",
  },
  features: {
    templateNumber: 1,
    heading: "Our Proven San Diego SEO Services, changed data.ts in main repo",
    text: "<p>We offer a comprehensive suite of SEO services tailored to the unique needs of San Diego businesses:</p>",
    cards: [
      {
        title: "Keyword Research & Strategy",
        description:
          "<p>We identify the most valuable keywords your target audience is using and develop a strategy to rank for those terms.</p>",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-microscope"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>',
      },
      {
        title: "On-Page Optimization",
        description:
          "<p>We optimize your website's content, structure, and meta tags to ensure it's easily understood by both search engines and users.</p> <p>This includes optimizing title tags, headings, image alt text, and more..</p>",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-check"><path d="M12 21V7"/><path d="m16 12 2 2 4-4"/><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"/></svg>`,
      },
      {
        title: "Off-Page Optimization & Link Building",
        description:
          "<p>We build high-quality backlinks to your website from reputable sources to improve your domain authority and search rankings.</p>",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
      },
      {
        title: "Technical SEO",
        description:
          "<p>We ensure your website is technically sound and optimized for search engine crawlers.</p><p>This includes improving website speed, mobile-friendliness, and site architecture.</p>",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rss"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>`,
      },
      {
        title: "Local SEO for San Diego Businesses",
        description:
          "<p>We create engaging and informative content that attracts your target audience and encourages them to share it, building your online presence and authority.</p> <p>This includes blog posts, articles, infographics, and videos.</p>",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
      },
      {
        title: "Keyword Research & Strategy",
        description:
          "We identify the most valuable keywords your target audience is using and develop a strategy to rank for those terms.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pinned"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/></svg>`,
      },
    ],
  },
  testimonialsSection: {
    templateNumber: 1,
    heading: "What people say about San Diego SEO",
    text: `<p>Are you a San Diego business owner struggling to get found online?</p><p>In today's digital world, ranking high in search results is essential for attracting customers and growing your business.</p><p>Our expert San Diego SEO services can help you climb the rankings, drive more organic traffic to your website, and achieve your business goals</p>`,
    testimonials: [
      {
        authorName: "lorem",
        authorPosition: "Enterprise leader",
        text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum quam at purus semper, sit amet varius tortor convallis. Cras fringilla, nunc sit amet condimentum sagittis, ex odio accumsan lectus, in pretium nisl arcu et dui. Nam non cursus metus, sed hendrerit lectus. Fusce vel luctus tortor, a lacinia massa</p>",
        image: "/assets/blog/authors/joe.jpeg",
      },
      {
        authorName: "lorem",
        authorPosition: "Enterprise leader",
        text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum quam at purus semper, sit amet varius tortor convallis. Cras fringilla, nunc sit amet condimentum sagittis, ex odio accumsan lectus, in pretium nisl arcu et dui. Nam non cursus metus, sed hendrerit lectus. Fusce vel luctus tortor, a lacinia massa</p>",
        image: "/assets/blog/authors/joe.jpeg",
      },
    ],
  },
  portifolio: {
    templateNumber: 1,
    heading: "Why Choose US for San Diego SEO?",
    text: null,
    cards: [
      {
        title: "Experienced San Diego SEO Experts",
        description:
          "<p>Our team has years of experience helping San Diego businesses achieve top rankings. We understand the local market and know what it takes to succeed.</p>",
        image: "/expert-seo-team.webp",
      },
      {
        title: "Data-Driven Approach to SEO",
        description:
          "<p>We use advanced analytics and tracking tools to monitor your website's performance and make data-driven decisions to improve your results.</p>",
        image: "/san-diego-seo-experts.webp",
      },
      {
        title: "Transparent Reporting & Communication",
        description:
          "<p>We provide regular reports on your website's progress and keep you informed every step of the way. We believe in open and honest communication.</p>",
        image: "/customized-seo.webp",
      },
      {
        title: "Customized SEO Strategies",
        description:
          "<p>We develop customized SEO strategies tailored to your specific business goals and target audience. We don't believe in one-size-fits-all solutions.</p>",
        image: "/data-driven-approach-to-seo.webp",
      },
    ],
  },
  cases: {
    templateNumber: 1,
    heading: "Cases Studies",
    text: null,
    cards: [
      {
        title: "Case Study",
        image: "/customized-seo.webp",
        description: "<p>Brief description of the case study.</p>",
      },
      {
        title: "Case Study",
        image: "/transparent-reporting-comm.webp",
        description: "<p>Brief description of the case study.</p>",
      },
      {
        title: "Case Study",
        image: "/data-driven-seo.webp",
        description: "<p>Brief description of the case study.</p>",
      },
    ],
  },
  faq: {
    templateNumber: 1,
    heading: "Local SEO in San Diego FAQs",
    text: null,
    items: [
      {
        question:
          "What is SEO and why is it important for my San Diego business?",
        answer:
          "<p>SEO stands for Search Engine Optimization. It's the process of improving your website and online presence to rank higher in search engine results like Google. For San Diego businesses, this means more local customers finding you online when they search for products or services you offer.</p>",
      },
      {
        question:
          "How can SEO help my business rank higher in local San Diego search results?",
        answer:
          "<p>SEO focuses on making your website more relevant and authoritative in the eyes of search engines. This involves optimizing your website content with relevant keywords (like 'best coffee shop in Gaslamp Quarter'), building high-quality backlinks, and ensuring your website is technically sound and mobile-friendly</p>",
      },
      {
        question:
          "What are the main elements of a successful SEO strategy in San Diego?",
        answer: `<ul className="list-disc list-inside">
              <li><strong>Keyword Research:</strong> Identifying the terms San Diego residents use to find businesses like yours.</li>
              <li><strong>On-page optimization:</strong> Optimizing your website&apos;s content, structure, and meta tags.</li>
              <li><strong>Off-page optimization:</strong> Building local citations and earning backlinks from reputable websites.</li>
              <li><strong>Content marketing:</strong> Creating valuable content that attracts and engages your target audience.</li>
              <li><strong>Technical SEO:</strong> Ensuring your website is fast, mobile-friendly, and easy for search engines to crawl.</li>
            </ul>
          </div>`,
      },
      {
        question:
          "How long does it take to see results from SEO in a competitive market like San Diego?",
        answer:
          "<p>SEO is a long-term strategy. While some improvements can be seen within weeks, it typically takes 3-6 months to see significant results in a competitive market like San Diego. Factors like your website's current state, competition, and the SEO strategy employed all play a role.</p>",
      },
      {
        question:
          "What are some common SEO mistakes that San Diego businesses make?",
        answer: `
         <p>Common mistakes include:</p>
              <ul className="list-disc list-inside">
              <li>Not optimizing for local keywords (e.g., &quot;San Diego dentist&quot;).</li>
              <li>Neglecting their Google Business Profile.</li>
              <li>Having a slow-loading or mobile-unfriendly website.</li>
              <li>Not building local citations (listings on relevant online directories).</li>
              <li>Ignoring the importance of high-quality content.</li>
            </ul>`,
      },
      {
        question:
          "Do you offer SEO services specifically tailored to San Diego businesses?",
        answer:
          "<p>Yes, absolutely! We specialize in helping San Diego businesses improve their online visibility and attract more local customers.</p>",
      },
      {
        question:
          "What SEO services are included in a typical San Diego optimization package?",
        answer: `<p>Our San Diego SEO packages typically include:</p>
            <ul className="list-disc list-inside">
              <li><strong>Keyword research and strategy:</strong> Identifying the best keywords for your business.</li>
              <li><strong>On-page optimization:</strong> Optimizing your website content and technical elements.</li>
              <li><strong>Off-page optimization:</strong> Building citations and backlinks.</li>
              <li><strong>Content marketing:</strong> Creating valuable content to attract your target audience.</li>
              <li><strong>Technical SEO:</strong> Improving website speed, mobile-friendliness, and crawlability.</li>
              <li><strong>Reporting and analysis:</strong> Tracking your progress and providing regular performance reports.</li>
            </ul>`,
      },
      {
        question:
          "How do you determine the best keywords to target for my San Diego business?",
        answer: `We use a combination of tools and techniques to identify relevant keywords with high search volume and low competition. This includes analyzing your competitors, understanding your target audience, and using keyword research tools to uncover valuable search terms.`,
      },
      {
        question:
          "How much should I expect to invest in SEO services in San Diego?",
        answer: `<p>SEO pricing varies depending on the scope of services, your website's current condition, and the competitiveness of your industry. We offer customized packages to fit various budgets and needs. Contact us for a free consultation and personalized quote.</p>`,
      },
    ],
  },
  contact: {
    title: "Ready to Get Started?",
    heading: "Get Your Free San Diego SEO Consultation",
    text: `<p>Ready to take your San Diego business to the next level with SEO? Contact us today for a free consultation</p>
    <p>We'll analyze your website, discuss your goals, and develop a customized plan to help you achieve online success.</p>`,
  },
  map: {
    heading: "Visit us",
    text: `<strong>Address</strong>
            <p>1420 Kettner Boulevard, Suite 1752</p>
            <p>San Diego, California 92101</p>
            <a href="mailto:hello@seoinsandiego.com">hello@seoinsandiego.com</a>`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.7149444863007!2d-117.17215492341742!3d32.72020158688578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954ac4ec1eddf%3A0xa20df4d445e727ca!2s1420%20Kettner%20Blvd%2C%20San%20Diego%2C%20CA%2092101%2C%20USA!5e0!3m2!1sen!2sbr!4v1732235354896!5m2!1sen!2sbr" width="100%" height="550" loading="lazy" ></iframe>`,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pin"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>',
  },
  blogSection: {
    templateNumber: 1,
    heading: "Our SEO Blog",
    text: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            perferendis eos amet eum repudiandae aspernatur mollitia quos
            consectetur voluptatibus pariatur </p>`,
    tag: "SEO",
  },
};
