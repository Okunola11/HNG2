import Image from "next/image";
import { inter } from "../fonts";

export default function ProductCheckout() {
  return (
    <section className="w-full flex flex-col md:flex-row md:gap-7">
      <div className="w-full">
        <Image
          src={"/images/products/product.png"}
          alt="product"
          width={703}
          height={819}
        />
      </div>
      <div className="md:hidden flex mt-1">
        <Image
          src={"/images/products/product-hero2.png"}
          alt="product"
          width={221}
          height={201}
        />
        <Image
          src={"/images/products/product-hero.png"}
          alt="product"
          width={210}
          height={201}
        />
      </div>
      <div className="w-full mt-8 md:mt-14">
        <div className="w-3/4 ml-10 md:ml-14 grid place-content-center gap-6">
          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-5">
              <p className="font-[300] text-base md:text-2xl text-[#6E6E6E]">
                RS34670
              </p>
              <p className="font-[600] text-2xl md:text-3xl text-[#0A0B0A]">
                Repair Scrub
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-[400] text-sm md:text-base text-[#408C2B]">
                In stock
              </p>
              <div>
                <p className="font-[400] text-xs md:text-sm text-[#797A7B]">
                  Unit Price
                </p>
                <p
                  className={`font-[600] text-base md:text-xl text-[#363939] ${inter.className}`}
                >
                  $19.00
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#5A5A5A] text-sm">
            Our Repair Body Scrub is expertly crafted to rejuvenate and
            revitalize your skin. This luxurious scrub combines natural
            exfoliants with nourishing ingredients to gently remove dead skin
            cells, promote cell renewal, and restore your skin's natural
            radiance.
          </p>
          <p className="text-xs text-[#4EAB35]">
            Made with pure natural ingredients
          </p>
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex justify-between">
                <p className="text-base text-[#343434]">How to use</p>
                <Image
                  src={"/images/products/chevron-down.svg"}
                  width={24}
                  height={24}
                  alt="down arrow"
                />
              </div>
              <div className="h-[1px] mt-2 w-full bg-gray-400"></div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="text-base text-[#343434]">
                  Delivery and drop-off
                </p>
                <Image
                  src={"/images/products/chevron-down.svg"}
                  width={24}
                  height={24}
                  alt="down arrow"
                />
              </div>
              <div className="h-[1px] mt-2 w-full bg-gray-400"></div>
            </div>
          </div>
          <div className="text-sm border border-[#EAEAEA] w-[90px]">
            <div className="flex w-full">
              <button className="min-w-[30px] min-h-[30px] grid place-content-center text-[#AFE2A1] border-r border-[#EAEAEA]">
                -
              </button>
              <button className="min-w-[30px] min-h-[30px] grid place-content-center text-[#363939]  border-r border-[#EAEAEA]">
                1
              </button>
              <button className="min-w-[30px] min-h-[30px] grid place-content-center text-[#408C2B]">
                +
              </button>
            </div>
          </div>
          <div className="border-t border-[#EAEAEA] flex justify-between pt-2 md:mt-2 mb-4">
            <div>
              <button className="text-sm md:text-base text-[#363939] border border-[#363939] p-2 rounded-md">
                cancel
              </button>
            </div>
            <div>
              <p className="text-base md:text-lg text-[#797A7B]">Sub Total</p>
              <p
                className={`${inter.className} font-[600] text-lg md:text-xl text-[#363939]`}
              >
                $19.00
              </p>
            </div>
            <div>
              <button className="text-sm md:text-lg text-[#FAFAFA] bg-[#408C2B] rounded-md p-2 px-4">
                checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
