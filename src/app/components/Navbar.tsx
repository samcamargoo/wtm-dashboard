"use client";

import { Button } from "@/components/ui/button";


export const Navbar = () => {
  return (
    <header className="flex w-full py-10 px-6 md:px-32 justify-between text-white z-50 absolute top-0">
      <span className="font-light md:hidden">Big Bang Academy</span>

      <span className="font-light hidden md:flex">
        Big Bang Academy | Made in GDG for everyone
      </span>

      <nav>
        <ul>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
