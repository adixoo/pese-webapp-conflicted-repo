// function to match otp
// user in otpVerify.jsx
import axios from "axios";
import Cookies from "js-cookie";

export const verifyOtp = async (userOtp, router) => {
   //    Cookies.set("pk", "hdhfhdhfhh");
   //    Cookies.set("tm", "ex");
   //
   //    return true;
   const url =
      "https://pnluyz9cc1.execute-api.ap-south-1.amazonaws.com/v1/otp_verify"; // replace with your URL
   const data = {
      session: localStorage.getItem("user_site"),
      code: userOtp,
   };
   const headers = {
      "Content-Type": "application/json", // replace with your headers
   };

   try {
      const response = await axios.post(url, data, { headers });
      // console.log(response.data);
      if (response.data.status === "success") {
         localStorage.removeItem("user_site");
         Cookies.set("pk", response.data.uuid, { expires: 1 });
         if (response.data.message === "user_exist") {
            Cookies.set("tm", "ex", { expires: 1 });
            router.push("/services");
            // redirect to services page
         } else {
            Cookies.set("tm", "ft", { expires: 1 });
            router.push("/sign");
            // redirect to sign up page
         }
         return true;
      } else {
         return false;
      }
   } catch (err) {
      return false;
   }
};
