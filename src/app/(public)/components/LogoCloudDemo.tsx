import LogoCloud, { LogoItem } from '@/components/LogoCloud';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { prisma } from '@/lib/prisma';

async function getLogos(): Promise<LogoItem[]> {
  const logos = await prisma.logo.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
  });

  return logos.map(logo => ({
    src: logo.imageUrl,
    alt: logo.alt,
    shape: logo.shape as 'square' | 'rect',
  }));
}

export default async function LogoCloudDemo() {
  const clientLogos = await getLogos();
  return (
    <section aria-labelledby="logo-cloud-heading" className="relative pt-4 pb-16 md:pt-[125px] md:pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Logo Cloud - Left Side */}
          <div className="w-full lg:w-[600px]">
            <LogoCloud logos={clientLogos} speedMs={45000} />
          </div>

          {/* Content - Right Side */}
          <div className="flex-1 p-6 md:p-10">
            <h2
              id="logo-cloud-heading"
              className="text-[28px] md:text-3xl font-bold mb-5 text-black"
            >
              Trusted by Leading Brands Worldwide
            </h2>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              We&apos;ve partnered with dozens of brands across ecommerce, travel, finance, and lifestyle sectors to optimize their conversion rates and drive measurable revenue growth.
            </p>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

