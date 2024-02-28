"use client";

import RupeeTag from "@/components/Components/Common/RupeeTag";

export function ServiceFormInput({
   label,
   id,
   placeholder,
   defaultValue,
   type,
   icon,
   disabled,
   state,
   message,
   className,
   name,
   // error,
   // success,
   // normal,
}) {
   return (
      <>
         <div
            state={state ? state : "normal"}
            className={`input-keyboard ${className ? className : ""}`}
         >
            {label && (
               <label
                  htmlFor={id}
                  className="text-gray-600 text-sm font-medium leading-8"
               >
                  {label}
               </label>
            )}
            <div className="relative h-10">
               <input
                  required
                  disabled={disabled ? true : false}
                  type={type ? type : "text"}
                  id={id}
                  defaultValue={defaultValue ? defaultValue : undefined}
                  placeholder={placeholder ? placeholder : ""}
                  name={name && name}
                  className="w-full rounded-full border bg-transparent py-2 px-6 text-gray-500 outline-none"
               />
            </div>
            {message ? (
               <div className="text-xs mt-1">
                  <div className="error">{message}</div>
                  <div className="success">{message}</div>
                  <div className="normal">{message}</div>
               </div>
            ) : (
               ""
            )}
         </div>
      </>
   );
}

export function PaymentFromPese() {
   return (
      <>
         <div className="flex items-center gap-3 mt-7">
            <input
               type="checkbox"
               name=""
               id="pay-check"
               className="checkbox"
            />

            <label
               htmlFor="pay-check"
               className="font-semibold text-sm text-gray-800"
            >
               Instant Payment from <span className="text-primary">PeSe</span>
            </label>
         </div>
      </>
   );
}

export function RadioInput() {
   return (
      <>
         <fieldset>
            <legend className="sr-only">Input radio</legend>
            <div className="flex justify-around">
               <Radio id={"test1"} label={"Prepaid"} />
               <Radio id={"test2"} label={"Postpaid"} />
            </div>
         </fieldset>
      </>
   );
}

function Radio({ id, label }) {
   return (
      <div className="flex items-center mb-6 mt-2">
         <input type="radio" name="radio-2" className="radio" id={id} />
         <label
            htmlFor={id}
            className="block ms-2 text-sm font-medium text-gray-900"
         >
            {label}
         </label>
      </div>
   );
}

export function PaymentSum({ value }) {
   return (
      <>
         <div className="flex flex-row justify-between py-6 text-gray-700 font-medium">
            <div>Price after discount</div>
            <RupeeTag value={value} />
         </div>
      </>
   );
}
