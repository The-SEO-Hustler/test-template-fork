import Map from '@/components/map';
import FormSection from '@/components/formSection';
import HeroSelector from '@/components/hero/heroSelector'
import { pageData } from '@/lib/data'
import CtaSelector from '@/components/cta/ctaSelector'
import PortifolioSelector from '@/components/portifolio/portifolioSelector'
import ServicesSelector from '@/components/servicesSection/servicesSelector'
import CasesSelector from '@/components/caseStudies/casesSelector'
import FaqSelector from '@/components/faq/faqSelector'
import BlogSelector from '@/components/blogSection/blog-selector'
import TestimonialSelector from '@/components/testimonials/testimonialsSelector'
export default function Home() {

  const componentMap = {
    hero: HeroSelector,
    cta: CtaSelector,
    cases: CasesSelector,
    services: ServicesSelector,
    faq: FaqSelector,
    contact: FormSection,
    testimonialsSection: TestimonialSelector,
    portfolio: PortifolioSelector,
    map: Map,
    blogSection: BlogSelector,
  };

  return (
    <>
      {/* You can add any other html section in here  */}
      {pageData.homeJsonSchema &&
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: pageData.homeJsonSchema }}
        />
      }

      {pageData.sections.map((section, index) => {
        const Component = componentMap[section.type];
        return section.data ? (
          <Component key={`${section.type}-${index}`} data={section.data} />
        ) : null

      })}


      {/* {pageData.blogSection && <BlogSelector />} */}
    </>
  );
}
