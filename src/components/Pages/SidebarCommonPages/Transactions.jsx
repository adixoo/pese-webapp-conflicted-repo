import Heading from "@/components/Components/Common/Heading";
import Search from "@/components/Components/Common/Search";

import Image from "next/image";
export default function TransactionsPage() {
   return (
      <>
         <Heading
            title={"Transaction History"}
            description={"Get a summary of your transactions over time."}
         />
         <Search
            id="transaction-search"
            name="transaction-search"
            placeholder="Search History"
         />
         <TransactionWrapper date={"16 Jan 2024"}>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
         </TransactionWrapper>
         <TransactionWrapper date={"15 Jan 2024"}>
            <Transaction />
            <Transaction />
            <Transaction />
         </TransactionWrapper>
      </>
   );
}

function TransactionWrapper({ children, date }) {
   return (
      <div className="border border-gray-300 rounded-2xl px-5 py-2 relative mt-20">
         <div className="border border-gray-300 rounded-t-2xl absolute text-primary top-0 left-5 -translate-y-full px-4 py-1.5 ">
            {date}
         </div>
         <div className="divide-y divide-gray-100">{children}</div>
      </div>
   );
}

function Transaction() {
   return (
      <div className="flex items-center gap-4">
         <div className="w-10 h-10">
            <Image
               src="/assets/img/user.webp"
               alt="User logo"
               className="w-full aspect-square object-cover rounded-full"
               width={500}
               height={500}
            />
         </div>
         <div className="w-full py-3 flex justify-between items-center">
            <div>
               <div className="font-medium text-gray-800">Paid to NAIMBEG</div>
               <div className="text-xs text-gray-400 mt-1">
                  <span className="mr-8">10:25PM</span>
                  <span>DL123347857477447</span>
               </div>
            </div>
            <div>{/* <RupeeTag value="1,000" negative /> */}</div>
         </div>
      </div>
   );
}
