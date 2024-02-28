import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
export default function NotFoundPage() {
   return (
      <>
         <div className="min-h-[50rem] h-screen flex items-center flex-col justify-center">
            <Image
               src={"/assets/img/notfound.svg"}
               width={500}
               height={500}
               className="mx-auto"
               alt="not found image"
            />
            <h1 className="text-center font-semibold text-gray-600 text-3xl md:text-5xl mt-10">
               What you&apos;re doing here?
            </h1>
            <Link
               className="bg-primary bg-primary-hover px-8 py-2.5 text-white rounded-full font-medium mt-10 flex items-center gap-2 transition-colors"
               href={"/services"}
            >
               Get Back
               <ArrowRightIcon className="w-5 h-5 peer-hover:translate-x-4" />
            </Link>
         </div>
      </>
   );
}
