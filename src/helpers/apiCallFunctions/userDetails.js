import axios from "axios";

export async function getUserDetails(session) {
   // get user full name, email, phone, and after some time profile picture

   const url =
      "https://bqzc8n721g.execute-api.ap-south-1.amazonaws.com/v1/web/get-user";

   const headers = {
      User: session,
   };
   try {
      const response = await axios.get(url, { headers });
      if (response.data.status === "success") {
         return response.data.user;
      }
   } catch (err) {
      return false;
   }
   return false;
}
