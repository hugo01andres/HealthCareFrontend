import PageTransitionWrapper from "@/shared/components/animation/PageTransitionWrapper";
import LandingBanner from "../components/LandingBanner";
import FeaturesSection from "../components/FeaturesSection";

export default function HomePage() {
  return (
    <PageTransitionWrapper className="mx-auto container">
      <div className="flex flex-col gap-8">
        <LandingBanner />

        <FeaturesSection />
      </div>
    </PageTransitionWrapper>
  );
}
