"use client";

import { useState } from "react";

// server action

import { getPaymentLink } from "@/components/Actions/nfcAction/getPaymentLink";
import FormSubmitButton from "./FormSubmitButton";

export default function PayForm({ uuid }) {
   const [amount, setAmount] = useState("");
   const handleChange = (e) => {
      const value = e.target.value;
      if (value === "" || (!isNaN(parseFloat(value)) && isFinite(value))) {
         setAmount(value);
      }
   };

   return (
      <>
         <form
            action={getPaymentLink}
            className="flex flex-col justify-between"
         >
            <input type="hidden" name="x-hidden" value={uuid} />
            <div className="">
               <label
                  htmlFor="amount-input"
                  className="block text-gray-700 mb-2"
               >
                  Enter Amount
               </label>
               <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none font-bold text-2xl text-gray-600">
                     ₹
                  </div>
                  <input
                     type="tel"
                     className="text-2xl font-bold border-gray-100 border p-4 rounded-xl w-full pl-10 text-gray-700"
                     placeholder="0"
                     onChange={handleChange}
                     value={amount}
                     maxLength={6}
                     name="amount"
                  />
               </div>
            </div>
            <FormSubmitButton amount={amount} />
         </form>
      </>
   );
}
