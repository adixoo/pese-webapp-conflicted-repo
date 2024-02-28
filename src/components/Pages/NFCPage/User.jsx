import { logoUrl } from "@/helpers/constant/variable";
import Image from "next/image";
import PayForm from "./PayForm";

export default function NFCUser({ name, uuid }) {
   return (
      <>
         <div className="w-full h-screen  flex items-center justify-center bg-white sm:bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600">
            <div className="w-full max-w-[28rem] bg-white rounded-3xl p-6">
               <Image
                  src={logoUrl}
                  width={300}
                  height={300}
                  className="h-28 w-auto mx-auto mb-6"
               />
               <div className="mb-6">
                  <div className="font-bold text-gray-700">Paying to</div>
                  <div className="font-medium text-gray-500">{name}</div>
               </div>
               <PayForm uuid={uuid} name={name} />
            </div>
         </div>
      </>
   );
}
