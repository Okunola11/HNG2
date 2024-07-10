import Image from "next/image";
import { heroSection } from "@/app/details";
import { lora } from "@/app/fonts";
import Link from "next/link";

export const HeroBottom = () => {
  return (
    <section className="w-full bg-[#E4F5E0] pb-8">
      <div className="w-4/5 md:w-11/12 flex flex-col md:flex-row gap-6 md:gap-[100px] mx-auto">
        <div className="w-full pt-6 md:mt-[110px] ">
          <Image
            src={"/images/hero/Carousel-card.png"}
            width={522}
            height={558}
            alt="Carousel"
            className="inline"
          />
        </div>
        <div className="max-w-[550px] flex flex-col gap-4">
          <div className="flex gap-4 md:gap-6 items-center">
            <div className="w-[10px] h-[10px] md:w-[18px] md:h-[18px] bg-[#2A5C1C] inline"></div>
            <p className="text-[#4EAB35] text-sm md:text-2xl font-[300] small-spacing md:big-spacing">
              Our Product
            </p>
          </div>
          <h3
            className={`font-[700] text-[#0A0B0A] text-[32px] md:text-[64px] ${lora.className}`}
          >
            Unlock Your Glow
          </h3>
          <p className="text-[14px] md:text-[18px] text-[#474747]">
            {heroSection.pIntro}
          </p>
          <ul className="mt-4">
            {heroSection.heroCheckmarks.map((point, i) => {
              return (
                <li
                  key={i}
                  className="flex gap-3 items-center text-xs md:text-base mb-4 text-[#5A5A5A]"
                >
                  <Image
                    src={"/images/hero/checkmark.svg"}
                    width={24}
                    height={24}
                    alt="Checkmark"
                    className="inline"
                  />
                  <p> {point}</p>
                </li>
              );
            })}
          </ul>
          <div className="mt-4">
            <button className="text-white h-[32px] md:h-12 text-[10px] md:text-base px-4 bg-[#408C2B] rounded-[6px]">
              <Link href={"#collections"}>Shop Now ➜</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
