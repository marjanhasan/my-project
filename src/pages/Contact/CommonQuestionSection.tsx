import Accordion from "../../components/accordion/Accordion";
import Headings from "../../components/headings/Headings";

export default function CommonQuestionSection() {
  return (
    <section className="py-4 mb-12">
      <Headings
        title="Common Questions"
        subtitle="Frequently Asked Questions"
      />
      <Accordion />
    </section>
  );
}
