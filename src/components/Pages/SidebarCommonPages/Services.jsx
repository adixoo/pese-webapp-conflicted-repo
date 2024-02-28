// next components
import Image from "next/image";

// components
import Heading from "@/components/Components/Common/Heading";
import Search from "@/components/Components/Common/Search";

// Next components

import Link from "next/link";

export default function ServicesPage() {
   return (
      <>
         <Heading
            title={"Our Services"}
            description={"Get a summary of the services we offer."}
         />
         <Search
            id="services-search"
            name="services-search"
            placeholder="Search Services"
         />
         <BorderBox heading={"Recharge"}>
            <ServiceItem url={"mobile"} text={"Mobile"} img={"mobile"} />
            <ServiceItem url={"dth"} text={"DTH"} img={"dth"} />
            <ServiceItem url={"fastag"} text={"FastTag"} img={"fasttag"} />
            <ServiceItem
               url={"google-play"}
               text={"Google Play"}
               img={"gpstore"}
            />
         </BorderBox>
         <BorderBox heading={"Utilities"}>
            <ServiceItem
               url={"electricity-bill"}
               text={"Electricity Bill"}
               img={"electric"}
            />
            <ServiceItem
               url={"water-bill"}
               text={"Water Bill"}
               img={"water-drop"}
            />
            <ServiceItem
               url={"gas-bill"}
               text={"LPG/CNG Gas Bill"}
               img={"gas-station"}
            />
            <ServiceItem
               url={"broadband"}
               text={"Broadband"}
               img={"wifi-router"}
            />
            <ServiceItem url={"postpaid"} text={"Postpaid"} img={"postpaid"} />
            <ServiceItem url={"landline"} text={"Landline"} img={"landline"} />
            <ServiceItem url={"hospital"} text={"Hospital"} img={"hospital"} />
            <ServiceItem
               url={"pipe-gas"}
               text={"Piped Gas"}
               img={"gas-pipeline"}
            />
         </BorderBox>
         <BorderBox heading={"Financial Services"}>
            <ServiceItem
               url={"loan-repayment"}
               text={"Loan Repayment"}
               img={"loan"}
            />
            <ServiceItem
               url={"life-insurance"}
               text={"Life Insurance"}
               img={"hospital"}
            />
            <ServiceItem
               url={"bike-insurance"}
               text={"Bike Insurance"}
               img={"bike"}
            />
            <ServiceItem
               url={"car-insurance"}
               text={"Car Insurance"}
               img={"car-insurance"}
            />
         </BorderBox>
      </>
   );
}

function BorderBox({ children, heading }) {
   return (
      <div className="sm:border border-gray-200 rounded-2xl sm:p-5 mt-8">
         <div className="font-semibold text-gray-800 text-base md:text-lg mb-3">
            {heading}
         </div>

         {/* <div className="flex flex-row flex-wrap gap-x-10 gap-y-6">
            {children}
         </div> */}
         <div className="grid gap-y-4 grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-6 xl:grid-cols-8">
            {children}
         </div>
      </div>
   );
}

function ServiceItem({ text, img, url }) {
   return (
      <Link
         href={`/service/${url}`}
         title={`${text} Service`}
         className="flex flex-col items-start"
      >
         <span className="block w-14 p-2.5 sm:p-3 sm:w-16 aspect-square rounded-xl border border-gray-100 shadow-md hover:shadow-lg hover:scale-105 transition-[box-shadow,transform] active:scale-90 shadow-gray-200 mx-auto ">
            <Image
               src={`/assets/img/icons/${img}.png`}
               alt={img}
               loading="lazy"
               className="object-cover"
               width={80}
               height={80}
               draggable={false}
            />
         </span>
         <span className="block text-xs line-clamp-2 text-gray-500 mx-auto mt-2 sm:mt-3 text-center font-medium max-w-[10ch]">
            {text}
         </span>
      </Link>
   );
}
