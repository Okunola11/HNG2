import type { Metadata } from "next";
import ProductHeader from "./ProductHeader";
import ProductCheckout from "./ProductCart";
import { MightLikeProducts } from "../components/featured_products/MightLike";

export const metadata: Metadata = {
  title: "Product page",
  description: "Product details page",
};

export default function Product() {
  return (
    <>
      {/* <ProductHeader /> */}
      <ProductCheckout />
      <MightLikeProducts />
    </>
  );
}
