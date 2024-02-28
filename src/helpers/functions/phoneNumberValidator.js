export function validatePhoneNumber(number) {
   if (!number) return false;
   const regex = /^[6-9]\d{9}$/;
   return regex.test(number);
}
