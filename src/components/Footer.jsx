// App like footer component
import React from "react";
import {
  HomeIcon,
  CalendarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Agenda", href: "/agenda", icon: CalendarIcon },
  { name: "Explore", href: "/explore", icon: MapPinIcon },
  { name: "Help", href: "/help", icon: QuestionMarkCircleIcon },
];

function Footer() {
  return (
    <footer className="fixed bottom-0 z-20 w-full border-t border-gray-200 bg-white">
      <div className="container mx-auto p-4">
        <ul className="flex justify-between">
          {menuItems.map((item, index) => (
            <li key={index} className="mx-2">
              <NavLink
                to={item.href}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "flex flex-col uppercase text-blue-700 hover:text-blue-800"
                    : "flex flex-col uppercase text-gray-700 hover:text-blue-800"
                }
              >
                {item.icon && <item.icon className="mx-auto h-6 w-6" />}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
