"use client";

export function ElevatedButton({ title, badge, text }) {
   return (
      <>
         <button
            title={title}
            badge={badge ? "show" : "hide"}
            className="badge font-medium ml-3 transition-colors bg-primary-hover bg-primary px-6 py-2 text-white rounded-full"
         >
            {text}
         </button>
      </>
   );
}
export function ElevatedButtonControlled({
   title,
   type,
   badge,
   text,
   className,
   click,
   disabled,
}) {
   return (
      <>
         <button
            badge={badge ? "show" : "hide"}
            disabled={disabled ? true : false}
            title={title}
            onClick={click && click}
            type={type ? type : "button"}
            className={`badge rounded-full h-10 bg-primary px-6 py-2 font-medium text-white transition-colors bg-primary-hover disabled:opacity-70 disabled:pointer-events-none ${className}`}
         >
            {text}
         </button>
      </>
   );
}
export function OutlinedButtonControlled({
   title,
   type,
   badge,
   text,
   className,
   click,
   disabled,
}) {
   return (
      <>
         <button
            title={title}
            onClick={click && click}
            disabled={disabled ? true : false}
            type={type ? type : "button"}
            badge={badge ? "show" : "hide"}
            className={`badge rounded-full bg-transparent text-primary px-6 py-2 font-medium transition-colors hover:text-white hover:bg-[var(--primary)] border border-[var(--primary)] disabled:opacity-30 disabled:pointer-events-none ${className}`}
         >
            {text}
         </button>
      </>
   );
}
