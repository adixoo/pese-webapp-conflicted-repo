"use server";

import axios from "axios";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import {
   normalCookies,
   OTP_SESSION_COOKIE_NAME,
   SESSION_ID_COOKIE_NAME,
   USER_SIGNED_OR_NOT_COOKIE_NAME,
} from "@/helpers/constant/cookies";

export async function verifyOtpAction(prevState, formData) {
   const otpSession = cookies().get(OTP_SESSION_COOKIE_NAME)?.value;
   if (!otpSession) redirect("/otp");
   const code0 = formData.get("code0");
   const code1 = formData.get("code1");
   const code2 = formData.get("code2");
   const code3 = formData.get("code3");
   const code4 = formData.get("code4");
   const code5 = formData.get("code5");
   const otp = code0 + code1 + code2 + code3 + code4 + code5;

   // validate otp
   const otpValidated = /^\d{6}$/.test(otp);
   if (!otpValidated) {
      return {
         type: "error",
         message: "Invalid OTP",
      };
   }
   const url =
      "https://wv8x9z9f3k.execute-api.ap-south-1.amazonaws.com/v1/web/otp-verify"; // replace with your URL

   const data = {
      session: otpSession,
      code: otp,
   };
   const headers = {
      "Content-Type": "application/json", // replace with your headers
   };

   let sessionId = "",
      userTime = "";
   try {
      const response = await axios.post(url, data, { headers });
      // console.log(response.data);
      if (response.data.status === "success") {
         sessionId = response.data.session;
         userTime = response.data.user;
      } else if (response.data.message === "expired") {
         return {
            type: "error",
            message: "Your OTP is expired now!",
         };
      } else {
         return {
            type: "error",
            message: "You entered wrong OTP!",
         };
      }
   } catch (err) {
      console.log(err);
      return {
         type: "error",
         message: "We got error. Please try again!",
      };
   }
   cookies().set(SESSION_ID_COOKIE_NAME, sessionId, { ...normalCookies });
   if (userTime === "exist") {
      cookies().set(USER_SIGNED_OR_NOT_COOKIE_NAME, "true", {
         ...normalCookies,
      });
      redirect("/services");
   }
   cookies().set(USER_SIGNED_OR_NOT_COOKIE_NAME, "false", { ...normalCookies });
   redirect("/sign");
}
