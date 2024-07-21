import Image from 'next/image';
import { GoHeartFill } from 'react-icons/go';
import { LuUsers } from 'react-icons/lu';
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

const WorkshopCard: React.FC<{ workshop: Workshop }> = ({ workshop }) => (
  <div
    className={`hidden bg-white lg:grid  ${
      workshop.id === 1 ? 'rounded-t-3xl' : 'rounded-3xl'
    } grid-cols-2 gap-[30px] overflow-hidden p-6 pt-10 shadow-[0_4px_20px_rgba(43,43,43,0.08)]`}
  >
    <div className="relative h-full w-full">
      <Carousel>
        <CarouselContent
          className={`${workshop.id === 2 ? 'h-[22.8rem]' : 'h-[20.8rem]'} ${
            workshop.id === 3 && 'h-[24.4rem]'
          } `}
        >
          {[workshop.image, workshop.image, workshop.image].map(
            (src, index) => (
              <CarouselItem key={index}>
                <Image
                  src={src}
                  alt={`${workshop.title} - Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="h-full w-full rounded-xl object-cover"
                />
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
      {workshop.startsIn !== '' && (
        <div className="absolute left-4 top-4 flex flex-col rounded-[4.8px] border border-primary-100 bg-white px-[9px] py-1.5 text-base-950">
          <span className="text-[10px] font-normal leading-[10px]">
            Starts in:
          </span>
          <span className="text-xs font-semibold">{workshop.startsIn}</span>
        </div>
      )}
    </div>
    <div className=" flex w-full flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-base-800">
            {workshop.title}
          </h3>

          <div className="mt-2 flex items-center gap-1.5">
            <span className="flex items-center gap-1 rounded-md bg-success-50 px-1 py-0.5 text-sm text-white">
              {workshop.rating} <TiStarFullOutline />
            </span>
            <span className="text-sm font-bold text-base-300">
              {workshop.reviews} reviews
            </span>
          </div>
        </div>

        {workshop.tag !== '' && (
          <span className="flex items-center gap-2 rounded-xl bg-primary-300/10 p-1.5 text-sm font-bold text-primary-500">
            <GoHeartFill size={15} />
            {workshop.tag}
          </span>
        )}
      </div>

      <p className="text-sm font-medium text-base-800">
        {workshop.description}
      </p>

      <div className="flex 2xl:gap-4">
        <div className="flex items-center gap-[14px] rounded-xl border border-base-100 px-4 py-5 text-xs shadow-[0_4px_20px_rgba(43,43,43,0.08)]">
          <Image
            src="/assets/icons/calender.svg"
            alt="Calender"
            width={18}
            height={18}
            className="h-[32px] w-[32px]"
          />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-base-800">
              {workshop.startDate}
            </span>
            <span className="text-xs font-medium text-base-300">
              Start Date
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[14px] rounded-xl border border-base-100 px-4 py-5 text-xs shadow-[0_4px_20px_rgba(43,43,43,0.08)]">
          <Image
            src="/assets/icons/game-icons_duration.svg"
            alt="Calender"
            width={18}
            height={18}
            className="h-[32px] w-[32px]"
          />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-base-800">
              {workshop.duration}
            </span>
            <span className="text-xs font-medium text-base-300">Duration</span>
          </div>
        </div>
        <div className="flex items-center gap-[14px] rounded-xl border border-base-100 px-4 py-5 text-xs shadow-[0_4px_20px_rgba(43,43,43,0.08)]">
          <Image
            src="/assets/icons/globe_language.svg"
            alt="Calender"
            width={18}
            height={18}
            className="h-[32px] w-[32px]"
          />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-base-800">
              {workshop.language}
            </span>
            <span className="text-xs font-medium text-base-300">Language</span>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-2">
          <span className="flex items-center text-xl font-bold text-gray-800">
            <MdOutlineCurrencyRupee /> {workshop.price}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <JoinChallenge workshop={workshop} />
          <Button variant="outline" className="text-[18px]">
            View details
          </Button>
        </div>
        <div className="mt-2 flex items-center gap-2 text-[16px] font-medium text-primary-500">
          <LuUsers />
          {workshop.joinedCount} have already joined
        </div>
      </div>
    </div>
  </div>
);
export default WorkshopCard;
