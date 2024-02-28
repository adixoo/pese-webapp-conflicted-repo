import Image from "next/image";

// variables
import { logoUrl } from "@/helpers/constant/variable";
export default function Preloader() {
   return (
      <>
         <div className="h-screen w-screen flex items-center justify-center">
            <Image
               src={logoUrl}
               alt="Pese logo"
               className="h-36 sm:h-48 w-auto"
               width={500}
               height={500}
            />
         </div>
      </>
   );
}
