

"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";


import cookie1 from "@/app/assets/images/cookie1.png";

export default function CheckoutContent() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sameBilling: true,
      country: "United States", 
    },
  });

  const onSubmit = (data) => {
    console.log("Checkout Data:", data);
    router.push("/delivery");
  };

  
  const inputStyles =
    "w-full bg-[#fffdf7] border border-[#ff4b22] rounded-lg px-4 py-3 text-[#ff4b22] placeholder-[#ff4b22]/60 focus:outline-none focus:ring-2 focus:ring-[#ff4b22] transition-all";
  const errorStyles = "text-red-500 text-sm mt-1 ml-1";

  return (
    <div className="bg-[#fff7e8] min-h-screen py-10 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2  ">
          <h1 className="text-5xl md:text-6xl font-serif text-[#ff4b22] border-b mb-4">
            Checkout
          </h1>

         
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Row 1: Names */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  placeholder="First name"
                  className={inputStyles}
                />
                {errors.firstName && (
                  <p className={errorStyles}>{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  placeholder="Last name"
                  className={inputStyles}
                />
                {errors.lastName && (
                  <p className={errorStyles}>{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Row 2: Address */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="md:col-span-1">
                <input
                  {...register("address", { required: "Address is required" })}
                  placeholder="Address"
                  className={inputStyles}
                />
                {errors.address && (
                  <p className={errorStyles}>{errors.address.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("apartment")}
                  placeholder="Apartment, suite, etc. (optional)"
                  className={inputStyles}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <input
                  {...register("postalCode", {
                    required: "Postal code is required",
                  })}
                  placeholder="Postal code"
                  className={inputStyles}
                />
                {errors.postalCode && (
                  <p className={errorStyles}>{errors.postalCode.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("city", { required: "City is required" })}
                  placeholder="City"
                  className={inputStyles}
                />
                {errors.city && (
                  <p className={errorStyles}>{errors.city.message}</p>
                )}
              </div>
            </div>

            {/* Row 4: Country & State */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <input
                  {...register("country")}
                  readOnly
                  className={`${inputStyles} cursor-not-allowed opacity-90`}
                />
              </div>
              <div>
                <input
                  {...register("state", { required: "State is required" })}
                  placeholder="State / Territory"
                  className={inputStyles}
                />
                {errors.state && (
                  <p className={errorStyles}>{errors.state.message}</p>
                )}
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3 py-2">
              <input
                type="checkbox"
                id="sameBilling"
                {...register("sameBilling")}
                className="w-5 h-5 accent-[#ff4b22] border-[#ff4b22] rounded focus:ring-[#ff4b22]"
              />
              <label
                htmlFor="sameBilling"
                className="text-[#ff4b22] font-medium cursor-pointer"
              >
                Billing address same as shipping address
              </label>
            </div>

            {/* Row 5: Contact Info */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="Email"
                  className={inputStyles}
                />
                {errors.email && (
                  <p className={errorStyles}>{errors.email.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  className={inputStyles}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#ff4b22] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#e0411d] transition-colors shadow-lg"
              >
                Continue to delivery
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SECTION: ORDER DETAILS */}
        <div className="lg:col-span-1">
          <div className="sticky top-10 border border-[#ff4b22] rounded-xl p-8 bg-[#fffcf5] shadow-sm">
            <h2 className="text-4xl font-serif text-[#ff4b22] mb-6">
              Order details
            </h2>

            {/* Product Item */}
            <div className="flex gap-4 border-b border-[#ff4b22]/30 pb-6 mb-6">
              <div className="relative w-20 h-20 bg-white rounded-lg border border-[#ff4b22]/20 overflow-hidden shrink-0">
                {/* Ensure you have an image here, or use a placeholder div */}
                <Image
                  src={cookie1}
                  alt="Cookie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-bold text-[#ff4b22] leading-tight">
                    Peanut Butter Chocolate Chip
                  </p>
                  <p className="text-sm text-[#ff4b22]/80">4-Pack</p>
                </div>
              </div>
              <div className="text-[#ff4b22] font-semibold text-right">
                <p>$5.98</p>
                <p className="text-xs opacity-70">2 x $2.99</p>
              </div>
            </div>

            {/* Calculations */}
            <div className="space-y-3 text-[#ff4b22] text-lg mb-6">
              <div className="flex justify-between">
                <span className="opacity-80">Subtotal</span>
                <span className="font-medium">$5.98</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">Taxes</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">Shipping</span>
                <span className="font-medium">$5.00</span>
              </div>
            </div>

            {/* Total */}
            <div className="border-t-2 border-[#ff4b22] pt-4 flex justify-between items-center text-[#ff4b22]">
              <span className="text-3xl font-serif">Total</span>
              <span className="text-3xl font-bold">$10.98</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}