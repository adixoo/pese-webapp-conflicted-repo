// next components
import Image from "next/image";

// variables
import { logoUrl } from "@/helpers/constant/variable";

export default function OtpPageLayout({ children }) {
   return (
      <>
         <div className="flex flex-row h-screen container mx-auto">
            <div className="w-1/2 h-full hidden lg:flex items-center justify-center">
               <Image
                  src="/assets/img/img2.svg"
                  alt="payment image"
                  className="w-[30rem]"
                  loading="lazy"
                  width={500}
                  height={500}
               />
            </div>
            <div className="w-full lg:w-1/2 h-full flex items-center -translate-y-12">
               <div className="w-full max-w-[28rem] mx-auto px-4">
                  <Image
                     src={logoUrl}
                     alt="Pese logo"
                     className="mx-auto h-36 md:h-48 w-auto"
                     loading="lazy"
                     width={500}
                     height={500}
                  />
                  {children}
               </div>
            </div>
         </div>
      </>
   );
}
