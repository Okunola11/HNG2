import { redressed } from "@/app/fonts";

export const Footer = () => {
  return (
    <footer className="w-full mt-4 md:mt-14">
      <div className="h-[2px] w-full bg-[#E3E3E3] my-2"></div>
      <article className=" flex flex-col md:flex-row justify-between items-center w-4/5 md:w-11/12 mx-auto pt-4 md:min-h-[300px]">
        <section className="flex flex-col gap-4">
          <p className="font-[300] text-base md:text-lg text-[#818181]">
            About us
          </p>
          <p className="font-[400] text-base md:text-lg text-[#343434]">Shop</p>
          <p className="font-[400] text-base md:text-lg text-[#343434]">
            Our story
          </p>
          <p className="font-[400] text-base md:text-lg text-[#343434]">Blog</p>
        </section>
        <section className="flex flex-col gap-4">
          <p className="font-[300] text-base md:text-lg text-[#818181]">Help</p>
          <p className="font-[400] text-base md:text-lg text-[#343434]">
            You can{" "}
            <span className="text-[#408C2B] border-[#408C2B] border-b">
              email
            </span>
          </p>
          <p className="font-[400] text-base md:text-lg text-[#343434]">FAQ</p>
          <p className="font-[400] text-base md:text-lg text-[#343434]">
            Shipping
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <p className="font-[300] text-base md:text-lg text-[#818181]">
            Socials
          </p>
          <p className="font-[400] text-base md:text-lg text-[#343434]">
            Instagram
          </p>
          <p className="font-[400] text-base md:text-lg text-[#343434]">
            Twitter
          </p>
          <p className="font-[400] text-base md:text-lg text-[#343434]">
            Facebook
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <p className="font-[300] text-base md:text-lg text-[#818181]">
            Email Sign-up
          </p>
          <div className="max-w-[300px] xl:max-w-[280px]">
            <p className="font-[400] text-base md:text-lg text-[#343434]">
              <span className="text-[#408C2B] border-[#408C2B] border-b">
                Sign up
              </span>{" "}
              for Sharrie’s signature emails and receive latest news including
              exclusive offers
            </p>
          </div>
          <p className="font-[400] text-base md:text-lg text-[#343434]">
            Follow us
          </p>
        </section>
      </article>
      <article className="min-h-[130px]">
        <div className="h-[2px] w-full bg-[#E3E3E3] mt-10"></div>
        <div className="w-4/5 md:w-11/12 mx-auto pt-4">
          <div>
            <div className="flex justify-between">
              <p className="text-[10px] md:text-sm text-[400] text-[#5A5A5A]">
                &copy;sharrie’s signature 2020
              </p>
              <div className="flex gap-4">
                <p className="text-[10px] md:text-sm text-[400] text-[#5A5A5A]">
                  Legal & Privacy
                </p>
                <p className="text-[10px] md:text-sm text-[400] text-[#5A5A5A]">
                  Cookies
                </p>
              </div>
            </div>
          </div>
          <div className="grid place-content-center">
            <p
              className={`text-base md:text-2xl font-[400] text-[#408C2B] ${redressed.className}`}
            >
              Sharrie’s Signature
            </p>
          </div>
        </div>
      </article>
    </footer>
  );
};
