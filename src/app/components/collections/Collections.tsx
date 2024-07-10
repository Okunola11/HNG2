import { collectionSection } from "@/app/details";
import Image from "next/image";

export const Collections = () => {
  return (
    <section id="collections" className="w-full mt-4 md:mt-6 md:min-h-[400px]">
      <div className="w-11/12 mx-auto pt-4">
        <p className="mb-2 font-[300] text-base md:text-2xl small-spacing md:big-spacing">
          {collectionSection.collectionTitle}
        </p>
        <div className="h-[1px] w-full bg-[#E3E3E3] my-2"></div>
        <ul className="flex flex-wrap gap-1 md:gap-4 justify-evenly mt-8">
          {collectionSection.collections.map((collection, i) => {
            return (
              <li
                key={i}
                className="max-w-[160px] md:max-w-[172px] lg:max-w-[200px] xl:max-w-[250px]"
              >
                <Image
                  src={collection.imgSrc}
                  alt={collection.name}
                  width={304}
                  height={316}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
