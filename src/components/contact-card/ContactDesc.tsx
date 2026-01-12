export default function ContactDesc({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h2 className="text-[#121417] font-medium text-[18px] leading-[140%] tracking-[1.5%] mb-3">
        {title}
      </h2>
      <p className="text-[#2F343A] font-normal leading-[140%]">{description}</p>
    </>
  );
}
