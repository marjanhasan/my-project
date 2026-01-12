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
  iconColor: string;
  bgColor: string;
}

export default function Accordion({
  items,
  iconColor,
  bgColor,
}: AccordionProps) {
  // Only one section can be open
  const [openId, setOpenId] = useState<number | string | null>(null);

  const toggleSection = (id: number | string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-205 mx-auto mt-10 px-5 lg:px-0">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="rounded-xl mb-4 overflow-hidden shadow cursor-pointer"
            style={{ backgroundColor: bgColor }}
            onClick={() => toggleSection(item.id)}
          >
            <div className="flex justify-between items-center px-6 py-4">
              <span className="font-medium text-[#16181C] text-xl">
                {item.title}
              </span>
              {isOpen ? (
                <FaCircleXmark size={28} color={iconColor} />
              ) : (
                <FaCirclePlus size={28} color={iconColor} />
              )}
            </div>

            {/* Smooth expand / collapse */}
            <div
              className={`px-6 text-[#32363F] overflow-hidden transition-all duration-300 ${
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
