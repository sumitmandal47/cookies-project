"use client";

import { medusa } from "../../lib/medusa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ShopDropdown() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    medusa.productCategories
      .list({ limit: 4 })
      .then(({ product_categories }) => {
        setCategories(product_categories);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    medusa.products
      .list({ limit: 6 })
      .then(({ products }) => {
        setProducts(products);
      })
      .catch(console.error);
  }, []);

  const handleCategoryClick = (id) => {
    router.push(`/products?category=${id}`);
  };

  const handleProductClick = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="fixed left-0  w-screen z-60 bg-[#fff7e8] border-b-[3px] border-[#ff4b22]">
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-10">
        <div className="col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-[#ff4b22] mb-3">Featured</h3>
            <ul className="space-y-2 text-[#ff4b22]">
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="cursor-pointer hover:underline"
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#ff4b22] mb-3">Cookies</h3>
            <ul className="space-y-2 text-[#ff4b22]">
              {products.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="cursor-pointer hover:underline"
                >
                  {product.title}
                </li>
              ))}
              <button className=" cursor-pointer font-semibold">
                Shop all
              </button>
            </ul>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="text-center">
             
                <img
                  src={product.thumbnail || "/sample.png"}
                  alt={product.title}
                  className="mx-auto mb-3 rounded-xl"
                />
                <h4 className="text-[#ff4b22] text-sm mb-2">{product.title}</h4>
                <button
                  onClick={() => handleProductClick(product.id)}
                  className="px-4 py-2 border border-[#ff4b22] rounded-full text-[#ff4b22] hover:bg-[#ff4b22] hover:text-white transition"
                >
                  Shop now
                </button>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopDropdown;
