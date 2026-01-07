

"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useCartStore } from "../../store/useCartStore";

export default function CheckoutContent() {
  const [checkoutData, setCheckoutData] = useState(null);

  const cart = useCartStore((s) => s.cart);
  const items = cart?.items || [];

  const subtotalCents = items.reduce(
    (sum, item) => sum + item.unit_price * item.quantity,
    0
  );
  const subtotal = subtotalCents / 100;
  const shipping = items.length > 0 ? 5 : 0;
  const total = subtotal + shipping;

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
    setCheckoutData(data);
  };

  const inputStyles =
    "w-full border border-[#ff4b22] rounded-lg px-4 py-3 text-[#ff4b22] placeholder-[#ff4b22]/60 focus:outline-none focus:ring-2 focus:ring-[#ff4b22] bg-[#fff7e8]";
  const errorStyles = "text-red-500 text-sm mt-1 ml-1";

  return (
    <div className="bg-[#fff7e8] min-h-screen py-10 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 ">
          <h1 className="text-6xl font-serif text-[#ff4b22] border-b mb-6">
            Checkout
          </h1>

          {checkoutData && (
            <div className="border border-[#ff4b22] rounded-xl p-6 mb-6 bg-[#fff7e8]">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-serif text-[#ff4b22]">
                  Shipping Address
                </h2>
                <button
                  onClick={() => setCheckoutData(null)}
                  className="border border-[#ff4b22] px-4 py-1 rounded-full text-[#ff4b22] hover:bg-[#ff4b22] hover:text-[#fff7e8] transition"
                >
                  Edit
                </button>
              </div>

              <div className="flex justify-between items-center p-5">
                <div className="mt-4 space-y-1 text-[#ff4b22]">
                  <p className="font-semibold">
                    {checkoutData.firstName} {checkoutData.lastName}
                  </p>
                  <p>{checkoutData.address}</p>
                  <p>
                    {checkoutData.city}, {checkoutData.state}{" "}
                    {checkoutData.postalCode}
                  </p>
                  <p>{checkoutData.country}</p>
                </div>

                <div className="text-[#ff4b22]">
                  <p className="text-2xl">Contact</p>
                  <p className="mt-2">{checkoutData.email}</p>
                  {checkoutData.phone && <p>{checkoutData.phone}</p>}
                </div>
              </div>
            </div>
          )}

          {!checkoutData && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  {...register("address", {
                    required: "Address is required",
                  })}
                  placeholder="Address"
                  className={inputStyles}
                />
                <input
                  {...register("apartment")}
                  placeholder="Apartment (optional)"
                  className={inputStyles}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  {...register("postalCode", {
                    required: "Postal code is required",
                  })}
                  placeholder="Postal code"
                  className={inputStyles}
                />
                <input
                  {...register("city", {
                    required: "City is required",
                  })}
                  placeholder="City"
                  className={inputStyles}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  {...register("country")}
                  readOnly
                  className={`${inputStyles} cursor-not-allowed`}
                />
                <input
                  {...register("state", {
                    required: "State is required",
                  })}
                  placeholder="State"
                  className={inputStyles}
                />
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" {...register("sameBilling")} />
                <label className="text-[#ff4b22]">
                  Billing address same as shipping
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="Email"
                  className={inputStyles}
                />
                <input
                  {...register("phone")}
                  placeholder="Phone (optional)"
                  className={inputStyles}
                />
              </div>

              <button
                type="submit"
                className="bg-[#ff4b22] text-[#fff7e8] px-10 py-4 rounded-full font-bold text-lg"
              >
                Continue to delivery
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-10 border border-[#ff4b22] rounded-xl p-8 bg-[#fff7e8]">
            <h2 className="text-4xl font-serif text-[#ff4b22] mb-6">
              Order details
            </h2>

            {items.length === 0 && (
              <p className="text-[#ff4b22]">Your bag is empty</p>
            )}

            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b pb-6 mb-6 bg-[#]"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 rounded-lg object-cover border border-[#ff4b22]"
                />

                <div className="flex-1">
                  <p className="font-bold text-[#ff4b22]">{item.title}</p>
                  <p className="text-sm text-[#ff4b22]/80">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p className="font-semibold text-[#ff4b22]">
                  ${((item.unit_price * item.quantity) / 100).toFixed(2)}
                </p>
              </div>
            ))}

            <div className="space-y-3 text-[#ff4b22] ">
              <div className="flex justify-between  ">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between text-2xl font-bold text-[#ff4b22]">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

