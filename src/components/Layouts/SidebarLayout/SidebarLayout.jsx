import { NavButtonMobileOpen } from "@/components/Components/Common/NavbuttonMobile";
import Sidebar from "@/components/Components/Sidebar/Sidebar";

export default function SidebarLayoutComponent({ children, ...props }) {
   return (
      <>
         <div className="flex flex-row">
            <Sidebar {...props} />
            <main className="w-full max-w-5xl lg:pl-20 px-4 pb-6">
               <NavButtonMobileOpen />

               {children}
            </main>
         </div>
      </>
   );
}
