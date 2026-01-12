import ContactDesc from "./ContactDesc";
import ContactIcon from "./ContactIcon";
import ContactLast from "./ContactLast";

export default function ContactCard({
  title,
  description,
  value,
  children,
}: {
  title: string;
  description: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-8 bg-[#FAF8F5] rounded-2xl">
      <ContactIcon>{children}</ContactIcon>
      <ContactDesc title={title} description={description} />
      <ContactLast value={value} />
    </div>
  );
}
