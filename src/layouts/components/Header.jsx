"use client";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import "../../assets/Header.css";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "American Bikes",
    description: "Vs screamin' out excitement!",
    href: "#",
    icon: "us",
  },
  {
    name: "American Cars",
    description: "Hit the road Jack!",
    href: "#",
    icon: "us",
  },
  {
    name: "JDM Cars",
    description: "Fast and Japanese (a little furious too)",
    href: "#",
    icon: "jp",
  },
];

export default function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bghead">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Ragdoll Motors</span>
            <img alt="" src="../images/logo.svg" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative ">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 hover:!text-orange-500 text-white ">
              Vehicles
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl  shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 bghead">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-orange-800"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-orange-500 group-hover:">
                      <span className={`fi fi-${item.icon}`}></span>
                    </div>
                    <div className="flex-auto">
                      <NavLink
                        to="/error"
                        className={({ isActive }) =>
                          isActive
                            ? "scale-105 text-orange-500"
                            : "text-sm font-semibold leading-6 text-white hover:text-orange-500"
                        }
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </NavLink>
                      <p className="mt-1 text-white">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <NavLink
            to="/error"
            className={({ isActive }) =>
              isActive
                ? "scale-105 text-orange-500"
                : "text-sm font-semibold leading-6 text-white hover:text-orange-500"
            }
          >
            Our Dealers
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "scale-105 text-orange-500"
                : "text-sm font-semibold leading-6 text-white hover:text-orange-500"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "scale-105 text-orange-500"
                : "text-sm font-semibold leading-6 text-white hover:text-orange-500"
            }
          >
            Get in Touch
          </NavLink>
        </PopoverGroup>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? " text-orange-500 size-5 mr-1 lg:flex lg:flex-1 lg:justify-end"
              : "text-white hover:text-orange-500 size-5 mr-1 lg:flex lg:flex-1 lg:justify-end"
          }
        >
          <ShoppingBagIcon />
        </NavLink>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="bg-neutral-700 fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Ragdoll Motors</span>
              <img alt="" src="../images/logo.svg" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3 ">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-orange-500">
                    Vehicles
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180 "
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-orange-500"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-orange-500"
                >
                  Our Dealers
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-orange-500"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-orange-500"
                >
                  Get in Touch
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-orange-500"
                >
                  Search
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
