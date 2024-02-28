export default function RupeeTag({ value, negative }) {
   return (
      <>
         <div className="bg-slate-100 px-2 py-0.5 rounded-full w-max font-semibold text-gray-800 text-sm">
            {negative ? "-" : ""} &#8377; {value}
         </div>
      </>
   );
}
