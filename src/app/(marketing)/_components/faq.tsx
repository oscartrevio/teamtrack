import { ArrowRight, PhoneCall } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export const FAQ = () => (
  <div className='w-full py-20 lg:py-40'>
    <div className='container mx-auto'>
      <div className='grid gap-10 text-[#121212] md:grid-cols-2'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-4'>
            <div>
              <Badge
                variant='outline'
                className='border-transparent bg-[#ff3e00]/10 text-[#ff3e00]'
              >
                FAQ
              </Badge>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <h4 className='max-w-xl text-left text-3xl font-semibold tracking-tighter md:text-5xl'>
                Frequently Asked Questions
              </h4>
              <Button className='-mx-4 mt-8 bg-transparent text-lg font-medium text-[#ff3e00] shadow-none transition-all hover:bg-[#ff3e00]/10'>
                Any questions? <PhoneCall className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
        <Accordion type='single' collapsible className='w-full'>
          {Array.from({ length: 3 }).map((_, index) => (
            <AccordionItem key={index} value={`index-${index}`}>
              <AccordionTrigger className='py-6 text-xl font-medium tracking-tight decoration-transparent'>
                This is the start of something new
              </AccordionTrigger>
              <AccordionContent className='text-lg font-medium tracking-tight text-[#474645]'>
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);
