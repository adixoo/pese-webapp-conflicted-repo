import {
   ListBulletIcon,
   CheckBadgeIcon,
   Cog6ToothIcon,
   UserPlusIcon,
   PresentationChartLineIcon,
   LightBulbIcon,
   ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { EnvelopeIcon, BellIcon } from "@heroicons/react/24/solid";

// next components
import Image from "next/image";
// import components
import { SidebarItems, SidebarLogout } from "./SidebarItems";

// variables
import { logoUrl } from "@/helpers/constant/variable";
import { NavButtonMobileClose } from "../Common/NavbuttonMobile";
import SidebarOverlay from "./SidebarOverlay";

export default function Sidebar({ user }) {
   return (
      <>
         <aside
            mode="close"
            className="sidebar-main fixed lg:relative pt-8 lg:pt-0 rounded-e-xl lg:rounded-e-none transition-transform z-20 lg:z-0 min-h-screen min-w-[80%] sm:min-w-[20rem] lg:border-r bg-white border-slate-200 lg:px-7 px-4"
         >
            <Image
               alt="Pese logo"
               loading="lazy"
               className="h-36 w-auto hidden lg:inline"
               src={logoUrl}
               width={300}
               height={300}
            />
            <div className="flex items-center rounded-lg cursor-pointer p-3 mx-2">
               <Image
                  alt={`${user.fullName} profile picture`}
                  loading="lazy"
                  className="-ml-6 aspect-square w-16 rounded-2xl object-cover"
                  src="/assets/img/user.webp"
                  width={200}
                  height={200}
               />
               <div className="pl-4">
                  <div className="font-medium text-gray-700">
                     {user.fullName}
                  </div>
                  <div className="text-sm text-gray-500">Admin Account</div>
                  <span className="flex items-center gap-2 mt-1">
                     <button
                        title="Your emails"
                        className="text-primary cursor-pointer badge"
                     >
                        <span className="sr-only">email icon</span>
                        <EnvelopeIcon className="w-5 h-5" />
                     </button>
                     <button
                        badge="show"
                        title="Your notifications"
                        className="text-primary cursor-pointer badge"
                     >
                        <span className="sr-only">notification icon</span>
                        <BellIcon className="w-5 h-5" />
                     </button>
                  </span>
               </div>
            </div>
            <nav className="mt-10">
               <ul className="space-y-3 lg:p-5">
                  {/* <!-- sidebar-active class used for active styling and sidebar-inactive classes are used for inactive styling --> */}
                  <SidebarItems
                     active={true}
                     icon={<PresentationChartLineIcon />}
                     name={"Services"}
                     href={"/services"}
                  />
                  <SidebarItems
                     active={true}
                     name={"Transactions"}
                     icon={<ListBulletIcon />}
                     href={"/transactions"}
                  />
                  <SidebarItems
                     active={true}
                     icon={<LightBulbIcon />}
                     name={"Customer Support"}
                  />
                  <SidebarItems
                     active={false}
                     icon={<Cog6ToothIcon />}
                     name={"Settings"}
                     href={"/account"}
                  />
                  <SidebarItems
                     active={false}
                     icon={<CheckBadgeIcon />}
                     name={"Offers"}
                  />
                  <SidebarItems
                     active={false}
                     icon={<UserPlusIcon />}
                     name={"Invite Friends"}
                  />
                  <SidebarLogout />
               </ul>
            </nav>
         </aside>
         <SidebarOverlay user={user} />
      </>
   );
}
