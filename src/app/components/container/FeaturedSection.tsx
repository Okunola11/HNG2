import { FeaturedProducts } from "../featured_products/FeaturedProducts";
import DiscountOff from "../featured_products/DiscountOff";
import { MightLikeProducts } from "../featured_products/MightLike";
import OnlineCommunity from "../featured_products/OnlineCommunity";
import CustomerReview from "../featured_products/CustomerReview";

export const FeaturedSection = () => {
  return (
    <>
      <FeaturedProducts />
      <DiscountOff />
      <MightLikeProducts />
      <OnlineCommunity />
      <CustomerReview />
    </>
  );
};
