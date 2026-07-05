import { setRequestLocale } from 'next-intl/server';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { StatsMarquee } from '@/components/StatsMarquee';
import { Positioning } from '@/components/Positioning';
import { CaseStudies } from '@/components/CaseStudies';
import { Approach } from '@/components/Approach';
import { Timeline } from '@/components/Timeline';
import { Rating } from '@/components/Rating';
import { Testimonials } from '@/components/Testimonials';
import { Credentials } from '@/components/Credentials';
import { Contact } from '@/components/Contact';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div id="ltm-grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <StatsMarquee />
        <Positioning />
        <CaseStudies />
        <Approach />
        <Timeline />
        <Rating />
        <Testimonials />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}
