import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_live_51Qw6LR06tV6wXGJBGffA6jry0bPZY1FoPRtXKlVVnFsEK9TXqQD5MlE3S4uzKhLwXlItvG7XZKFlg7ZX3qCDO8ph005jhaDDCY");

export default function CheckoutButton({ priceId }) {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: "subscription", // Change to "payment" for one-time purchases
      successUrl: window.location.origin + "/success",
      cancelUrl: window.location.origin + "/cancel",
    });

    if (error) console.error(error);
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">
      Subscribe
    </button>
  );
}
