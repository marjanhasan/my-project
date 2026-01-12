import bgImg from "../../../assets/banner-service.jpg";

export default function BannerSection() {
  return (
    <div
      className="relative w-full max-w-6xl mx-auto h-123 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-medium text-[#636B2F] mb-6 max-w-xl">
          Design Services we Provide
        </h1>
        <p className="text-lg text-[#121417] mb-10 max-w-xl">
          Whether you need a full design plan or help finding one perfect piece,
          we're here to make the process calm, clear, and enjoyable.
        </p>
        <button className="bg-[#636B2F] text-[#FEFEFE] transition hover:opacity-90 font-medium py-3 px-6 rounded-[60px] cursor-pointer leading-[150%] tracking-[0.5%]">
          Contact with Us
        </button>
      </div>
    </div>
  );
}
