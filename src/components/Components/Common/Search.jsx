import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search({ id, name, placeholder }) {
   return (
      <>
         <div className="relative mt-10">
            <span className="absolute inset-y-0 left-4 my-auto h-6 w-6 text-gray-400">
               <MagnifyingGlassIcon />
            </span>
            <input
               type="search"
               id={id}
               name={name}
               placeholder={placeholder}
               className="w-full rounded-full md:text-base text-sm border border-gray-200 bg-transparent py-3 pl-14 pr-3 md:py-4 text-gray-500 outline-none input-focus-state"
            />
         </div>
      </>
   );
}
