import { featuredSection } from "@/app/details";
import { inter } from "@/app/fonts";

const DiscountOff = () => {
  return (
    <section className="bg-20-bg bg-cover bg-no-repeat w-full h-auto text-[#FAFAFA] text-xs md:text-2xl text-center mt-14">
      <div className="hidden md:flex justify-center">
        <div className="w-[752px] h-[58px] md:mt-[150px] lg:mt-[200px] xl:mt-[240px]">
          <p className="font-[300] text-[#FFE6DB] text-2xl">
            {featuredSection.discountText}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div
          className={`min-w-[150px] h-[48px] text-sm md:text-base text-[#FAFAFA] font-[400] md:font-[500] ${inter.className} lg:mt-[50px] md:mt-[20px] mt-[95px]`}
        >
          <p>Explore our products</p>
          <div className="h-[1px] w-full bg-[#E3E3E3] my-2"></div>
        </div>
      </div>
    </section>
  );
};

export default DiscountOff;
