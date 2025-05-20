import { Button } from '@/components/ui/button';
import React from 'react';

export default function Hero() {
  return (
    <>
      <section>
        <div className='container mx-auto max-w-4xl px-4'>
          <div className='flex flex-col items-center justify-center gap-8'>
            <Button variant='secondary' size='sm' className='gap-4'>
              Descubre cómo la IA revoluciona tus reuniones
            </Button>
            <div className='flex flex-col gap-4 w-full items-center'>
              <h1 className='max-w-2xl text-balance text-center font-bold tracking-tighter text-5xl text-gray-900'>
                Reuniones Inteligentes. Resultados Extraordinarios.
              </h1>
              <p className='max-w-2xl text-pretty text-center text-base leading-relaxed tracking-tight text-muted-foreground'>
                Optimiza cada reunión con nuestra app potenciada por IA: toma
                notas automáticas, genera resúmenes instantáneos y entiende a
                tus clientes. Haz que cada minuto cuente y lleva la
                productividad de tu equipo al siguiente nivel.
              </p>
              <div className='flex flex-col sm:flex-row gap-2 w-full justify-center items-center px-0'>
                <Button className='flex h-12 w-full sm:w-auto min-w-[180px] select-none rounded-full bg-gray-900 hover:bg-gray-900/90 text-base font-semibold text-white shadow-none transition-all duration-200 ease-out active:scale-95 sm:font-medium cursor-pointer'>
                  Probar Gratis
                </Button>
                <Button
                  variant='ghost'
                  className='flex h-12 w-full sm:w-auto min-w-[180px] select-none rounded-full border-transparent bg-black/5 text-base font-semibold shadow-none transition-all duration-200 ease-out hover:bg-black/5 active:scale-95 sm:font-medium cursor-pointer'
                >
                  Ver Cómo Funciona
                </Button>
              </div>
            </div>
          </div>
          <img
            src='https://shadcnblocks.com/images/block/placeholder.svg'
            alt='imagen de muestra'
            className='mx-auto mt-14 w-full max-w-8xl rounded-xl object-cover aspect-video'
          />
        </div>
      </section>
    </>
  );
}
