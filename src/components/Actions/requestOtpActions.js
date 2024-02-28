"use server";

import axios from "axios";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { validatePhoneNumber } from "@/helpers/functions/phoneNumberValidator";
import { OTP_SESSION_COOKIE_NAME } from "@/helpers/constant/cookies";

export async function requestOtpAction(prevState, formData) {
   // Api is done and tested
   const number = Object.fromEntries(formData.entries())?.number;
   const validated = validatePhoneNumber(number);
   if (!validated) {
      return {
         type: "error",
         message: "Wait!, Your number is incorrect.",
      };
   }

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
            type: "error",
            message: "We send OTP too many times!",
         };
      }
   } catch (err) {
      return {
         type: "error",
         message: "We got error. Please try again!",
      };
   }
   // console.log(session);
   cookies().set(OTP_SESSION_COOKIE_NAME, session, {
      maxAge: 600,
   });
   redirect("/verify");
}
