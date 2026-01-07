
// import { medusa } from "../lib/medusa";

// const addToCart = async (variantId, quantity = 1) => {
//   console.log(create);
//   let cartId = localStorage.getItem("cart_Id");

//   if (!cartId) {
//     const { cart } = await medusa.carts.create({});
//     cartId = cart.id;
//     localStorage.setItem("cart_id", cartId);
//   }

//   try {
//     const { cart } = await medusa.carts.lineItems.create(cartId, {
//       variant_id: variantId,
//       quantity: quantity,
//     });

//     console.log("Product added to cart:", cart);
//   } catch (error) {
//     console.error("Error adding to cart:", error);
   
//   }


// };


import { medusa } from "../lib/medusa";

const REGION_ID = "reg_XXXXXXXXXXXX"; // 👈 apna region id yaha daalo

export const addToCart = async (variantId, quantity = 1) => {
  if (typeof window === "undefined") return;

  let cartId = localStorage.getItem("medusa_cart_id");
  let cart;

  try {
    /* 1️⃣ Get existing cart */
    if (cartId) {
      const res = await medusa.carts.retrieve(cartId);
      cart = res.cart;
    } else {
      /* 2️⃣ Create new cart */
      const res = await medusa.carts.create({
        region_id: REGION_ID,
      });
      cart = res.cart;
      localStorage.setItem("medusa_cart_id", cart.id);
    }
  } catch (err) {
    /* 3️⃣ Cart expired → recreate */
    const res = await medusa.carts.create({
      region_id: REGION_ID,
    });
    cart = res.cart;
    localStorage.setItem("medusa_cart_id", cart.id);
  }

  /* 4️⃣ Add item */
  const { cart: updatedCart } = await medusa.carts.lineItems.create(cart.id, {
    variant_id: variantId,
    quantity,
  });

  console.log("Added to cart:", updatedCart);
  return updatedCart;
};
