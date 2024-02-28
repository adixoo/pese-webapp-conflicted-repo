"use server";

import axios from "axios";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import {
   normalCookies,
   SESSION_ID_COOKIE_NAME,
   USER_SIGNED_OR_NOT_COOKIE_NAME,
} from "@/helpers/constant/cookies";
export async function signUpAction(prevState, formData) {
   const fullName = formData.get("full-name");
   const email = formData.get("email");
   // console.log("🚀 ~ signUpAction ~ email:", email);

   const validatedEmail = validateEmail(email);
   const validatedName = validateName(fullName);
   const sessionId = cookies().get(SESSION_ID_COOKIE_NAME)?.value;

   if (!validatedEmail) {
      return {
         type: "error",
         on: "email",
         message: "Hmm, Your email is incorrect!",
      };
   }
   if (!validatedName) {
      return {
         type: "error",
         on: "name",
         message: "Correct your name",
      };
   }
   if (!sessionId) {
      redirect("/otp");
   }

   //
   const url =
      "https://8bp1qfqj6l.execute-api.ap-south-1.amazonaws.com/v1/web/sign-up";

   const data = {
      email: email,
      fullname: fullName,
   };
   const headers = {
      "Content-Type": "application/json",
      User: sessionId,
   };

   try {
      const response = await axios.post(url, data, { headers });
      // console.log(response.data);
      if (response.data.status === "failed") {
         return {
            type: "error",
            on: "name",
            message: "Please try again!",
         };
      }
   } catch (err) {
      console.log(err);
      return {
         type: "error",
         on: "name",
         message: "Please try again!",
      };
   }
   cookies().set(USER_SIGNED_OR_NOT_COOKIE_NAME, "true", { ...normalCookies });
   redirect("/services");
}

function validateName(name) {
   if (!name) return false;
   return true;
}
function validateEmail(email) {
   if (!email) return false;
   return true;
}
