import SplitImageSection from "./SplitImageSection";
import StorySection from "./StorySection";
import furnitureOne from "../../assets/furniture-one.png";
import furnitureTwo from "../../assets/furniture-two.png";
import furnitureThree from "../../assets/furniture-three.png";
import CommunitySection from "./CommunitySection";

export default function About() {
  return (
    <div>
      <StorySection />
      <SplitImageSection
        image={furnitureOne}
        imagePosition="right"
        title="What We Believe"
        paragraphs={[
          "We believe that great design isn't about following trends—it's about finding pieces that resonate with how you actually live. Pieces with character. Pieces that tell a story",
          "That's why we source thoughtfully, from contemporary makers to vintage finds with history. We skip the mass-produced catalog filler and focus on what makes a house feel like home",
          "And we believe the best finds often come from your own community. That's why we created the Exchange—a trusted, local marketplace for Oak Ridge residents.",
        ]}
        bgColor="bg-[#FFFFFF]"
      />
      <SplitImageSection
        image={furnitureTwo}
        imagePosition="left"
        title="Rooted in Oak Ridge"
        paragraphs={[
          "This isn't a corporate showroom. We're local to Oak Ridge, NC—embedded in this community, supporting our neighbors, and committed to the long haul.",
          "Everything we offer is available for local pickup. No shipping. No warehouses. Just real people, real spaces, and real connections.",
          "When you shop with us, you're supporting a small business that cares deeply about this place we call home.",
        ]}
        bgColor="bg-[#FAF8F5]"
      />
      <SplitImageSection
        image={furnitureThree}
        imagePosition="right"
        title="Sourcing Story"
        paragraphs={[
          "Our vintage and sourced pieces come primarily from Palm Beach, Florida—a region known for it's style and wealth of interior design resources.",
          "We travel regularly to find one-of-a-kind furniture and décor: mid-century chairs, vintage textiles, architectural salvage, and pieces you simply can't find at a big-box store.",
          "Each vintage item is inspected, cleaned, and photographed with care. When you see it in our shop, it's ready to come home with you.",
        ]}
        bgColor="bg-[#FFFFFF]"
      />
      <CommunitySection />
    </div>
  );
}
