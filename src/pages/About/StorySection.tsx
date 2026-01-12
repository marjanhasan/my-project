import Headings from "../../components/headings/Headings";

export default function StorySection() {
  return (
    <section className="bg-[#FAF8F5] flex flex-col items-center gap-8 py-20 px-4 mb-6">
      <Headings
        title="Our Story"
        subtitle="Oak Ridge Exchange was born from a simple belief: home should feel intentional, not cluttered with mass-market sameness."
      />

      <button className="bg-[#3A0E1F] text-[#FEFEFE] font-medium py-3 px-6 rounded-[60px] cursor-pointer leading-[150%] tracking-[0.5%]">
        Contact with Us
      </button>
    </section>
  );
}
