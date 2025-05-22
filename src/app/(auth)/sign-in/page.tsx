'use client';

import Link from 'next/link';

import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import {
  Eye,
  EyeOff,
  GalleryVerticalEnd,
  LoaderCircle,
  Smile,
} from 'lucide-react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInFormSchema } from '@/lib/auth-schema';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export default function SignIn() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const toggleVisibility = () =>
    setIsPasswordVisible((prevState) => !prevState);

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    const { email, password } = values;

    try {
      setAuthError(null);
      // Simula un retraso para el login (sustituir por tu lógica real de autenticación)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Aquí implementarías tu lógica real de autenticación
      console.log('Form submitted:', { email, password });

      // Si llegamos aquí, la autenticación fue exitosa
      toast.success('Inicio de sesión exitoso');
    } catch (error) {
      console.error('Error de autenticación:', error);
      setAuthError(
        error instanceof Error ? error.message : 'Error al iniciar sesión'
      );
    }
  }

  return (
    <>
      <div className='grid min-h-svh font-display lg:grid-cols-2'>
        <div className='flex flex-col gap-4 p-6 md:p-10'>
          <div className='flex justify-center gap-2 md:justify-start'>
            <Link href='/' className='flex items-center gap-2 font-medium'>
              <div className='flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground'>
                <GalleryVerticalEnd className='size-4' />
              </div>
              TeamTrack
            </Link>
          </div>
          <div className='flex flex-1 items-center justify-center'>
            <div className='w-full max-w-xs'>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-5'
                >
                  <div className='flex flex-col items-center gap-2 text-center'>
                    <div className='bg-blue/10 text-blue flex aspect-square w-14 items-center justify-center rounded-full text-[32px]'>
                      <Smile />
                    </div>
                    <h1 className='text-2xl font-bold text-[24px] leading-[32px] tracking-[-0.48px] text-neutral-800'>
                      Bienvenido de nuevo
                    </h1>
                    <p className='text-balance text-sm text-center leading-[24px] text-neutral-600'>
                      Inicia sesión en tu cuenta para continuar
                    </p>
                  </div>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='font-semibold'>Correo</FormLabel>
                        <FormControl>
                          <Input
                            className='flex h-12 w-full items-center rounded-2xl border-transparent bg-[#F5F5F5] pl-4 pr-1 font-medium shadow-none text-base text-[#232323]'
                            placeholder='hello@teamtrack.com'
                            type='email'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className='flex h-[28px] w-fit items-center rounded-full bg-rose-50 px-2.5 text-[13px] font-medium text-rose-500' />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='font-semibold'>
                          Contraseña
                        </FormLabel>
                        <FormControl>
                          <div className='relative'>
                            <Input
                              className='sm:font-regular flex h-12 w-full items-center rounded-2xl border-transparent bg-muted pe-9 pl-4 pr-1 font-medium shadow-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
                              placeholder='Ingresa tu contraseña'
                              autoComplete='current-password'
                              type={isPasswordVisible ? 'text' : 'password'}
                              {...field}
                            />
                            <button
                              className='absolute inset-y-0 end-2 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
                              type='button'
                              onClick={toggleVisibility}
                              aria-label={
                                isPasswordVisible
                                  ? 'Ocultar contraseña'
                                  : 'Mostrar contraseña'
                              }
                              aria-pressed={isPasswordVisible}
                              aria-controls='password'
                            >
                              {isPasswordVisible ? (
                                <EyeOff
                                  size={16}
                                  strokeWidth={2}
                                  aria-hidden='true'
                                />
                              ) : (
                                <Eye
                                  size={16}
                                  strokeWidth={2}
                                  aria-hidden='true'
                                />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className='flex h-[28px] w-fit items-center rounded-full bg-rose-50 px-2.5 text-[13px] font-medium text-rose-500' />
                      </FormItem>
                    )}
                  />
                  <button
                    disabled={form.formState.isSubmitting}
                    type='submit'
                    className={cn(
                      'flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-[#4EAFFE] font-semibold text-white select-none disabled:cursor-wait disabled:bg-[#4EAFFE]/40',
                      'transform transition-transform duration-200 ease-out hover:scale-95 active:scale-95 disabled:scale-100',
                      form.formState.isSubmitting
                        ? 'text-[#b3b3b3] disabled:bg-[#f0f0f0]'
                        : 'bg-[#4EAFFE] disabled:bg-[#4EAFFE]/40'
                    )}
                  >
                    <AnimatePresence initial={false}>
                      {form.formState.isSubmitting ? (
                        <motion.div
                          className='flex w-fit items-center gap-1'
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                        >
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='animate-spin'
                          >
                            <path
                              d='M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.024 13.2418 10.2961 13.5433C9.56814 13.8448 8.78793 14 8 14C7.21206 14 6.43185 13.8448 5.70389 13.5433C4.97594 13.2418 4.31451 12.7998 3.75736 12.2426C3.2002 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 7.21207 2.15519 6.43186 2.45672 5.7039C2.75825 4.97595 3.2002 4.31451 3.75736 3.75736C4.31451 3.20021 4.97594 2.75825 5.7039 2.45673C6.43185 2.1552 7.21207 2 8 2C8.78793 2 9.56814 2.1552 10.2961 2.45673C11.0241 2.75826 11.6855 3.20021 12.2426 3.75736C12.7998 4.31452 13.2417 4.97595 13.5433 5.7039C13.8448 6.43186 14 7.21207 14 8L14 8Z'
                              stroke='#DADADA'
                              strokeWidth='3'
                            />
                            <path
                              d='M14 8C14 8.94687 13.7759 9.88029 13.346 10.7239C12.9162 11.5676 12.2927 12.2976 11.5267 12.8541C10.7607 13.4107 9.87381 13.778 8.9386 13.9261C8.0034 14.0743 7.04641 13.9989 6.14589 13.7063'
                              stroke='#191919'
                              strokeOpacity='0.36'
                              strokeWidth='3'
                              strokeLinecap='round'
                            />
                          </svg>
                          Verificando
                        </motion.div>
                      ) : (
                        <span>Iniciar sesión</span>
                      )}
                    </AnimatePresence>
                  </button>
                  <div className='after:border- relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-dashed after:border-border'>
                    <span className='relative z-10 bg-background px-2 text-xs font-medium uppercase text-muted-foreground'>
                      O
                    </span>
                  </div>
                  <Button
                    variant='outline'
                    className='flex h-12 w-full shrink-0 select-none items-center justify-center gap-2 rounded-full border-transparent bg-muted text-base font-semibold shadow-none transition-all duration-200 ease-out hover:bg-muted/70 focus:scale-95 active:scale-95 text-[#232323] disabled:cursor-not-allowed disabled:bg-muted/40 cursor-pointer transform hover:scale-95 disabled:scale-100'
                  >
                    <FcGoogle />
                    Iniciar sesión con Google
                  </Button>
                  <div className='text-center text-sm text-muted-foreground dark:text-muted-foreground/80'>
                    ¿No tienes una cuenta?{' '}
                    <Link
                      href='/sign-up'
                      className="relative text-[#1a88f8] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[2px] after:rounded after:bg-[#1a88f8] after:opacity-10 after:transition-opacity after:duration-200 after:ease-out after:content-[''] hover:after:opacity-20 focus:after:opacity-20 active:after:opacity-20"
                    >
                      Regístrate
                    </Link>
                  </div>
                  {/* <div className="text-center text-xs text-muted-foreground dark:text-muted-foreground/80">
                    Al continuar, aceptas nuestros{" "}
                    <Link href="/" className="underline underline-offset-2">
                      Términos de Servicio
                    </Link>{" "}
                    y{" "}
                    <Link href="/" className="underline underline-offset-2">
                      Política de Privacidad
                    </Link>
                  </div> */}
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className='relative hidden bg-muted lg:block'>
          <img
            src='https://placehold.co/600x400@2x.png'
            alt=''
            className='absolute inset-0 h-full w-full object-cover'
          />
        </div>
      </div>
    </>
  );
}
