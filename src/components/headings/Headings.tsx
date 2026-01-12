export default function Headings({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-213 mx-auto text-center px-5 lg:px-0">
      <h1 className="text-[46px] font-medium leading-[120%] tracking-[1.2%] text-[#3A0E1F] mb-4">
        {title}
      </h1>
      <p className="text-[18px] font-medium leading-[140%] tracking-[1.5%] text-[#2F343A]">
        {subtitle}
      </p>
    </div>
  );
}
