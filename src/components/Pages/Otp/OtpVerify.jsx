"use client";

// icons
import { PhoneIcon } from "@heroicons/react/24/outline";

// next
import Link from "next/link";

// actions
import { verifyOtpAction } from "@/components/Actions/otpVerifyAction";

// react
import { useFormState } from "react-dom";

// components
import ShadowBox from "@/components/Components/AuthPageComponents/ShadowBox";
import {
   Footer,
   Heading,
} from "@/components/Components/AuthPageComponents/MiniComponents";
import VerifyFormComponent from "./Verify/VerifyFormComponent";
import { InputModelOne } from "@/components/Components/AuthPageComponents/Input";

// store
import useStore from "@/store/otpStore";

// checkers
import CheckUserRequestedOtp from "./CheckIsUserRequestedOtp";

export default function OtpVerify() {
   // form status
   const [state, verifyOtp] = useFormState(verifyOtpAction, {
      type: "normal",
      message: "",
   });

   //store
   const currentNumber = useStore((state) => state.number);

   return (
      <>
         <ShadowBox>
            <Heading name={"We have send you a code"} />
            <form action={verifyOtp} className="mt-10">
               <InputModelOne
                  icon={<PhoneIcon />}
                  defaultValue={currentNumber}
                  disabled
               />
               <div className="flex justify-end mt-1">
                  <Link
                     href={"/otp"}
                     className="text-primary text-xs font-medium"
                  >
                     Change Number
                  </Link>
               </div>
               <VerifyFormComponent state={state} />
               <Footer />
            </form>
         </ShadowBox>
         {/* component that check the user is already request otp or not */}
         <CheckUserRequestedOtp />
      </>
   );
}
