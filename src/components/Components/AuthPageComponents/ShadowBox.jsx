export default function ShadowBox({ children }) {
   return (
      <>
         <div className="shadow-box mt-5 w-full md:px-8 md:py-12 sm:px-6 px-4 py-10 rounded-3xl">
            {children}
         </div>
      </>
   );
}
