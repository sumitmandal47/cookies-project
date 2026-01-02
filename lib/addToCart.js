
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
