'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { LuInfo } from 'react-icons/lu';
import { VscDeviceCameraVideo } from 'react-icons/vsc';

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

import { countryOptions } from './workshopsData';
import { Workshop } from './workshopTypes';

const JoinChallenge: React.FC<{ workshop: Workshop }> = ({ workshop }) => {
  const [stage, setStage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[2]);

  const handleContinue = () => {
    if (stage === 1) {
      setStage(2);
    } else {
      setOpen(false);
      setStage(1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-0 lg:px-8 lg:py-2.5 lg:text-[18px] ">
          Join the challenge
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`h-full w-full md:w-[600px] lg:top-[50%] ${
          stage === 1 ? 'top-[55%] lg:h-[80vh]' : 'h-auto'
        } m-0 overflow-y-scroll rounded-lg p-0`}
      >
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
        {stage === 1 ? (
          <>
            <div className="mx-6 border-t border-base-300 pt-3.5">
              <span className="text-2xl font-semibold text-base-800">
                Your mobile number
              </span>
              <div className="mt-4 flex h-[65px] items-center rounded-xl border border-base-100 shadow-[0_4px_20px_rgba(43,43,43,0.08)] ">
                {/* <PhoneInput placeholder='Enter a phone number'/> */}
                <Select
                  value={selectedCountry.code}
                  onValueChange={(value) =>
                    setSelectedCountry(
                      countryOptions.find((c) => c.code === value) ||
                        countryOptions[2]
                    )
                  }
                >
                  <SelectTrigger className="w-[27%] border-none pl-2 pr-0 text-[18px] font-semibold text-base-800 shadow-none">
                    <SelectValue>
                      <div className="flex items-center">
                        <span className="mr-2 text-2xl">
                          {selectedCountry.flag}
                        </span>
                        <span>{selectedCountry.code}</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {countryOptions.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <div className="flex items-center">
                          <span className="mr-2 text-2xl">{country.flag}</span>
                          <span>{country.name}</span>
                          <span className="ml-2 text-base-300">
                            {country.code}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="w-8 rotate-90 border bg-base-300 opacity-50"></div>
                <Input
                  type="number"
                  className="col-span-3 border-none p-0 shadow-none active:border-none"
                  placeholder="Enter your phone number"
                />
              </div>
              <span className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                <LuInfo /> You can access the workshop using this number
              </span>
            </div>
            <div className="mt-52 px-6 py-5 shadow-[0_-4px_20px_rgba(43,43,43,0.06)]">
              <Button onClick={handleContinue} size="lg" className="w-full">
                Continue
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="mx-6 space-y-4 border-t border-base-300 pt-6">
              <div className="space-y-4">
                <div className="relative w-full">
                  <div className="absolute left-3 top-3 text-sm font-medium text-base-300">
                    Name{' '}
                  </div>
                  <Input
                    type="text"
                    value=""
                    placeholder="Enter your name"
                    className="rounded-xl border-none pb-[23px] pt-11 text-[18px] font-semibold text-base-800 shadow-[0_4px_20px_rgba(43,43,43,0.08)]"
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute left-3 top-3 text-sm font-medium text-base-300">
                    Email ID
                  </div>
                  <Input
                    type="email"
                    value=""
                    placeholder="Enter your email"
                    className="rounded-xl border-none pb-[23px] pt-11 text-[18px] font-semibold text-base-800 shadow-[0_4px_20px_rgba(43,43,43,0.08)]"
                  />
                </div>
                <Input
                  type="text"
                  value=""
                  placeholder="Enter your city"
                  className="rounded-xl border-none py-6 text-[18px] font-semibold text-base-800 shadow-[0_4px_20px_rgba(43,43,43,0.08)]"
                />
              </div>

              <div>
                <span className="text-base font-semibold text-base-800">
                  This workshop can help you heal the following:
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    'Cancer',
                    'Excess weight',
                    'High BP',
                    'Diabetes type 2',
                  ].map((condition) => (
                    <span
                      key={condition}
                      className="rounded-xl px-3 py-2 text-xs text-base-300 shadow-[0_4px_20px_rgba(43,43,43,0.08)]"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-base font-semibold text-base-800">
                  However, it will not be sufficient for the following
                  conditions:
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    'Thyroid imbalance',
                    'Excess weight',
                    'High BP',
                    'Diabetes type 2',
                  ].map((condition) => (
                    <span
                      key={condition}
                      className="rounded-xl px-3 py-2 text-xs text-base-300 shadow-[0_4px_20px_rgba(43,43,43,0.08)]"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-6 py-5 shadow-[0_-4px_20px_rgba(43,43,43,0.06)]">
              <Button onClick={handleContinue} size="lg" className="w-full">
                Continue to payment
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JoinChallenge;
