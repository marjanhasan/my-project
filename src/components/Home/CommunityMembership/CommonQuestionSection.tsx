import type { AccordionItem } from "../../accordion/Accordion";
import Accordion from "../../accordion/Accordion";
import Headings from "../../headings/Headings";

const faqData: AccordionItem[] = [
  {
    id: 1,
    title: "Why is there a subscription fee?",
    content:
      "The $5/month fee covers admin and moderation costs, keeping our marketplace intentional, high-quality, and free of spam. This small investment ensures every member is committed to maintaining a respectful community.",
  },
  {
    id: 2,
    title: "How long is the free trial?",
    content:
      "We're currently offering a 1-3 month free trial for new members during our launch period. No credit card required to start.",
  },
  {
    id: 3,
    title: "Can I cancel anytime?",
    content:
      "Absolutely. You can cancel your subscription at any time with no penalties or fees. Your access will continue through the end of your billing period.",
  },
  {
    id: 4,
    title: "What happens after the trial?",
    content:
      "After your free trial ends, you'll be charged $5/month to continue accessing the community marketplace. We'll notify you before your trial ends so you can decide if you'd like to continue.",
  },
  {
    id: 5,
    title: "Is my information secure?",
    content:
      "Yes. We take privacy seriously and never share your personal information. Figma Make is not intended for collecting PII or securing highly sensitive data, so we only collect what's necessary for community membership.",
  },
  {
    id: 6,
    title: "Do I need a subscription to shop at Oak Ridge Exchange?",
    content:
      "Yes. We take privacy seriously and never share your personal information. Figma Make is not intended for collecting PII or securing highly sensitive data, so we only collect what's necessary for community membership.",
  },
];

export default function CommonQuestionSection() {
  return (
    <section className="py-4 mb-12">
      <Headings
        title="Common Questions"
        subtitle="Frequently Asked Questions"
      />
      <Accordion items={faqData} iconColor="#3A0E1F" bgColor="#EDEAEC" />
    </section>
  );
}
