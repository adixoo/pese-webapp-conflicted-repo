export const getOtpFromInput = () => {
   const otpElem = document.querySelectorAll("#otp input");
   let otp = "";

   if (otpElem.length === 6) {
      otpElem.forEach((elem) => {
         otp += elem.value;
      });
      return otp;
   }
   return false;
};
