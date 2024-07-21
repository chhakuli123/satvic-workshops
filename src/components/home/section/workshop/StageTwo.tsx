import React, { useState } from 'react';

import { Button, Input } from '@/components/ui';

interface StageTwoProps {
  handleContinue: () => void;
}

const StageTwo: React.FC<StageTwoProps> = ({ handleContinue }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  return (
    <>
      <div className="mx-6 space-y-4 border-t border-base-300 pt-6">
        <div className="space-y-4">
          <div className="relative w-full">
            <div className="absolute left-3 top-3 text-sm font-medium text-base-300">
              Name{' '}
            </div>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="rounded-xl border-none pb-[23px] pt-11 text-[18px] font-semibold text-base-800 shadow-[0_4px_20px_rgba(43,43,43,0.08)]"
            />
          </div>
          <Input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
            className="rounded-xl border-none py-6 text-[18px] font-semibold text-base-800 shadow-[0_4px_20px_rgba(43,43,43,0.08)]"
          />
        </div>

        <div>
          <span className="text-base font-semibold text-base-800">
            This workshop can help you heal the following:
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {['Cancer', 'Excess weight', 'High BP', 'Diabetes type 2'].map(
              (condition) => (
                <span
                  key={condition}
                  className="rounded-xl px-3 py-2 text-xs text-base-300 shadow-[0_4px_20px_rgba(43,43,43,0.08)]"
                >
                  {condition}
                </span>
              )
            )}
          </div>
        </div>
        <div>
          <span className="text-base font-semibold text-base-800">
            However, it will not be sufficient for the following conditions:
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
  );
};

export default StageTwo;
