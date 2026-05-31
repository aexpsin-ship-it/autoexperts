import ContactBanner from "../components/ContactBanner";
import ContactDetail from "../components/ContactDetail";
import Office from "../components/Office";

export default function ContactUsPage() {
  return (
    <main className="w-full overflow-hidden bg-black">
    <ContactBanner/>
    <Office/>
    <ContactDetail/>
    </main>
  );
}