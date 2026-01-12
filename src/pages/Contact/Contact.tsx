import CommonQuestionSection from "./CommonQuestionSection";
import ContactSection from "./ContactSection";
import GetInTouchSection from "./GetInTouchSection";
import StartProjectSection from "./StartProjectSection";

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto">
      <ContactSection />
      <GetInTouchSection />
      <CommonQuestionSection />
      <StartProjectSection />
    </section>
  );
}
