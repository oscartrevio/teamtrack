import { Circle, Menu } from 'lucide-react';
import React from 'react';

export default function Header() {
  return (
    <>
      <div id='navbar' className='sticky pt-5 pb-2 bg-white z-50'>
        <nav className='grid relative grid-cols-2 md:grid-cols-5 w-full container mx-auto max-w-5xl px-4'>
          {/* Mobile Navbar */}
          <div
            id='mobile-menu'
            className='absolute container mx-auto z-50 pt-14 h-[100vh] backdrop-blur-lg md:hidden transition-all duration-500 bg-white hidden'
          >
            <div className='flex flex-col gap-1 -mx-3'>
              <a
                className='w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm text-gray-900 hover:bg-black/5'
                href='/#pricing'
              >
                Producto
              </a>
              <a
                className='w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm text-gray-900 hover:bg-black/5'
                href=''
              >
                Ayuda
              </a>
              <a
                className='w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm text-gray-900 hover:bg-black/5'
                href=''
              >
                Precios
              </a>
              <a
                className='w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm text-gray-900 hover:bg-black/5'
                href=''
              >
                Sign In
              </a>
            </div>
          </div>

          {/* Desktop Navbar */}
          <a href='/' className='flex items-center gap-2.5 relative z-50'>
            <Circle className='fill-gray-900' />
            <span className='font-semibold text-gray-900'>Logo</span>
          </a>
          <div className='hidden items-center md:flex justify-center gap-8 col-span-3'>
            <a
              className='w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm text-gray-900 hover:bg-black/5'
              href='/#pricing'
            >
              Producto
            </a>
            <a
              className='w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm text-gray-900 hover:bg-black/5'
              href=''
            >
              Ayuda
            </a>
            <a
              className='w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm text-gray-900 hover:bg-black/5'
              href=''
            >
              Precios
            </a>
          </div>
          <div className='flex justify-end relative z-50'>
            <a
              className='w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:items-center md:justify-center px-3 py-2 md:text-sm text-gray-900 hover:bg-black/5 hidden md:block'
              href=''
            >
              Sign In
            </a>
            <button
              aria-label='Toggle menu'
              id='menu-button'
              className='flex items-center justify-center rounded-xl px-2 py-2 transition-all duration-300 hover:bg-black/5 md:hidden'
            >
              <Menu />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
