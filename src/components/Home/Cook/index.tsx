"use client";
import Image from "next/image";

const Cook = () => {
  return (
    <section className="relative" id="cook-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="absolute right-0 bottom-[-18%] hidden lg:block">
          <Image
            src={"/images/cook/Makeup-Kit.jpg"}
            alt="burger-image"
            width={463}
            height={622}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-start">
            <Image
              src="/images/cook/image1.jpg"
              alt="nothing"
              width={400}
              height={500}
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start">
              about us
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
              Welcome to Salon Revive
            </h2>
            <p className="text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2">
              Welcome to Salon Revive, your trusted beauty destination in
              Matara! We specialize in a wide range of professional hair,
              beauty, and wellness services designed to bring out your natural
              radiance. From trendy haircuts and expert coloring to bridal
              makeup, facials, manicures, and more – our experienced team is
              here to help you look and feel your best.
            </p>
            {/* <p className="text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium....
            </p>
            <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-primary lg:px-10 mr-6 w-fit border border-primary hover:bg-transparent hover:text-primary">
              Learn more
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cook;
