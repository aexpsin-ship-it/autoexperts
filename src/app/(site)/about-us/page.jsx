
import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import AboutServices from "../components/AboutServices";
import OurPeople from "../components/OurPeople";

export default function AboutUsPage() {
  return (
    <main className="w-full overflow-hidden">
      <AboutHero />
      <AboutStats />
      <AboutServices />

      <section id="ourpeople">
        <OurPeople />
      </section>
    </main>
  );
}