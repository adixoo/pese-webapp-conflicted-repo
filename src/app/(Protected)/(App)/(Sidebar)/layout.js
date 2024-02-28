import SidebarLayoutComponent from "@/components/Layouts/SidebarLayout/SidebarLayout";

import { getUserDetails } from "@/helpers/apiCallFunctions/userDetails";
import { SESSION_ID_COOKIE_NAME } from "@/helpers/constant/cookies";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

export default async function SidebarLayout({ children }) {
   const cookieStore = cookies();
   const session = cookieStore.get(SESSION_ID_COOKIE_NAME)?.value;
   const user = await getUserDetails(session);
   if (!user) {
      // check user session is expired or not
      // if expired then redirect to sign in page
      // else redirect to sign up page
      // const expireTime = cookieStore.get(expireTimeCookie)?.value;
      // if (!expireTime) notFound();
      // const time = new Date(expireTime);
      redirect("/otp");
   }
   return (
      <>
         <SidebarLayoutComponent user={user}>{children}</SidebarLayoutComponent>
      </>
   );
}
