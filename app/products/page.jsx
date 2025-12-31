import { CardContent } from "@/components/ui/card";
import { medusa } from "../../lib/medusa";
import CategoryDropdown from "../../components/category-dropdown";
import CollectionDropdown from "../../components/collections";
import Link from "next/link";
import ClearFilterButton from "../../components/ClearFilterButton";

export default async function Products({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  const categoryParam = resolvedSearchParams.productCategories;
  const collectionParam = resolvedSearchParams.collections;

  const categoryIds = categoryParam ? categoryParam.split(",") : [];

  const collectionIds = collectionParam ? collectionParam.split(",") : [];

  const filters = { limit: 15 };

  if (categoryIds.length > 0) {
    filters.category_id = categoryIds;
  }

  if (collectionIds.length > 0) {
    filters.collection_id = collectionIds;
  }

  let products = [];

  try {
    const res = await medusa.products.list(filters);
    products = res.products ?? [];
  } catch (err) {
    console.error("Medusa 400 error:", err);
  }

  return (
    <div className="bg-[#fff6e6] min-h-screen p-8">
      <h1 className="text-6xl font-serif text-[#ff4b22] mb-8">
        Shop all products
      </h1>

      <div className="flex gap-4 mb-8 items-center">
        <CategoryDropdown />
        <CollectionDropdown />
        <ClearFilterButton />
      </div>

      <div className="grid grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
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
                <p className="text-sm text-[#ff4b22]">From $2.99</p>
              </CardContent>
            </Link>
          ))
        ) : (
          <div>
            <p className="text-[#ff4b22] text-4xl ">No products found</p>
            <p>We couldnt find any products matching your current filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
