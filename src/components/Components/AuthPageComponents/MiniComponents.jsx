import Link from "next/link";

export function Heading({ name }) {
   return (
      <>
         <h1 className="text-center text-3xl text-gray-600 font-medium mb-2">
            {name}
         </h1>
      </>
   );
}
export function Footer() {
   return (
      <>
         <div className="text-center text-xs font-medium text-gray-500 mt-6">
            By continuing, you are agreeing to our{" "}
            <Link
               href="/legal/terms"
               prefetch={false}
               className="underline hover:text-gray-700"
            >
               Terms
            </Link>{" "}
            and{" "}
            <Link
               href="/legal/privacy"
               prefetch={false}
               className="underline hover:text-gray-700"
            >
               Privacy policy
            </Link>
            .
         </div>
      </>
   );
}
