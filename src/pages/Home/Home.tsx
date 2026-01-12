import CtaSection from "../../components/ctaSection/CtaSection";
import banner from "../../assets/banner.jpg";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <CtaSection
        title="Curated home design for Oak Ridge"
        subtitle="Discover thoughtfully sourced furnishings, vintage pieces, and a trusted community marketplace—all local, all pickup."
        backgroundImage={banner}
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
    </div>
  );
}
