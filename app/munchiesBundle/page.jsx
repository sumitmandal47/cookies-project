

import { CardContent } from "@/components/ui/card";
import { medusa } from "../../lib/medusa";
import CategoryDropdown from "../../components/category-dropdown";
import CollectionDropdown from "../../components/collections";
import Link from "next/link";
import ClearFilterButton from "../../components/ClearFilterButton";
import { redirect } from "next/navigation";

export default async function Products({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  const categoryParam = resolvedSearchParams.productCategories;

  
  const { product_categories } = await medusa.productCategories.list({
    parent_category_id: "null",
  });

  
  if (!product_categories || product_categories.length === 0) {
    throw new Error("No categories found in Medusa");
  }

  if (!categoryParam) {
    redirect(`/products?productCategories=${product_categories[1].id}`);
  }

 
  const categoryIds = categoryParam.split(",");
  const collectionParam = resolvedSearchParams.collections;
  const collectionIds = collectionParam ? collectionParam.split(",") : [];

  const filters = { limit: 12 };

  if (categoryIds.length > 0) {
    filters.category_id = categoryIds;
  }

  if (collectionIds.length > 0) {
    filters.collection_id = collectionIds;
  }

  const res = await medusa.products.list(filters);
  const products = res.products ?? [];

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group block"
            >
              <img
                src={product.thumbnail || "/sample.png"}
                alt={product.title}
              />
              <CardContent className="text-center">
                <h2>{product.title}</h2>
                
              </CardContent>
            </Link>
          ))
        ) : (
          <p className="text-[#ff4b22] text-2xl">No products found</p>
        )}
      </div>
    </div>
  );
}
