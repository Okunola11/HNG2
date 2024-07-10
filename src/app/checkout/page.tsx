import ProductCheckout from "./ProductCheckout";
import { MightLikeProducts } from "../components/featured_products/MightLike";

export default function page() {
  return (
    <>
      <ProductCheckout />
      <MightLikeProducts />
    </>
  );
}
