"use server";
import { cookies } from "next/headers";
export async function resendOtpAction(number) {
   // otp requested too many times

   const validated = number;
   if (!validated) return {};

   const url =
      "https://wv8x9z9f3k.execute-api.ap-south-1.amazonaws.com/v1/web/otp-send";

   const headers = {
      "Content-Type": "application/json", // replace with your headers
   };
   const data = {
      number: number,
   };
   let session = "";
   try {
      const response = await axios.post(url, data, { headers });
      // console.log("Response: ", response.data);
      if (response.data.status === "success") {
         session = response.data.session;
      } else {
         return {
            message: "multiple",
         };
      }
   } catch (err) {
      return {
         message: "error",
      };
   }
   cookies().set(OTP_SESSION_COOKIE_NAME, session, {
      maxAge: 600, // 10 minutes
   });
}
