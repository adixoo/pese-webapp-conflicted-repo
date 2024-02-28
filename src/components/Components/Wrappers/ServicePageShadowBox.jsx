export default function ServicePageShadowBox({ children, heading }) {
   return (
      <>
         <div className="shadow-xl max-w-[25rem] w-full bg-white shadow-gray-200 rounded-3xl px-4 md:px-8 py-10">
            <h2 className="text-center font-semibold text-gray-800 text-lg">
               {heading}
            </h2>
            {children}
         </div>
      </>
   );
}
