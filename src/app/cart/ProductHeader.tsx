import Image from "next/image";
import { redressed } from "@/app/fonts";

export default function ProductHeader() {
  return (
    <header className="mx-auto p-2 max-w-7xl text-xs bg-[#e4f5e1] md:bg-transparent">
      <nav className="flex justify-between items-center h-16 max-h-[102px]">
        <section className="flex">
          <div className="flex w-[102px] h-[25px] justify-evenly items-center">
            <button type="button">
              <Image
                src={"/images/header/menu.svg"}
                width="24"
                height="24"
                alt="Menu button"
                className="inline-block"
              />
            </button>
            <p className="hidden md:block">Menu</p>
          </div>
          <div className="hidden md:flex w-[102px] h-[25px] justify-evenly items-center">
            <button type="button">
              <Image
                src={"/images/header/search.svg"}
                width="24"
                height="24"
                alt="Menu button"
                className="inline-block"
              />
            </button>
            <p>Search</p>
          </div>
        </section>

        <p
          className={`${redressed.className} text-xl md:text-3xl text-[#408C2B]`}
        >
          Sharrie's Signature
        </p>

        <section className="flex gap-2">
          <div className="hidden md:flex w-[129px] h-[25px] justify-evenly items-center">
            <button type="button">
              <Image
                src={"/images/header/phone.svg"}
                width="24"
                height="25"
                alt="Contact us"
                className="inline-block"
              />
            </button>
            <p>Contact us</p>
          </div>
          <div className="flex w-[83px] h-[25px] justify-evenly items-center">
            <button type="button">
              <Image
                src={"/images/header/shopping-cart.svg"}
                width="24"
                height="24"
                alt="Shopping cart"
                className="inline-block"
              />
            </button>
            <p className="hidden md:block">Cart</p>
          </div>
          <button type="button" className="items-center hidden md:block">
            <Image
              src={"/images/header/Avatar.svg"}
              width="36"
              height="36"
              alt="Shopping cart"
              className="inline-block"
            />
          </button>
        </section>
      </nav>
    </header>
  );
}
