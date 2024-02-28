"use client";

// actions
import { requestOtpAction } from "@/components/Actions/requestOtpActions";

// icons
import { PhoneIcon } from "@heroicons/react/24/outline";

// react components

// next components
import Link from "next/link";

// components
import ShadowBox from "@/components/Components/AuthPageComponents/ShadowBox";
import { Heading } from "@/components/Components/AuthPageComponents/MiniComponents";
import { Footer } from "@/components/Components/AuthPageComponents/MiniComponents";
import { ElevatedButtonControlled } from "@/components/Components/Common/Button";
import { InputModelOne } from "@/components/Components/AuthPageComponents/Input";

// loader
import ButtonLoader from "@/components/Components/Loaders/ButtonLoader";

// stores - global state
import useStore from "@/store/otpStore";

import { useFormStatus, useFormState } from "react-dom";

export default function OtpSendPage() {
   // otp form
   const [state, requestOtp] = useFormState(requestOtpAction, {
      type: "",
      message: "",
   });

   // store

   return (
      <>
         <ShadowBox>
            <Heading name={"Enter your Phone Number"} />
            <form action={requestOtp} className="mt-10">
               <FormComponent state={state} />
            </form>
            <Footer />
         </ShadowBox>
         {/* link is here is just to prefetch /verify */}
         <Link className="hidden" href={"/verify"}></Link>
      </>
   );
}

function FormComponent({ state }) {
   const { pending } = useFormStatus();

   // store
   const currentNumber = useStore((state) => state.number);
   const changeNumber = useStore((state) => state.changeNumber);

   const handleClick = () => {
      const element = document.querySelector("#phone-input");
      changeNumber(element?.value);
   };
   return (
      <>
         <InputModelOne
            label={"Mobile Number"}
            id={"phone-input"}
            icon={<PhoneIcon />}
            placeholder={"93884XXXXX"}
            name="number"
            state={pending ? "" : state.type}
            message={pending ? "" : state.message}
            defaultValue={currentNumber}
            type={"tel"}
         />
         <ElevatedButtonControlled
            className="w-full mt-8"
            title={"Click to get OTP"}
            type={"submit"}
            click={handleClick}
            disabled={pending}
            text={
               pending ? (
                  <>
                     <ButtonLoader text={"Requesting..."} />
                  </>
               ) : (
                  "Get OTP"
               )
            }
         />
      </>
   );
}

// When user submit the form `handleSubmit` function runs
//
// 1. First check get the user input
// 2. validate the number
// 3. if number is valid set form status to default to show no message
// 4. Set state to otp is requesting `setIsRequestingOtp(true);` and Call api function `requestOtp`
// 5. If otp requested successful then set global state of number `changeNumber(number);` and the redirect the page to `/verify`
// 6. If number is not valid then set form status to error
