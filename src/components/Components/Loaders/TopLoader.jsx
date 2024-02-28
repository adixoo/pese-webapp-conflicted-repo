import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
   return (
      <>
         <NextTopLoader
            showSpinner={false}
            color="#1668e3"
            zIndex={50}
            height={4}
         />
      </>
   );
}
