import { featuredSection } from "@/app/details";
import { inter } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export const FeaturedProducts = () => {
  return (
    <section className="w-full mt-4 md:mt-14 md:min-h-[400px]">
      <div className="w-full mx-auto pt-4">
        <div className="px-4">
          <p className="mb-2 font-[300] text-sm md:text-2xl small-spacing md:big-spacing">
            {featuredSection.featuredTitle}
          </p>
          <div className="h-[1px] w-full bg-[#E3E3E3] my-2"></div>
        </div>
        <ul className="flex flex-wrap gap-1 md:gap-4 mt-8 justify-evenly mx-auto">
          {featuredSection.products.map((product, i) => {
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
                  <div className="w-2/4">
                    <button className="border border-[#408C2B] rounded-md h-[30px] md:h-12 text-[#408C2B] text-[10px] md:text-sm lg:text-lg p-2 lg:px-4">
                      <Link href={"/cart"}>Add to Cart</Link>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
