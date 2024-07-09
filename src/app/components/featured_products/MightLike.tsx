import { mightLikeSection } from "@/app/details";
import { inter } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export const MightLikeProducts = () => {
  return (
    <section className="w-full mt-4 md:mt-14 md:min-h-[400px]">
      <div className="w-4/5 md:w-11/12 mx-auto pt-4">
        <div className="flex justify-between">
          <p className="mb-2 font-[300] text-sm md:text-2xl small-spacing md:big-spacing">
            {mightLikeSection.featuredTitle}
          </p>
          <button
            className={`h-[24px] md:h-[48px] px-2 md:px-4 text-xs md:text-base text-[#408C2B] font-500 ${inter.className} border-b border-[#408C2B]`}
          >
            View all
          </button>
        </div>
        <div className="h-[2px] w-full bg-[#E3E3E3] my-2"></div>
        <ul className="flex flex-wrap gap-1 md:gap-3 mt-8 justify-evenly md:w-5/6 mx-auto lg:w-full">
          {mightLikeSection.products.map((product, i) => {
            return (
              <li key={i} className="w-[145px] md:w-[280px] lg:w-[350px]">
                <div className="">
                  <Image
                    src={product.imgSrc}
                    alt={product.name}
                    width={413}
                    height={329}
                  />
                </div>
                <div className="h-[2px] w-full bg-[#E3E3E3] my-2"></div>
                <div className="flex justify-between">
                  <div className="max-w-[200px] md:w-[150px]">
                    <p className="text-[10px] md:text-[18px]">{product.name}</p>
                    <p
                      className={`${inter.className} font-[600] text-[14px] md:text-xl`}
                    >
                      {product.price}
                    </p>
                  </div>
                  <button className="border-2 border-[#408C2B] rounded h-[30px] md:h-12 text-[#408C2B] text-[8px] md:text-[18px] p-2 lg:px-4 min-w-[70px]">
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
