import { mightLikeSection } from "@/app/details";
import { inter } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export const MightLikeProducts = () => {
  return (
    <section className="w-full mt-4 md:mt-14 md:min-h-[400px]">
      <div className="w-full mx-auto pt-4">
        <div className="flex justify-between">
          <p className="mb-2 font-[300] text-sm md:text-2xl small-spacing md:big-spacing">
            {mightLikeSection.featuredTitle}
          </p>
          <button
            className={`h-[24px] md:h-[48px] px-2 md:px-4 text-xs md:text-base text-[#408C2B] font-500 ${inter.className}`}
          >
            View all
          </button>
        </div>
        <div className="h-[1px] w-full bg-[#E3E3E3] my-2"></div>
        <ul className="flex flex-wrap gap-1 md:gap-4 mt-8 justify-evenly mx-auto">
          {mightLikeSection.products.map((product, i) => {
            return (
              <li
                key={i}
                className="max-w-[170px] md:max-w-[220px] lg:max-w-[295px] xl:max-w-[350px]"
              >
                <div className="">
                  <Image
                    src={product.imgSrc}
                    alt={product.name}
                    width={413}
                    height={329}
                  />
                </div>
                <div className="h-[0.5px] w-full bg-[#E3E3E3] my-2"></div>
                <div className="flex justify-between md:gap-1">
                  <div className="w-2/4">
                    <p className="text-[10px] md:text-[18px]">{product.name}</p>
                    <p
                      className={`${inter.className} font-[600] text-[14px] md:text-xl`}
                    >
                      {product.price}
                    </p>
                  </div>
                  <button className="border border-[#408C2B] rounded-md h-[30px] md:h-12 text-[#408C2B] text-xs md:text-base lg:text-lg p-2 lg:px-4">
                    <Link href={"/cart"}>Add to Cart</Link>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
