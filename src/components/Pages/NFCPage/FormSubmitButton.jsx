import { ElevatedButtonControlled } from "@/components/Components/Common/Button";

import { useFormStatus } from "react-dom";

// import s from "@/css/loader.module.css";
import ButtonLoader from "@/components/Components/Loaders/ButtonLoader";

export default function FormSubmitButton({ amount }) {
   const formatAmount = (num) => {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
   };
   const noAmountEntered = amount === "";

   const { pending } = useFormStatus();
   return (
      <>
         <ElevatedButtonControlled
            type={"submit"}
            // text={`Pay ${disabled ? "Now" : "₹" + formatAmount(amount)}`}
            disabled={pending || noAmountEntered}
            className="w-full mt-10"
            text={
               pending ? (
                  <Loader />
               ) : noAmountEntered ? (
                  "Pay now"
               ) : (
                  "Pay ₹" + formatAmount(amount)
               )
            }
            title={"Click to pay"}
         />
      </>
   );
}

function Loader() {
   return (
      // <div className={`${s.container} mx-auto`}>
      //    <div className="dot" />
      // </div>
      <ButtonLoader text={""} />
   );
}

// amountEntered ? "Pay Rs amount" : "pay now";

// pending ? "loader":

//
// <style>
//
// </style>
