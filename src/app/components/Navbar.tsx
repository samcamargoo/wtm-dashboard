import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="hidden sm:flex w-full py-10 px-32 justify-between text-white z-50 absolute top-0">
      <span className="font-light">
        Big Bang Academy | Made in GDG for everyone
      </span>
      <nav>
        <ul>
          <li>
            <button>
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
