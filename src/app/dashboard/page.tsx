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
import { DocumentSidebar } from '../../components/document-sidebar';

export default function Page() {
  return (
    <ResizablePanelGroup direction='horizontal'>
      <ResizablePanel
        defaultSize={25}
        minSize={20}
        maxSize={30}
        className={cn(
          'bg-white w-fit rounded-2xl border border-[#E7E7E7] overflow-y-scroll'
        )}
      >
        <header className='flex h-12 shrink-0 items-center gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator
              orientation='vertical'
              className='mr-2 data-[orientation=vertical]:h-4'
            />
            {/* <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className='hidden md:block'>
                      <BreadcrumbLink href='#'>
                        Building Your Application
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='hidden md:block' />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb> */}
          </div>
        </header>
        <DocumentSidebar />
      </ResizablePanel>
      <ResizableHandle className='m-0.5 hidden opacity-0 md:block' />
      <ResizablePanel className='bg-white w-fit rounded-2xl border border-[#E7E7E7] flex justify-center items-center'>
        Panel
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
