import React from "react";

interface ButtonConfig {
  label: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

interface StartProjectSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  buttons?: ButtonConfig[];
  overlay?: boolean;
}

export default function StartProjectSection({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = "#FAF8F5",
  textColor = "#FFFFFF",
  buttons = [],
  overlay = true,
}: StartProjectSectionProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `${
          overlay ? "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35))," : ""
        } url(${backgroundImage})`,
      }
    : {
        backgroundColor,
      };

  return (
    <section className="w-full py-16 px-5 lg:px-0">
      <div
        className="relative w-full max-w-6xl mx-auto h-[460px] bg-cover bg-center rounded-2xl"
        style={backgroundStyle}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1
            className="text-5xl font-medium mb-6 max-w-xl"
            style={{ color: textColor }}
          >
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg mb-10 max-w-xl" style={{ color: textColor }}>
              {subtitle}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="flex gap-4 flex-wrap justify-center">
              {buttons.map((btn, index) => (
                <button
                  key={index}
                  onClick={btn.onClick}
                  className="px-6 py-3 rounded-[60px] font-medium transition hover:opacity-90"
                  style={{
                    backgroundColor: btn.bgColor || "#FFFFFF",
                    color: btn.textColor || "#121417",
                    border: btn.borderColor
                      ? `1px solid ${btn.borderColor}`
                      : "none",
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
