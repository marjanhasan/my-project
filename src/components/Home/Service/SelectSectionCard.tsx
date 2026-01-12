interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  listItems: string[];
  buttonText: string;
  onButtonClick?: () => void;
}

export default function SelectSectionCard({
  icon,
  title,
  description,
  listItems,
  buttonText,
  onButtonClick,
}: CardProps) {
  return (
    <div className="bg-[#FAF8F5] flex flex-col w-full sm:w-[320px] md:w-91.5 lg:w-116.5 px-6 md:px-8 py-8 md:py-10 items-start rounded-2xl border border-[#CCCDC1]">
      {/* Icon inside a circle */}
      <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white mb-5">
        {icon}
      </div>

      {/* Title */}
      <h2 className="text-[20px] md:text-[28px] lg:text-[32px] text-[#3A0E1F] font-medium mb-3">
        {title}
      </h2>

      {/* Description */}
      <p className="text-[#2F343A] mb-6 md:mb-8 text-sm md:text-base">
        {description}
      </p>

      {/* Unordered list */}
      <ul className="list-disc list-inside mb-6 md:mb-10 space-y-2 md:space-y-3 text-sm md:text-base">
        {listItems.map((item, index) => (
          <li key={index} className="text-[#2F343A] pl-2">
            {item}
          </li>
        ))}
      </ul>

      {/* Full width button */}
      <button
        onClick={onButtonClick}
        className="w-full border border-[#636B2F] text-[#636B2F] py-2 rounded-[60px] transition cursor-pointer text-sm md:text-base"
      >
        {buttonText}
      </button>
    </div>
  );
}
