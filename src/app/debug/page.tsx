import { Smile } from 'lucide-react';
import React from 'react';

export default function DebugPage() {
  return (
    <div className='flex-col flex h-screen w-full items-center justify-center max-w-xl container mx-auto gap-10'>
      <div className='flex flex-col items-center justify-center'>
        <div className='bg-blue/10 text-blue flex aspect-square w-14 items-center justify-center rounded-full text-[32px]'>
          <Smile />
        </div>
        <div className='mt-5 flex flex-col items-center gap-2'>
          <p className='font-openrunde text-[24px] leading-[32px] font-semibold tracking-[-0.48px] text-neutral-800'>
            Debug Page
          </p>

          <p className='max-w-[384px] text-center leading-[24px] text-neutral-600'>
            This is a debug page for testing purposes. It is not meant to be
            used in production.
          </p>
        </div>
      </div>
      <button
        className={
          'flex w-full cursor-pointer items-center gap-4 rounded-[24px] bg-neutral-200 p-3 transition duration-200 ease-out hover:bg-neutral-300 active:scale-[0.99]'
        }
      >
        <div className='aspect-square h-[56px] flex-none overflow-hidden rounded-[12px] bg-neutral-300'></div>
        <div className='flex flex-col items-start gap-1 text-neutral-800'>
          <p className='h-6 overflow-hidden text-[18px] leading-[24px] font-medium'>
            <span className='text-neutral-500'>@</span>
            oscartrevio
          </p>
          <p className='line-clamp-1 h-6 w-full overflow-hidden text-start leading-[24px] text-neutral-600'>
            Lens Profile
          </p>
        </div>
      </button>
    </div>
  );
}
