import type { ReactNode } from "react";

interface CardProps {
  title: string;
  listItems: string[];
  titleColor: string;
  icon: ReactNode;
}

export default function CardSection({
  title,
  listItems,
  titleColor,
  icon,
}: CardProps) {
  return (
    <section>
      <div className="bg-[#FAF8F5] flex flex-col w-full h-full p-8 items-start rounded-2xl border border-[#CCCDC1]">
        {/* Title */}
        <h2
          className={`text-[20px] md:text-[28px] lg:text-[32px] ${titleColor} font-medium mb-6`}
        >
          {title}
        </h2>

        {/* Tick List */}
        <ul className="space-y-3">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              {icon}
              {/* Text */}
              <span className="text-[#2F343A] text-sm md:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
