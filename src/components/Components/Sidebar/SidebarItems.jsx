"use client";

// icons
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { closeMobileNavbar } from "@/helpers/functions/mobileNavbarControl";
// next components
import Link from "next/link";
import { usePathname } from "next/navigation";
export function SidebarItems({ icon, name, href }) {
   const pathname = usePathname();
   const active = pathname === href;
   return (
      <>
         <li>
            <Link
               href={href ? href : "#"}
               active={active ? "show" : "hide"}
               prefetch={false}
               className="flex sidebar items-center rounded-lg w-full font-medium py-2.5 px-5 gap-5"
               onClick={closeMobileNavbar}
            >
               <span className="w-5 h-5">{icon}</span>
               <span className="text-sm">{name}</span>
            </Link>
         </li>
      </>
   );
}
export function SidebarLogout({ href }) {
   return (
      <>
         <li>
            <Link
               href={href ? href : "/"}
               className="flex sidebar items-center text-danger hover:bg-[var(--danger-light)] rounded-lg w-full font-medium py-2.5 px-5 gap-5 transition-colors"
            >
               <span className="w-5 h-5">
                  <ArrowRightStartOnRectangleIcon />
               </span>
               <span className="text-sm">Log out</span>
            </Link>
         </li>
      </>
   );
}
