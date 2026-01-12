import { FaEnvelope } from "react-icons/fa";
import ContactCard from "../../components/contact-card/ContactCard";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMdMap } from "react-icons/io";
import Headings from "../../components/headings/Headings";

export default function ContactSection() {
  return (
    <section className="py-4">
      <Headings
        title="Our Story"
        subtitle="Oak Ridge Exchange was born from a simple belief: home should feel intentional, not cluttered with mass-market sameness."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0 gap-8 py-8">
        <ContactCard
          title="Email"
          description="Our friendly team is ready to help."
          value="support@telehealth.com"
        >
          <FaEnvelope size={24} color="#121417" />
        </ContactCard>
        <ContactCard
          title="Phone"
          description="Available Mon - Fri from 8am to 5 pm"
          value="+123 - 456 -789"
        >
          <MdOutlinePhoneInTalk size={24} color="#121417" />
        </ContactCard>
        <ContactCard
          title="Office Location"
          description="Come and Say hello at our office HQ."
          value="350 5th Avenue, Floor 21 Florida."
        >
          <IoMdMap size={24} color="#121417" />
        </ContactCard>
      </div>
    </section>
  );
}
