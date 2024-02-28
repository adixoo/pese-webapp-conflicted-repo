"use client";

import { resendOtpAction } from "@/components/Actions/resendOtpAction";

import { useState } from "react";

import { useTimer } from "react-timer-hook";
import useStore from "@/store/otpStore";

function expiryTime(seconds = 100) {
   const time = new Date();
   return time.setSeconds(time.getSeconds() + seconds);
}
const expiryTimestamp = expiryTime();

export default function ResendOtp() {
   const [resendAllowed, isResendAllowed] = useState(false);
   const [resending, setResending] = useState(false);
   const { totalSeconds, restart } = useTimer({
      expiryTimestamp,
      onExpire: () => {
         isResendAllowed(true);
      },
   });
   //    const { pending } = useFormStatus();

   const currentNumber = useStore((state) => state.number);

   const handleClick = async () => {
      isResendAllowed(false); //make button so user can't click
      setResending(true);
      try {
         const error = await resendOtpAction(currentNumber);
         setResending(false);
         if (error) {
            // otp send too many times
            restart(expiryTime(600));
            return;
         }
         restart(expiryTime());
      } catch (err) {
         console.log("Got error:", err);
      }
   };
   return (
      <>
         <button
            onClick={handleClick}
            className="text-sm font-medium text-primary disabled:text-gray-400 disabled:pointer-events-none"
            type="button"
            disabled={!resendAllowed || resending}
         >
            {resendAllowed ? (
               "Resend OTP"
            ) : resending ? (
               "Resending..."
            ) : (
               <>Resend in {totalSeconds}s</>
            )}
         </button>
      </>
   );
}
