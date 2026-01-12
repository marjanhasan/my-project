import bgImg from "../../assets/bg-start-project.png";

export default function StartProjectSection() {
  return (
    <section className="bg-[#FAF8F5] w-full py-16 px-5 lg:px-0">
      <div
        className="relative w-full max-w-6xl mx-auto h-123 bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bgImg})`,
        }}
      >
        {/* Centered content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-medium text-white mb-6 max-w-xl">
            Ready to start your project?
          </h1>
          <p className="text-lg text-[#FEFEFE] mb-10 max-w-xl">
            Send us a message and let's talk about what you're hoping to create.
          </p>
          <button className="bg-[#FEFEFE] text-[#121417] font-medium py-3 px-6 rounded-[60px]  transition hover:opacity-90 cursor-pointer leading-[150%] tracking-[0.5%]">
            Contact with Us
          </button>
        </div>
      </div>
    </section>
  );
}
