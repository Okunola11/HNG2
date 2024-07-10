import Image from "next/image";
import { inter } from "../fonts";

export default function ProductCheckout() {
  return (
    <section className="mt-4 w-[85%] md:w-[90%] mx-auto">
      <p className="text-base md:text-2xl text-[#0A0B0A] dark:text-[#EAEAEA]">
        ← Cart
      </p>
      <div className="h-[1px] w-full bg-[#E3E3E3] my-2"></div>

      <div className="flex mx-auto justify-between mt-12">
        <div className="flex justify-between md:max-w-[65%] lg:min-w-[60%] gap-10 xl:gap-20">
          <div className="max-w-[87px] md:max-w-[220px] lg:max-w-[295px]">
            <Image
              src={"/images/checkout/scrub.png"}
              alt="srub"
              width={334.48}
              height={305}
            />
          </div>
          <div>
            <p className="dark:text-[#EAEAEA] font-[300] text-base xl:text-2xl text-[#6E6E6E] mb-2">
              RS34670
            </p>
            <p
              className="dark:text-[#EAEAEA] font-[600] text-2xl xl:text-3xl
              text-[#0A0B0A] mb-4"
            >
              Repair Scrub
            </p>
            <p className="hidden md:block font-[400] text-xs md:text-sm xl:text-lg text-[#797A7B] dark:text-[#EAEAEA] mb-1">
              Unit Price
            </p>
            <p
              className={`hidden md:block font-[600] text-base md:text-xl text-[#363939] dark:text-[#EAEAEA] ${inter.className}`}
            >
              $19.00
            </p>
            <div className="flex gap-2 mt-4">
              <div className="text-sm border border-[#EAEAEA] w-[90px]">
                <div className="flex w-full rounded">
                  <button className="min-w-[30px] min-h-[30px] grid place-content-center text-[#AFE2A1] border-r border-[#EAEAEA]">
                    -
                  </button>
                  <button className="min-w-[30px] min-h-[30px] grid place-content-center text-[#363939] dark:text-[#EAEAEA]  border-r border-[#EAEAEA]">
                    1
                  </button>
                  <button className="min-w-[30px] min-h-[30px] grid place-content-center text-[#408C2B]">
                    +
                  </button>
                </div>
              </div>
              <div className="bg-[#CC474E] grid place-content-center rounded">
                <button className="min-h-[30px] min-w-[30px]">
                  <Image
                    src={"/images/checkout/trash.svg"}
                    alt="delete"
                    width={25}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hidden md:flex border border-[#408C2B] rounded-md flex-col gap-6 p-4 items-center lg:min-w-[295px] h-auto">
            <p className="text-base md:text-xl xl:text-2xl text-[#0A0B0A] dark:text-[#EAEAEA]">
              Cart summary
            </p>
            <div className="flex justify-between w-4/5">
              <p className="text-sm text-[#6E6E6E] dark:text-[#EAEAEA]">
                Sub-total
              </p>
              <p className="text-sm text-[#6E6E6E] font-[600] dark:text-[#EAEAEA]">
                $19.00
              </p>
            </div>
            <div className="flex justify-between w-4/5">
              <p className="text-sm text-[#6E6E6E] dark:text-[#EAEAEA]">
                Delivery
              </p>
              <p className="text-sm text-[#6E6E6E] font-[600] dark:text-[#EAEAEA]">
                $2.00
              </p>
            </div>

            <div className="border-t border-[#EAEAEA] flex justify-between pt-2 md:mt-2 mb-4 md:gap-1">
              <div>
                <button className="text-sm md:text-xs text-[#363939] dark:text-[#EAEAEA] dark:border-[#EAEAEA] border border-[#363939] p-2 rounded-md">
                  cancel
                </button>
              </div>
              <div>
                <p className="text-base md:text-base text-[#797A7B] dark:text-[#EAEAEA]">
                  Total Amount
                </p>
                <p
                  className={`${inter.className} font-[600] text-lg md:text-xl text-[#363939] dark:text-[#EAEAEA] text-center`}
                >
                  $21.00
                </p>
              </div>
              <div>
                <button className="text-sm md:text-base text-[#FAFAFA] bg-[#408C2B] rounded-md p-1">
                  checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <p className="font-[400] text-xs md:text-sm xl:text-lg text-[#797A7B] dark:text-[#EAEAEA] mb-4">
            Unit Price
          </p>
          <p
            className={`font-[600] text-base md:text-xl text-[#363939] dark:text-[#EAEAEA] ${inter.className}`}
          >
            $19.00
          </p>
        </div>
      </div>
      <div className="md:hidden mt-10">
        <div className="flex border border-[#408C2B] rounded-md flex-col gap-6 p-2 items-center">
          <p className="text-base md:text-xl xl:text-2xl text-[#0A0B0A] dark:text-[#EAEAEA]">
            Cart summary
          </p>
          <div className="flex justify-between w-4/5">
            <p className="text-sm text-[#6E6E6E] dark:text-[#EAEAEA]">
              Sub-total
            </p>
            <p className="text-sm text-[#6E6E6E] font-[600] dark:text-[#EAEAEA]">
              $19.00
            </p>
          </div>
          <div className="flex justify-between w-4/5">
            <p className="text-sm text-[#6E6E6E] dark:text-[#EAEAEA]">
              Delivery
            </p>
            <p className="text-sm text-[#6E6E6E] font-[600] dark:text-[#EAEAEA]">
              $2.00
            </p>
          </div>

          <div className="border-t border-[#EAEAEA] flex justify-between pt-2 md:mt-2 mb-4 md:gap-1 w-11/12">
            <div>
              <button className="text-sm md:text-xs text-[#363939] dark:text-[#EAEAEA] dark:border-[#EAEAEA] border border-[#363939] p-2 rounded-md">
                cancel
              </button>
            </div>
            <div>
              <p className="text-base md:text-base text-[#797A7B] dark:text-[#EAEAEA]">
                Total Amount
              </p>
              <p
                className={`${inter.className} font-[600] text-lg md:text-xl text-[#363939] dark:text-[#EAEAEA] text-center`}
              >
                $21.00
              </p>
            </div>
            <div>
              <button className="text-sm md:text-base text-[#FAFAFA] bg-[#408C2B] rounded-md p-1">
                checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
