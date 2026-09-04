import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutFacility from '@/components/about/AboutFacility';
import AboutInfrastructure from '@/components/about/AboutInfrastructure';
import AboutGlobalReach from '@/components/about/AboutGlobalReach';
import AboutQuality from '@/components/about/AboutQuality';
import AboutMission from '@/components/about/AboutMission';
import AboutVision from '@/components/about/AboutVision';
import AboutInsights from '@/components/about/AboutInsights';
import AboutWhyPartner from '@/components/about/AboutWhyPartner';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'About Us & Infrastructure — Twofold Paper Stationery Manufacturer',
  description: 'Twofold is a Palghar-based notebook and stationery manufacturer built on paper-trade heritage since 1988, hands-on production experience, and container-load export capability.',
};

export default function AboutUsPage() {
  return (
    <main>
      {/* 01 — PAGE INTRO / HERO */}
      <AboutHero />

      {/* 02 — OUR STORY */}
      <AboutStory />

      {/* 03 — HERITAGE / TIMELINE */}
      <AboutTimeline />

      {/* 04 — OUR MANUFACTURING FACILITY */}
      <AboutFacility />

      {/* 05 — INFRASTRUCTURE */}
      <AboutInfrastructure />

      {/* 06 — GLOBAL REACH & EXPORT PIPELINE */}
      <AboutGlobalReach />

      {/* 07 — QUALITY & COMPLIANCE */}
      <AboutQuality />

      {/* 08 — OUR MISSION (twofold.com motion) */}
      <AboutMission />

      {/* 09 — OUR VISION (twofold.com motion) */}
      <AboutVision />

      {/* 10 — DEDICATED INSIGHTS */}
      <AboutInsights />

      {/* 11 — WHY PARTNER WITH US (pinned anchor numeral) */}
      <AboutWhyPartner />

      {/* 12 — FINAL CTA */}
      <AboutCTA />
    </main>
  );
}
