import { communitySection } from "@/app/details";
import Image from "next/image";
import { lora } from "@/app/fonts";

export default function OnlineCommunity() {
  return (
    <section className="bg-[#E4F5E0] flex flex-col-reverse md:flex-row justify-between gap-4 mt-4 md:mt-14">
      <div className="grid place-content-center p-10 gap-4 md:gap-8 max-w-[550px]">
        <h3 className={`${lora.className} md:text-5xl lg:text-[64px]`}>
          {communitySection.title}
        </h3>
        <p className="md:text-base">{communitySection.paragraph}</p>
        <div>
          <button
            className={`h-[40px] md:h-[48px] px-4 text-sm md:text-lg text-[#408C2B] font-400 border-b-2 border-[#408C2B]`}
          >
            Follow us
          </button>
        </div>
      </div>
      <div className="flex flex-col md:items-end">
        <div className="flex gap-4 md:gap-8 md:w-[400px] lg:w-[440px] xl:w-[600px]">
          <Image
            src={"/images/community/community1.png"}
            width={295}
            height={300}
            alt="community Membership"
            className="mt-10"
          />
          <Image
            src={"/images/community/community2.png"}
            width={381}
            height={341}
            alt="community Membership"
          />
        </div>
        <div className="flex gap-2 md:gap-4 md:w-[300px] lg:w-[340px] xl:w-[500px] mt-4">
          <Image
            src={"/images/community/community3.png"}
            width={211}
            height={225}
            alt="community Membership"
            className="mt-12"
          />
          <Image
            src={"/images/community/community4.png"}
            width={395}
            height={264}
            alt="community Membership"
          />
        </div>
      </div>
    </section>
  );
}
