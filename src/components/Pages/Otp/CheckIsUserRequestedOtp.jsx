// this components is made to check that user previously requested otp or not

import { useEffect } from "react";

// store

import useStore from "@/store/otpStore";

//next
import { useRouter } from "next/navigation";

export default function CheckUserRequestedOtp() {
   const currentNumber = useStore((state) => state.number);

   const router = useRouter();

   useEffect(() => {
      if (currentNumber.length < 10) {
         router.push("/otp");
      }
   }, []);
   return <></>;
}
