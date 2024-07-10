import Link from "next/link";

export const HeroTop = () => {
  return (
    <section className="bg-hero2-bg lg:bg-hero-bg bg-cover bg-no-repeat bg-center bg-[#E4F5E0] w-full text-[#FAFAFA] text-xs md:text-2xl">
      <div className="h-[310px] md:h-[612px] text-center grid place-content-center">
        <p className="text-xs text-[#FAFAFA] md:text-2xl text-[400]">
          Discover the secret to radiant, healthy skin with our
        </p>
        <p className="text-xs text-[#FAFAFA] md:text-2xl text-[400]">
          exclusive range of skincare solutions.
        </p>
        <div className="mt-8">
          <button className="h-9 md:h-12 text-[14px] md:text-[16px] px-4 bg-[#408C2B] rounded-[6px]">
            <Link href={"#collections"}>Explore ➜</Link>
          </button>
        </div>
      </div>
    </section>
  );
};
