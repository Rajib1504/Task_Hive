import React from "react";
import SectionTitle from "../../Home/Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useSearchParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
  const [searchParams] = useSearchParams();
  const price = searchParams.get("amount") || 0;
  return (
    <div>
      <SectionTitle
        heading={"Payment Zone"}
        subHeading={"welcome to payment zone"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
