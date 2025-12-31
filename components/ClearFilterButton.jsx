
"use client";

import { useRouter } from "next/navigation";
const ClearFilterButton = () => {
 const router = useRouter();

 return (
   <button
     onClick={() => router.push("/products")}
     className="text-[#ff4b22] underline"
   >
     Clear all
   </button>
 );
}

export default ClearFilterButton
