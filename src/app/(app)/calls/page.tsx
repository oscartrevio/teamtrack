import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { cn } from '@/lib/utils';
import { DocumentSidebar } from '../../../components/document-sidebar';
import { DocumentView } from '@/components/document-view';
import { Button } from '@/components/ui/button';
import { Inbox, Pin, Star } from 'lucide-react';

export default function CallsPage() {
  return (
    <ResizablePanelGroup direction='horizontal' className='h-full max-h-screen'>
      <ResizablePanel
        defaultSize={25}
        minSize={20}
        maxSize={30}
        className={cn(
          'bg-white rounded-[14px] border border-[#E7E7E7] flex flex-col overflow-hidden relative'
        )}
      >
        <header className='flex h-16 shrink-0 items-center gap-2 border-b sticky top-0 z-50 bg-white rounded-t-[14px]'>
          <div className='flex items-center justify-center gap-2 px-4'>
            <SidebarTrigger />
            <Separator
              orientation='vertical'
              className='mr-2 data-[orientation=vertical]:h-4'
            />
            <span className='flex items-center gap-2 text-sm font-semibold text-neutral-800'>
              <Inbox className='h-4 w-4' /> Calls
            </span>
          </div>
        </header>
        {/* <div className='pointer-events-none absolute left-0 top-0 z-40 h-48 w-full'>
          <div
            className='block h-full pointer-events-none user-select-none'
            style={{
              backgroundImage:
                'linear-gradient(180deg, #fff 0%, hsla(0, 0%, 100%, 0.738) 19%, hsla(0, 0%, 100%, 0.541) 34%, hsla(0, 0%, 100%, 0.382) 47%, hsla(0, 0%, 100%, 0.278) 56.5%, hsla(0, 0%, 100%, 0.194) 65%, hsla(0, 0%, 100%, 0.126) 73%, hsla(0, 0%, 100%, 0.075) 80.2%, hsla(0, 0%, 100%, 0.042) 86.1%, hsla(0, 0%, 100%, 0.021) 91%, hsla(0, 0%, 100%, 0.008) 95.2%, hsla(0, 0%, 100%, 0.002) 98.2%, hsla(0, 0%, 100%, 0) 100%)',
            }}
          />
        </div> */}
        <div className='flex-1 overflow-y-auto h-0'>
          <DocumentSidebar />
        </div>
        <div className='pointer-events-none absolute left-0 bottom-0 z-50 h-24 w-full rotate-180'>
          {/* Bottom Blurred Gradient */}
          <div
            className='block h-full'
            style={{
              backgroundImage:
                'linear-gradient(180deg, #fff 0%, hsla(0, 0%, 100%, 0.738) 19%, hsla(0, 0%, 100%, 0.541) 34%, hsla(0, 0%, 100%, 0.382) 47%, hsla(0, 0%, 100%, 0.278) 56.5%, hsla(0, 0%, 100%, 0.194) 65%, hsla(0, 0%, 100%, 0.126) 73%, hsla(0, 0%, 100%, 0.075) 80.2%, hsla(0, 0%, 100%, 0.042) 86.1%, hsla(0, 0%, 100%, 0.021) 91%, hsla(0, 0%, 100%, 0.008) 95.2%, hsla(0, 0%, 100%, 0.002) 98.2%, hsla(0, 0%, 100%, 0) 100%)',
            }}
          />
        </div>
      </ResizablePanel>
      <ResizableHandle className='m-0.5 hidden opacity-0 md:block' />
      <ResizablePanel
        defaultSize={75}
        minSize={70}
        maxSize={80}
        className='bg-white rounded-[14px] border border-[#E7E7E7] flex flex-col overflow-hidden'
      >
        <header className='flex h-16 shrink-0 items-center gap-2 border-b sticky top-0 z-10 bg-white rounded-t-[14px] w-full justify-between px-4'>
          <div className='hidden md:block w-full'>(Call Title)</div>
          <Button variant='ghost' size='icon' className='h-7 w-7'>
            <Pin />
          </Button>
        </header>
        <DocumentView />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
