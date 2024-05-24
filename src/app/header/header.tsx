"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EyeIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Button } from "@/components/ui/button";
import "./styles.css";

const navLinks = [
  {
    name: "Create",
    href: "/create",
  },
  {
    name: "Connect",
    href: "/connect",
  },
  {
    name: "Share",
    href: "/share",
  },
  {
    name: "Results",
    href: "/results",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="border-b bg-[#FCFDFE]">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <span className="text-gray-500">My Workspace</span>
          <span className="text-gray-500">/</span>
          <span className="text-black">My new form</span>
        </div>
        <div className="flex items-center gap-2">
          {navLinks.map((elem) => {
            const isActive = pathname.startsWith(elem.href);
            return (
              <Link
                href={elem.href}
                key={elem.name}
                className={`${
                  isActive
                    ? "font-bold border-b-4 border-black border-l-gray-100 border-l-[1px] border-r-gray-100 border-r-[1px]"
                    : "text-gray-500"
                } h-14 flex items-center px-4 `}
              >
                {elem.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <div className="border-[1px] border-[#EFF2F7] rounded-[4px] p-2">
            <EyeIcon className="h-6 w-6 text-black " />
          </div>
          <div>
            <Button>Publish</Button>
          </div>
          <div className="bg-[#F1F5F9] rounded-full p-3">
            <UserCircleIcon className="h-6 w-6 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
