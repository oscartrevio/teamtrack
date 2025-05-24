import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className='overflow-hidden max-h-screen'>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
