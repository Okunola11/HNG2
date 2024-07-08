import Image from "next/image";
import { heroSection } from "@/app/details";
import { lora } from "@/app/fonts";

export const HeroBottom = () => {
  return (
    <section className=" w-11/12 max-h-[695px] bg-[#E4F5E0] flex flex-col md:flex-row md:gap-[100px] mx-auto">
      <div className="mt-[80px]">
        <Image
          src={"/images/hero/Carousel-card.png"}
          width={522}
          height={558}
          alt="Carousel"
          className="inline"
        />
      </div>
      <div className="max-w-[550px] flex flex-col gap-4">
        <div className="flex gap-6 items-center">
          <div className="w-[18px] h-[18px] bg-[#2A5C1C]"></div>
          <p className="text-[#4EAB35] text-2xl font-[300]">Our Product</p>
        </div>
        <h3
          className={`font-[700] text-[#0A0B0A] text-[64px] ${lora.className}`}
        >
          Unlock Your Glow
        </h3>
        <p className="text-[18px] text-[#474747]">{heroSection.pIntro}</p>
        <ul>
          {heroSection.heroCheckmarks.map((point, i) => {
            return (
              <li key={i} className="flex gap-3 items-center text-[16px]">
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
        <div className="mt-8">
            <button className="text-white h-12 text-[16px] px-4 bg-[#408C2B] rounded-[6px]">
                Shop Now ➜
            </button>
        </div>
      </div>
    </section>
  );
};
