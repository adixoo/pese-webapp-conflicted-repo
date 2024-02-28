import { nfcUsers } from "@/data/nfcusers/users";
import { notFound } from "next/navigation";

// components
import NFCUser from "@/components/Pages/NFCPage/User";

export default function NFCPage({ params }) {
   const { uuid } = params;
   const name = nfcUsers[uuid]?.name;
   if (!name) notFound();

   return (
      <>
         <NFCUser uuid={uuid} name={name} />
      </>
   );
}
