import { useState } from "react";
import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6";

// Generic type for accordion item
export interface AccordionItem {
  id: number | string;
  title: string;
  content: string;
}

// Props for the reusable Accordion component
interface AccordionProps {
  items: AccordionItem[];
  allowMultipleOpen?: boolean; // optional, default true now
}

export default function Accordion({
  items,
  allowMultipleOpen = true, // default true for multi-open
}: AccordionProps) {
  const [openSections, setOpenSections] = useState<(number | string)[]>([]);

  const toggleSection = (id: number | string) => {
    if (openSections.includes(id)) {
      // Close the section if already open
      setOpenSections(openSections.filter((sectionId) => sectionId !== id));
    } else {
      // Open section
      setOpenSections(allowMultipleOpen ? [...openSections, id] : [id]);
    }
  };

  return (
    <div className="max-w-205 mx-auto mt-10 px-5 lg:px-0">
      {items.map((item) => {
        const isOpen = openSections.includes(item.id);
        return (
          <div
            key={item.id}
            className="rounded-xl mb-4 overflow-hidden bg-[#F5F9EF] shadow cursor-pointer"
            onClick={() => toggleSection(item.id)}
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

            {/* Smooth expand/collapse */}
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 pb-4" : "max-h-0"
              }`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
