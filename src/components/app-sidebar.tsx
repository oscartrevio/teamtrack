'use client';

import {
  AudioWaveform,
  Calendar,
  Command,
  Home,
  Inbox,
  LifeBuoy,
  Search,
  Send,
  Settings2,
  Sparkles,
} from 'lucide-react';
import { FaCompass } from 'react-icons/fa';
import { FaMap } from 'react-icons/fa6';
import { BsFillMegaphoneFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { TeamSwitcher } from './team-switcher';

const iconSize = 16; // '1em'

const data = {
  user: {
    name: 'Oscar Treviño',
    email: 'oscar@example.com',
    avatar: 'https://avatar.vercel.sh/oscart',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: (props: any) => <Command {...props} size={iconSize} />,
      img: 'https://avatar.vercel.sh/acme',
    },
    {
      name: 'Acme Corp.',
      logo: (props: any) => <AudioWaveform {...props} size={iconSize} />,
      img: 'https://avatar.vercel.sh/acme-corp',
    },
    {
      name: 'Evil Corp.',
      logo: (props: any) => <Command {...props} size={iconSize} />,
      img: 'https://avatar.vercel.sh/evil-corp',
    },
  ],
  navMain: [
    {
      title: 'Search',
      url: '#',
      icon: Search,
    },
    {
      title: 'AI',
      url: '#',
      icon: Sparkles,
    },
    {
      title: 'Home',
      url: '/home',
      icon: Home,
    },
    {
      title: 'Calls',
      url: '/calls',
      icon: Inbox,
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: Calendar,
    },
    {
      title: 'Account',
      url: '/account',
      icon: Settings2,
    },
  ],
  navSecondary: [
    {
      title: 'Ayuda',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send,
    },
  ],
  projects: [
    {
      name: 'Design Website',
      url: '#',
      icon: FaCompass,
      color: 'fill-blue',
    },
    {
      name: 'Marketing Campaign',
      url: '#',
      icon: BsFillMegaphoneFill,
      color: 'fill-red',
    },
    {
      name: 'Map Implementation',
      url: '#',
      icon: FaMap,
      color: 'fill-green',
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  // Create a copy of the data to add active state based on current URL
  const navData = {
    ...data,
    navMain: data.navMain.map((item) => ({
      ...item,
      isActive: pathname.startsWith(item.url) && item.url !== '#',
    })),
    projects: data.projects.map((item) => ({
      ...item,
      isActive: pathname.startsWith(item.url) && item.url !== '#',
    })),
    navSecondary: data.navSecondary.map((item) => ({
      ...item,
      isActive: pathname.startsWith(item.url) && item.url !== '#',
    })),
  };

  return (
    <Sidebar variant='inset' collapsible='icon' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <TeamSwitcher teams={navData.teams} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navData.navMain} />
        <Separator orientation='horizontal' />
        <NavProjects projects={navData.projects} />
        <NavSecondary items={navData.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
