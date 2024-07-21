'use client';

import React, { useState } from 'react';

import { Button, Dialog, DialogContent, DialogTrigger } from '@/components/ui';

import DialogHeaderComp from './DialogHeader';
import StageOne from './StageOne';
import StageTwo from './StageTwo';
import { countryOptions } from './workshopsData';
import { Workshop } from './workshopTypes';

const JoinChallenge: React.FC<{ workshop: Workshop }> = ({ workshop }) => {
  const [stage, setStage] = useState(1);
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
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
        <Button className="px-0 lg:px-8 lg:py-2.5 lg:text-[18px]">
          Join the challenge
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`h-full w-full md:w-[600px] lg:top-[50%] ${
          stage === 1 ? 'top-[55%] h-auto' : 'h-auto'
        } m-0 overflow-y-scroll rounded-lg p-0`}
      >
        <DialogHeaderComp workshop={workshop} stage={stage} />
        {stage === 1 ? (
          <StageOne
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            handleContinue={handleContinue}
          />
        ) : (
          <StageTwo handleContinue={handleContinue} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JoinChallenge;
