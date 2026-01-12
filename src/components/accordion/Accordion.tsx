import { useState } from "react";
import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
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
      "While we're rooted in Oak Ridge, we occasionally work with clients in nearby communities. Reach out and we'll see if we're a good fit",
  },
  {
    id: 4,
    title: "Can you work with my existing furniture?",
    content:
      "While we're rooted in Oak Ridge, we occasionally work with clients in nearby communities. Reach out and we'll see if we're a good fit",
  },
];

export default function Accordion() {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (id: number) => {
    if (openSections.includes(id)) {
      setOpenSections(openSections.filter((sectionId) => sectionId !== id));
    } else {
      setOpenSections([...openSections, id]);
    }
  };

  return (
    <div className="max-w-205 mx-auto mt-10 px-5 lg:px-0">
      {accordionData.map((item) => {
        const isOpen = openSections.includes(item.id);
        return (
          <div
            key={item.id}
            className={`rounded-xl mb-4 overflow-hidden bg-[#F5F9EF] shadow cursor-pointer`}
            onClick={() => toggleSection(item.id)} // Click anywhere on the card
          >
            <div className="flex justify-between items-center px-6 py-4">
              <span className="font-medium text-[#16181C] text-xl">
                {item.title}
              </span>
              <span>
                {isOpen ? (
                  <FaCircleXmark size={28} color="#636B2F" />
                ) : (
                  <FaCirclePlus size={28} color="#636B2F" />
                )}
              </span>
            </div>
            {isOpen && <div className="px-6 pb-4">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
