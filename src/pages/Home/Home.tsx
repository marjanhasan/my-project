import CtaSection from "../../components/ctaSection/CtaSection";
import bannerImg from "../../assets/banner.jpg";
import communityImg from "../../assets/community-home.jpg";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <CtaSection
        title="Curated home design for Oak Ridge"
        subtitle="Discover thoughtfully sourced furnishings, vintage pieces, and a trusted community marketplace—all local, all pickup."
        backgroundImage={bannerImg}
        overlay={true}
        buttons={[
          { label: "Shop Local", bgColor: "#FEFEFE", textColor: "#121417" },
          {
            label: "Join the Community",
            bgColor: "transparent",
            textColor: "#FFFFFF",
            borderColor: "#FFFFFF",
          },
        ]}
      />

      {/* Community section */}
      <CtaSection
        title="Ready to join our community?"
        subtitle="Start with a free trial. No credit card required. Cancel anytime."
        backgroundImage={communityImg}
        overlay={true}
        buttons={[
          { label: "Shop Local", bgColor: "#FEFEFE", textColor: "#121417" },
        ]}
      />
    </div>
  );
}
