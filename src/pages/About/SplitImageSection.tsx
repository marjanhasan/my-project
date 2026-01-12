import React from "react";

interface SplitImageSectionProps {
  image: string;
  imagePosition?: "left" | "right";
  title: string;
  paragraphs: [string, string, string];
  bgColor?: string;
}

const SplitImageSection: React.FC<SplitImageSectionProps> = ({
  image,
  imagePosition = "left",
  title,
  paragraphs,
  bgColor = "bg-[#F6F7FB]",
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section className={`w-full ${bgColor} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-6 md:px-12 items-center">
        {/* IMAGE */}
        <div
          className={`flex justify-center items-center ${
            isImageLeft ? "md:order-1" : "md:order-2"
          }`}
        >
          <div
            className="
              w-full
              max-w-130
              aspect-square
              rounded-2xl
              overflow-hidden
            "
          >
            <img
              src={image}
              alt="Section Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div
          className={`flex justify-center items-center text-center md:text-left ${
            isImageLeft ? "md:order-2" : "md:order-1"
          }`}
        >
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#3A0E1F] mb-4 md:mb-6 leading-[120%] tracking-normal">
              {title}
            </h2>

            {paragraphs.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-[#2F343A] mb-4">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitImageSection;
