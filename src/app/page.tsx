import Map from '@/components/map';
import FormSection from '@/components/formSection';
import HeroSelector from '@/components/hero/heroSelector'
import { pageData } from '@/lib/data'
import CtaSelector from '@/components/cta/ctaSelector'
import PortifolioSelector from '@/components/portifolio/portifolioSelector'
import FeatureSelector from '@/components/featuresSection/featureSelector'
import CasesSelector from '@/components/caseStudies/casesSelector'
import FaqSelector from '@/components/faq/faqSelector'
import BlogSelector from '@/components/blogSection/blog-selector'
import TestimonialSelector from '@/components/testimonials/testimonialsSelector'

export const metadata = {
  robots: { index: false }
}

export default function Home() {

  return (
    <>
      {/* You can add any other html section in here  */}
      {pageData.homeJsonSchema &&
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageData.homeJsonSchema) }}
        />
      }

      <HeroSelector />
      {pageData.cta &&
        <CtaSelector />
      }
      {pageData.testimonialsSection &&
        <TestimonialSelector />
      }
      {pageData.features &&
        <FeatureSelector />
      }
      {pageData.portifolio &&
        <PortifolioSelector />
      }

      <Map data={pageData.map} />
      {pageData.cases &&
        <CasesSelector />
      }
      {pageData.faq &&
        <FaqSelector />
      }
      {pageData.blogSection &&
        <BlogSelector />
      }
      <FormSection data={pageData.contact} />
    </>
  );
}
