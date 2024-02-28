// Home page just respond a static html which is just a preloader
// when preloader respond as static html then a client side component is fetched which just loads useEffect hook
// useEffect checks the user is authenticated or not
// if authenticated : go to /verify
// else:   go to /services or default page

import HomePage from "@/components/Pages/Home/Home";
import { redirect } from "next/navigation";

import { cookies } from "next/headers";
import { SESSION_ID_COOKIE_NAME } from "@/helpers/constant/cookies";

export default function Home() {
   const cookieStore = cookies();
   // server session
   const session = cookieStore.has(SESSION_ID_COOKIE_NAME);

   if (session) {
      redirect("/services");
   }
   return (
      <>
         <HomePage />
      </>
   );
}
