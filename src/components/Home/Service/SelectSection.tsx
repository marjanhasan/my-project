import Headings from "../../headings/Headings";
import SelectSectionCard from "./SelectSectionCard";
import Home from "../../../assets/icons/Home.svg";
import Search from "../../../assets/icons/Search.svg";

export default function SelectSection() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-30 py-8 md:py-28">
      <Headings title="Select What You Want" />

      <div className="flex flex-wrap justify-center items-start gap-6 md:gap-8 mt-15">
        <SelectSectionCard
          icon={<img src={Home} alt="Home" className="w-5 h-5 md:w-6 md:h-6" />}
          title="Interior Design"
          description="Full-room or whole-home design services tailored to your aesthetic and lifestyle."
          listItems={[
            "Initial consultation and space assessment",
            "Mood boards and design concepts",
            "Furniture and décor sourcing",
            "Layout and styling guidance",
            "Access to trade resources",
          ]}
          buttonText="Contact with Us"
          onButtonClick={() => alert("Button clicked!")}
        />

        <SelectSectionCard
          icon={
            <img src={Search} alt="Search" className="w-5 h-5 md:w-6 md:h-6" />
          }
          title="Individualized Sourcing"
          description="Let us find that perfect piece you've been dreaming about."
          listItems={[
            "Tell us what you're looking for",
            "We source from our network",
            "Vintage, contemporary, or custom",
            "Regular updates on finds",
            "No obligation to purchase",
          ]}
          buttonText="Contact with Us"
          onButtonClick={() => alert("Button clicked!")}
        />
      </div>
    </div>
  );
}
