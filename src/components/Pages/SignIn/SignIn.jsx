// react
// import { useState } from "react";

//components
import {
   Footer,
   Heading,
} from "@/components/Components/AuthPageComponents/MiniComponents";
import ShadowBox from "@/components/Components/AuthPageComponents/ShadowBox";
import SignInForm from "./SignInForm";

// next components
import Image from "next/image";

// variables
import { logoUrl } from "@/helpers/constant/variable";

export default function SignInPage() {
   return (
      <>
         <div className="w-full max-w-[28rem] mx-auto px-4">
            <Image
               src={logoUrl}
               alt="Pese logo"
               className="mx-auto h-36 md:h-48 w-auto"
               loading="lazy"
               width={300}
               height={300}
            />
            <ShadowBox>
               <Heading name={"You're not registered"} />
               <Heading name={"Sign up"} />
               <SignInForm />
               <Footer />
            </ShadowBox>
         </div>
      </>
   );
}
