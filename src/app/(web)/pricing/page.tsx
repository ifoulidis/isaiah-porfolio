import MotionCard from "@/components/ui/motion-card";

export default function Pricing() {
  return (
    <div className="relative max-w-6xl mx-auto px-5 animate-fade-in delay-1000 opacity-0 duration-500">
      <article className="mb-32 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="prose md:prose-xl prose-outstatic animate-fade-up opacity-0">
            <MotionCard
              title="Small Business Website"
              price="From $250 plus GST"
              description="About 5 pages, including a contact page and information."
            />

            <MotionCard
              title="Small E-Commerce Website"
              price="From $750 plus GST"
              description="Arrange to sell a few products with email invoicing."
            />

            <MotionCard
              title="E-Commerce Website"
              price="From $3000 plus GST"
              description="Sell a range of products that can be updated as you go from an owner dashboard."
            />

            <MotionCard
              title="Complex E-Commerce Website"
              price="From $6000 plus GST"
              description="For an extensive range of features or complex products and requirements."
            />

            <MotionCard
              title="Business Application"
              price="Highly variable"
              description="Want upgrades, bug fixes, or a new application? Get in touch!"
            />

            <MotionCard
              title="Unique Website"
              price="Highly variable"
              description="Got an interesting idea in mind? You can start simple and invest more later, or go all out from the start."
            />
          </div>
        </div>
      </article>
    </div>
  );
}
