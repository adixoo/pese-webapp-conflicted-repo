"use client";

// react
import { useEffect } from "react";

// next
import { useRouter } from "next/navigation";

export default function AuthChecker() {
   const router = useRouter();
   useEffect(() => {
      router.push("/otp");
   }, [router]);
   return <></>;
}
