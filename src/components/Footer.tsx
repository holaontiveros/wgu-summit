// App like footer component
import React from "react";
import {
  HomeIcon,
  CalendarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

import {
  HomeIcon as HomeIconFilled,
  CalendarIcon as CalendarIconFilled,
  MapPinIcon as MapPinIconFilled,
  QuestionMarkCircleIcon as QuestionMarkCircleIconFilled,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", href: "/", icon: HomeIcon, iconFilled: HomeIconFilled },
  {
    name: "Agenda",
    href: "/agenda",
    icon: CalendarIcon,
    iconFilled: CalendarIconFilled,
  },
  {
    name: "Explore",
    href: "/explore",
    icon: MapPinIcon,
    iconFilled: MapPinIconFilled,
  },
  {
    name: "Help",
    href: "/help",
    icon: QuestionMarkCircleIcon,
    iconFilled: QuestionMarkCircleIconFilled,
  },
];

function Footer() {
  return (
    <footer className="pb-safe sticky bottom-0 z-20 w-full border-t border-gray-200 bg-white">
      <div className="container mx-auto px-8 py-2">
        <ul className="flex justify-between">
          {menuItems.map((item, index) => (
            <li key={index} className="mx-2">
              <NavLink
                to={item.href}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "flex flex-col uppercase text-primary-500"
                    : "flex flex-col uppercase text-gray-700"
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <item.iconFilled className="mx-auto h-6 w-6" />
                    ) : (
                      <item.icon className="mx-auto h-6 w-6" />
                    )}
                    <span className="mt-1 text-center text-xs tracking-widest text-slate-500">
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
