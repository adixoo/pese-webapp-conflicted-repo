"use client";

import { useRef, useEffect } from "react";

function OTPInput() {
   const inputs = useRef([]);

   const handlePaste = (e) => {
      const clip = e.clipboardData.getData("text").trim();
      if (!/\d{6}/.test(clip)) return e.preventDefault();
      const s = [...clip];
      inputs.current.forEach((input, i) => {
         input.value = s[i];
      });
      inputs.current[5].focus();
   };

   const handleInput = (e, i) => {
      if (e.target.value) inputs.current[i + 1].focus();
   };

   const handleKeyDown = (e, i) => {
      if (!e.target.value && e.key === "Backspace" && i)
         inputs.current[i - 1].focus();
   };

   useEffect(() => {
      inputs.current[0].addEventListener("paste", handlePaste);
      return () => {
         inputs.current[0].removeEventListener("paste", handlePaste);
      };
   }, []);

   const renderInput = (i) => {
      return (
         <input
            key={i}
            ref={(ref) => (inputs.current[i] = ref)}
            className="ap-otp-input"
            type="tel"
            maxLength="1"
            onInput={(e) => handleInput(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
         />
      );
   };

   return (
      <div className="ap-otp-inputs">
         {[...Array(6)].map((_, i) => renderInput(i))}
      </div>
   );
}

export default OTPInput;
