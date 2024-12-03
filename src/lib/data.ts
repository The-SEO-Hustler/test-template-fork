import { PageDataType } from "./data-type";

export const pageData: PageDataType = {
  homeJsonSchema: `[{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Static Pages Template",
  "image": "https://seoinsandiego.com/_next/image?url=%2Fhero.webp&w=3840&q=75&dpl=dpl_BPFeNNEEQKn7qG742w5iJVwF6YZk",
  "logo": "https://seoinsandiego.com/favicon.ico",
  "description": "Detailed business description",
  "url": "https://seoinsandiego.com",
  "telephone": "+1-555-555-5555",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1420 Kettner Boulevard, Suite 1752",
    "addressLocality": "San Diego",
    "addressRegion": "California",
    "postalCode": "92101",
    "addressCountry": "United States of America"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.7201699945262",
    "longitude": "-117.1695585451468"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "15:00"
    }
  ],
  "sameAs": [
    "https://seoinsandiego.com/"
  ],
  "areaServed": "San Diego, California",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "57"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Louis Molnar"
    },
    "reviewBody": "Amazing team, fast and reliable results!"
  }
}, 
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Books",
    "item": "https://example.com/books"
  }]
},
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How long does it take to start seeing results?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Most San Diego businesses begin seeing improved rankings within 3-6 months. However, significant results typically emerge within 6-12 months of consistent SEO efforts. We provide monthly progress reports to track your campaign's success."
    }
  }, {
    "@type": "Question",
    "name": "How do I know if my local business can benefit from SEO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "If your target customers are in San Diego and they search online for your products or services, SEO can help. We'll analyze your market potential and provide a clear picture of the opportunity during our initial consultation."
    }
  }, {
    "@type": "Question",
    "name": "What sets your SEO company apart from other SEO companies in San Diego?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our combination of proven results, transparent reporting, and deep local market knowledge makes us unique. We're not just SEO experts—we're San Diego business growth partners who understand the local market intimately."
    }
  }, {
    "@type": "Question",
    "name": "I'm a startup working with a small budget. Do you offer a flexible SEO package?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes! We offer scalable SEO solutions designed to grow with your business. Our startup packages focus on essential optimizations that deliver the best ROI for your investment."
    }
  }, {
    "@type": "Question",
    "name": "What happens if I don't see results from SEO within the agreed timeframe?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We're committed to your success. If we're not meeting agreed-upon KPIs, we'll reassess the strategy and make necessary adjustments at no additional cost until we achieve the desired results."
    }
  }, {
    "@type": "Question",
    "name": "Does a successful SEO campaign always lead to more sales?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "While SEO drives qualified traffic, conversion depends on multiple factors. We work with you to optimize not just rankings but also user experience and conversion paths to maximize ROI."
    }
  }]
}]`,
  gtm: "GTM-TC9RWJ6X", //`G-XYZ` Measurement Id,
  website: {
    name: "Static Pages Template",
    metadata: {
      robots: { index: false },
      title: "Static Pages Template",
      description:
        "Transform your San Diego business with proven local SEO strategies. From Gaslamp Quarter to La Jolla, we deliver results that matter. 15+ years of local expertise!",
      openGraph: {
        title: "Static Pages Template",
      },
    },
    logo: null, //path image logo (public folder)
  },
  navbar: {
    templateNumber: 2,
  },
  footer: {
    templateNumber: 1,
  },
  sections: [
    {
      type: "hero",
      data: {
        templateNumber: 8,
        heading: "Static Pages Template",
        text: `<p>In the vibrant business landscape of San Diego, standing out online isn't just an option—it's essential. As San Diego's premier SEO agency, we combine deep local knowledge with cutting-edge search optimization strategies to help your business thrive in America's Finest City.</p><br/><p>From the bustling Gaslamp Quarter to the scenic shores of La Jolla, we understand what makes San Diego businesses unique. Our proven SEO strategies have helped hundreds of local companies increase their visibility, attract more customers, and grow their revenue in this competitive market.</p>`,
        button: `Get in Touch`,
        tag: "#1 SEOs in San Diego",
        skills: [
          {
            title: "smart skills",
            content:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          },
          {
            title: "smart skills",
            content:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          },
          {
            title: "smart skills",
            content:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        templateNumber: 1,
        heading: "Static Pages Templates",
        text: `<p>San Diego's diverse economy spans biotechnology, tourism, military, and technology sectors. With over 1.4 million residents and millions of annual visitors, the digital competition is fierce. From the innovative startups in Torrey Pines to the boutique shops in Little Italy, businesses need strong online visibility to capture their share of the market.</p><br/><p>Our deep understanding of San Diego's unique business ecosystem—from the military influence of MCAS Miramar to the academic prominence of UCSD—allows us to craft SEO strategies that resonate with local audiences while attracting visitors from across Southern California and beyond.</p>`,
        button: "Get in Touch",
      },
    },
    {
      type: "cases",
      data: {
        templateNumber: 2,
        heading: "SEO That Delivers: Success Stories from San Diego",
        text: `<p>At Static Pages Template, we have a proven track record of helping businesses in San Diego achieve their online marketing goals. Here are just a few examples of our success stories:</p>`,
        cards: [
          {
            title: `Restaurants and Bars`,
            image: `/san-diego-seo-case-study-1.webp`,
            description:
              "<p>A Pacific Beach restaurant saw 150% increase in local search visibility and doubled their weekend reservations within three months of implementing our local SEO strategy.</p>",
          },
          {
            title: `Health and Medical Practices`,
            image: `/san-diego-seo-case-study-2.webp`,
            description:
              "<p>La Jolla medical practice achieved 200% growth in new patient inquiries after our comprehensive SEO campaign targeting specific treatment services.</p>",
          },
          {
            title: `Law Firms and Professional Services`,
            image: `/san-diego-seo-case-study-3.webp`,
            description:
              "<p>Downtown San Diego law firm secured top Google rankings for competitive local keywords, resulting in 85% increase in qualified leads.</p>",
          },
        ],
      },
    },
    {
      type: "services",
      data: {
        templateNumber: 1,
        heading: "Our Full Range of SEO Services for San Diego Businesses",
        text: null,
        cards: [
          {
            title: "Google My Business Optimization",
            description:
              "<p>We optimize your Google Business Profile to dominate local search results, ensuring your business stands out in San Diego's competitive market. Our team ensures your listing captures attention from Mission Valley to North County.</p>",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
          },
          {
            title: "Local Keyword Optimizationn",
            description:
              "<p>Through detailed research and analysis, we target the exact terms San Diego customers use to find businesses like yours. Our strategies incorporate neighborhood-specific keywords from Hillcrest to East Village.</p>",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-locate-fixed"><line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/></svg>`,
          },
          {
            title: "Local Business Citations",
            description:
              "<p>We build and maintain consistent business listings across all major platforms, strengthening your local SEO foundation and improving visibility throughout San Diego County.</p>",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-party-popper"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>`,
          },
          {
            title: "Local Link Building",
            description:
              "<p>Our team secures high-quality backlinks from respected San Diego businesses and organizations, boosting your website's authority and local search rankings.</p>",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
          },
          {
            title: "Local Online Reviews",
            description:
              "<p>We implement proven strategies to generate and manage customer reviews, building trust with potential customers across San Diego's diverse communities.</p>",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>`,
          },
          {
            title: "Local Reputation Management",
            description:
              "<p>Protect and enhance your business's online reputation with our comprehensive monitoring and management services, ensuring you maintain a strong presence in San Diego's digital landscape.</p>",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-kanban"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/></svg>`,
          },
          {
            title: "Local Content Creation",
            description:
              "<p>Our content team creates engaging, locally-focused content that resonates with San Diego audiences while satisfying search engine requirements for relevant, high-quality information.</p>",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rss"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>`,
          },
          {
            title: "Mobile Optimization",
            description:
              "<p>With over 60% of local searches performed on mobile devices, we ensure your website delivers a seamless experience for on-the-go San Diegans searching for your services.</p>",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tablet-smartphone"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>`,
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        templateNumber: 2,
        heading: "San Diego SEO Leaders with 15 Years of Experience",
        text: "<p>Since 2009, we've been at the forefront of San Diego's digital marketing landscape. Our team combines technical expertise with deep local market knowledge to deliver results that matter. From Ocean Beach to Coronado, we understand the unique characteristics of each San Diego neighborhood and how to reach your target audience effectively.</p>",
        button: "Get In Touch",
      },
    },
    {
      type: "faq",
      data: {
        templateNumber: 1,
        heading: "Frequently Asked Questions",
        text: null,
        items: [
          {
            question: "How long does it take to start seeing results?",
            answer:
              "<p>Most San Diego businesses begin seeing improved rankings within 3-6 months. However, significant results typically emerge within 6-12 months of consistent SEO efforts. We provide monthly progress reports to track your campaign's success.</p>",
          },
          {
            question:
              "How do I know if my local business can benefit from SEO?",
            answer:
              "<p>If your target customers are in San Diego and they search online for your products or services, SEO can help. We'll analyze your market potential and provide a clear picture of the opportunity during our initial consultation.</p>",
          },
          {
            question:
              "What sets your SEO company apart from other SEO companies in San Diego?",
            answer: `<p>Our combination of proven results, transparent reporting, and deep local market knowledge makes us unique. We're not just SEO experts—we're San Diego business growth partners who understand the local market intimately.</p>`,
          },
          {
            question:
              "I'm a startup working with a small budget. Do you offer a flexible SEO package?",
            answer:
              "<p>Yes! We offer scalable SEO solutions designed to grow with your business. Our startup packages focus on essential optimizations that deliver the best ROI for your investment.</p>",
          },
          {
            question:
              "What happens if I don't see results from SEO within the agreed timeframe?",
            answer: `
             <p>We're committed to your success. If we're not meeting agreed-upon KPIs, we'll reassess the strategy and make necessary adjustments at no additional cost until we achieve the desired results.</p>`,
          },
          {
            question:
              "Does a successful SEO campaign always lead to more sales?",
            answer:
              "<p>While SEO drives qualified traffic, conversion depends on multiple factors. We work with you to optimize not just rankings but also user experience and conversion paths to maximize ROI.</p>",
          },
        ],
      },
    },
    {
      type: "contact",
      data: {
        title: "Talk to Us",
        heading: null,
        text: `<p>Ready to dominate San Diego's digital landscape? Contact us today for a free consultation and discover how our proven SEO strategies can transform your business's online presence.</p>`,
      },
    },
    {
      type: "map",
      data: {
        heading: "Visit us",
        text: `<strong>Address</strong>
                <p>1420 Kettner Boulevard, Suite 1752</p>
                <p>San Diego, California 92101</p>
                <a href="mailto:hello@seoinsandiego.com">hello@seoinsandiego.com</a>`,
        map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.7149444863007!2d-117.17215492341742!3d32.72020158688578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954ac4ec1eddf%3A0xa20df4d445e727ca!2s1420%20Kettner%20Blvd%2C%20San%20Diego%2C%20CA%2092101%2C%20USA!5e0!3m2!1sen!2sbr!4v1732235354896!5m2!1sen!2sbr" width="100%" height="550" loading="lazy" ></iframe>`,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pin"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>',
      },
    },
  ],
};
