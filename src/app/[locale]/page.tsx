import { Hero } from "@/components/sections/Hero";
import { GeoSection } from "@/components/sections/GeoSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesTable } from "@/components/sections/FeaturesTable";
import { DifferentiationPreview } from "@/components/sections/DifferentiationPreview";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { UseCasesGrid } from "@/components/sections/UseCasesGrid";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero ns="home" />
      <GeoSection ns="home.geo" />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <FeaturesTable />
      <DifferentiationPreview />
      <ImpactSection />
      <UseCasesGrid />
      <CTASection ns="home.cta" />
    </>
  );
}
