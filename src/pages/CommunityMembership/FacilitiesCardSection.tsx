import CardSection from "../../components/Home/CommunityMembership/CardSection";
import GreenTick from "../../assets/icons/green-tick.svg";
import CoffeeTick from "../../assets/icons/coffee-tick.svg";

export default function FacilitiesCardSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6 px-4 lg:px-0 mt-15">
      <CardSection
        title="Included with Membership"
        listItems={[
          "Community marketplace access",
          "Unlimited listing posts",
          "Direct seller messaging",
          "Event invitations",
          "Moderated environment",
          "Community support",
        ]}
        titleColor="text-[#636B2F]"
        icon={
          <img src={GreenTick} alt="Home" className="w-5 h-5 md:w-6 md:h-6" />
        }
      />
      <CardSection
        title="Always Free"
        listItems={[
          "Browse our curated shop",
          "View product details",
          "Read about our story",
          "Learn about design services",
          "Visit our physical location",
          "Sign up for newsletter",
        ]}
        titleColor="text-[#3A0E1F]"
        icon={
          <img src={CoffeeTick} alt="Home" className="w-5 h-5 md:w-6 md:h-6" />
        }
      />
    </div>
  );
}
