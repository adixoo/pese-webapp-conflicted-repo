"use client";

//components
import { InputModelOne } from "@/components/Components/AuthPageComponents/Input";
import { ElevatedButtonControlled } from "@/components/Components/Common/Button";
import ButtonLoader from "@/components/Components/Loaders/ButtonLoader";

// icons
import { UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

// server action
import { signUpAction } from "@/components/Actions/signUpAction";

// react
import { useFormStatus, useFormState } from "react-dom";

export default function SignInForm() {
   const [state, signup] = useFormState(signUpAction, {
      type: "",
      on: "", // can be "name" or "email"
      message: "",
   });
   return (
      <>
         <form action={signup} className="mt-10">
            <MainForm state={state} />
         </form>
      </>
   );
}

function MainForm({ state }) {
   const { pending } = useFormStatus();
   return (
      <>
         <InputModelOne
            label={"Full Name"}
            id="full-name"
            icon={<UserIcon />}
            name={"full-name"}
            placeholder={"Sanskriti Jain"}
            state={pending ? "" : state?.on === "name" ? state?.type : ""}
            message={pending ? "" : state?.on === "name" ? state?.message : ""}
         />
         <InputModelOne
            label={"Email"}
            id="email"
            type={"email"}
            icon={<EnvelopeIcon />}
            name={"email"}
            placeholder={"sanskriti@mail.com"}
            className="mt-3"
            state={pending ? "" : state?.on === "email" ? state?.type : ""}
            message={pending ? "" : state?.on === "email" ? state?.message : ""}
         />
         <ElevatedButtonControlled
            title={"Click to Sign Up"}
            type={"submit"}
            className="w-full mt-8"
            disabled={pending}
            text={
               pending ? (
                  <>
                     <ButtonLoader text={"Signin..."} />
                  </>
               ) : (
                  "Sign Up"
               )
            }
         />
      </>
   );
}
