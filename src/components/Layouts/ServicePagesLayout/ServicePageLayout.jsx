import ServiceBar from "./ServiceBar";
import TopNavbar from "./TopNavbar";
import { notFound } from "next/navigation";
import { ServicePages } from "@/data/ServicePagesData/Pages";
export default function ServicePageLayoutComponent({ children, ...props }) {
   const link = ServicePages[props.service];
   if (!link) notFound();
   const heading = link["heading"];
   return (
      <>
         <TopNavbar heading={heading} />
         <ServiceBar />
         <div className="w-full -translate-y-10 flex items-start justify-center flex-wrap gap-10 mb-20 px-4">
            {children}
         </div>
      </>
   );
}
