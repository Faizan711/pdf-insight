"use client";

import { ArrowRight, LogOutIcon, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MobileNav = ({ isAuth }: { isAuth: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const pathName = usePathname()

  useEffect(() => { //to hide navbar in home page without login
    if(isOpen) 
        toggleOpen()
  },[pathName])

  const closeOnCurrent = (href: string) => {
    if(pathName === href)
        toggleOpen()
  }

  return (
    <div className="sm:hidden">
      <Menu
        onClick={toggleOpen}
        className="relative z-50 h-5 w-5 text-zinc-700"
      />

      {isOpen ? (
        <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <ul className="absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8">
            {!isAuth ? (
              <>
                <li>
                  <Link onClick={() => closeOnCurrent('/sign-up')} className="flex items-center w-full font-semibold text-green-500" href="/api/auth/register">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </li>
                <li className="my-3 h-px w-full bg-gray-300"/>
                <li>
                  <Link onClick={() => closeOnCurrent('/sign-in')} className="flex items-center w-full font-semibold " href="/api/auth/login">
                    Sign In 
                  </Link>
                </li>
                <li className="my-3 h-px w-full bg-gray-300"/>
                <li>
                  <Link onClick={() => closeOnCurrent('/pricing')} className="flex items-center w-full font-semibold " href="/pricing">
                    Pricing 
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link onClick={() => closeOnCurrent('/dashboard')} className="flex items-center w-full font-semibold " href="/dashboard">
                    Dashboard 
                  </Link>
                </li>
                <li className="my-3 h-px w-full bg-gray-300"/>
                <li>
                  <Link className="flex items-center w-full font-semibold " href="/api/auth/logout">
                    <LogOutIcon className="text-blue-600 h-4 w-4 mr-1.5"/>Sign out
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
