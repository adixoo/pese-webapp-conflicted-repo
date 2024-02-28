// function to request new otp from supabase
// used in OTP.jsx

// import { supabase } from "@/utils/supabase";
import axios from "axios";
// import Cookies from "js-cookie";
export async function requestOtp(number) {
   const url =
      "https://pnluyz9cc1.execute-api.ap-south-1.amazonaws.com/v1/otp_send"; // replace with your URL
   const data = {
      number: number,
   };
   const headers = {
      "Content-Type": "application/json", // replace with your headers
   };

   try {
      const response = await axios.post(url, data, { headers });
      // console.log("Response: ", response.data);
      if (response.data.status === "success") {
         localStorage.setItem("user_site", response.data.session);
         return [true, "success"];
      } else {
         return [false, "failed"];
      }
   } catch (err) {
      // console.log("Error: ", err);
      return [false, "ERR_NETWORK"];
   }
}
