import InfrastructureSection from "../components/InfrastructureSection";
import WhyChooseAutoExperts from "../components/WhyChooseAutoExperts";
import WorkshopExperience from "../components/WorkshopExperience";


export default function InfrastructurePage() {
  return (
    <main className="w-full overflow-hidden bg-black">
      <InfrastructureSection />
      <WorkshopExperience />
      <WhyChooseAutoExperts />
    </main>
  );
}