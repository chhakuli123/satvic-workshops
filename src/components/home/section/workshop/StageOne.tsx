import React from 'react';
import { LuInfo } from 'react-icons/lu';

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

import { countryOptions } from './workshopsData';

interface StageOneProps {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  selectedCountry: any;
  setSelectedCountry: (value: any) => void;
  handleContinue: () => void;
}

const StageOne: React.FC<StageOneProps> = ({
  phoneNumber,
  setPhoneNumber,
  selectedCountry,
  setSelectedCountry,
  handleContinue,
}) => (
  <>
    <div className="mx-6 border-t border-base-300 pt-3.5">
      <span className="text-2xl font-semibold text-base-800">
        Your mobile number
      </span>
      <div className="mt-4 flex h-[65px] items-center rounded-xl border border-base-100 shadow-[0_4px_20px_rgba(43,43,43,0.08)] ">
        <Select
          value={selectedCountry.code}
          onValueChange={(value) =>
            setSelectedCountry(
              countryOptions.find((c) => c.code === value) || countryOptions[2]
            )
          }
        >
          <SelectTrigger className="w-[27%] border-none pl-2 pr-0 text-[18px] font-semibold text-base-800 shadow-none">
            <SelectValue>
              <div className="flex items-center">
                <span className="mr-2 text-2xl">{selectedCountry.flag}</span>
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
                  <span className="ml-2 text-base-300">{country.code}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="w-8 rotate-90 border bg-base-300 opacity-50"></div>
        <Input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
);

export default StageOne;
