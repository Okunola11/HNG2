import Image from "next/image"
import { heroSection } from "@/app/details"

export const HeroBottom = () => {
  return (
    <section className="w-full max-h-[695px] bg-[#E4F5E0] flex flex-col md:flex-row md:gap-[60px] p-4 mx-10">
        <div>
            <Image src={"/images/hero/Carousel-card.png"} width={522} height={558} alt="Carousel"/>
        </div>
        <div className="max-w-[600px]">
            <div className="flex gap-8">
                <div className="w-[18px] h-[18px] bg-[#2A5C1C]"></div>
                <p className="text-[#4EAB35] text-2xl font-[300]">Our Product</p>
            </div>
            <h3 className="font-[700] text-[#0A0B0A] text-[64px]">Unlock Your Glow</h3>
            <p className="text-xl text-[#474747]">{heroSection.pIntro}</p>
            <ul>
                {heroSection.heroCheckmarks.map((point, i) => {
                    return (
                        <li key={i}>
                            <Image src={"/images/hero/checkmark.svg"} width={24} height={24} alt="Checkmark" className="inline" />
                            {point}
                            </li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}
