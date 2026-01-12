import bgImg from "../../../assets/Service-Page/service-cta.jpg";

export default function CtaSection() {
  return (
    <section className="bg-[#FAF8F5] w-full py-16 px-4 sm:px-6 lg:px-0">
      <div
        className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left-aligned content */}
        <div className="relative flex flex-col justify-center text-left px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#636B2F] mb-4 sm:mb-6 max-w-full sm:max-w-xl wrap-break-word">
            Ready to start your project?
          </h1>
          <p className="text-base sm:text-lg text-[#121417] mb-6 sm:mb-10 max-w-full sm:max-w-xl wrap-break-word">
            Send us a message and let's talk about what you're hoping to create.
          </p>
          <button className="bg-[#636B2F] text-[#FEFEFE] transition hover:opacity-90 font-medium py-3 px-6 rounded-[60px] cursor-pointer leading-[150%] tracking-[0.5%] w-full sm:w-auto max-w-60">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
