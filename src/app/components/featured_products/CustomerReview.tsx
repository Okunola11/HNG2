import Image from "next/image";
import { customerReviewSection } from "@/app/details";

export default function CustomerReview() {
  return (
    <>
      <section className="w-full mt-4 md:mt-14 h-auto">
        <div className="w-4/5 md:w-11/12 mx-auto pt-4">
          <p className="mb-2 font-[300] text-sm md:text-2xl small-spacing md:big-spacing">
            {customerReviewSection.title}
          </p>
          <p className="font-[500] md:text-[40px] text-[#0A0B0A] my-4">
            {customerReviewSection.intro}
          </p>
          <div className="flex w-full gap-4 md:gap-6 md:h-[330px]">
            <div>
              <Image
                src={"/images/reviews/review.png"}
                alt="review"
                width={412}
                height={430}
              />
            </div>
            <ul className="flex w-full overflow-x-hidden gap-4 md:gap-6">
              {customerReviewSection.reviews.map((review, i) => {
                return (
                  <li
                    key={i}
                    className="md:w-[530px] border-2 border-[#CAECC0] flex-shrink-0 mr-2 p-2 rounded-[10px] flex flex-col"
                  >
                    <div className="flex justify-between">
                      <Image
                        src={"/images/reviews/bi_quote.svg"}
                        alt="quote"
                        width={24}
                        height={24}
                      />
                      <p className="md:text-xl text-[#5A5A5A]">{review.date}</p>
                    </div>
                    <p className="md:text-3xl p-3 flex-1">{review.content}</p>
                    <div className="flex justify-between">
                      <p className="md:text-xl text-[#5A5A5A]">{review.name}</p>
                      <Image
                        src={"/images/reviews/bi_quote1.svg"}
                        alt="quote"
                        width={24}
                        height={24}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="h-[8px] w-5/6 bg-[#FAFAFA] my-2"></div>
        </div>
      </section>
      <div className="w-full">
        <div className="hidden md:grid place-content-center md:my-10 xl:my-14">
          <Image
            src={"/images/reviews/scroll.svg"}
            width={148}
            height={18}
            alt="scroll"
          />
        </div>
        <div className="md:hidden grid place-content-center md:my-10 xl:my-14">
          <Image
            src={"/images/reviews/scroll-small.svg"}
            width={120}
            height={12}
            alt="scroll"
          />
        </div>
      </div>
    </>
  );
}
