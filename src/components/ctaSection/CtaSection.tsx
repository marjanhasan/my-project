interface ButtonConfig {
  label: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  buttons?: ButtonConfig[];
  overlay?: boolean;
}

export default function CtaSection({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = "#FAF8F5",
  textColor = "#FFFFFF",
  buttons = [],
  overlay = true,
}: CtaSectionProps) {
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
        className="relative w-full max-w-6xl mx-auto min-h-115 h-auto bg-cover bg-center rounded-2xl"
        style={backgroundStyle}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 max-w-xl"
            style={{ color: textColor }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="text-base sm:text-lg mb-6 sm:mb-10 max-w-xl"
              style={{ color: textColor }}
            >
              {subtitle}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
              {buttons.map((btn, index) => (
                <button
                  key={index}
                  onClick={btn.onClick}
                  className="w-full sm:w-auto px-6 py-3 rounded-[60px] font-medium transition hover:opacity-90 cursor-pointer"
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
