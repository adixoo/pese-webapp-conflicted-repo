import OtpVerify from "@/components/Pages/Otp/OtpVerify";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { OTP_SESSION_COOKIE_NAME } from "@/helpers/constant/cookies";
export default function Verify() {
   const cookieStore = cookies();
   // if otp is not requested then go to otp page
   const otpSession = cookieStore.has(OTP_SESSION_COOKIE_NAME);
   if (!otpSession) redirect("/otp");
   return (
      <>
         <OtpVerify />
      </>
   );
}
