// icons

// components
import { ElevatedButtonControlled } from "@/components/Components/Common/Button";
import ButtonLoader from "@/components/Components/Loaders/ButtonLoader";

// react components
import { useFormStatus } from "react-dom";
// import ResendOtp from "./ResendOtp";

import dynamic from "next/dynamic";
const ResendOtp = dynamic(() => import("./ResendOtp"), {
   ssr: false,
});

export default function VerifyFormComponent({ state }) {
   // form status

   const { pending } = useFormStatus();

   return (
      <>
         <div
            state={pending ? "" : state?.type}
            className="mt-4 input-keyboard"
         >
            <div className="text-center font-medium text-sm text-gray-600 mb-4">
               Enter 6 digit OTP
            </div>
            <div id="otp" className=" flex mb-2 space-x-2 w-max mx-auto">
               <OtpInputBox prev="code0" next="code1" id={"code0"} />
               <OtpInputBox prev="code0" next="code2" id={"code1"} />
               <OtpInputBox prev="code1" next="code3" id={"code2"} />
               <OtpInputBox prev="code2" next="code4" id={"code3"} />
               <OtpInputBox prev="code3" next="code5" id={"code4"} />
               <OtpInputBox prev="code4" next="code5" id={"code5"} />
            </div>
            <div className="text-xs mt-1">
               <div className="error text-center">
                  {pending ? "" : state?.message}
               </div>
            </div>

            <div className="flex justify-end">
               <ResendOtp />
            </div>
         </div>

         <ElevatedButtonControlled
            className="w-full mt-8"
            title={"Verify OTP"}
            type={"submit"}
            disabled={pending}
            text={
               pending ? (
                  <>
                     <ButtonLoader text={"Verifying..."} />
                  </>
               ) : (
                  "Continue"
               )
            }
         />
      </>
   );
}

function OtpInputBox({ id, prev, next }) {
   const handleKeyUp = (e) => {
      focusNextInput(e.target, prev, next);
   };
   return (
      <>
         <input
            type="text"
            maxLength="1"
            onKeyUp={handleKeyUp}
            id={id}
            name={id}
            className="block w-10 h-10 py-3 text-center text-gray-700 bg-white border border-gray-200 rounded-xl"
            required
            autoComplete="off"
         />
      </>
   );
}
function focusNextInput(el, prevId, nextId) {
   if (el.value.length === 0) {
      document.getElementById(prevId).focus();
   } else {
      document.getElementById(nextId).focus();
   }
}
