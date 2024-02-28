import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SESSION_ID_COOKIE_NAME } from "@/helpers/constant/cookies";

export default function CheckSessionLayout({ children }) {
   const cookieStore = cookies();

   // checking session exist or not
   const session = cookieStore.has(SESSION_ID_COOKIE_NAME);

   if (!session) {
      redirect("/otp");
   }

   return <>{children}</>;
}
