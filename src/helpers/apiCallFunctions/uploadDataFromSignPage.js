// used in SignIn.jsx in page
// upload data to server
import axios from "axios";
import Cookies from "js-cookie";
export async function uploadDataFromSignPage(fullName, email, userId) {
   // api to update sign in data
   const url =
      "https://u3nv3xbrh1.execute-api.ap-south-1.amazonaws.com/v1/sign_up"; // replace with your URL
   const data = {
      email: email,
      full_name: fullName,
      uuid: userId,
   };
   const headers = {
      "Content-Type": "application/json", // replace with your headers
   };

   try {
      const response = await axios.post(url, data, { headers });
      // console.log(response.data);
      // return false;
      if (response.data.status === "success") {
         Cookies.set("tm", "ex", { expires: 1 });
         return true;
      }
      return false;
   } catch (err) {
      // console.log(err);

      return false;
   }
}
