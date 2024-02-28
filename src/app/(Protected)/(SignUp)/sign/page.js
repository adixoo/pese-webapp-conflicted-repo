import SignInPage from "@/components/Pages/SignIn/SignIn";
import { redirect } from "next/navigation";

import { cookies } from "next/headers";
import { USER_SIGNED_OR_NOT_COOKIE_NAME } from "@/helpers/constant/cookies";

export const metadata = {
   title: "Sign up on Pese",
};

export default function SignIn() {
   const cookieStore = cookies();
   const userSigned = cookieStore.get(USER_SIGNED_OR_NOT_COOKIE_NAME)?.value; // user is signing first time or not

   if (!userSigned) {
      redirect("/otp");
   }
   if (userSigned === "true") {
      redirect("/services");
   }
   return (
      <>
         <SignInPage />
      </>
   );
}
