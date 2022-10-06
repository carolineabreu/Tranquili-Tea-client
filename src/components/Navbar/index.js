import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from '../SearchBar/index';

import "../../index.css";

const withoutNavbarRoutes = ["/tea-room/new-post", "/tea-room/post/:id", "tea-room/profile", "/tea-room"];

const navigation = {
  categories: [
    {
      id: 'TEA',
      name: 'TEA',
      featured: [
        {
          name: 'New arrivals',
          href: '#',
          imageSrc: 'https://imageio.forbes.com/specials-images/imageserve/5f6c061ca71799093f55fd02/Aromatic-herbal-tea-/0x0.jpg?crop=5029,3354,x0,y0,safe&height=474&width=711&fit=bounds',
          imageAlt: 'Different types of teas.',
        },
        {
          name: 'Best Sellers',
          href: '#',
          imageSrc: 'data:image/jpeg;base64,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',
          imageAlt: 'Teas being served.',
        },
      ],
      sections: [
        {
          id: 'Shop by Mood',
          name: 'Shop by Mood',
          items: [
            { name: 'Anxious', href: '#' },
            { name: 'Stressed', href: '#' },
            { name: 'Moody', href: '#' },
            { name: 'Tired', href: '#' },
            { name: 'Wired', href: '#' },
            { name: 'Focused', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'Shop by Category',
          name: 'Shop by Category',
          items: [
            { name: 'Cafeine Free', href: '#' },
            { name: 'Green Tea', href: '#' },
            { name: 'Black Tea', href: '#' },
            { name: 'Unsual Teas', href: '#' },
          ],
        },
      ],
    },

  ],
  pages: [
    { name: 'TEA ROOM', href: '#' },
    { name: 'TEA LIST', href: 'TeaList' },
    { name: 'ABOUT US', href: '#' },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  if (withoutNavbarRoutes.some((item) => pathname.includes(item))) return null;
  
  return (
    <div className="bg-white">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4 font-mono">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="Signup" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-green-100 px-4 text-sm font-medium text-black sm:px-6 lg:px-8">
          Get free delivery on orders over $50 SHOP NOW
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

         
              <div className="ml-4 flex lg:ml-0">
                <a class="text-xl text-purple-500 font font-mono" href="home">Tranquili-Tea</a>
              </div>

             
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-blue-800 text-blue-800'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-gray-800">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

               
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

