// icons

// components
import { ElevatedButtonControlled } from "@/components/Components/Common/Button";
import ButtonLoader from "@/components/Components/Loaders/ButtonLoader";

// react components
import { useFormStatus } from "react-dom";
import ResendOtp from "./ResendOtp";

export default function VerifyFormComponent({ state }) {
   // form status

   const { pending } = useFormStatus();

   const handleInput = (e) => {
      if (e.target.value) {
         const i = parseInt(e.target.getAttribute("data-index"));
         if (i === 5) return;

         const nextElem = document.querySelector(
            `#otp input[data-index="${i + 1}"]`
         );
         if (!nextElem) return;
         nextElem.focus();
      }
   };
   const handleKeyDown = (e) => {
      const i = parseInt(e.target.getAttribute("data-index"));

      if (!e.target.value && e.key === "Backspace" && i) {
         const prevElem = document.querySelector(
            `#otp input[data-index="${i - 1}"]`
         );
         if (!prevElem) return;
         prevElem.focus();
      }
   };
   const handlePaste = (e) => {
      const clip = e.clipboardData.getData("text").trim();
      if (!/\d{6}/.test(clip)) return e.preventDefault();

      const s = [...clip];
      const inputs = document.querySelectorAll("#otp input");
      s.map((v, index) => {
         return (inputs[index].value = v);
      });
      inputs[inputs.length - 1].focus();
   };
   return (
      <>
         <div
            state={pending ? "" : state?.type}
            className="mt-4 input-keyboard"
         >
            <div className="text-center font-medium text-sm text-gray-600 mb-4">
               Enter 6 digit OTP
            </div>
            <div id="otp" className="flex mb-2 space-x-2 w-max mx-auto">
               {[...Array(6)].map((_, i) => {
                  return (
                     <OtpInputBox
                        key={i}
                        sequence={i}
                        onPaste={handlePaste}
                        onInput={handleInput}
                        onKeyDown={handleKeyDown}
                     />
                  );
               })}
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

function OtpInputBox({ sequence, ...props }) {
   return (
      <>
         <input
            type="tel"
            maxLength="1"
            id={`code${sequence}`}
            name={`code${sequence}`}
            className="block w-10 h-10 py-3 text-center text-gray-700 bg-white border border-gray-200 rounded-xl"
            required
            autoComplete="off"
            data-index={sequence}
            {...props}
         />
      </>
   );
}
