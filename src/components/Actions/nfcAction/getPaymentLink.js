"use server";

import { nfcUsers } from "@/data/nfcusers/users";

import axios from "axios";
import { redirect } from "next/navigation";

export async function getPaymentLink(formData) {
   // ...
   // user id and amount
   const uuid = formData.get("x-hidden"); // user uuid
   const amount = formData.get("amount");

   if (!(uuid || amount)) return;

   const token = nfcUsers[uuid].token;
   // get payment link
   // then redirect user
   let data = {
      customer_mobile: "1234567890",
      user_token: token,
      amount: amount,
      order_id: `${generateRandomString(5)}-${generateRandomNumber(10)}-${generateRandomNumber(10)}`,
      redirect_url: "https://pesepg.in",
      remark1: "remark1",
      remark2: "remark2",
   };

   // Convert JavaScript object to x-www-form-urlencoded format
   let encodedData = new URLSearchParams(data).toString();
   let redirectUrl = "";
   try {
      const response = await axios({
         method: "post",
         url: "https://pesepg.in/api/create-order",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
         },
         data: encodedData,
      });

      if (!response.data?.result) {
         return;
      }
      redirectUrl = response.data.result.payment_url;
   } catch (error) {
      console.error(error);
   }
   redirect(redirectUrl);
}

function generateRandom(count, characters) {
   let c = count;
   var charactersLength = characters.length;
   var result = new Array(count);
   while (c--) {
      result[c] = characters.charAt(
         Math.floor(Math.random() * charactersLength)
      );
   }
   return result.join("");
}

const generateRandomString = (count) =>
   generateRandom(count, "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");

const generateRandomNumber = (count) => generateRandom(count, "0123456789");
