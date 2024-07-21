import React from 'react';
import Image from 'next/image';
import { VscDeviceCameraVideo } from 'react-icons/vsc';

import { DialogHeader, DialogTitle } from '@/components/ui';

import { Workshop } from './workshopTypes';

interface DialogHeaderProps {
  workshop: Workshop;
  stage: number;
}

const DialogHeaderComp: React.FC<DialogHeaderProps> = ({ workshop, stage }) => (
  <div className="px-6 pt-6">
    <div className="flex w-[95%] gap-2">
      <div
        className={`h-1 flex-1 rounded ${
          stage >= 1 ? 'bg-primary-500' : 'bg-primary-100'
        }`}
      ></div>
      <div
        className={`h-1 flex-1 rounded ${
          stage >= 2 ? 'bg-primary-500' : 'bg-primary-100'
        }`}
      ></div>
    </div>
    <DialogHeader className="mt-3 space-y-3">
      <DialogTitle className="text-[16px] font-semibold text-base-800">
        {workshop.title}
        <div className="mt-1 flex items-center gap-2 text-sm font-medium text-base-300">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/calender.svg"
              alt="Calender"
              width={18}
              height={18}
              className="h-4 w-4"
            />
            <span>{workshop.startDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/game-icons_duration.svg"
              alt="Calender"
              width={18}
              height={18}
              className="h-4 w-4"
            />
            <span>{workshop.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/globe_language.svg"
              alt="Calender"
              width={18}
              height={18}
              className="h-4 w-4"
            />
            <span>{workshop.language}</span>
          </div>
        </div>
      </DialogTitle>

      <div className="my-4 rounded-lg border border-base-100 shadow-[0_4px_20px_rgba(43,43,43,0.08)]">
        <div className="px-3 py-1 text-sm font-semibold text-base-800 ">
          Session timings: 8 - 8:45 am (IST)
        </div>
        <div className="flex items-center gap-1.5 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-500">
          <VscDeviceCameraVideo size={14} />
          Recording available for 24 hours
        </div>
      </div>
    </DialogHeader>
  </div>
);

export default DialogHeaderComp;
