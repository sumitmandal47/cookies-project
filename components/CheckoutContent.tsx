
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import cookie1 from "../assets/images/cookie1.png"
import Image from "next/image";


type FormValues = {
  firstName: string;
  lastName: string;
  address: string;
  company?: string;
  city: string;
  postalCode: string;
  state: string;
  email: string;
  phone?: string;
  sameBilling: boolean;
};

export default function CheckoutContent() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      sameBilling: true,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Checkout Data:", data);
    navigate("/delivery");
  };

  return (
    <div className="bg-[#fff6e6] min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* LEFT: Checkout Form */}
        <div className="md:col-span-2">
          <h1 className="text-6xl font-serif text-[#ff4b22] mb-8 border-b border-[#ff4b22] pb-4">
            Checkout
          </h1>

          <h2 className="text-2xl font-semibold text-[#ff4b22] mb-6">
            Shipping Address
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  placeholder="First name*"
                  className="border border-[#ff4b22] rounded-md px-4 py-3 bg-transparent text-[#ff4b22] placeholder-[#ff4b22] w-full focus:outline-none"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  placeholder="Last name*"
                  className="border border-[#ff4b22] rounded-md px-4 py-3 bg-transparent text-[#ff4b22] placeholder-[#ff4b22] w-full focus:outline-none"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                {...register("address", {
                  required: "Address is required",
                })}
                placeholder="Address*"
                className="border border-[#ff4b22] rounded-md px-4 py-3 bg-transparent text-[#ff4b22] placeholder-[#ff4b22] w-full focus:outline-none"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1 flex flex-col ">
                  {errors.address.message}
                </p>
              )}
              <div>
                <div>
                  <input
                    {...register("company")}
                    placeholder="Company"
                    className="border border-[#ff4b22] rounded-md px-4 py-3 bg-transparent text-[#ff4b22] placeholder-[#ff4b22] w-full focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("postalCode", {
                    required: "Postal code is required",
                  })}
                  placeholder="Postal code*"
                  className="border border-[#ff4b22] rounded-md px-4 py-3 bg-transparent text-[#ff4b22] placeholder-[#ff4b22] w-full focus:outline-none"
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.postalCode.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("city", { required: "City is required" })}
                  placeholder="City*"
                  className="border border-[#ff4b22] rounded-md px-4 py-3 bg-transparent text-[#ff4b22] placeholder-[#ff4b22] w-full focus:outline-none"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <input
                value="United States"
                readOnly
                className="border border-[#ff4b22] rounded-md px-4 py-3 bg-transparent text-[#ff4b22] placeholder-[#ff4b22] w-full focus:outline-none"
              />
              <input
                {...register("state", {
                  required: "State/Province is required",
                })}
                placeholder="State/Province*"
                className="border border-[#ff4b22] rounded-md px-4 py-3 bg-transparent text-[#ff4b22] placeholder-[#ff4b22] w-full focus:outline-none"
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>

            <label className="flex items-center gap-2 text-[#ff4b22]">
              <input type="checkbox" {...register("sameBilling")} />
              Billing address same as shipping address
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
                  className="border border-[#ff4b22] rounded-md px-4 py-3 bg-transparent text-[#ff4b22] placeholder-[#ff4b22] w-full focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <input
                {...register("phone")}
                placeholder="Phone"
                className="border border-[#ff4b22] rounded-md px-4 py-3 bg-transparent text-[#ff4b22] placeholder-[#ff4b22] w-full focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="border border-[#ff4b22] rounded-full bg-[#ff4b22] px-8 py-3  text-white placeholder-[#ff4b22] focus:outline-none font-[600]"
            >
              Continue to delivery
            </button>
          </form>
        </div>

        <div className="border border-[#ff4b22] rounded-xl p-6 flex flex-col justify-between">
          <h2 className="text-5xl font-serif text-[#ff4b22] ">
            Order details
          </h2>

          <div className="flex items-center gap-4 border-b border-[#ff4b22] pb-4">
            <Image
              src={cookie1}
              alt="cookie"
              className="w-20 h-20 rounded-lg object-cover border border-[#ff4b22]"
            />
            <div className="flex-1">
              <p className="text-[#ff4b22] font-semibold">
                Peanut Butter Chocolate Chip
              </p>
              <p className="text-[#ff4b22] opacity-80 text-sm">4-Pack</p>
            </div>
            <p className="text-[#ff4b22] font-semibold">2 × $2.99</p>
          </div>

          <div className="space-y-2 border-b border-[#ff4b22] pb-4  text-[#ff4b22]">
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

          <div className="flex justify-between text-[#ff4b22] font-bold text-3xl">
            <span>Total</span>
            <span>$5.98</span>
          </div>
        </div>
      </div>
    </div>
  );
}
