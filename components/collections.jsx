

"use client";

import { components } from "react-select";
import { useEffect, useState } from "react";
import Select from "react-select";
import { medusa } from "../lib/medusa";
import { useSearchParams, useRouter } from "next/navigation";

function CollectionDropdown() {
  const [options, setOptions] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const collectionParam = searchParams.get("collections");

  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    medusa.collections
      .list({ limit: 10 })
      .then(({ collections }) => {
        const formattedOptions =
          collections?.map((collection) => ({
            value: collection.id,
            label: collection.title,
          })) ?? [];

        setOptions(formattedOptions);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!collectionParam || options.length === 0) return;

    const idsFromUrl = collectionParam.split(",");

    const matched = options.filter((opt) => idsFromUrl.includes(opt.value));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCollections(matched);
  }, [collectionParam, options]);

  const handleChange = (selected) => {
    setSelectedCollections(selected || []);

    const selectedIds = selected?.map((item) => item.value).join(",");

    const params = new URLSearchParams(searchParams.toString());

    if (selectedIds) {
      params.set("collections", selectedIds);
    } else {
      params.delete("collections");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const CheckboxOption = (props) => (
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

  return (
    <div className="w-64 bg-[#fff6e6]">
      <Select
        isMulti
        options={options}
        value={selectedCollections}
        onChange={handleChange}
        isLoading={isLoading}
        placeholder="Collections"
        className="text-sm text-[#ff4b22]"
        classNamePrefix="react-select"
        hideSelectedOptions={false}
        closeMenuOnSelect={false}
        components={{ Option: CheckboxOption }}
      />
    </div>
  );
}

export default CollectionDropdown;
