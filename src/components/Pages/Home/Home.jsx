// next components
import dynamic from "next/dynamic";

// components
import Preloader from "../../Components/Loaders/Preloader";
const AuthChecker = dynamic(() => import("./AuthChecker"), { ssr: false });

export default function HomePage() {
   return (
      <>
         <Preloader />
         <AuthChecker />
      </>
   );
}
