"use client";

export function InputModelOne({
   label,
   id,
   placeholder,
   defaultValue,
   type,
   icon,
   value,
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
               <label htmlFor={id} className="text-gray-500 text-sm leading-8">
                  {label}
               </label>
            )}
            <div className="relative h-10">
               {icon && (
                  <span className="absolute inset-y-0 left-4 my-auto h-5 w-5 text-gray-400">
                     {icon}
                  </span>
               )}
               <input
                  required
                  disabled={disabled ? true : false}
                  type={type ? type : "text"}
                  id={id}
                  defaultValue={defaultValue ? defaultValue : undefined}
                  placeholder={placeholder ? placeholder : ""}
                  name={name && name}
                  className="w-full rounded-full border bg-transparent py-2 pl-12 pr-3 text-gray-500 outline-none"
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
