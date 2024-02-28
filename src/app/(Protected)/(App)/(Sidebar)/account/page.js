import AccountPage from "@/components/Pages/SidebarCommonPages/Account/Account";

import { getUserDetails } from "@/helpers/apiCallFunctions/userDetails";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SESSION_ID_COOKIE_NAME } from "@/helpers/constant/cookies";

export default async function Account() {
   const cookieStore = cookies();
   const session = cookieStore.get(SESSION_ID_COOKIE_NAME);
   const user = await getUserDetails(session.value);
   if (!user) redirect("/otp");
   return (
      <>
         <AccountPage user={user} />
      </>
   );
}
