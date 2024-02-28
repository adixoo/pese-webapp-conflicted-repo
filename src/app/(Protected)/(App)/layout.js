import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { USER_SIGNED_OR_NOT_COOKIE_NAME } from "@/helpers/constant/cookies";

export default function ProtectUserSignedOrNot({ children }) {
   const cookieStore = cookies();

   // checking session exist or not
   const signed = cookieStore.get(USER_SIGNED_OR_NOT_COOKIE_NAME)?.value;

   if (signed === undefined || signed === "false") {
      redirect("/sign");
   }

   return <>{children}</>;
}
