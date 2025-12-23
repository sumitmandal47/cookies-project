export default function WhyJoinSection() {
  const features = [
    {
      title: "Exclusive Monthly Flavors",
      description:
        "As a club member, you’ll be the first to taste our limited-edition, seasonal flavors each month.",
    },
    {
      title: "Delivered to Your Door",
      description:
        "Our cookies are baked fresh and delivered straight to your doorstep, ensuring you get them warm.",
    },
    {
      title: "Member-Only Discounts",
      description:
        "Enjoy special discounts, plus surprise treats and goodies that only club members receive.",
    },
  ];

  return (
    <section className="bg-[#fff6e6] py-20 px-6 text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-serif text-[#ff4b22] mb-12">
        Why Join The Munchies Cookie Club?
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center">
            <h3 className="text-2xl font-serif text-[#ff4b22] mb-4">
              {feature.title}
            </h3>
            <p className="text-base text-[#ff4b22] max-w-xs">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
