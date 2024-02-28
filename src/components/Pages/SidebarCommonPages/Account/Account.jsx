"use client";

import Heading from "@/components/Components/Common/Heading";
import UserPicture from "./UserPicture";
import { InputModelOne } from "@/components/Components/AuthPageComponents/Input";
import {
   ElevatedButtonControlled,
   OutlinedButtonControlled,
} from "@/components/Components/Common/Button";

// icons
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function AccountPage({ user }) {
   return (
      <>
         <Heading
            title={"Your Account"}
            description={"Please enter your details"}
         />
         <UserPicture />
         <InputModelOne
            label={"Full Name"}
            id="full-name"
            icon={<UserIcon />}
            placeholder={"Sanskriti Jain"}
            defaultValue={user.fullName}
         />
         <InputModelOne
            label={"Phone"}
            id="phone-number"
            icon={<PhoneIcon />}
            placeholder={"85422XXXXX"}
            className="mt-3"
            defaultValue={user.phone}
         />
         <div className="flex items-end gap-2 flex-col sm:flex-row">
            <InputModelOne
               label={"Email"}
               id="email"
               icon={<EnvelopeIcon />}
               placeholder={"your@email.com"}
               className="mt-3 w-full"
               defaultValue={user.email}
            />
            <OutlinedButtonControlled
               title={"Verify your email"}
               text="Verify"
               badge={!user.emailVerified}
               className="sm:w-max w-full sm:mt-0 mt-1"
               disabled={user.emailVerified}
            />
         </div>
         <ElevatedButtonControlled
            title={"Save details"}
            text="Save"
            className="w-full mt-10"
         />
      </>
   );
}
