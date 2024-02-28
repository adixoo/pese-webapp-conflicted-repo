import Image from "next/image";
import { logoUrl } from "@/helpers/constant/variable";

export default function TopNavbar({ heading }) {
   return (
      <>
         <div className="container px-4 flex flex-row items-center justify-between mx-auto">
            <div className="flex items-center flex-row gap-10">
               <Image
                  src={logoUrl}
                  alt="Pese logo"
                  className="h-32"
                  width={200}
                  height={200}
               />
               <h1 className="text-4xl text-gray-800">{heading}</h1>
            </div>
            <Profile />
         </div>
      </>
   );
}
function Profile() {
   return (
      <div className="flex items-center rounded-lg  p-3 mx-2">
         <Image
            alt="user logo"
            loading="lazy"
            className="-ml-6 aspect-square w-12 rounded-2xl object-cover"
            src="/assets/img/user.webp"
            width={100}
            height={100}
         />
         <div className="pl-4">
            <div className="font-medium text-gray-700 text-sm">
               Sanskriti Jain
            </div>
            <div className="text-xs text-gray-500">Admin Account</div>
         </div>
      </div>
   );
}
