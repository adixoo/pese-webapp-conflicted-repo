import { PencilIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
export default function UserPicture() {
   return (
      <div className="my-10">
         <div className="relative h-max w-max">
            <Image
               alt="User"
               loading="lazy"
               className="aspect-square w-60 rounded-3xl object-cover"
               src="/assets/img/user.webp"
               width={600}
               height={600}
               draggable={false}
            />
            <button
               type="button"
               title="Change profile picture"
               className="absolute -right-3 bottom-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary transition-colors bg-primary-hover"
            >
               <PencilIcon className="w-5 h-5 text-white" />
            </button>
         </div>
      </div>
   );
}
