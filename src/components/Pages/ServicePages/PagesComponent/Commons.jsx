"use client";

export default function ListItem({ click }) {
   return (
      <>
         <li className="py-3 sm:py-4">
            <button onClick={click} className="flex items-center">
               <span className="flex-shrink-0">
                  <div className="w-7 h-7 rounded-full bg-slate-200"></div>
               </span>
               <span className="flex-1 min-w-0 ms-4">
                  <span className=" font-medium text-gray-600 line-clamp-1">
                     Madyanchal Vidhyut Nigam ltd.
                  </span>
               </span>
            </button>
         </li>
      </>
   );
}
