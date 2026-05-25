import ContactBanner from "../components/ContactBanner";
import ContactDetail from "../components/ContactDetail";
import Office from "../components/Office";

export default function ContactUsPage() {
  return (
    <div className="w-full overflow-hidden">
    <ContactBanner/>
    <Office/>
    <ContactDetail/>
    </div>
  );
}