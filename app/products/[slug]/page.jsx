import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { medusa } from "../../../lib/medusa";
import { Button } from "../../../components/ui/button";



const page = async ({ params }) => {
  const { slug } = await params;
  const { product } = await medusa.products.retrieve(slug);

  return (
    <div className="">
      {/* {JSON.stringify(product, null, 2)} */}
      <div className="min-h-screen bg-[#fff6e6] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-6 sticky top-10 h-fit">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible py-2 md:py-0">
              <img
                key={product.id}
                src={product.thumbnail}
                alt="thumbnail"
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 border-[#ff4b22] transition-all duration-300 `}
              />
            </div>

            <div className="flex-1 bg-[#eedcc0] rounded-3xl aspect-square md:aspect-4/3 flex items-center justify-center overflow-hidden  relative">
              <div className="absolute top-6 right-6 bg-pink-200 text-[#ff4b22] px-3 py-1 font-bold tracking-widest text-xs rounded uppercase z-10">
                {product.subtitle}
                
              </div>

              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          {/* right */}
          <div className="lg:col-span-5 flex flex-col text-[#ff4b22]">
            <p className="text-xs md:text-sm font-bold tracking-widest mb-4">
              HOME / COOKIES /{product.title.toUpperCase()}
            </p>

            <h1 className="text-5xl md:text-7xl font-serif font-medium mb-4 leading-none">
              {product.title}
            </h1>

            <p className="text-3xl font-medium mb-6"> From $ 2.99</p>

            <p className="text-lg leading-relaxed opacity-90 mb-8 font-light">
              {product.description}
            </p>

            <div className="relative mb-6 inline-block w-fit">
              <select className="appearance-none border border-[#ff4b22] text-[#ff4b22] rounded-xl pl-6 pr-12 py-3 text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff4b22]/20 bg-[#fff6e6]">
                {product.options.map((option) => (
                  <optgroup key={option.id} label={option.title}>
                    {option.values.map((value) => (
                      <option key={value.id} value={value.value}>
                        {value.value}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
            </div>

            <button className="w-full hover:bg-[#ff4b22] hover:text-[#fff6e6] border border-[#ff4b22] py-4 rounded-full text-2xl font-serif mb-12 bg-[#fff6e6] text-[#ff4b22] transition-all duration-300 ">
              Add to cart
            </button>

            <div className="bg-pink-200 p-6 rounded-2xl mb-10">
              <h2 className="text-2xl font-serif text-[#ff4b22] mb-4">
                Taste our other flavors too
              </h2>

              <div className="flex flex-col gap-3">
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded-lg bg-[#eedcc0]"
                    />
                    <div>
                      <p className="font-bold text-[#ff4b22] leading-tight">
                        {product.title}
                      </p>
                      <p className="text-xs text-[#ff4b22] opacity-80 mt-1">
                        $2.99
                      </p>
                    </div>
                  </div>

                  <Button className="border border-[#ff4b22] rounded-full px-4 py-2 flex items-center justify-center text-[#ff4b22] hover:bg-[#ff4b22] hover:text-white transition bg-[#fff6e6] ">
                    Add +
                  </Button>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="description"
                className="border-b-[#ff4b22]/30"
              >
                <AccordionTrigger className="text-[#ff4b22] text-4xl font-serif hover:no-underline ">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-[#ff4b22]/80 text-base">
                  {product.description}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="ingredients"
                className="border-b-[#ff4b22]/30"
              >
                <AccordionTrigger className="text-[#ff4b22] text-4xl font-serif hover:no-underline mt-3 ">
                  Ingredients
                </AccordionTrigger>
                <AccordionContent className="text-[#ff4b22]/80 text-base">
                  {product.description ||
                    "Flour, butter, sugar, chocolate chips, eggs, and love."}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping" className="border-b-[#ff4b22]/30">
                <AccordionTrigger className="text-[#ff4b22] text-4xl mt-3 font-serif hover:no-underline ">
                  Shipping
                </AccordionTrigger>
                <AccordionContent className="text-[#ff4b22]/80 text-base">
                  Ships fresh within 2–3 business days in eco-friendly
                  packaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
