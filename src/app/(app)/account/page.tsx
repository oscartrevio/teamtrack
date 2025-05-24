import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Smile } from 'lucide-react';

export default function AccountPage() {
  return (
    <div className='h-full w-full flex flex-col overflow-hidden bg-white rounded-[14px] border border-[#E7E7E7] max-h-screen'>
      <header className='flex h-16 shrink-0 items-center gap-2 border-b sticky top-0 z-10 bg-white rounded-t-[14px]'>
        <div className='flex items-center gap-2 px-4'>
          <SidebarTrigger />
          <Separator
            orientation='vertical'
            className='mr-2 data-[orientation=vertical]:h-4'
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className='hidden md:block'>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className='hidden md:block' />
              <BreadcrumbItem>
                <BreadcrumbPage>Account</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <main className='max-w-xl container mx-auto gap-10 flex-1 overflow-y-auto py-8 flex flex-col items-center h-0'>
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
          <div className='aspect-square h-[56px] flex-none overflow-hidden rounded-[12px] bg-neutral-300'>
            A
          </div>
          <div className='flex flex-col items-start gap-1 text-neutral-800'>
            <p className='h-6 overflow-hidden text-[18px] leading-[24px] font-medium'>
              <span className='text-neutral-500'>@</span>
              oscartrevio
            </p>
            <p className='line-clamp-1 h-6 w-full overflow-hidden text-start leading-[24px] text-neutral-600'>
              User Profile
            </p>
          </div>
        </button>
      </main>
    </div>
  );
}
