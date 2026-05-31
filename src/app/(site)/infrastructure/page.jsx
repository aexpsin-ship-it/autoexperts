import InfrastructureSection from "../components/InfrastructureSection";
import WhyChooseAutoExperts from "../components/WhyChooseAutoExperts";
import WorkshopExperience from "../components/WorkshopExperience";


export default function InfrastructurePage() {
  return (
    <main className="w-full overflow-hidden bg-[var(--primary)] text-white relative">
      {/* Background Glow (match ContactBanner) */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[var(--gold-accent)] opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--gold-accent)] opacity-10 blur-3xl" />

      <InfrastructureSection />
      <WorkshopExperience />
      <WhyChooseAutoExperts />
    </main>
  );
}