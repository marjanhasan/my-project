import Accordion, {
  type AccordionItem,
} from "../../components/accordion/Accordion";
import Headings from "../../components/headings/Headings";

const faqData: AccordionItem[] = [
  {
    id: 1,
    title: "What's your design philosophy?",
    content:
      "We believe in creating spaces that feel personal, not styled from a catalog. Our approach is collaborative—we listen first, then bring ideas that honor your lifestyle and aesthetic.",
  },
  {
    id: 2,
    title: "How much do services cost?",
    content:
      "Pricing varies by project scope. We'll discuss your needs and provide transparent pricing before any commitment. Initial consultations are complimentary for design services.",
  },
  {
    id: 3,
    title: "Do you work outside Oak Ridge?",
    content:
      "While we're rooted in Oak Ridge, we occasionally work with clients in nearby communities. Reach out and we'll see if we're a good fit.",
  },
  {
    id: 4,
    title: "Can you work with my existing furniture?",
    content:
      "While we're rooted in Oak Ridge, we occasionally work with clients in nearby communities. Reach out and we'll see if we're a good fit.",
  },
];

export default function CommonQuestionSection() {
  return (
    <section className="py-4 mb-12">
      <Headings
        title="Common Questions"
        subtitle="Frequently Asked Questions"
      />
      <Accordion items={faqData} bgColor="#ECEFDE" iconColor="#636B2F" />
    </section>
  );
}
