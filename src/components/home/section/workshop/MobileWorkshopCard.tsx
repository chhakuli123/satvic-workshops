import Image from 'next/image';
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import { TiStarFullOutline } from 'react-icons/ti';

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';

import JoinChallenge from './JoinChallenge';
import { Workshop } from './workshopTypes';

const MobileWorkshopCard: React.FC<{ workshop: Workshop }> = ({ workshop }) => (
  <div className="visible overflow-hidden rounded-xl bg-white shadow-md lg:hidden">
    <div className="relative">
      <Carousel>
        <CarouselContent>
          {[workshop.image, workshop.image, workshop.image].map(
            (src, index) => (
              <CarouselItem key={index}>
                <Image
                  src={src}
                  alt={`${workshop.title} - Image ${index + 1}`}
                  width={400}
                  height={200}
                  className="h-full w-full object-cover xl:h-48"
                />
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
      <div className="absolute left-2 top-2 rounded-md bg-white px-2 py-1 text-xs">
        <p className="font-normal">Starts in:</p>
        <p className="font-semibold">{workshop.startsIn}</p>
      </div>
    </div>

    <div className="p-4 pb-1">
      <h3 className="text-[22px] font-bold text-gray-800">{workshop.title}</h3>

      <div className="my-2 flex items-center gap-1.5">
        <span className="flex items-center gap-1 rounded-md bg-success-50 px-1 py-0.5 text-sm text-white">
          {workshop.rating} <TiStarFullOutline />
        </span>
        <span className="text-sm font-semibold text-gray-600">
          {workshop.reviews} reviews
        </span>
      </div>

      <div className="my-4 flex items-center justify-between rounded-lg border border-base-100 px-3 py-1.5 text-xs shadow-[0_4px_20px_rgba(43,43,43,0.08)]">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icons/calender.svg"
            alt="Calender"
            width={18}
            height={18}
            className="h-[18px] w-[18px]"
          />
          <span className="text-sm font-medium text-base-800">
            {workshop.startDate}
          </span>
        </div>
        <div className="w-6 rotate-90 border bg-[#F3F3F3] opacity-50"></div>

        <div className="flex items-center gap-2">
          <Image
            src="/assets/icons/game-icons_duration.svg"
            alt="Calender"
            width={18}
            height={18}
            className="h-[18px] w-[18px]"
          />
          <span className="text-sm font-medium text-base-800">
            {workshop.duration}
          </span>
        </div>
        <div className="w-6 rotate-90 border bg-[#F3F3F3] opacity-50"></div>

        <div className="flex items-center gap-2">
          <Image
            src="/assets/icons/globe_language.svg"
            alt="Calender"
            width={18}
            height={18}
            className="h-[18px] w-[18px]"
          />
          <span className="text-sm font-medium text-base-800">
            {workshop.language}
          </span>
        </div>
      </div>

      <p className="mb-3 text-sm text-gray-600">{workshop.description}</p>
    </div>

    <div className="flex items-center justify-between p-4 shadow-[0_-4px_20px_rgba(43,43,43,0.06)]">
      <Button variant="ghost" className="p-0">
        View details
      </Button>
      <div className="flex h-10 items-center rounded-xl bg-primary-500 px-2">
        <JoinChallenge workshop={workshop} />

        <span className="w-6 rotate-90 border bg-[#F3F3F3] opacity-50"></span>
        <span className="flex items-center text-white">
          <MdOutlineCurrencyRupee size={18} />
          {workshop.price}{' '}
        </span>
      </div>
    </div>
  </div>
);

export default MobileWorkshopCard;
