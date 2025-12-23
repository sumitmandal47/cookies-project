"use client";

const CompanyInfo = () => {
  return (
    <section className="w-full px-4 md:px-16 py-10">
      <div
        className="
        flex
        justify-center
        items-center
        border-2 border-[#ff5522]
        rounded-xl
        px-6
        py-8
        sm:px-10
        sm:py-12
        md:px-20
        md:py-16
      "
      >
        <div className="max-w-4xl text-center">
          <p
            className="
            text-[#f6562d]
            text-lg
            sm:text-xl
            md:text-3xl
            lg:text-4xl
            leading-relaxed
            font-normal
          "
          >
            Munchies is a premium chocolate company specializing in crafting
            high-quality chocolate chips for baking enthusiasts and
            professionals alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
