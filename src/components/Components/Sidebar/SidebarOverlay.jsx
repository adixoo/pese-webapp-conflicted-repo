"use client";

import { closeMobileNavbar } from "@/helpers/functions/mobileNavbarControl";
export default function SidebarOverlay({ user }) {
   return (
      <>
         <div
            mode="close"
            className="sidebar-overlay fixed z-10 inset-0 bg-black transition-colors lg:hidden"
            onClick={closeMobileNavbar}
         ></div>
      </>
   );
}
