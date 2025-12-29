import { CardContent } from "@/components/ui/card";
import { medusa } from "../../lib/medusa";
import CategoryDropdown from "../../components/category-dropdown";
import CollectionDropdown from "../../components/collections";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default async function Nutty() {
  const { products, count, limit } = await medusa.products.list({
    limit: 12,
  });

  return (
    <>
      <div className="bg-[#fff6e6] min-h-screen p-8">
        <h1 className="text-6xl md:text-6xl font-serif text-[#ff4b22] mb-8">
          Shop all products
        </h1>

        {/* Filters */}

        <div className="flex gap-4 mb-8 items-center">
          <CategoryDropdown />
          <CollectionDropdown />
          <Button variant="ghost" className="text-[#ff4b22] underline">
            Clear all
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
          {products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group block bg-[#fff6e6] rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.thumbnail || "/sample.png"}
                  alt={product.title}
                  className="w-full h-62.5 object-cover rounded-lg "
                />
                <span className="absolute top-2 right-2 bg-pink-200 text-[#ff4b22] px-3 py-1 text-xs font-semibold rounded-md">
                  {product.subtitle}
                </span>
              </div>

              <CardContent className="text-center mt-4">
                <h2 className="text-lg font-semibold text-[#ff4b22]">
                  {product.title}
                </h2>
                <p className="text-sm text-[#ff4b22]">
                 From $2.99
                </p>
              </CardContent>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
