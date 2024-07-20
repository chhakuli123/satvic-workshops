import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="relative w-full">
        <Image
          src="/assets/images/workshops_hero_image_mobile.png"
          alt="Workshops Hero Mobile"
          width={750}
          height={1334}
          className="w-full md:hidden"
        />
        <Image
          src="/assets/images/workshops_hero_image.png"
          alt="Workshops Hero Desktop"
          width={1920}
          height={1080}
          className="hidden w-full md:block"
        />
      </div>

      {/* Page Tear Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[11%] w-full overflow-hidden md:h-[8%]">
        <Image
          src="/assets/images/page_tear_mobile.png"
          alt="Page Tear Mobile"
          fill
          className="object-cover md:hidden"
        />
        <Image
          src="/assets/images/page_tear.png"
          alt="Page Tear Desktop"
          fill
          className="hidden object-cover md:block"
        />
      </div>
    </section>
  );
};

export default HeroSection;
