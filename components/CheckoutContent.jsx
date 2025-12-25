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
    },
  });

  const onSubmit = (data) => {
    console.log("Checkout Data:", data);
    router.push("/delivery"); // ✅ Next.js navigation
  };

  return (
    <div className="bg-[#fff6e6] min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* LEFT : FORM */}
        <div className="md:col-span-2">
          <h1 className="text-5xl md:text-6xl font-serif text-[#ff4b22] mb-8 border-b border-[#ff4b22] pb-4">
            Checkout
          </h1>

          <h2 className="text-2xl font-semibold text-[#ff4b22] mb-6">
            Shipping Address
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* NAME */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  placeholder="First name*"
                  className="input"
                />
                {errors.firstName && (
                  <p className="error">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  placeholder="Last name*"
                  className="input"
                />
                {errors.lastName && (
                  <p className="error">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("address", { required: "Address is required" })}
                  placeholder="Address*"
                  className="input"
                />
                {errors.address && (
                  <p className="error">{errors.address.message}</p>
                )}
              </div>

              <input
                {...register("company")}
                placeholder="Company"
                className="input"
              />
            </div>

         
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("postalCode", {
                    required: "Postal code is required",
                  })}
                  placeholder="Postal code*"
                  className="input"
                />
                {errors.postalCode && (
                  <p className="error">{errors.postalCode.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register("city", { required: "City is required" })}
                  placeholder="City*"
                  className="input"
                />
                {errors.city && <p className="error">{errors.city.message}</p>}
              </div>

              <input value="United States" readOnly className="input" />

              <div>
                <input
                  {...register("state", { required: "State is required" })}
                  placeholder="State / Province*"
                  className="input"
                />
                {errors.state && (
                  <p className="error">{errors.state.message}</p>
                )}
              </div>
            </div>

            <label className="flex items-center gap-2 text-[#ff4b22]">
              <input type="checkbox" {...register("sameBilling")} />
              Billing address same as shipping
            </label>

        
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="Email*"
                  className="input"
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>

              <input
                {...register("phone")}
                placeholder="Phone"
                className="input"
              />
            </div>

           
            <button
              type="submit"
              className="bg-[#ff4b22] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90"
            >
              Continue to delivery
            </button>
          </form>
        </div>

        
        <div className="border border-[#ff4b22] rounded-xl p-6 flex flex-col gap-6">
          <h2 className="text-4xl font-serif text-[#ff4b22]">Order details</h2>

          <div className="flex items-center gap-4 border-b pb-4 border-[#ff4b22]">
            <Image
              src={cookie1}
              alt="cookie"
              width={80}
              height={80}
              className="rounded-lg border border-[#ff4b22]"
            />
            <div className="flex-1">
              <p className="font-semibold text-[#ff4b22]">
                Peanut Butter Chocolate Chip
              </p>
              <p className="text-sm text-[#ff4b22] opacity-80">4-Pack</p>
            </div>
            <p className="font-semibold text-[#ff4b22]">2 × $2.99</p>
          </div>

          <div className="space-y-2 text-[#ff4b22]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$5.98</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
          </div>

          <div className="flex justify-between text-2xl font-bold text-[#ff4b22]">
            <span>Total</span>
            <span>$5.98</span>
          </div>
        </div>
      </div>
    </div>
  );
}
