"use client";

import { XMarkIcon, Bars2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { logoUrl } from "@/helpers/constant/variable";
import {
   openMobileNavbar,
   closeMobileNavbar,
} from "@/helpers/functions/mobileNavbarControl";
export function NavButtonMobileOpen() {
   return (
      <>
         <div className="lg:hidden flex items-center justify-between gap-2">
            <button
               onClick={openMobileNavbar}
               className="w-10 aspect-square rounded-lg  transition-colors bg-gray-50 hover:bg-gray-100 flex items-center justify-center"
            >
               <Bars2Icon className="h-7 w-7 text-gray-600" />
            </button>
            <Image
               alt="Pese logo"
               loading="lazy"
               className="h-28 w-auto"
               src={logoUrl}
               width={300}
               height={300}
            />
         </div>
      </>
   );
}

export function NavButtonMobileClose() {
   return (
      <>
         <div className="flex justify-end my-6 lg:hidden">
            <button
               onClick={closeMobileNavbar}
               className="w-9 aspect-square rounded-lg  transition-colors bg-gray-50 hover:bg-gray-100 flex items-center justify-center"
            >
               <XMarkIcon className="h-7 w-7 text-gray-700" />
            </button>
         </div>
      </>
   );
}
