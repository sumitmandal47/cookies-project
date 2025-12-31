

"use client";
import { components } from "react-select";
import { useEffect, useState } from "react";
import Select from "react-select";
import { medusa } from "../lib/medusa";
import { useRouter, useSearchParams } from "next/navigation";

function CategoryDropdown() {
  const [options, setOptions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const productCategories = searchParams.get("productCategories");

  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    medusa.productCategories
      .list({ limit: 10 })
      .then(({ product_categories }) => {
        const formattedOptions =
          product_categories?.map((category) => ({
            value: category.id,
            label: category.name,
          })) ?? [];

        setOptions(formattedOptions);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch categories", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!productCategories || options.length === 0) return;

    const idsFromUrl = productCategories.split(",");

    const matched = options.filter((opt) => idsFromUrl.includes(opt.value));

  // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCategories(matched);
  }, [productCategories, options]);
const handleChange = (selected) => {
  const values = selected || [];
  setSelectedCategories(values);

  const selectedIds = values.map((item) => item.value);
  const params = new URLSearchParams(searchParams.toString());

  if (selectedIds.length > 0) {
    params.set("productCategories", selectedIds.join(","));

  } else {
    params.delete("productCategories");
  }

  router.replace(`?${params.toString()}`, { scroll: false });
};

  const CheckboxOption = (props) => {
    return (
      <components.Option {...props}>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={props.isSelected}
            readOnly
            className="accent-[#ff4b22] w-4 h-4"
          />
          <span>{props.label}</span>
        </div>
      </components.Option>
    );
  };
  return (
    <div className="w-64 bg-[#fff6e6]">
      <Select
        instanceId="category-select"
        isMulti
        options={options}
        // value={selectedCategories}
        onChange={handleChange}
        isLoading={isLoading}
        placeholder=" Categories"
        className="text-sm text-[#ff4b22]"
        classNamePrefix="react-select"
        hideSelectedOptions={false}
        closeMenuOnSelect={false}
        components={{ Option: CheckboxOption }}
      />
    </div>
  );
}

export default CategoryDropdown;

